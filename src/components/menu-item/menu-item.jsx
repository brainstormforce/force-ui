import React, { useState, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utilities/functions';
import { Tooltip } from '../tooltip';

const MenuContext = createContext();
const useMenuContext = () => useContext(MenuContext);

const Menu = ({ size = 'md', children, className, collapsed = false }) => {
	const baseClasses = 'w-64 flex flex-col bg-background-primary p-2';

	return (
		<MenuContext.Provider value={{ size, collapsed }}>
			<div
				className={cn(baseClasses, collapsed && 'w-max	p-0', className)}
			>
				{children}
			</div>
		</MenuContext.Provider>
	);
};

const MenuList = ({
	heading,
	arrow = false,
	open: initialOpen = false,
	onClick,
	children,
	className,
}) => {
	const [isOpen, setIsOpen] = useState(initialOpen);
	const { size, collapsed } = useMenuContext();

	const baseClasses =
		'text-text-primary bg-transparent cursor-pointer flex justify-between items-center p-1 gap-1';

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
		<div className={cn(!collapsed && 'p-2')}>
			<div
				role="button"
				tabIndex="0"
				onClick={handleToggle}
				onKeyPress={(event) => {
					if (event.key === 'Enter' || event.key === ' ') {
						handleToggle();
					}
				}}
				className={cn(
					baseClasses,
					collapsed && 'p-0',
					sizeClasses,
					className
				)}
				aria-expanded={isOpen || collapsed}
			>
				{!collapsed && (
					<span className="text-text-tertiary">{heading}</span>
				)}
				{arrow && !collapsed && (
					<motion.span
						variants={arrowAnimationVariants}
						animate={isOpen || collapsed ? 'open' : 'closed'}
						transition={{ duration: 0.15 }}
						className={cn(
							'flex items-center text-border-strong',
							iconSizeClasses
						)}
					>
						<ChevronDown />
					</motion.span>
				)}
			</div>

			<AnimatePresence initial={false}>
				{(isOpen || collapsed) && (
					<motion.ul
						variants={listAnimationVariants}
						initial="closed"
						animate="open"
						exit="closed"
						transition={{ duration: 0.3, ease: 'easeInOut' }}
						className="overflow-hidden flex gap-0.5 flex-col m-0 bg-white rounded-md"
					>
						{children}
					</motion.ul>
				)}
			</AnimatePresence>
		</div>
	);
};

const MenuItem = ({
	disabled = false,
	active,
	onClick,
	children,
	className,
}) => {
	const { size, collapsed } = useMenuContext();

	const baseClasses =
		'flex p-1 gap-1 items-center bg-transparent w-full border-none rounded text-text-secondary cursor-pointer m-0';
	const sizeClasses = {
		sm: '[&>svg]:size-4 [&>svg]:m-1 [&>*:not(svg)]:mx-1 [&>*:not(svg)]:my-0.5 text-sm',
		md: '[&>svg]:size-5 [&>svg]:m-1.5 [&>*:not(svg)]:m-1 text-base',
	}?.[size];
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

Menu.List = MenuList;
Menu.Item = MenuItem;
Menu.Separator = MenuSeparator;

export default Menu;
