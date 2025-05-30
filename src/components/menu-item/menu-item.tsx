import { useState, createContext, useContext, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utilities/functions';

const MenuContext = createContext<{ size?: 'sm' | 'md' }>( {} );
const useMenuContext = () => useContext( MenuContext );

// Base interface for common props
export interface BaseMenuProps {
	/** Additional CSS classes for the component. */
	className?: string;
}

// Props for Menu
export interface MenuProps extends BaseMenuProps {
	/** Defines the size of the menu (e.g., 'sm', 'md'). */
	size?: 'sm' | 'md';
	/** Child elements of the menu. */
	children: ReactNode;
}

export const Menu = ( { size = 'md', children, className }: MenuProps ) => {
	const baseClasses = 'flex flex-col bg-background-primary p-2';

	return (
		<MenuContext.Provider value={ { size } }>
			<div className={ cn( baseClasses, className ) }>{ children }</div>
		</MenuContext.Provider>
	);
};
Menu.displayName = 'Menu';

export interface MenuListProps extends BaseMenuProps {
	/** Heading for the menu list. */
	heading?: string;
	/** Displays an arrow next to the heading. */
	arrow?: boolean;
	/** Controls the initial open state of the menu list. */
	open?: boolean;
	/** Callback function triggered when the menu list is clicked. */
	onClick?: ( isOpen: boolean ) => void;
	/** Child elements of the menu list. */
	children: ReactNode;
	/** Shows the arrow only when hovering. */
	showArrowOnHover?: boolean;
}

export const MenuList = ( {
	heading,
	arrow = false,
	showArrowOnHover = false, // Prop to toggle hover-based arrow display
	open: initialOpen = true,
	onClick,
	children,
	className,
}: MenuListProps ) => {
	const [ isOpen, setIsOpen ] = useState( initialOpen );
	const [ isHovered, setIsHovered ] = useState( false );
	const { size } = useMenuContext();

	const baseClasses =
		'text-text-primary bg-transparent cursor-pointer flex justify-between items-center gap-1';

	const sizeClasses = {
		sm: 'text-xs',
		md: 'text-sm',
	}?.[ size ?? 'md' ];
	const iconSizeClasses = {
		sm: 'size-4',
		md: 'size-5',
	}?.[ size ?? 'md' ];

	const handleToggle = () => {
		setIsOpen( ! isOpen );
		if ( onClick ) {
			onClick( ! isOpen );
		}
	};

	const arrowAnimationVariants = {
		open: { rotate: 180 },
		closed: { rotate: 0 },
	};

	const listAnimationVariants = {
		open: { height: 'auto', opacity: 1 },
		closed: { height: 0, opacity: 0 },
	};

	const arrowFadeVariants = {
		visible: { opacity: 1 },
		hidden: { opacity: 0 },
	};

	const getArrowAnimationVariant = () => {
		if ( ! showArrowOnHover ) {
			return 'visible';
		}

		return isOpen || isHovered ? 'visible' : 'hidden';
	};

	return (
		<div>
			{ !! heading && (
				<div
					role="button"
					tabIndex={ 0 }
					onClick={ handleToggle }
					onKeyDown={ ( event ) => {
						if ( event.key === 'Enter' || event.key === ' ' ) {
							handleToggle();
						}
					} }
					onMouseEnter={ () => showArrowOnHover && setIsHovered( true ) }
					onMouseLeave={ () => showArrowOnHover && setIsHovered( false ) }
					className={ cn(
						baseClasses,
						sizeClasses,
						heading ? 'p-1' : 'p-0',
						className
					) }
					aria-expanded={ isOpen }
				>
					<span className="text-text-tertiary">{ heading }</span>

					{ arrow && (
						<motion.span
							className="flex items-center text-border-strong"
							initial="hidden"
							animate={ getArrowAnimationVariant() }
							exit="hidden"
							variants={ arrowFadeVariants }
							transition={ { duration: 0.15 } }
						>
							<motion.span
								className="inline-flex p-1"
								variants={ arrowAnimationVariants }
								animate={ isOpen ? 'open' : 'closed' }
								transition={ { duration: 0.15 } }
							>
								<ChevronDown
									className={ cn( 'shrink-0', iconSizeClasses ) }
								/>
							</motion.span>
						</motion.span>
					) }
				</div>
			) }

			<AnimatePresence initial={ false }>
				{ isOpen && (
					<motion.ul
						role="menu"
						variants={ listAnimationVariants }
						initial="closed"
						animate="open"
						exit="closed"
						transition={ { duration: 0.3, ease: 'easeInOut' } }
						className="overflow flex gap-0.5 flex-col m-0 bg-white rounded p-0"
					>
						{ children }
					</motion.ul>
				) }
			</AnimatePresence>
		</div>
	);
};

MenuList.displayName = 'Menu.List';

// Props for MenuItem
export interface MenuItemProps extends BaseMenuProps {
	/** Disables the menu item if true. */
	disabled?: boolean;
	/** Marks the menu item as active. */
	active?: boolean;
	/** Callback function triggered when the menu item is clicked. */
	onClick?: () => void;
	/** Child elements of the menu item. */
	children: ReactNode;
}
export const MenuItem = ( {
	disabled = false,
	active,
	onClick,
	children,
	className,
	...props
}: MenuItemProps ) => {
	const { size } = useMenuContext();

	const baseClasses =
		'flex p-1 gap-1 items-center bg-transparent border-none rounded text-text-secondary cursor-pointer m-0';
	const sizeClasses = {
		sm: '[&>svg]:size-4 [&>svg]:m-1 [&>*:not(svg)]:mx-1 [&>*:not(svg)]:my-0.5 text-sm',
		md: '[&>svg]:size-5 [&>svg]:m-1.5 [&>*:not(svg)]:m-1 text-base',
	}?.[ size ?? 'md' ];
	const hoverClasses =
		'hover:bg-background-secondary hover:text-text-primary';
	const disabledClasses = disabled
		? 'text-text-disabled hover:text-text-disabled cursor-not-allowed hover:bg-transparent'
		: '';
	const activeClasses = active
		? 'text-icon-primary [&>svg]:text-icon-interactive bg-background-secondary'
		: '';
	const transitionClasses = 'transition-colors duration-300 ease-in-out';

	return (
		<li
			role="menuitem"
			tabIndex={ disabled ? -1 : 0 }
			onClick={ disabled ? undefined : onClick }
			onKeyDown={ ( event ) => {
				if ( event.key === 'Enter' || event.key === ' ' ) {
					onClick?.();
				}
			} }
			className={ cn(
				baseClasses,
				sizeClasses,
				hoverClasses,
				disabledClasses,
				activeClasses,
				transitionClasses,
				className
			) }
			aria-disabled={ disabled }
			{ ...props }
		>
			{ children }
		</li>
	);
};

MenuItem.displayName = 'Menu.Item';

// Props for MenuSeparator
export interface MenuSeparatorProps extends BaseMenuProps {
	/** Defines the style of the separator (e.g., 'solid', 'dashed'). */
	variant?: 'solid' | 'dashed' | 'dotted' | 'double' | 'hidden' | 'none';
}
export const MenuSeparator = ( {
	variant = 'solid',
	className,
}: MenuSeparatorProps ) => {
	const variantClasses = {
		solid: 'border-solid',
		dashed: 'border-dashed',
		dotted: 'border-dotted',
		double: 'border-double',
		hidden: 'border-hidden',
		none: 'border-none',
	}?.[ variant ];

	return (
		<li className="m-0 p-0 list-none" role="separator" aria-hidden="true">
			<hr
				className={ cn(
					'w-full border-0 border-t border-border-subtle',
					variantClasses,
					className
				) }
			/>
		</li>
	);
};

MenuSeparator.displayName = 'Menu.Separator';

Menu.List = MenuList;
Menu.Item = MenuItem;
Menu.Separator = MenuSeparator;

export default Menu;
