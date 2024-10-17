import React, { useState } from 'react';
import { Plus, Minus, ChevronDown } from 'lucide-react';
import { cn } from '@/utilities/functions';

const Accordion = ( props ) => {
    const {
        type = "simple",
        defaultValue, 
        disabled = false,
        children, 
        className, 
    } = props;
    const [activeItem, setActiveItem] = useState(defaultValue);

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
                    disabled: disabled || child.props.disabled
                })
            )}
        </div>
    );
};

const AccordionItem = ( props ) => {
    const {
        isActive, 
        onToggle, 
        type, 
        value, 
        disabled = false,
        children, 
        className, 
    } = props;
    
    let typeClasses = 'border-0'
    if (type === 'separator') {
        typeClasses = 'border-0 border-b border-solid border-border-subtle'
    } else if (type === 'boxed') {
        typeClasses = 'border border-solid border-border-subtle rounded-md'
    }

    return (
        <div className={cn("py-4 px-2", typeClasses, className)} value={value}>
            {React.Children.map(children, (child) =>
                React.cloneElement(child, { isActive, onToggle, disabled })
            )}
        </div>
    );
};

const AccordionTrigger = ( props ) => {
    const {
        onToggle, 
        isActive, 
        iconType, // arrow, plus-minus
        disabled = false, 
        children, 
        className, 
    } = props;

    const renderIcon = () => {
        if (iconType === "arrow") {
            return (
                <ChevronDown
                    className={cn(
                        "text-icon-secondary transition-transform duration-500 ease-in-out",
                        isActive ? "rotate-180" : "rotate-0"
                    )}
                />
            );
        }
        if (iconType === "plus-minus") {
            return isActive ? <Minus className='text-icon-secondary' /> : <Plus className='text-icon-secondary' />;
        }
        return null;
    };

    return (
        <button
            className={cn(
                "flex w-full items-center justify-between text-sm font-medium transition-all appearance-none bg-transparent border-0 p-0 cursor-pointer gap-3",
                disabled && "cursor-not-allowed opacity-40",
                className
            )}
            onClick={!disabled ? onToggle : null}
            aria-expanded={isActive}
            disabled={disabled}
            {...props}
        >
            <div className="flex items-center gap-2">
                {children}
            </div>
            {renderIcon()}
        </button>
    );
};

const AccordionContent = ( props ) => {
    const {
        isActive, 
        disabled = false, 
        children, 
        className, 
    } = props;
    return (
        <div
            className={cn(
                "text-text-secondary overflow-hidden text-sm transition-[max-height, opacity, transform] duration-500 ease-in-out",
                isActive ? "max-h-screen opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-95",
                disabled && "opacity-40",
                className
            )}
            aria-hidden={!isActive}
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
