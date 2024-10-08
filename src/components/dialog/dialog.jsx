import {
	cloneElement,
	createContext,
	Fragment,
	isValidElement,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { callAll, cn } from '@/utilities/functions';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

const DialogContext = createContext();
const useDialogState = () => useContext( DialogContext );

const animationVariants = {
	open: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
	},
};
const TRANSITION_DURATION = { duration: 0.2 };

// Dialog component.
const Dialog = ( {
	open,
	setOpen,
	children,
	trigger,
	className,
	exitOnClickOutside = false,
	exitOnEsc = true,
	design = 'simple',
	scrollLock = true,
} ) => {
	const isControlled = open !== undefined && setOpen !== undefined;
	const [ isOpen, setIsOpen ] = useState( false );
	const dialogRef = useRef( null );
	const dialogContainerRef = useRef( null );

	const openState = useMemo(
		() => ( isControlled ? open : isOpen ),
		[ open, isOpen ]
	);
	const setOpenState = useMemo(
		() => ( isControlled ? setOpen : setIsOpen ),
		[ setIsOpen, setIsOpen ]
	);

	const handleOpen = () => {
		if ( openState ) {
			return;
		}

		setOpenState( true );
	};

	const handleClose = () => {
		if ( ! openState ) {
			return;
		}

		setOpenState( false );
	};

	const renderTrigger = useCallback( () => {
		if ( isValidElement( trigger ) ) {
			return cloneElement( trigger, {
				onClick: callAll( handleOpen, trigger.props.onClick ),
			} );
		}

		if ( typeof trigger === 'function' ) {
			return trigger( { onClick: handleOpen } );
		}

		return null;
	}, [ trigger, handleOpen, handleClose ] );

	const handleKeyDown = ( event ) => {
		switch ( event.key ) {
			case 'Escape':
				if ( exitOnEsc ) {
					handleClose();
				}
				break;
			default:
				break;
		}
	};

	const handleClickOutside = ( event ) => {
		if (
			exitOnClickOutside &&
			dialogRef.current &&
			! dialogRef.current.contains( event.target )
		) {
			handleClose();
		}
	};

	useEffect( () => {
		window.addEventListener( 'keydown', handleKeyDown );
		document.addEventListener( 'mousedown', handleClickOutside );

		return () => {
			window.removeEventListener( 'keydown', handleKeyDown );
			document.removeEventListener( 'mousedown', handleClickOutside );
		};
	}, [ openState ] );

	// Prevent scrolling when dialog is open.
	useEffect( () => {
		if ( ! scrollLock ) {
			return;
		}
		if ( openState ) {
			document.querySelector( 'html' ).style.overflow = 'hidden';
		}

		return () => {
			document.querySelector( 'html' ).style.overflow = '';
		};
	}, [ openState ] );

	return (
		<>
			{ renderTrigger() }
			<DialogContext.Provider
				value={ {
					open: openState,
					setOpen: setOpenState,
					handleClose,
					design,
					dialogContainerRef,
					dialogRef,
				} }
			>
				<div
					ref={ dialogContainerRef }
					className={ cn(
						'fixed z-999999 w-0 h-0 overflow-visible',
						className
					) }
				>
					{ children }
				</div>
			</DialogContext.Provider>
		</>
	);
};
Dialog.displayName = 'Dialog';

const DialogPanel = ( { children, className } ) => {
	const { open, handleClose, dialogRef } = useDialogState();

	return (
		<AnimatePresence>
			{ open && (
				<motion.div
					className="fixed inset-0 overflow-y-auto"
					initial="exit"
					animate="open"
					exit="exit"
					variants={ animationVariants }
					role="dialog"
					transition={ TRANSITION_DURATION }
				>
					<div className="flex items-center justify-center min-h-full">
						<div
							ref={ dialogRef }
							className={ cn(
								'flex flex-col gap-5 w-120 h-fit bg-background-primary border border-solid border-border-subtle rounded-xl shadow-soft-shadow-2xl my-5 overflow-hidden',
								className
							) }
						>
							{ typeof children === 'function'
								? children( { close: handleClose } )
								: children }
						</div>
					</div>
				</motion.div>
			) }
		</AnimatePresence>
	);
};
DialogPanel.displayName = 'Dialog.Panel';

