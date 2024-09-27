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

const DrawerContext = createContext();
const useDrawerState = () => useContext( DrawerContext );

const TRANSITION = {duration: 0.2};

const animationVariants = {
    left: {
        open: {
            x: 0,
        },
        exit: {
            x: '-100%',
        },
    },
    right: {
        open: {
            x: 0,
        },
        exit: {
            x: '100%',
        },
    },
};
const backdropAnimationVariants = {
    open: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
}

// Drawer component.
const Drawer = ( {
	open,
	setOpen,
	children,
	trigger,
	className,
	exitOnClickOutside = false,
	exitOnEsc = true,
	design = 'simple',
    position = 'right',
} ) => {
	const isControlled = open !== undefined && setOpen !== undefined;
	const [ isOpen, setIsOpen ] = useState( false );
	const drawerRef = useRef( null );
    const drawerContainerRef = useRef( null );

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
			drawerRef.current &&
			! drawerRef.current.contains( event.target )
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

	// Prevent scrolling when drawer is open.
	useEffect( () => {
		if ( openState ) {
			document.querySelector( 'html' ).style.overflow = 'hidden';
		}

		return () => {
			document.querySelector( 'html' ).style.overflow = '';
		};
	}, [ openState ] );

	return (
		<>
			{renderTrigger()}
			<DrawerContext.Provider
				value={{
					open: openState,
					setOpen: setOpenState,
					handleOpen,
					handleClose,
					exitOnClickOutside,
					design,
					position,
					drawerContainerRef,
					drawerRef,
				}}
			>
				<div
					className={cn(
						'fixed z-999999 w-0 h-0 overflow-visible',
						className
					)}
					role="drawer"
					ref={drawerContainerRef}
				>
					{children}
				</div>
			</DrawerContext.Provider>
		</>
	);
};

const DrawerPanel = ({ children, className }) => {
	const { open, position, handleClose, drawerRef } = useDrawerState();

	return (
		<AnimatePresence>
			{open && (
				<div className="fixed inset-0">
					<div
						className={cn(
							'flex items-center justify-center h-full',
							{
								'justify-start': position === 'left',
								'justify-end': position === 'right',
							}
						)}
					>
						<motion.div
							ref={drawerRef}
							className={cn(
								'flex flex-col gap-5 w-120 h-full bg-background-primary shadow-2xl my-5 overflow-hidden',
								className
							)}
							initial="exit"
							animate="open"
							exit="exit"
							variants={animationVariants[position]}
							transition={TRANSITION}
						>
							{typeof children === 'function'
								? children({ close: handleClose })
								: children}
						</motion.div>
					</div>
				</div>
			)}
		</AnimatePresence>
	);
};

// Backdrop for the drawer.
const DrawerBackdrop = ( { className, ...props } ) => {
    const { open, drawerContainerRef } = useDrawerState();

	return (
		drawerContainerRef.current &&
		createPortal(
			<AnimatePresence>
				{open && (
					<motion.div
						className={cn(
							'fixed inset-0 -z-10 bg-background-inverse/90 backdrop-blur-sm',
							className
						)}
						{...props}
						initial="exit"
						animate="open"
						exit="exit"
						variants={backdropAnimationVariants}
						transition={TRANSITION}
					/>
				)}
			</AnimatePresence>,
			drawerContainerRef.current
		)
	);
};

// Drawer header wrapper.
const DrawerHeader = ( { children, className, ...props } ) => {
	return <div className={ cn( 'space-y-2 px-5 pt-5 pb-1', className ) } { ...props }>{ children }</div>;
};

// Drawer title.
const DrawerTitle = ( { children, as: Tag = 'h3', className, ...props } ) => {
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

// Drawer description.
const DrawerDescription = ( { children, as: Tag = 'p', className, ...props } ) => {
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

// Default close button for the drawer.
const DefaultCloseButton = ( { className, ...props } ) => {
	return (
		<button
			className={ cn(
				'bg-transparent inline-flex justify-center items-center border-0 p-1 m-0 cursor-pointer focus:outline-none outline-none shadow-none',
				className
			) }
			aria-label="Close drawer"
			{ ...props }
		>
			<X className="size-4 text-text-primary shrink-0" />
		</button>
	);
};

// Close button for the drawer.
const DrawerCloseButton = ( {
	children,
	as: Tag = Fragment,
	...props
} ) => {
	const { handleClose } = useDrawerState();

	if ( ! isValidElement( children ) || ! children ) {
		return (
			<DefaultCloseButton
				onClick={ handleClose }
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
		<Tag { ...props } onClick={ handleClose }>
			{ children }
		</Tag>
	);
};

// Drawer body.
const DrawerBody = ( { children, className, ...props } ) => {
	return (
		<div className={ cn( 'px-5 flex flex-col flex-1 overflow-y-auto', className ) } { ...props }>
			{ children }
		</div>
	);
};

// Drawer footer.
const DrawerFooter = ( { children, className } ) => {
	const { design, handleClose } = useDrawerState();

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
				'p-4 flex justify-end gap-3 mt-auto',
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

export default Object.assign( Drawer, {
	Panel: DrawerPanel,
	Header: DrawerHeader,
	Title: DrawerTitle,
	Description: DrawerDescription,
	Body: DrawerBody,
	CloseButton: DrawerCloseButton,
	Footer: DrawerFooter,
	Backdrop: DrawerBackdrop,
} );
