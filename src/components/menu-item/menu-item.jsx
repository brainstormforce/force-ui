import React, { useState, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utilities/functions';

const MenuContext = createContext();
const useMenuContext = () => useContext(MenuContext);

const Menu = ({ size = 'md', children, className }) => {
	const baseClasses = 'flex flex-col bg-background-primary p-2';

	return (
		<MenuContext.Provider value={{ size }}>
			<div className={cn(baseClasses, className)}>{children}</div>
		</MenuContext.Provider>
	);
};

Menu.displayName = 'Menu';

const MenuList = ({
	heading,
	arrow = false,
	showArrowOnHover = true, // Prop to toggle hover-based arrow display
	open: initialOpen = true,
	onClick,
	children,
	className,
}) => {
	const [isOpen, setIsOpen] = useState(initialOpen);
	const [isHovered, setIsHovered] = useState(false);
	const { size } = useMenuContext();

	const baseClasses =
		'text-text-primary bg-transparent cursor-pointer flex justify-between items-center gap-1';

	const sizeClasses = {
		sm: 'text-xs',
		md: 'text-sm',
	}?.[size];
	const iconSizeClasses = {
		sm: '[&>svg]:size-4',
		md: '[&>svg]:size-5',
	}?.[size];

	const handleToggle = () => {
		setIsOpen(!isOpen);
		if (onClick) {
			onClick(!isOpen);
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

	return (
		<div>
			<div
				role="button"
				tabIndex="0"
				onClick={handleToggle}
				onKeyPress={(event) => {
					if (event.key === 'Enter' || event.key === ' ') {
						handleToggle();
					}
				}}
				onMouseEnter={() => showArrowOnHover && setIsHovered(true)}
				onMouseLeave={() => showArrowOnHover && setIsHovered(false)}
				className={cn(baseClasses, sizeClasses, heading ? 'p-1' : 'p-0', className)}
				aria-expanded={isOpen}
			>
				<span className="text-text-tertiary">{heading}</span>

				{arrow && (
					<motion.span
						variants={arrowAnimationVariants}
						animate={isOpen ? 'open' : 'closed'}
						transition={{ duration: 0.15 }}
						className={cn('flex items-center text-border-strong', iconSizeClasses)}
					>
						{/* Show ChevronDown only when menu is open, or on hover if the menu is closed and showArrowOnHover is true */}
						{isOpen || !showArrowOnHover || (showArrowOnHover && isHovered) ? (
							<ChevronDown />
						) : null}
					</motion.span>
				)}
			</div>

			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.ul
						variants={listAnimationVariants}
						initial="closed"
						animate="open"
						exit="closed"
						transition={{ duration: 0.3, ease: 'easeInOut' }}
						className="overflow flex gap-0.5 flex-col m-0 bg-white rounded p-0"
					>
						{children}
					</motion.ul>
				)}
			</AnimatePresence>
		</div>
	);
};

MenuList.displayName = 'Menu.List';

const MenuItem = ({ disabled = false, active, onClick, children, className }) => {
	const { size } = useMenuContext();

	const baseClasses =
		'flex p-1 gap-1 items-center bg-transparent border-none rounded text-text-secondary cursor-pointer m-0';
	const sizeClasses = {
		sm: '[&>svg]:size-4 [&>svg]:m-1 [&>*:not(svg)]:mx-1 [&>*:not(svg)]:my-0.5 text-sm',
		md: '[&>svg]:size-5 [&>svg]:m-1.5 [&>*:not(svg)]:m-1 text-base',
	}?.[size];
	const hoverClasses = 'hover:bg-background-secondary hover:text-text-primary';
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
			tabIndex="0"
			onClick={onClick}
			onKeyPress={(event) => {
				if (event.key === 'Enter' || event.key === ' ') {
					onClick();
				}
			}}
			className={cn(
				baseClasses,
				sizeClasses,
				hoverClasses,
				disabledClasses,
				activeClasses,
				transitionClasses,
				className
			)}
		>
			{children}
		</li>
	);
};

MenuItem.displayName = 'Menu.Item';

const MenuSeparator = ({ variant = 'solid', className }) => {
	const variantClasses = {
		solid: 'border-solid',
		dashed: 'border-dashed',
		dotted: 'border-dotted',
		double: 'border-double',
		hidden: 'border-hidden',
		none: 'border-none',
	}?.[variant];

	return (
		<>
			<hr
				className={cn(
					'w-full border-0 border-t border-border-subtle',
					variantClasses,
					className
				)}
			/>
		</>
	);
};

MenuSeparator.displayName = 'Menu.Separator';

export default Object.assign(Menu, {
	List: MenuList,
	Item: MenuItem,
	Separator: MenuSeparator,
});
