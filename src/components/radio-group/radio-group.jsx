import React, { useCallback, createContext, useContext, forwardRef } from 'react';
import { cn } from '../../utilities/functions';

// Context for RadioGroup state management
const RadioGroupContext = createContext();

// Custom Hook to use the RadioGroup context
const useRadioGroup = () => useContext(RadioGroupContext);

// Internal RadioGroup component (context provider)
const InternalRadioGroup = ({ children, value, onChange, size = 's', style = 'simple', className }) => {

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

const RadioOption = ({ id, label, disabled = false }) => {
    const { value, onChange, size } = useRadioGroup();

    const styles = {
        s: {
            input: 'h-4 w-4 py-0.5 px-0.5 border-border-strong hover:border-border-interactive checked:border-border-interactive bg-white checked:bg-toggle-on checked:hover:bg-toggle-on-hover checked:hover:border-toggle-on-hover focus:ring-2 focus:ring-offset-2 focus:ring-focus',
            label: 'text-sm font-medium text-field-label leading-5',
        },
       
        m: {
            input: 'h-5 w-5 py-0.5 px-0.5 border-border-strong hover:border-border-interactive checked:border-border-interactive bg-white checked:bg-toggle-on checked:hover:bg-toggle-on-hover checked:hover:border-toggle-on-hover focus:ring-2 focus:ring-offset-4 focus:ring-focus',
            label: 'text-base font-medium text-field-label leading-6',
        },
    };

    const disabledStyles = 'cursor-not-allowed checked:border-border-disabled checked:bg-border-disabled border-border-disabled hover:border-border-disabled hover:checked:border-border-disabled hover:checked:bg-border-disabled';

    return (
        <div className="flex items-center gap-2">
            <input
                id={id}
                name="radio-group"
                type="radio"
                checked={value === id}
                onChange={() => onChange(id)}
                className={cn(
                    'appearance-none m-0 rounded-full relative',
                    styles[size].input,
                    disabled && disabledStyles,
                )}
                disabled={disabled}
            />
            <label
                htmlFor={id}
                className={cn(
                    styles[size].label,
                    disabled ? 'text-field-color-disabled cursor-not-allowed' : 'cursor-pointer'
                )}
            >
                {label}
            </label>

            <style jsx>{`
                input[type="radio"]::before {
                    content: none !important;
                }

                input[type="radio"]::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: ${size === 's' ? '6px' : '8px'};
                    height: ${size === 's' ? '6px' : '8px'};
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

const BaseRadioButton = forwardRef(({ id, label, isFirstChild, isLastChild, disabled = false, ...rest }, ref) => {
    const { value, onChange, size } = useRadioGroup();

    const sizes = {
        s: 'py-1 px-1 text-xs leading-4 font-semibold',
        m: 'py-2 px-2 text-sm leading-5 font-semibold',
        l: 'py-2.5 px-2.5 text-base leading-6 font-semibold',
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

const RadioButton = forwardRef((props, ref) => {
    return <BaseRadioButton ref={ref} {...props} />;
});

// RadioIcon component for icon style
const RadioIcon = forwardRef(({ id, icon, isFirstChild, isLastChild, disabled = false, ...rest }, ref) => {
    const { value, onChange, size } = useRadioGroup();

    const sizes = {
        s: 'py-1 px-1 text-xs leading-4 font-semibold [&>svg]:h-4 [&>svg]:w-4 stroke-1',
        m: 'py-2 px-2 text-sm leading-5 font-semibold [&>svg]:h-4 [&>svg]:w-4 stroke-1',
        l: 'py-2.5 px-2.5 text-base leading-6 font-semibold [&>svg]:h-5 [&>svg]:w-5 stroke-1',
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

// Main RadioGroup component 
const RadioGroup = ({ options, value, onChange, size, style }) => {
    return (
        <InternalRadioGroup value={value} onChange={onChange} size={size} style={style}>
            {options.map((option, index) => {
                const isFirstChild = index === 0;
                const isLastChild = index === options.length - 1;

                if (style === 'icon') {
                    return <RadioIcon key={option.id} id={option.id} icon={option.icon} isFirstChild={isFirstChild} isLastChild={isLastChild} disabled={option.disabled} />;
                } else if (style === 'label') {
                    return <RadioButton key={option.id} id={option.id} label={option.label} isFirstChild={isFirstChild} isLastChild={isLastChild} disabled={option.disabled} />;
                } else {
                    return <RadioOption key={option.id} id={option.id} label={option.label} disabled={option.disabled} />;
                }
            })}
        </InternalRadioGroup>
    );
};

export default RadioGroup;