// Backdrop for the dialog.
const DialogBackdrop = ( { className, ...props } ) => {
	const { open, dialogContainerRef } = useDialogState();

	return (
		dialogContainerRef.current &&
		createPortal(
			<AnimatePresence>
				{ open && (
					<motion.div
						className={ cn(
							'fixed inset-0 -z-10 bg-background-inverse/90 backdrop-blur-sm',
							className
						) }
						{ ...props }
						initial="exit"
						animate="open"
						exit="exit"
						variants={ animationVariants }
						transition={ TRANSITION_DURATION }
					/>
				) }
			</AnimatePresence>,
			dialogContainerRef.current
		)
	);
};
DialogBackdrop.displayName = 'Dialog.Backdrop';

// Dialog header wrapper.
const DialogHeader = ( { children, className, ...props } ) => {
	return (
		<div className={ cn( 'space-y-2 px-5 pt-5 pb-1', className ) } { ...props }>
			{ children }
		</div>
	);
};
DialogHeader.displayName = 'Dialog.Header';

// Dialog title.
const DialogTitle = ( { children, as: Tag = 'h3', className, ...props } ) => {
	return (
		<Tag
			className={ cn(
				'text-base font-semibold text-text-primary m-0 p-0',
				className
			) }
			{ ...props }
		>
			{ children }
		</Tag>
	);
};
DialogTitle.displayName = 'Dialog.Title';

// Dialog description.
const DialogDescription = ( {
	children,
	as: Tag = 'p',
	className,
	...props
} ) => {
	return (
		<Tag
			className={ cn(
				'text-sm font-normal text-text-secondary my-0 ml-0 mr-1 p-0',
				className
			) }
			{ ...props }
		>
			{ children }
		</Tag>
	);
};
DialogDescription.displayName = 'Dialog.Description';

// Default close button for the dialog.
const DefaultCloseButton = ( { className, ...props } ) => {
	return (
		<button
			className={ cn(
				'bg-transparent inline-flex justify-center items-center border-0 p-1 m-0 cursor-pointer focus:outline-none outline-none shadow-none',
				className
			) }
			aria-label="Close dialog"
			{ ...props }
		>
			<X className="size-4 text-text-primary shrink-0" />
		</button>
	);
};

// Close button for the dialog.
const DialogCloseButton = ( { children, as: Tag = Fragment, ...props } ) => {
	const { handleClose } = useDialogState();

	if ( ! isValidElement( children ) || ! children ) {
		return <DefaultCloseButton onClick={ handleClose } { ...props } />;
	}

	if ( Tag === Fragment ) {
		if ( typeof children === 'function' ) {
			return children( { close: handleClose } );
		}

		return cloneElement( children, {
			onClick: handleClose,
		} );
	}

	return (
		<Tag { ...props } onClick={ handleClose }>
			{ children }
		</Tag>
	);
};
DialogCloseButton.displayName = 'Dialog.CloseButton';

// Dialog body.
const DialogBody = ( { children, className, ...props } ) => {
	return (
		<div className={ cn( 'px-5', className ) } { ...props }>
			{ children }
		</div>
	);
};
DialogBody.displayName = 'Dialog.Body';

// Dialog footer.
const DialogFooter = ( { children, className } ) => {
	const { design, handleClose } = useDialogState();

	const renderChildren = () => {
		if ( ! children ) {
			return null;
		}

		if ( typeof children === 'function' ) {
			return children( { close: handleClose } );
		}

		return children;
	};

	return (
		<div
			className={ cn(
				'p-4 flex justify-end gap-3',
				{
					'bg-background-secondary': design === 'footer-divided',
				},
				className
			) }
		>
			{ renderChildren() }
		</div>
	);
};
DialogFooter.displayName = 'Dialog.Footer';

export default Object.assign( Dialog, {
	Panel: DialogPanel,
	Backdrop: DialogBackdrop,
	Title: DialogTitle,
	Description: DialogDescription,
	CloseButton: DialogCloseButton,
	Header: DialogHeader,
	Body: DialogBody,
	Footer: DialogFooter,
} );
