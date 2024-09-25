import { cloneElement, createContext, Fragment, isValidElement, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { callAll, cn } from '@/utilities/functions';
import { X } from 'lucide-react';

const DialogContext = createContext();
const useDialogState = () => useContext(DialogContext);

const animationVariants = {
	open: {
		opacity: 1,
		transition: {
			duration: 0.2,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.2,
		},
	},
};

// Dialog component.
const Dialog = ({
	open,
	setOpen,
	children,
	trigger,
	className,
	exitOnClickOutside = true,
	pressEscToExit = true,
}) => {
	const isControlled = open !== undefined && setOpen !== undefined;
	const [isOpen, setIsOpen] = useState(false);

	const openState = useMemo(
		() => (isControlled ? open : isOpen),
		[open, isOpen]
	);
	const setOpenState = useMemo(
		() => (isControlled ? setOpen : setIsOpen),
		[setIsOpen, setIsOpen]
	);

	const handleOpen = () => {
		if (openState) {
			return;
		}

		setOpenState(true);
	};

	const handleClose = () => {
		if (! openState) {
			return;
		}

		setOpenState(false);
	};

	const renderTrigger = useCallback(() => {
		if (isValidElement(trigger)) {
			return cloneElement(trigger, {
				onClick: callAll(handleOpen, trigger.props.onClick),
			});
		}

		if (typeof trigger === 'function') {
			return trigger({ onClick: handleOpen });
		}

		return null;
	}, [trigger, handleOpen, handleClose]);

	const handleKeyDown = ( event ) => {
		switch ( event.key ) {
			case 'Escape':
				if ( pressEscToExit ) {
					handleClose();
				}
				break;
			default:
				break;
		}
	}

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [ openState ]);

	return (
		<>
			{renderTrigger()}
			<DialogContext.Provider
				value={{
					open: openState,
					setOpen: setOpenState,
					handleOpen,
					handleClose,
					exitOnClickOutside,
				}}
			>
				<AnimatePresence>
					{openState && (
						<motion.div
							initial="exit"
							animate="open"
							exit="exit"
							variants={animationVariants}
							className="fixed inset-0 z-999999 grid grid-cols-1 grid-rows-1 place-items-center"
							role="dialog"
						>
							<div
								className={cn(
									'flex flex-col gap-6 w-120 h-fit bg-background-primary border border-border-subtle rounded-xl p-5 shadow-soft-shadow-2xl',
									className
								)}
							>
								{children}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</DialogContext.Provider>
		</>
	);
};

// Backdrop for the dialog.
const DialogBackdrop = ({ children, className }) => {
	const { handleClose, exitOnClickOutside } = useDialogState();

	const handleBackdropClick = ( event ) => {
		event.preventDefault();
		event.stopPropagation();

		if ( ! exitOnClickOutside ) {
			return;
		}
		handleClose();
	}

	return (
		<div
			className={cn(
				'absolute inset-0 -z-10 bg-background-inverse/90 backdrop-blur-sm',
				className
			)}
			onClick={handleBackdropClick}
		>
			{children}
		</div>
	);
};

const DialogHeader = ({ children, className }) => {
	return (
		<div className={cn('space-y-2', className)}>
			{children}
		</div>
	);
};

const DialogTitle = ({ children, as: Tag = 'h3', className }) => {
	return (
		<Tag
			className={cn(
				'text-base font-semibold text-text-primary m-0 p-0',
				className
			)}
		>
			{children}
		</Tag>
	);
};

const DialogSubtitle = ({ children, as: Tag = 'p', className }) => {
	return (
		<Tag
			className={cn(
				'text-sm font-normal text-text-secondary m-0 p-0',
				className
			)}
		>
			{children}
		</Tag>
	);
};

const DefaultCloseButton = ({className, ...props}) => {
	return (
		<button
			className={cn(
				'bg-transparent inline-flex justify-center items-center border-0 p-1 m-0 cursor-pointer focus:outline-none outline-none shadow-none',
				className
			)}
			aria-label="Close dialog"
			{...props}
		>
			<X className="size-4 text-text-primary shrink-0" />
		</button>
	);
}

// Close button for the dialog.
const DialogCloseButton = ({ children, as: Tag = Fragment, onClick, ...props }) => {
	const { handleClose } = useDialogState();

	if ( ! isValidElement( children ) ) {
		return <DefaultCloseButton onClick={callAll(handleClose, onClick)} {...props} />;
	}

	if ( Tag === Fragment ) {
		if ( typeof children.type === 'function' ) {
			return children({onClick: handleClose});
		}

		return cloneElement(children, {
			onClick: callAll(handleClose, children.props.onClick),
		});
	}

	return <Tag onClick={callAll(handleClose, onClick)} {...props}>{children}</Tag>;
}

const DialogBody = ({ children }) => {
	return <div className="">{children}</div>;
};

const DialogFooter = ({ children }) => {
	return <div className="">{children}</div>;
};

export default Object.assign(Dialog, {
	Backdrop: DialogBackdrop,
	Title: DialogTitle,
	Subtitle: DialogSubtitle,
	CloseButton: DialogCloseButton,
	Header: DialogHeader,
	Body: DialogBody,
	Footer: DialogFooter,
});
