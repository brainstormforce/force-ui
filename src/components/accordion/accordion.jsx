import React, { useState, forwardRef } from 'react';
import { cn } from '@/utilities/functions';

const Accordion = ({ children, className, defaultValue, type = "simple" }) => {
    const [activeItem, setActiveItem] = useState(defaultValue);

    // Handler to control the active item
    const handleToggle = (value) => {
        setActiveItem((prev) => (prev === value ? null : value));
    };

    const typeClasses = type === 'boxed' ? 'space-y-3': '';

    return (
        <div className={ cn(typeClasses, className)}>
            {React.Children.map(children, (child) =>
                React.cloneElement(child, {
                    isActive: child.props.value === activeItem,
                    onToggle: () => handleToggle(child.props.value),
                    type,
                })
            )}
        </div>
    );
};

const AccordionItem = ({ children, className, isActive, onToggle, type }) => {
    
    let typeClasses = 'border-0'
    if (type === 'separator') {
        typeClasses = 'border-0 border-b border-solid border-border-subtle'
    } else if (type === 'boxed') {
        typeClasses = 'border border-solid border-border-subtle rounded-md'
    }

    return (
        <div className={cn("py-4 px-2", typeClasses, className)}>
            {React.Children.map(children, (child) =>
                React.cloneElement(child, { isActive, onToggle })
            )}
        </div>
    );
};

const AccordionTrigger = ({ children, onToggle, isActive, className, ...props }) => {
    return (
        <div className="flex">
            <button
                className={cn(
                    "flex flex-1 items-center justify-between text-sm font-medium transition-all appearance-none bg-transparent border-0 p-0",
                    className
                )}
                onClick={onToggle}
                aria-expanded={isActive}
                {...props}
            >
                {children}
            </button>
        </div>
    );
};

const AccordionContent = ({ children, isActive, className, ...props }) => {
    return (
        <div
            className={cn(
                "overflow-hidden text-sm transition-[max-height] duration-300 ease-in-out",
                isActive ? "max-h-screen" : "max-h-0",
                className
            )}
            aria-hidden={!isActive}
            {...props}
        >
            <div className={cn("pt-4", className)}>{children}</div>
        </div>
    );
};

export default Object.assign(Accordion, {
    Item: AccordionItem,
    Trigger: AccordionTrigger,
    Content: AccordionContent,
});

