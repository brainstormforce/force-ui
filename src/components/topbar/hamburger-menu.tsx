import { Button } from '@/components';
import { cn } from '@/utilities/functions';
import { motion, useCycle } from 'framer-motion';
import { type ReactNode, useEffect, useRef } from 'react';

type MenuToggleFn = () => void;
type NavigationOption = { label: ReactNode; path: string; icon: React.ElementType };

interface HamburgerMenuProps {
	options: NavigationOption[];
}

interface MenuToggleProps {
	toggle: MenuToggleFn;
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

const sidebar = {
	open: ( height: number = 1000 ) => ( {
		clipPath: `circle(${ ( height * 2 ) + 200 }px at 14px 14px)`,
		transition: {
			type: 'spring',
			stiffness: 20,
			restDelta: 2,
		},
	} ),
	closed: {
		clipPath: 'circle(12px at 31.5px 32.5px)',
		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
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

export const MenuToggle = ( { toggle }: MenuToggleProps ) => (
	<Button
		className="absolute top-5 left-5 rounded-full hover:shadow-sm focus:[box-shadow:none] pointer-events-auto"
		variant="ghost"
		size="xs"
		onClick={ toggle }
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
			whileHover={ { scale: 1.1 } }
			whileTap={ { scale: 0.95 } }
		>
			{ children }
		</motion.li>
	);
};

const HamburgerMenu = ( { options }: HamburgerMenuProps ) => {
	const [ isOpen, toggleOpen ] = useCycle( false, true );
	const containerRef = useRef( null );
	const { height } = useDimensions( containerRef );

	return (
		<div className="size-6">
			<motion.nav
				className="absolute top-0 left-0 bottom-0 w-80 max-[782px]:h-[calc(100dvh_-_46px)] h-[calc(100dvh_-_32px)]"
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
				<motion.div
					className="bg-background-primary shadow-lg absolute top-0 bottom-0 left-0 w-80 border-r border-solid border-border-subtle"
					variants={ sidebar }
				/>
				<Navigation options={ options } />
				<MenuToggle toggle={ () => toggleOpen() } />
			</motion.nav>
		</div>
	);
};

export default HamburgerMenu;
