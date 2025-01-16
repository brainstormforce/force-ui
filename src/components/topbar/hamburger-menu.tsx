import { Button } from '@/components';
import { cn } from '@/utilities/functions';
import { motion, useCycle } from 'framer-motion';
import {
	useEffect,
	useRef,
	createContext,
	useContext,
	type RefObject,
	type ReactNode,
	useState,
} from 'react';

type MenuToggleFn = () => void;
type NavigationOption = { label: ReactNode; path: string; icon: React.ElementType };

interface HamburgerMenuProps {
	options: NavigationOption[];
}

interface MenuToggleProps {
	className?: string;
}

interface NavigationProps {
	options: NavigationOption[];
}

interface MenuItemProps {
	children: React.ReactNode;
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
	triggerRef?: HTMLButtonElement;
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

const sidebar = ( triggerButton: RefObject<HTMLButtonElement> ) => {
	// Calculate the position of the trigger button
	const buttonData = triggerButton?.getBoundingClientRect();
	const buttonX = ( buttonData?.x ?? 0 ) + ( ( buttonData?.width ?? 0 ) / 2 );
	const buttonY = ( buttonData?.y ?? 0 ) + ( ( buttonData?.height ?? 0 ) / 2 );
	const buttonArea = ( buttonData?.width ?? 0 ) / 2;

	console.log( buttonX, buttonY, buttonArea );

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
			// className="absolute top-5 left-5 rounded-full hover:shadow-sm focus:[box-shadow:none] pointer-events-auto"
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

export const Navigation = ( { options }: NavigationProps ) => {
	const currentPath = window.location.search;
	const activeNavbarLinkIndx = options.findIndex(
		( { path } ) => currentPath === path
	);

	return (
		<motion.ul
			variants={ navVariants }
			className="absolute top-12 w-full px-5 pb-5 pt-2 flex flex-col items-start justify-center gap-0.5"
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

const MenuOptions = ( { options }: MenuOptionsProps ) => {
	const { triggerRef } = useHamBurgerState();
	if ( ! triggerRef ) {
		return null;
	}

	return (
		<motion.div layoutRoot className="absolute top-0 left-0 bottom-0 w-80 h-full">
			<motion.div
				className="bg-background-primary shadow-lg fixed top-0 bottom-0 left-0 w-80 border-y-0 border-l-0 border-r border-solid border-border-subtle"
				variants={ sidebar( triggerRef ) }
				layoutId="hamburger-menu-options"
			/>
			<Navigation options={ options } />
		</motion.div>
	);
};

const HamburgerMenu = ( { options }: HamburgerMenuProps ) => {
	const [ isOpen, toggleOpen ] = useCycle( false, true );
	const [ triggerRef, setTriggerRef ] = useState( null );
	const containerRef = useRef( null );
	const { height } = useDimensions( containerRef );

	const providerValue = {
		isOpen,
		toggleOpen,
		setTriggerRef,
		triggerRef,
	};

	return (
		<HamBurgerProvider value={ providerValue }>
			<div className="size-6">
				<motion.nav
					className="w-80 h-full"
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
