import React, {
	cloneElement,
	createContext,
	isValidElement,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
	type ReactNode,
} from 'react';
import { callAll, cn } from '@/utilities/functions';
import DrawerPanel from './drawer-panel';
import DrawerHeader from './drawer-header';
import DrawerTitle from './drawer-title';
import DrawerDescription from './drawer-description';
import DrawerBody from './drawer-body';
import DrawerFooter from './drawer-footer';
import DrawerCloseButton from './drawer-close-button';
import DrawerBackdrop from './drawer-backdrop';

const TRANSITION_DURATION = 0.2;

export interface DrawerProps {
	/** Open state of the drawer. Optional for uncontrolled component. */
	open?: boolean;
	/** Set open state of the drawer. Optional for uncontrolled component. */
	setOpen?: ( open: boolean ) => void;
	/** Drawer content. */
	children: ReactNode;
	/** Trigger element to open the drawer. Required for uncontrolled component. */
	trigger?: ReactNode | ( ( props: { onClick: () => void } ) => ReactNode );
	/** Additional class names. */
	className?: string;
	/** Close drawer when clicking outside of the drawer. */
	exitOnClickOutside?: boolean;
	/** Close drawer when pressing the escape key. */
	exitOnEsc?: boolean;
	/** Design of the drawer. */
	design?: 'simple' | 'footer-divided';
	/** Position of the drawer. */
	position?: 'left' | 'right';
	/** Duration of the drawer transition. */
	transitionDuration?: number;
	/** Lock the scroll when the drawer is open. */
	scrollLock?: boolean;
}

export interface DrawerContextDefault {
	open: DrawerProps['open'];
	setOpen: ( open: boolean ) => void;
	handleClose: () => void;
	design: DrawerProps['design'];
	position: DrawerProps['position'];
	drawerContainerRef: React.RefObject<HTMLDivElement>;
	drawerRef: React.RefObject<HTMLDivElement>;
	transitionDuration: { duration: number };
}

const DrawerContext = createContext<Partial<DrawerContextDefault>>( {} );
export const useDrawerState = () => useContext( DrawerContext );

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
	transitionDuration = TRANSITION_DURATION,
	scrollLock = true,
}: DrawerProps ) => {
	const isControlled = open !== undefined && setOpen !== undefined;
	const [ isOpen, setIsOpen ] = useState( false );
	const drawerRef = useRef<HTMLDivElement>( null );
	const drawerContainerRef = useRef<HTMLDivElement>( null );

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
			return cloneElement( trigger as React.ReactElement, {
				onClick: callAll( handleOpen, trigger.props.onClick ),
			} );
		}

		if ( typeof trigger === 'function' ) {
			return trigger( { onClick: handleOpen } );
		}

		return null;
	}, [ trigger, handleOpen, handleClose ] );

	const handleKeyDown = ( event: KeyboardEvent ) => {
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

	const handleClickOutside = ( event: MouseEvent ) => {
		if (
			exitOnClickOutside &&
			drawerRef.current &&
			! drawerRef.current.contains( event.target as Node )
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
		if ( ! scrollLock ) {
			return;
		}
		const htmlElement = document.querySelector( 'html' );
		if ( openState && htmlElement ) {
			htmlElement.style.overflow = 'hidden';
		}

		return () => {
			if ( ! htmlElement ) {
				return;
			}
			htmlElement.style.overflow = '';
		};
	}, [ openState ] );

	return (
		<>
			{ renderTrigger() }
			<DrawerContext.Provider
				value={ {
					open: openState,
					setOpen: setOpenState,
					handleClose,
					design,
					position,
					drawerContainerRef,
					drawerRef,
					transitionDuration: { duration: transitionDuration },
				} }
			>
				<div
					className={ cn(
						'fixed z-auto w-0 h-0 overflow-visible',
						className
					) }
					role="dialog"
					ref={ drawerContainerRef }
				>
					{ children }
				</div>
			</DrawerContext.Provider>
		</>
	);
};

Drawer.displayName = 'Drawer';

Drawer.Panel = DrawerPanel;
Drawer.Header = DrawerHeader;
Drawer.Title = DrawerTitle;
Drawer.Description = DrawerDescription;
Drawer.Body = DrawerBody;
Drawer.CloseButton = DrawerCloseButton;
Drawer.Footer = DrawerFooter;
Drawer.Backdrop = DrawerBackdrop;

export default Drawer;
