import React, {
	cloneElement,
	createContext,
	isValidElement,
	useCallback,
	useContext,
	useMemo,
	useRef,
	useState,
	type ReactNode,
} from 'react';
import { callAll } from '@/utilities/functions';
import { useFloating, useInteractions, useClick, useRole, useDismiss, type FloatingContext, type UseFloatingReturn } from '@floating-ui/react';
import DrawerPanel from './drawer-panel';
import DrawerHeader from './drawer-header';
import DrawerTitle from './drawer-title';
import DrawerDescription from './drawer-description';
import DrawerBody from './drawer-body';
import DrawerFooter from './drawer-footer';
import DrawerCloseButton from './drawer-close-button';
import DrawerBackdrop from './drawer-backdrop';
import DrawerPortal from './drawer-portal';

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
	design?: 'simple' | 'footer-divided' | 'footer-bordered';
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
	transitionDuration: { duration: number };
	getFloatingProps: ( props?: React.HTMLProps<HTMLElement> ) => Record<string, unknown>;
	scrollLock: boolean;
	context: FloatingContext;
	className?: string;
	refs: UseFloatingReturn['refs'];
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
	const drawerContainerRef = useRef<HTMLDivElement>( null );

	const openState = useMemo(
		() => ( isControlled ? open : isOpen ),
		[ open, isOpen, isControlled ]
	);
	const setOpenState = useMemo(
		() => ( isControlled ? setOpen : setIsOpen ),
		[ setOpen, setIsOpen, isControlled ]
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

	// Initialize Floating UI
	const { refs, context } = useFloating( {
		open: openState,
		onOpenChange: setOpenState,
	} );

	// Setup interactions
	const dismiss = useDismiss( context, {
		enabled: exitOnEsc || exitOnClickOutside,
		escapeKey: exitOnEsc,
		outsidePress: exitOnClickOutside,
	} );

	const role = useRole( context, { role: 'dialog' } );

	const click = useClick( context );

	const { getFloatingProps } = useInteractions( [
		dismiss,
		role,
		click,
	] );

	const renderTrigger = useCallback( () => {
		if ( isValidElement( trigger ) ) {
			return cloneElement( trigger as React.ReactElement, {
				onClick: callAll( handleOpen, trigger.props.onClick ),
				ref: refs.setReference,
			} );
		}

		if ( typeof trigger === 'function' ) {
			return trigger( { onClick: handleOpen } );
		}

		return null;
	}, [ trigger, handleOpen, refs.setReference ] );

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
					transitionDuration: { duration: transitionDuration },
					getFloatingProps,
					scrollLock,
					context,
					className,
					refs,
				} }
			>
				{ children }
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
Drawer.Portal = DrawerPortal;

export default Drawer;
