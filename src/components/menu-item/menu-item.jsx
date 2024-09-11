import React, { useState, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utilities/functions';

const MenuContext = createContext();
const useMenuContext = () => useContext( MenuContext );

const Menu = ( { size = 'md', children, className } ) => {
	const baseClasses = 'w-64 flex flex-col bg-background-primary p-2';

	return (
		<MenuContext.Provider value={ { size } }>
			<div className={ cn( baseClasses, className ) }>
				{ children }
			</div>
		</MenuContext.Provider>
	);
};

const MenuList = ( {
	heading,
	arrow = false,
	open: initialOpen = false,
	onClick,
	children,
	className,
} ) => {
	const [ isOpen, setIsOpen ] = useState( initialOpen );
	const { size } = useMenuContext();

	const baseClasses = 'text-text-primary bg-transparent cursor-pointer flex justify-between items-center p-1 gap-1';

	const sizeClasses = {
		sm: 'text-xs',
		md: 'text-sm',
	}?.[ size ];
	const iconSizeClasses = {
		sm: 'size-4',
		md: 'size-5',
	}?.[ size ];

	const handleToggle = () => {
		setIsOpen( ! isOpen );
		if ( onClick ) {
			onClick( ! isOpen );
		}
	};

	return (
		<div className="p-2">
			<div
				role="button"
				tabIndex="0"
				onClick={ handleToggle }
				onKeyPress={ ( e ) => {
					if ( e.key === 'Enter' || e.key === ' ' ) {
						handleToggle();
					}
				} }
				className={ cn( baseClasses, sizeClasses, className ) }
				aria-expanded={ isOpen }
			>
				<span className="text-text-tertiary">{ heading }</span>
				{ arrow && (
					<motion.span
						initial={ { rotate: 0 } }
						animate={ { rotate: isOpen ? 180 : 0 } }
						transition={ { duration: 0.15 } }
					>
						<ChevronDown className={ cn( 'text-border-strong', iconSizeClasses ) } />
					</motion.span>
				) }
			</div>

			<AnimatePresence initial={ false }>
				{ isOpen && (
					<motion.ul
						initial={ { height: 0, opacity: 0 } }
						animate={ { height: 'auto', opacity: 1 } }
						exit={ { height: 0, opacity: 0 } }
						transition={ { duration: 0.3, ease: 'easeInOut' } }
						className="overflow-hidden flex flex-col m-0 bg-white rounded-md"
					>
						<div>
							{ children }
						</div>
					</motion.ul>
				) }
			</AnimatePresence>
		</div>
	);
};

const MenuItem = ( { disabled = false, active, onClick, children, className } ) => {
	const { size } = useMenuContext();

	const baseClasses = 'flex p-1 gap-1 items-center bg-transparent w-full border-none rounded text-text-secondary cursor-pointer m-0';
	const sizeClasses = {
		sm: '[&>svg]:size-4 text-sm',
		md: '[&>svg]:size-5 text-base',
	}?.[ size ];
	const hoverClasses = 'hover:bg-background-secondary hover:text-text-primary';
	const disabledClasses = disabled ? 'text-text-disabled hover:text-text-disabled cursor-not-allowed hover:bg-transparent' : '';
	const activeClasses = active ? 'text-icon-primary [&>svg]:text-icon-interactive bg-background-secondary' : '';

	return (
		<li
			role="menuitem"
			tabIndex="0"
			onClick={ onClick }
			onKeyPress={ ( e ) => {
				if ( e.key === 'Enter' || e.key === ' ' ) {
					onClick();
				}
			} }
			className={ cn( baseClasses, sizeClasses, hoverClasses, disabledClasses, activeClasses, className ) }
		>
			{ children }
		</li>
	);
};

const MenuSeparator = ( { variant = 'solid', className } ) => {
	const variantClasses = {
		solid: 'border-solid',
		dashed: 'border-dashed',
		dotted: 'border-dotted',
		double: 'border-double',
		hidden: 'border-hidden',
		none: 'border-none',
	}?.[ variant ];

	return (
		<div>
			<hr
				className={ cn( 'border-t border-border-subtle', variantClasses, className ) }
			/>
		</div>
	);
};

Menu.List = MenuList;
Menu.Item = MenuItem;
Menu.Separator = MenuSeparator;

export default Menu;
