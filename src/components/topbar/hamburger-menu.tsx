import { Button } from '@/components';
import { cn } from '@/utilities/functions';
import { motion, useCycle } from 'framer-motion';
import {
	useEffect,
	useRef,
	createContext,
	useContext,
	type ReactNode,
	useState,
	startTransition,
} from 'react';
import { getElementPositionRelativeToScreen } from './utils';

type MenuToggleFn = () => void;
type NavigationOption = { label: ReactNode; path: string; icon: React.ElementType };

interface HamburgerMenuProps {
	/**
	 * The options to display in the menu.
	 */
	options: NavigationOption[];
	/**
	 * The class name to apply to the hamburger menu root container.
	 */
	className?: string;
}

interface MenuToggleProps {
	/**
	 * The class name to apply to the hamburger menu toggle button.
	 */
	className?: string;
}

interface NavigationProps {
	options: NavigationOption[];
	className?: string;
}

interface MenuItemProps {
	children: React.ReactNode;
}

interface MenuOptionsProps {
	options: NavigationOption[];
	className?: string;
}

interface PathProps extends React.SVGProps<SVGPathElement> {
	variants: {
		closed: Record<string, string | number>;
		open: Record<string, string | number>;
	};
	transition?: Record<string, string | number>;
}

interface HamBurgerContextType {
	isOpen?: boolean;
	toggleOpen?: MenuToggleFn;
	setTriggerRef?: ( ref: HTMLButtonElement ) => void;
	triggerRef?: HTMLButtonElement | null;
	triggerOnRight?: boolean;
	triggerOnLeft?: boolean;
}

// Hamburger context
const HamBurgerContext = createContext<HamBurgerContextType>( {} );
const HamBurgerProvider = HamBurgerContext.Provider;
const useHamBurgerState = () => useContext( HamBurgerContext );

export const useDimensions = ( ref: React.RefObject<HTMLElement> ) => {
	const dimensions = useRef( { width: 0, height: 0 } );

	useEffect( () => {
		if ( ! ref.current ) {
			return;
		}

		dimensions.current.width = ref.current.offsetWidth;
		dimensions.current.height = ref.current.offsetHeight;
	}, [] );

	return dimensions.current;
};

const sidebar = ( triggerButton: HTMLButtonElement, isLeft: boolean ) => {
	// Calculate the position of the trigger button (For left side menu)
	let buttonX = 0;
	let buttonY = 0;
	let buttonArea = 0;

	if ( isLeft ) {
		const buttonData = triggerButton?.getBoundingClientRect();
		buttonX = ( buttonData?.x ?? 0 ) + ( ( buttonData?.width ?? 0 ) / 2 );
		buttonY = ( buttonData?.y ?? 0 ) + ( ( buttonData?.height ?? 0 ) / 2 );
		buttonArea = ( buttonData?.width ?? 0 ) / 2;
	} else {
		const nextSiblingData = ( triggerButton?.nextSibling as Element )?.getBoundingClientRect();
		const buttonData = triggerButton?.getBoundingClientRect();
		buttonX = nextSiblingData?.width - ( document.body.clientWidth - ( ( buttonData?.x ?? 0 ) + ( ( buttonData?.width ?? 0 ) / 2 ) ) );
		buttonY = document.body.clientHeight - ( ( buttonData?.y ?? 0 ) + ( ( buttonData?.height ?? 0 ) / 2 ) );
		buttonArea = ( buttonData?.width ?? 0 ) / 2;
	}

	return {
		open: ( height: number = 1000 ) => ( {
			clipPath: `circle(${ ( height * 2 ) + 200 }px at ${ buttonX }px ${ buttonY }px)`,
			transition: {
				type: 'spring',
				stiffness: 20,
				restDelta: 2,
			},
		} ),
		closed: {
			clipPath: `circle(${ buttonArea }px at ${ buttonX }px ${ buttonY }px)`,
			transition: {
				delay: 0.5,
				type: 'spring',
				stiffness: 400,
				damping: 40,
			},
		},
	};
};

const Path = ( props: PathProps ): React.ReactNode => (
	// @ts-expect-error Framer Motion types are not compatible with SVGPathElement
	<motion.path
		className="stroke-icon-primary"
		fill="transparent"
		strokeWidth="3"
		strokeLinecap="round"
		{ ...props }
	/>
);

