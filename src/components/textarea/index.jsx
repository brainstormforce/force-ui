import React, { useState } from 'react';

const TextArea = (props) => {
    const {
        value = "",
        size = "sm", // sm, md, lg
        className = "",
        disabled = false,
        inputProps,
        onChange = () => {},
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [hasError, setHasError] = useState(false); // This would normally be controlled by validation logic

    let baseClasses = 'rounded py-2 border bg-field-primary-background font-normal';
    const sizeClasses = {
        sm: 'px-3 rounded text-xs',
        md: 'px-3 rounded-md text-sm',
        lg: 'px-4 rounded-lg text-base',
    };

    const normalClasses = 'border-field-border';
    const hoverClasses = 'border-strong';
    const focusClasses = 'border-focus-border focus:ring-2 focus:ring-toggle-on focus:ring-offset-2';
    const errorClasses = 'border-focus-error-border bg-field-background-error';
    const disabledClasses = 'border-field-border-disabled bg-field-background-disabled cursor-not-allowed';

    baseClasses = disabled ? `${baseClasses} ${className} ${disabledClasses}` : `${baseClasses} ${className}`;

    const getStateClasses = () => {
        if (hasError) return errorClasses;
        if (isFocused) return focusClasses;
            return normalClasses;
    };

    return (
        <textarea
            className={`${baseClasses} ${sizeClasses[size]} ${getStateClasses()}`}
            {...inputProps}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onMouseEnter={(e) => !isFocused && (e.currentTarget.className = `${baseClasses} ${sizeClasses[size]} ${hoverClasses}`)}
            onMouseLeave={(e) => !isFocused && (e.currentTarget.className = `${baseClasses} ${sizeClasses[size]} ${normalClasses}`)}
            disabled={disabled}
            onChange={onChange}
            value={value}
        />
    );
};

export default TextArea;