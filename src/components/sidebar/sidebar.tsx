import React, {
	type ReactNode,
	createContext,
	useContext,
	useState,
	useRef,
	useEffect,
} from 'react';
import { cn, safeLocalStorage } from '@/utilities/functions';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import Tooltip from '../tooltip';

export interface SidebarContextProps {
	isCollapsed: boolean;
	setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
	collapsible: boolean;
}

const SidebarContext = createContext<SidebarContextProps>( {
	isCollapsed: false,
	setIsCollapsed: () => {},
	collapsible: true,
} );

// Common props interface for Sidebar components
export interface SidebarCommonProps {
	/** Content to render inside the Sidebar. Typically includes Sidebar.Header, Sidebar.Body, and Sidebar.Footer components. */
	children: ReactNode;
}

// Sidebar component props interface
export interface SidebarProps extends SidebarCommonProps {
	/** Optional custom CSS classes to apply to the Sidebar container for styling. */
	className?: string;
	/** Callback function triggered when the Sidebar collapse state changes. */
	onCollapseChange?: ( isCollapsed: boolean ) => void;
	/** Determines if the Sidebar can be collapsed or not. If true, a collapse button is shown. */
	collapsible?: boolean;
	/** Controls whether a border should appear on the right of the Sidebar. */
	borderOn?: boolean;
	/** Set the sidebar collapse state. This is useful when collapsible is false and you want to use the sidebar as collapsed by default. */
	collapsed?: boolean;
}

// Sidebar subcomponents props interfaces
export interface SidebarItemProps extends SidebarCommonProps {
	/** Optional custom CSS classes for styling the Sidebar item. */
	className?: string;
	/** Click event handler */
	onClick?: () => void; // Add this line
}

export const Sidebar = ( {
	children,
	className,
	onCollapseChange,
	collapsible = true,
	borderOn = true,
	collapsed = false,
	...props
}: SidebarProps ) => {
	const sideBarRef = useRef<HTMLDivElement>( null );
	const [ isCollapsed, setIsCollapsed ] = useState( () => {
		if ( ! collapsible && collapsed ) {
			return collapsed;
		}
		const storedState = safeLocalStorage.get( 'sidebar-collapsed' );
		if ( storedState ) {
			return storedState;
		}
		const isSmallScreen = window.innerWidth < 1280;
		return isSmallScreen;
	} );

	useEffect( () => {
		if ( typeof onCollapseChange === 'function' ) {
			onCollapseChange( isCollapsed );
		}
	}, [ isCollapsed, onCollapseChange ] );

	useEffect( () => {
		if ( ! collapsible && collapsed ) {
			return;
		}
		const handleScreenResize = () => {
			const isSmallScreen = window.innerWidth < 1280;
			if ( ! collapsible ) {
				setIsCollapsed( false );
				safeLocalStorage.remove( 'sidebar-collapsed' );
			} else if ( isSmallScreen ) {
				setIsCollapsed( true );
				safeLocalStorage.set( 'sidebar-collapsed', true );
			} else {
				const storedState = safeLocalStorage.get( 'sidebar-collapsed' );
				setIsCollapsed( storedState ? storedState : false );
			}
		};

		window.addEventListener( 'resize', handleScreenResize );
		handleScreenResize();

		return () => {
			window.removeEventListener( 'resize', handleScreenResize );
		};
	}, [ collapsible ] );

	return (
		<SidebarContext.Provider
			value={ { isCollapsed, setIsCollapsed, collapsible } }
		>
			<div
				ref={ sideBarRef }
				className={ cn(
					'h-full overflow-auto w-72 px-4 py-4 gap-4 flex flex-col bg-background-primary',
					borderOn &&
						'border-0 border-r border-solid border-border-subtle',
					'transition-all duration-200',
					isCollapsed && 'w-16 px-2',
					className
				) }
				{ ...props }
			>
				{ children }
			</div>
		</SidebarContext.Provider>
	);
};
Sidebar.displayName = 'Sidebar';

export const SidebarHeader = ( { children }: SidebarCommonProps ) => {
	return <div className="space-y-2">{ children }</div>;
};
SidebarHeader.displayName = 'Sidebar.Header';

export const SidebarBody = ( { children }: SidebarCommonProps ) => {
	return <div className={ cn( 'space-y-4 grow items-start' ) }>{ children }</div>;
};
SidebarBody.displayName = 'Sidebar.Body';

export const SidebarFooter = ( { children }: SidebarCommonProps ) => {
	const { isCollapsed, setIsCollapsed, collapsible } =
		useContext( SidebarContext );
	return (
		<div className="space-y-4">
			{ children }
			{ collapsible && (
				<button
					className={ cn(
						'bg-transparent w-full border-0 p-0 m-0 flex items-center gap-2 text-base cursor-pointer',
						isCollapsed && 'justify-center'
					) }
					onClick={ () => {
						setIsCollapsed( ! isCollapsed );

						safeLocalStorage.set( 'sidebar-collapsed', ! isCollapsed );
					} }
					aria-label={
						isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'
					}
				>
					{ isCollapsed ? (
						<>
							<Tooltip title="Expand">
								<PanelLeftOpen className="size-5" />
							</Tooltip>
						</>
					) : (
						<>
							<PanelLeftClose className="size-5" /> Collapse
						</>
					) }
				</button>
			) }
		</div>
	);
};
SidebarFooter.displayName = 'Sidebar.Footer';

export const SidebarItem = ( { children, className }: SidebarItemProps ) => {
	return <div className={ cn( 'w-full', className ) }>{ children }</div>;
};
SidebarItem.displayName = 'Sidebar.Item';

export default Object.assign( Sidebar, {
	Header: SidebarHeader,
	Body: SidebarBody,
	Footer: SidebarFooter,
	Item: SidebarItem,
} );