export const MenuToggle = ( { className }: MenuToggleProps ) => {
	const { toggleOpen, setTriggerRef } = useHamBurgerState();

	return (
		<Button
			// @ts-expect-error Ref is not present in Button component type, but we need it for the hamburger menu
			ref={ setTriggerRef }
			className={ cn( 'relative z-[1] rounded-full hover:shadow-sm focus:[box-shadow:none] pointer-events-auto', className ) }
			variant="ghost"
			size="xs"
			onClick={ toggleOpen }
			icon={
				<motion.svg
					className="shrink-0 stroke-icon-primary"
					width="23"
					height="23"
					variants={ {
						open: {
							viewBox: '0 0 20 20',
						},
						closed: {
							viewBox: '0 0 23 18',
						},
					} }
				>
					<Path
						variants={ {
							closed: { d: 'M 2 2.5 L 20 2.5' },
							open: { d: 'M 3 16.5 L 17 2.5' },
						} }
					/>
					<Path
						d="M 2 9.423 L 20 9.423"
						variants={ {
							closed: { opacity: 1 },
							open: { opacity: 0 },
						} }
						transition={ { duration: 0.1 } }
					/>
					<Path
						variants={ {
							closed: { d: 'M 2 16.346 L 20 16.346' },
							open: { d: 'M 3 2.5 L 17 16.346' },
						} }
					/>
				</motion.svg>
			}
		/>
	);
};

const navVariants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

export const Navigation = ( { options, className }: NavigationProps ) => {
	const currentPath = window.location.search;
	const activeNavbarLinkIndx = options.findIndex(
		( { path } ) => currentPath === path
	);

	return (
		<motion.ul
			variants={ navVariants }
			className={ cn(
				'relative mt-14 w-full px-5 pb-5 pt-2 flex flex-col items-start justify-center gap-0.5',
				className
			) }
		>
			{ options.map( ( { label, path, icon: Icon }, indx ) => (
				<MenuItem key={ indx }>
					<a
						href={ path }
						className={ cn(
							'w-full no-underline hover:no-underline text-text-primary text-lg font-medium flex items-center gap-2 px-2.5 py-1.5 rounded-md hover:bg-background-secondary hover:text-text-primary focus:outline-none focus:shadow-none transition ease-in-out duration-150',
							indx === activeNavbarLinkIndx
								? 'text-text-primary bg-background-secondary'
								: 'text-text-secondary'
						) }
						target="_self"
						rel="noopener noreferrer"
					>
						<Icon
							className={ cn(
								'size-5',
								indx === activeNavbarLinkIndx
									? 'text-brand-800'
									: 'text-icon-secondary'
							) }
						/>
						<span>{ label }</span>
					</a>
				</MenuItem>
			) ) }
		</motion.ul>
	);
};

const menuItemVariants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

export const MenuItem = ( { children }: MenuItemProps ) => {
	return (
		<motion.li
			className="m-0 p-0 flex items-center justify-start w-full"
			variants={ menuItemVariants }
			whileHover={ { scale: 1.05 } }
			whileTap={ { scale: 0.95 } }
		>
			{ children }
		</motion.li>
	);
};

const MenuOptions = ( { options, className }: MenuOptionsProps ) => {
	const { triggerRef, triggerOnRight, triggerOnLeft } = useHamBurgerState();
	const [ container, setContainer ] = useState<HTMLDivElement | null>( null );

	if ( ! triggerRef ) {
		return null;
	}

	return (
		<motion.div
			ref={ setContainer }
			className={ cn(
				'absolute top-0 bottom-0 w-80 h-full',
				triggerOnRight ? 'right-0' : 'left-0',
				className
			) }
		>
			{ container && (
				<motion.div
					className={ cn(
						'bg-background-primary shadow-lg fixed top-0 bottom-0 w-80 border-y-0 border-l-0 border-r border-solid border-border-subtle',
						triggerOnRight ? 'right-0' : 'left-0'
					) }
					variants={ sidebar( triggerRef, triggerOnLeft ?? false ) }
				/>
			) }
			<Navigation options={ options } />
		</motion.div>
	);
};

const HamburgerMenu = ( { options, className }: HamburgerMenuProps ) => {
	const [ isOpen, toggleOpen ] = useCycle( false, true );
	const [ trigger, setTrigger ] = useState<HTMLButtonElement | null>( null );
	const containerRef = useRef( null );
	const { height } = useDimensions( containerRef );

	const { isRight = false, isLeft = true } = getElementPositionRelativeToScreen( trigger );

	const setTriggerRef = ( ref: HTMLButtonElement ) => {
		startTransition( () => {
			setTrigger( ref );
		} );
	};

	const providerValue = {
		isOpen,
		toggleOpen,
		setTriggerRef,
		triggerRef: trigger,
		triggerOnRight: isRight,
		triggerOnLeft: isLeft,
	};

	return (
		<HamBurgerProvider value={ providerValue }>
			<div className={ cn( 'size-6', className ) }>
				<motion.nav
					className="h-full"
					initial={ false }
					animate={ isOpen ? 'open' : 'closed' }
					custom={ height }
					variants={ {
						open: {
							pointerEvents: 'auto',
						},
						closed: {
							pointerEvents: 'none',
						},
					} }
					ref={ containerRef }
				>

					<MenuToggle />
					<MenuOptions options={ options } />
				</motion.nav>
			</div>
		</HamBurgerProvider>
	);
};

export default HamburgerMenu;
