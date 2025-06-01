import {
	cloneElement,
	createContext,
	type ElementType,
	Fragment,
	isValidElement,
	useCallback,
	useContext,
	useMemo,
	useRef,
	useState,
	type ReactNode,
} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { callAll, cn } from '@/utilities/functions';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';
import {
	useFloating,
	useClick,
	useDismiss,
	useRole,
	useInteractions,
	FloatingFocusManager,
	FloatingOverlay,
	FloatingPortal,
	type UseFloatingReturn,
} from '@floating-ui/react';

export interface DialogState {
	open: boolean;
	setOpen: ( open: boolean ) => void;
	handleClose: () => void;
	design: 'simple' | 'footer-divided';
	context: UseFloatingReturn['context'];
	getFloatingProps: () => Record<string, unknown>;
	// Keep these refs for backward compatibility
	dialogContainerRef: React.RefObject<HTMLDivElement | null>;
	dialogRef: React.MutableRefObject<HTMLDivElement | null>;
	scrollLock: boolean;
	className: string,
	refs: UseFloatingReturn['refs']
}

const DialogContext = createContext<Partial<DialogState>>( {} );
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

export interface CommonProps {
	/** Additional class name. */
	className?: string;
	/** Additional inline styles. */
	style?: React.CSSProperties;
}

export interface DialogProps extends CommonProps {
	/** Control the dialog open state. If not provided, the dialog will be controlled internally. */
	open?: boolean;
	/** Control the dialog open state. If not provided, the dialog will be controlled internally. */
	setOpen?: ( open: boolean ) => void;
	/** Children of the dialog. */
	children: ReactNode;
	/** Trigger element for the dialog. */
	trigger?:
		| ReactNode
		| ( ( props: { onClick: () => void } ) => React.ReactElement );
	/** Close the dialog on clicking outside the dialog. */
	exitOnClickOutside?: boolean;
	/** Close the dialog on pressing the escape key. */
	exitOnEsc?: boolean;
	/** Design of the dialog. */
	design?: 'simple' | 'footer-divided';
	/** Lock the scroll when the dialog is open. */
	scrollLock?: boolean;
}

// Dialog component.
const Dialog = ( {
	open,
	setOpen,
	children,
	trigger = null,
	className,
	exitOnClickOutside = false,
	exitOnEsc = true,
	design = 'simple',
	scrollLock = true,
}: DialogProps ): JSX.Element => {
	const isControlled = open !== undefined && setOpen !== undefined;
	const [ isOpen, setIsOpen ] = useState( false );
	const dialogRef = useRef<HTMLDivElement | null>( null );
	const dialogContainerRef = useRef( null );

	const openState = useMemo(
		() => ( isControlled ? open : isOpen ),
		[ open, isOpen ]
	);
	const setOpenState = useMemo(
		() => ( isControlled ? setOpen : setIsOpen ),
		[ setIsOpen, setOpen ]
	);

	// Floating UI setup
	const { refs, context } = useFloating( {
		open: openState,
		onOpenChange: setOpenState,
	} );

	const click = useClick( context );
	const dismiss = useDismiss( context, {
		outsidePressEvent: 'mousedown',
		enabled: exitOnClickOutside || exitOnEsc,
		escapeKey: exitOnEsc,
		outsidePress: exitOnClickOutside,
	} );
	const role = useRole( context, { role: 'dialog' } );

	const { getFloatingProps } = useInteractions( [ click, dismiss, role ] );

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
			return cloneElement( trigger as React.ReactElement, {
				onClick: callAll( handleOpen, trigger?.props?.onClick ),
				ref: refs.setReference,
				'aria-haspopup': 'dialog', // Added for accessibility
				'aria-expanded': openState, // Added for accessibility
			} );
		}

		if ( typeof trigger === 'function' ) {
			return trigger( { onClick: handleOpen } );
		}

		return null;
	}, [ trigger, handleOpen, refs.setReference, openState ] );

	return (
		<>
			{ renderTrigger() }
			<DialogContext.Provider
				value={ {
					open: openState,
					setOpen: setOpenState,
					handleClose,
					design,
					context,
					getFloatingProps,
					refs,
					dialogContainerRef,
					dialogRef,
					scrollLock,
					className,
				} }
			>
				{ children }
			</DialogContext.Provider>
		</>
	);
};
Dialog.displayName = 'Dialog';

export interface DialogPanelProps extends CommonProps {
	/** Children of the dialog panel. */
	children: ReactNode | ( ( param: { close: () => void } ) => ReactNode );
}

export const DialogPanel = ( {
	children,
	className,
}: DialogPanelProps ): JSX.Element => {
	const {
		open,
		handleClose,
		context,
		getFloatingProps,
		dialogRef,
		scrollLock,
		dialogContainerRef,
		className: rootClassName,
		refs,
	} = useDialogState();

	const dialogContent = (
		<AnimatePresence>
			{ open && (
				<FloatingOverlay
					ref={ dialogContainerRef as React.RefObject<HTMLDivElement> }
					lockScroll={ scrollLock }
					className={ cn( 'z-999999', rootClassName ) }
					aria-modal="true"
				>
					<FloatingFocusManager
						context={ context as UseFloatingReturn['context'] }
						{ ...( refs?.reference && { returnFocus: refs.reference as React.MutableRefObject<HTMLElement> } ) }
					>
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
									ref={ ( node ) => {
										if ( node ) {
											// Set both refs
											dialogRef!.current = node;
											if ( context ) {
												context.refs.setFloating( node );
											}
										}
									} }
									{ ...getFloatingProps?.() }
									className={ cn(
										'flex flex-col gap-5 w-120 h-fit bg-background-primary border border-solid border-border-subtle rounded-xl shadow-soft-shadow-2xl my-5 overflow-hidden',
										className
									) }
								>
									{ typeof children === 'function'
										? children( { close: handleClose! } )
										: children }
								</div>
							</div>
						</motion.div>
					</FloatingFocusManager>
				</FloatingOverlay>
			) }
		</AnimatePresence>
	);

	// If in portal context, don't wrap in portal again
	return dialogContent;
};
DialogPanel.displayName = 'Dialog.Panel';

