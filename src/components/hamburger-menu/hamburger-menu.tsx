import { Button } from '@/components';
import { cn } from '@/utilities/functions';
import { motion, useCycle } from 'framer-motion';
import React, {
	useEffect,
	useRef,
	createContext,
	useContext,
	type ReactNode,
	useState,
	startTransition,
	type ElementType,
	cloneElement,
	isValidElement,
	type FC,
} from 'react';
import { getElementPositionRelativeToScreen } from '../topbar/utils';

type MenuToggleFn = () => void;

export interface HamburgerMenuProps {
	/**
	 * The class name to apply to the hamburger menu root container.
	 */
	className?: string;
	/**
	 * The children to render in the menu options.
	 */
	children: React.ReactNode;
}

export interface MenuToggleProps {
	/**
	 * The class name to apply to the hamburger menu toggle button.
	 */
	className?: string;
}

export interface MenuOptionProps<T extends ElementType = 'a'> {
	/**
	 * The tag or component to render the option as.
	 */
	tag?: T;
	/**
	 * Whether the option is active.
	 */
	active?: boolean;
	/**
	 * Icon component to display.
	 */
	icon?: React.ReactElement;
	/**
	 * Position of the icon.
	 */
	iconPosition?: 'left' | 'right';
	/**
	 * Additional class name for styling.
	 */
	className?: string;
	/**
	 * Children elements.
	 */
	children?: ReactNode;
}

export interface MenuItemProps {
	children: React.ReactNode;
}

export interface MenuOptionsProps {
	/**
	 * The children to render in the menu options.
	 */
	children: React.ReactNode;
	/**
	 * The class name to apply to the menu options container.
	 */
	className?: string;
}

export interface PathProps extends React.SVGProps<SVGPathElement> {
	variants: {
		closed: Record<string, string | number>;
		open: Record<string, string | number>;
	};
	transition?: Record<string, string | number>;
}

