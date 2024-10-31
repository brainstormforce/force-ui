import React, {
	ReactNode,
	createContext,
	useContext,
	useState,
	useRef,
	useEffect,
} from 'react';
import { cn } from '@/utilities/functions';
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
	/** Determines whether the Sidebar should occupy the full screen height. */
	screenHeight?: boolean;
	/** Controls whether a border should appear on the right of the Sidebar. */
	borderOn?: boolean;
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
	screenHeight = true,
	borderOn = true,
	...props
}: SidebarProps ) => {
	const sideBarRef = useRef<HTMLDivElement>( null );
	const [ isCollapsed, setIsCollapsed ] = useState( () => {
		const storedState = localStorage.getItem( 'sidebar-collapsed' );
		const isSmallScreen = window.innerWidth < 1280;
		if ( storedState ) {
			return JSON.parse( storedState );
		}
		return isSmallScreen;
	} );

	useEffect( () => {
		if ( onCollapseChange ) {
			onCollapseChange( isCollapsed );
		}
	}, [ isCollapsed, onCollapseChange ] );

	useEffect( () => {
		const handleScreenResize = () => {
			const isSmallScreen = window.innerWidth < 1280;
			if ( ! collapsible ) {
				setIsCollapsed( false );
				localStorage.removeItem( 'sidebar-collapsed' );
			} else if ( isSmallScreen ) {
				setIsCollapsed( true );
				localStorage.setItem( 'sidebar-collapsed', JSON.stringify( true ) );
			} else {
				const storedState = localStorage.getItem( 'sidebar-collapsed' );
				setIsCollapsed( storedState ? JSON.parse( storedState ) : false );
			}

			if ( sideBarRef.current ) {
				if ( !! screenHeight ) {
					sideBarRef.current.style.height = `${ window.innerHeight }px`;
				} else {
					sideBarRef.current.style.height = 'auto';
				}
			}
		};

		window.addEventListener( 'resize', handleScreenResize );
		handleScreenResize();

		return () => {
			window.removeEventListener( 'resize', handleScreenResize );
		};
	}, [ screenHeight, collapsible ] );

	return (
		<SidebarContext.Provider
			value={ { isCollapsed, setIsCollapsed, collapsible } }
		>
			<div
				ref={ sideBarRef }
				className={ cn(
					'overflow-auto w-72 px-4 py-4 gap-4 flex flex-col bg-background-primary',
					borderOn &&
						'border-0 border-r border-solid border-border-subtle',
					!! screenHeight && 'h-screen',
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

						localStorage.setItem(
							'sidebar-collapsed',
							JSON.stringify( ! isCollapsed )
						);
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
