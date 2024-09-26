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
	Children,
} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { callAll, cn } from '@/utilities/functions';
import { X } from 'lucide-react';

const DialogContext = createContext();
const useDialogState = () => useContext( DialogContext );

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
const Dialog = ( {
	open,
	setOpen,
	children,
	trigger,
	className,
	exitOnClickOutside = false,
	exitOnEsc = true,
	design = 'simple',
} ) => {
	const isControlled = open !== undefined && setOpen !== undefined;
	const [ isOpen, setIsOpen ] = useState( false );
	const dialogRef = useRef( null );

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
		if ( openState ) {
			document.querySelector( 'html' ).style.overflow = 'hidden';
		}

		return () => {
			document.querySelector( 'html' ).style.overflow = '';
		};
	}, [ openState ] );

	// Find the backdrop component.
	const backdrop = Children.toArray( children ).find(
		( child ) => child?.type === Dialog.Backdrop
	);
	// Filter out the backdrop component from the children.
	const filteredChildren = useMemo(
		() =>
			Children.toArray( children ).filter(
				( child ) => child?.type !== Dialog.Backdrop
			),
		[ children ]
	);

	return (
		<>
			{ renderTrigger() }
			<DialogContext.Provider
				value={ {
					open: openState,
					setOpen: setOpenState,
					handleOpen,
					handleClose,
					exitOnClickOutside,
					design,
				} }
			>
				<AnimatePresence>
					{ openState && (
						<motion.div
							className="fixed z-999999"
							initial="exit"
							animate="open"
							exit="exit"
							variants={ animationVariants }
							role="dialog"
						>
							{ !! backdrop && backdrop }
							<div className="fixed inset-0 overflow-y-auto">
								<div className="flex items-center justify-center min-h-full">
									<div
										ref={ dialogRef }
										className={ cn(
											'flex flex-col gap-5 w-120 h-fit bg-background-primary border border-solid border-border-subtle rounded-xl shadow-soft-shadow-2xl my-5 overflow-hidden',
											className
										) }
									>
										{ filteredChildren }
									</div>
								</div>
							</div>
						</motion.div>
					) }
				</AnimatePresence>
			</DialogContext.Provider>
		</>
	);
};

// Backdrop for the dialog.
const DialogBackdrop = ( { className, ...props } ) => {
	return (
		<div
			className={ cn(
				'fixed inset-0 -z-10 bg-background-inverse/90 backdrop-blur-sm',
				className
			) }
			{ ...props }
		/>
	);
};

// Dialog header wrapper.
const DialogHeader = ( { children, className, ...props } ) => {
	return <div className={ cn( 'space-y-2 px-5 pt-5 pb-1', className ) } {...props}>{ children }</div>;
};

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

// Dialog description.
const DialogDescription = ( { children, as: Tag = 'p', className, ...props } ) => {
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
const DialogCloseButton = ( {
	children,
	as: Tag = Fragment,
	...props
} ) => {
	const { handleClose } = useDialogState();

	if ( ! isValidElement( children ) || ! children ) {
		return (
			<DefaultCloseButton
				onClick={ callAll( handleClose ) }
				{ ...props }
			/>
		);
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
		<Tag { ...props } onClick={ callAll( handleClose ) }>
			{ children }
		</Tag>
	);
};

// Dialog body.
const DialogBody = ( { children, className, ...props } ) => {
	return (
		<div className={ cn( 'px-5', className ) } { ...props }>
			{ children }
		</div>
	);
};

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

export default Object.assign( Dialog, {
	Backdrop: DialogBackdrop,
	Title: DialogTitle,
	Description: DialogDescription,
	CloseButton: DialogCloseButton,
	Header: DialogHeader,
	Body: DialogBody,
	Footer: DialogFooter,
} );