export interface HamBurgerContextType {
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

const sidebar = (
	triggerButton: HTMLButtonElement,
	menuContainer: HTMLElement,
	isLeft: boolean
) => {
	if ( ! triggerButton || ! menuContainer ) {
		return {
			open: () => ( {} ),
			closed: () => ( {} ),
		};
	}

	const buttonData = triggerButton?.getBoundingClientRect();
	const containerData = menuContainer?.getBoundingClientRect();

	// Calculate position relative to the menu container
	const buttonX = isLeft
		? buttonData?.x - containerData?.x + buttonData?.width / 2
		: containerData?.width -
			( containerData?.right - buttonData?.x ) +
			buttonData?.width / 2;

	const buttonY = buttonData?.y - containerData?.y + buttonData?.height / 2;
	const buttonArea = buttonData?.width / 2;

	return {
		open: ( height: number = 1000 ) => ( {
			clipPath: `circle(${ height * 2 + 200 }px at ${ buttonX }px ${ buttonY }px)`,
			background: 'rgb(255, 255, 255, 1)',
			transition: {
				type: 'spring',
				stiffness: 20,
				restDelta: 2,
				background: {
					duration: 0,
				},
			},
		} ),
		closed: {
			clipPath: `circle(${ buttonArea }px at ${ buttonX }px ${ buttonY }px)`,
			background: 'rgb(255, 255, 255, 0)',
			transition: {
				delay: 0.5,
				type: 'spring',
				stiffness: 400,
				damping: 40,
				background: {
					duration: 0,
					delay: 1000,
				},
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
			className={ cn(
				'relative z-[1] rounded-full hover:shadow-sm focus:[box-shadow:none] pointer-events-auto bg-background-primary',
				className
			) }
			variant="ghost"
			size="xs"
			onClick={ toggleOpen }
			aria-label="Toggle menu"
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

type MenuOptionComponent = <T extends ElementType = 'a'>(
	props: MenuOptionProps<T> &
		Omit<React.ComponentPropsWithoutRef<T>, keyof MenuOptionProps<T>>
) => React.ReactElement | null;

export const MenuOption: MenuOptionComponent = ( {
	tag: Tag = 'a',
	active,
	icon,
	iconPosition = 'left',
	className,
	children,
	...props
} ) => {
	let leftIcon = null;
	let rightIcon = null;
	const renderIcon =
		icon && isValidElement( icon )
			? cloneElement( icon, {
				key: 'left-icon',
				className: cn(
					'size-5',
					active ? 'text-brand-800' : 'text-icon-secondary',
					( icon.props as { className?: string } )?.className ?? ''
				),
			} as React.SVGProps<SVGSVGElement> )
			: null;

	switch ( iconPosition ) {
		case 'left':
			leftIcon = renderIcon;
			break;
		case 'right':
			rightIcon = renderIcon;
			break;
		default:
			leftIcon = null;
			rightIcon = null;
			break;
	}

	return (
		<MenuItem>
			<Tag
				className={ cn(
					'w-full no-underline hover:no-underline text-text-primary text-lg font-medium flex items-center gap-2 px-2.5 py-1.5 rounded-md hover:bg-background-secondary hover:text-text-primary focus:outline-none focus:shadow-none transition ease-in-out duration-150',
					active
						? 'text-text-primary bg-background-secondary'
						: 'text-text-secondary',
					className
				) }
				{ ...props }
			>
				{ !! leftIcon && leftIcon }
				<span className="contents">{ children }</span>
				{ !! rightIcon && rightIcon }
			</Tag>
		</MenuItem>
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

export const MenuOptions: FC<MenuOptionsProps> = ( { children, className } ) => {
	const { triggerRef, triggerOnRight, triggerOnLeft } = useHamBurgerState();
	const [ container, setContainer ] = useState<HTMLDivElement | null>( null );

	if ( ! triggerRef ) {
		return null;
	}

	return (
		<motion.div
			ref={ setContainer }
			className={ cn(
				'absolute top-0 bottom-0 w-80 h-screen',
				triggerOnRight ? 'right-0' : 'left-0',
				className
			) }
		>
			{ container && (
				<motion.div
					className={ cn(
						'bg-background-primary shadow-lg absolute top-0 bottom-0 w-80 border-y-0 border-l-0 border-r border-solid border-border-subtle',
						triggerOnRight ? 'right-0' : 'left-0'
					) }
					variants={ sidebar(
						triggerRef,
						container,
						triggerOnLeft ?? false
					) }
				/>
			) }
			<motion.ul
				variants={ navVariants }
				className={ cn(
					'relative mt-14 mb-0 w-full px-5 pb-5 pt-2 flex flex-col items-start justify-start gap-0.5',
					className
				) }
			>
				{ children }
			</motion.ul>
		</motion.div>
	);
};

export const HamburgerMenu = ( { className, children }: HamburgerMenuProps ) => {
	const [ isOpen, toggleOpen ] = useCycle( false, true );
	const [ trigger, setTrigger ] = useState<HTMLButtonElement | null>( null );
	const containerRef = useRef( null );
	const { height } = useDimensions( containerRef );

	const { isRight = false, isLeft = true } =
		getElementPositionRelativeToScreen( trigger );

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
			<div className={ cn( 'size-6 z-[1]', className ) }>
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
					{ children }
				</motion.nav>
			</div>
		</HamBurgerProvider>
	);
};

// Update display name
HamburgerMenu.displayName = 'HamburgerMenu';
MenuToggle.displayName = 'HamburgerMenu.Toggle';
MenuOptions.displayName = 'HamburgerMenu.Options';
( MenuOption as React.ComponentType ).displayName = 'HamburgerMenu.Option';

// Assign Components
HamburgerMenu.Options = MenuOptions;
HamburgerMenu.Option = MenuOption;
HamburgerMenu.Toggle = MenuToggle;

export default HamburgerMenu;
