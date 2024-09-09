import React, { useState, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utilities/functions';

const MenuContext = createContext();
const useMenuContext = () => useContext(MenuContext);

const Menu = ({ size = "sm", children }) => {

    const baseClasses = "w-full flex flex-col bg-background-primary rounded-md";

    const sizeClasses = { 
        sm: 'p-1.5 text-sm', 
        md: 'p-2 text-base' 
    }?.[size];

    return (
        <MenuContext.Provider value={ {size} }>
            <div className={cn(baseClasses, sizeClasses)}>
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
        className 
    }) => {

    const [isOpen, setIsOpen] = useState(initialOpen);

    const { size } = useMenuContext();

    const baseClasses = "text-text-primary bg-transparent cursor-pointer flex justify-between items-center p-1 gap-1";

    const sizeClasses = {
        sm: 'text-xs',
        md: 'text-sm',
    }?.[size];

    const handleToggle = () => {
        setIsOpen(!isOpen);
        if (onClick) {
            onClick(!isOpen);
        }
    };

    return (
        <div className="w-full">
            <div
                onClick={handleToggle}
                className={cn(baseClasses, sizeClasses, className)}
            >
                <span>{heading}</span>
                {arrow && <ChevronDown />}
            </div>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden flex flex-col space-y-2 bg-white rounded-md"
                    >
                        <div className="p-2">
                            {children}
                        </div>
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};

const MenuItem = ({ disabled = false, children, className }) => {
    const { size } = useMenuContext();

    const sizeClasses = { 
        sm: '[&>svg]:size-4 text-sm', 
        md: '[&>svg]:size-5 text-base' 
    }?.[size];
    const hoverClasses = 'hover:bg-background-secondary hover:text-text-primary';
    const disabledClasses = disabled ? 'text-text-disabled cursor-not-allowed hover:bg-transparent' : '';
    const activeClasses = '';

    return (
        <li className={cn(sizeClasses, hoverClasses, disabledClasses, "flex p-1 gap-1 items-center bg-transparent w-full border-none rounded text-text-secondary", className)}>
            {children}
        </li>
    );
};

const MenuSeparator = ({ borderStyle = "solid", className }) => {

    const borderStyleClasses = {
        solid: 'border-solid',
        dashed: 'border-dashed',
        dotted: 'border-dotted',
        double: 'border-double',
        hidden: 'border-hidden',
        none: 'border-none'
    }?.[borderStyle];

    return (
        <div>
            <hr
                className={cn('border-t border-border-subtle', borderStyleClasses, className)}
            />
        </div>
    );
};

Menu.List = MenuList;
Menu.Item = MenuItem;
Menu.Separator = MenuSeparator;

export default Menu;
