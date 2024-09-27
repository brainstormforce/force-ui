import {
	cloneElement,
	createContext,
	isValidElement,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { callAll, cn } from '@/utilities/functions';

const DrawerContext = createContext();
export const useDrawerState = () => useContext( DrawerContext );

const TRANSITION_DURATION = 0.2;

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
						'fixed z-999999 w-0 h-0 overflow-visible',
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

export default Object.assign( Drawer, {
	displayName: 'Drawer',
} );