// New Portal component
export interface DialogPortalProps {
	/** Children of the dialog portal. */
	children: ReactNode;
	/** Id of the dialog portal where the element will be rendered. If not provided, the dialog will be rendered in the body. */
	id?: string;
	/** Root element of the dialog portal. If not provided, the dialog will be rendered in the body. */
	root?: HTMLElement;
}

export const DialogPortal = ( {
	children,
	...props
}: DialogPortalProps ): JSX.Element => {
	return <FloatingPortal { ...props }>{ children }</FloatingPortal>;
};
DialogPortal.displayName = 'Dialog.Portal';

export const DialogBackdrop = ( {
	className,
	...props
}: CommonProps ): JSX.Element | null => {
	const { open, dialogContainerRef } = useDialogState();

	if ( ! dialogContainerRef?.current ) {
		return null;
	}

	return (
		<>
			{ createPortal(
				<AnimatePresence>
					{ open && (
						<motion.div
							className={ cn(
								'fixed inset-0 -z-10 bg-background-inverse/90',
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
			) }
		</>
	);
};
DialogBackdrop.displayName = 'Dialog.Backdrop';

export interface DialogHeaderProps extends CommonProps {
	/** Children of the dialog header. */
	children: ReactNode;
}

// Dialog header wrapper.
export const DialogHeader = ( {
	children,
	className,
	...props
}: DialogHeaderProps ): JSX.Element => {
	return (
		<div className={ cn( 'space-y-2 px-5 pt-5 pb-1', className ) } { ...props }>
			{ children }
		</div>
	);
};
DialogHeader.displayName = 'Dialog.Header';

export interface DialogTitleProp extends CommonProps {
	/** Children of the dialog title. */
	children: ReactNode;
	/** Additional class name for the dialog title. */
	as?: ElementType;
}

// Dialog title.
export const DialogTitle = ( {
	children,
	as: Tag = 'h3',
	className,
	...props
}: DialogTitleProp ): JSX.Element => {
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

export interface DialogDescriptionProp extends CommonProps {
	/** Children of the dialog description. */
	children: ReactNode;
	/** Additional class name for the dialog description. */
	as?: ElementType;
}

// Dialog description.
export const DialogDescription = ( {
	children,
	as: Tag = 'p',
	className,
	...props
}: DialogDescriptionProp ): JSX.Element => {
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

export interface DialogCloseButtonProps extends CommonProps {
	/** Children of the dialog close button. */
	children?: ReactNode;
	/** Additional class name for the dialog close button. */
	as?: ElementType;
	/** Additional class name for the dialog close button. */
	className?: string;
	/** Additional props based on the as value. */
	[key: string]: unknown;
}

export interface DialogDefaultCloseButtonProps extends CommonProps {
	/** On click event for the close button. */
	onClick?: () => void;
}

// Default close button for the dialog.
export const DefaultCloseButton = ( {
	className,
	...props
}: DialogDefaultCloseButtonProps ): JSX.Element => {
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
export const DialogCloseButton = ( {
	children,
	as: Tag = Fragment,
	...props
}: DialogCloseButtonProps ): JSX.Element | ReactNode => {
	const { handleClose } = useDialogState();

	if ( ! children ) {
		return <DefaultCloseButton onClick={ handleClose } { ...props } />;
	}

	if ( Tag === Fragment ) {
		if ( typeof children === 'function' ) {
			return ( children as ( args: { close: () => void } ) => ReactNode )( {
				close: handleClose!,
			} );
		}

		return cloneElement( children as React.ReactElement, {
			onClick: handleClose,
		} );
	}

	return (
		<Tag { ...props } onClick={ handleClose } aria-label="Close dialog">
			{ children }
		</Tag>
	);
};
DialogCloseButton.displayName = 'Dialog.CloseButton';

export interface DialogBodyProps extends CommonProps {
	/** Children of the dialog body. */
	children: ReactNode;
}

// Dialog body.
export const DialogBody = ( {
	children,
	className,
	...props
}: DialogBodyProps ): JSX.Element => {
	return (
		<div className={ cn( 'px-5', className ) } { ...props }>
			{ children }
		</div>
	);
};
DialogBody.displayName = 'Dialog.Body';

// Dialog footer.
export interface DialogFooterProps extends CommonProps {
	/** Children of the dialog footer. */
	children?: ReactNode | ( ( props: { close: () => void } ) => ReactNode );
}

export const DialogFooter = ( {
	children,
	className,
}: DialogFooterProps ): JSX.Element => {
	const { design, handleClose } = useDialogState();

	const renderChildren = () => {
		if ( ! children ) {
			return null;
		}

		if ( typeof children === 'function' ) {
			return children( { close: handleClose! } );
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

Dialog.Panel = DialogPanel;
Dialog.Portal = DialogPortal;
Dialog.Title = DialogTitle;
Dialog.Description = DialogDescription;
Dialog.CloseButton = DialogCloseButton;
Dialog.Header = DialogHeader;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;
Dialog.Backdrop = DialogBackdrop;

export default Dialog;
