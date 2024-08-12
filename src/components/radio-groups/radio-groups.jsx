import React, { useCallback, createContext, useContext, forwardRef } from 'react';
import { cn } from '../../utility/utils';

// Context for RadioGroup state management
const RadioGroupContext = createContext();

// Hook to use the RadioGroup context
const useRadioGroup = () => useContext(RadioGroupContext);

// RadioGroup component
const RadioGroup = ({ children, value, onChange, className, size = 'md', style = 'simple' }) => {
    const handleChange = useCallback(
        (newValue) => {
            if (onChange) {
                onChange(newValue);
            }
        },
        [onChange]
    );

    const groupClassName = cn(style !== 'simple' ? 'inline-flex border border-border-subtle border-solid rounded shadow-sm' : 'flex gap-6', className);

    return (
        <RadioGroupContext.Provider value={{ value, onChange: handleChange, size, style }}>
            <div className={groupClassName}>
                {children}
            </div>
        </RadioGroupContext.Provider>
    );
};

// RadioOption component for simple radios
const RadioOption = ({ id, label, disabled = false }) => {
    const { value, onChange, size } = useRadioGroup();
    const sizes = { s: 'h-4 w-4', m: 'h-5 w-5' };

    return (
        <div className="flex items-center">
            <input
                id={id}
                name="radio-group"
                type="radio"
                checked={value === id}
                onChange={() => onChange(id)}
                className={cn(
                    sizes[size],
                    'appearance-none m-0 border border-gray-300 rounded-full',
                    'checked:border-blue-600 checked:bg-blue-600',
                    'focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2',
                    disabled && 'cursor-not-allowed opacity-50',
                    'relative'
                )}
                disabled={disabled}
            />
            <label
                htmlFor={id}
                className={cn('ml-2 text-sm font-medium', disabled ? 'text-gray-400' : 'text-gray-900')}
            >
                {label}
            </label>

            <style jsx>{`
                input[type="radio"]::before {
                content: none !important; /* Ensure ::before does not interfere */
                }

                input[type="radio"]::after {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 8px; /* Adjust this size for a larger inner circle */
                height: 8px; /* Adjust this size for a larger inner circle */
                border-radius: 50%;
                background-color: white;
                opacity: 0;
                transition: opacity 0.2s ease-in-out;
                }

                input[type="radio"]:checked::after {
                opacity: 1;
                }

            `}</style>
        </div>
    );
};

// Base RadioButton component using ButtonGroup styles
const BaseRadioButton = forwardRef(({ id, label, isFirstChild, isLastChild, disabled = false, ...rest }, ref) => {
    const { value, onChange, size } = useRadioGroup();

    const sizes = {
        xs: 'py-1 px-1 text-xs leading-4 font-semibold',
        sm: 'py-2 px-2 text-sm leading-5 font-semibold',
        md: 'py-2.5 px-2.5 text-base leading-6 font-semibold',
    };

    const baseClasses = 'bg-background-primary text-primary cursor-pointer flex items-center justify-center';
    const hoverClasses = 'hover:bg-button-tertiary-hover';
    const focusClasses = 'focus:outline-none';
    const disabledClasses = disabled ? 'text-text-disabled cursor-not-allowed' : '';
    const firstChildClasses = isFirstChild ? 'rounded-tl rounded-bl border-0 border-r border-border-subtle' : '';
    const lastChildClasses = isLastChild ? 'rounded-tr rounded-br border-0' : '';
    const borderClasses = 'border-0 border-r border-border-subtle border-solid';
    const activeClasses = value === id ? 'bg-button-disabled' : '';

    const radioButtonClassName = cn(
        baseClasses,
        hoverClasses,
        focusClasses,
        disabledClasses,
        sizes[size],
        borderClasses,
        activeClasses,
        firstChildClasses,
        lastChildClasses
    );

    const handleClick = () => {
        onChange(id);
    };

    return (
        <button ref={ref} className={radioButtonClassName} disabled={disabled} onClick={handleClick} {...rest}>
            {label}
        </button>
    );
});

// RadioButton component for label style
const RadioButton = forwardRef((props, ref) => {
    return <BaseRadioButton ref={ref} {...props} />;
});

// RadioIcon component for icon style
const RadioIcon = forwardRef(({ id, icon, isFirstChild, isLastChild, disabled = false, ...rest }, ref) => {
    const { value, onChange, size } = useRadioGroup();

    const sizes = {
        xs: 'py-1 px-1 text-xs leading-4 font-semibold [&>svg]:h-4 [&>svg]:w-4 stroke-1',
        sm: 'py-2 px-2 text-sm leading-5 font-semibold [&>svg]:h-4 [&>svg]:w-4 stroke-1',
        md: 'py-2.5 px-2.5 text-base leading-6 font-semibold [&>svg]:h-5 [&>svg]:w-5 stroke-1',
    };

    const baseClasses = 'bg-background-primary text-primary cursor-pointer flex items-center justify-center';
    const hoverClasses = 'hover:bg-button-tertiary-hover';
    const focusClasses = 'focus:outline-none';
    const disabledClasses = disabled ? 'text-text-disabled cursor-not-allowed' : '';
    const firstChildClasses = isFirstChild ? 'rounded-tl rounded-bl border-0 border-r border-border-subtle' : '';
    const lastChildClasses = isLastChild ? 'rounded-tr rounded-br border-0' : '';
    const borderClasses = 'border-0 border-r border-border-subtle border-solid';
    const activeClasses = value === id ? 'bg-button-disabled' : '';

    const radioIconClassName = cn(
        baseClasses,
        hoverClasses,
        focusClasses,
        disabledClasses,
        sizes[size],
        borderClasses,
        activeClasses,
        firstChildClasses,
        lastChildClasses
    );

    const handleClick = () => {
        onChange(id);
    };

    return (
        <button ref={ref} className={radioIconClassName} disabled={disabled} onClick={handleClick} {...rest}>
            {icon}
        </button>
    );
});

// Main RadioGroups component with style handling
const RadioGroups = ({ options, value, onChange, size, style }) => {
    return (
        <RadioGroup value={value} onChange={onChange} size={size} style={style}>
            {options.map((option) =>
                style === 'simple' ? (
                    <RadioOption key={option.id} id={option.id} label={option.label} disabled={option.disabled} />
                ) : style === 'label' ? (
                    <RadioButton key={option.id} id={option.id} label={option.label} disabled={option.disabled} />
                ) : (
                    <RadioIcon key={option.id} id={option.id} icon={option.icon} disabled={option.disabled} />
                )
            )}
        </RadioGroup>
    );
};

export default RadioGroups;
