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

    let baseClasses = 'rounded p-2 border';
    const sizeClasses = {
        sm: 'w-1/3',
        md: 'w-2/3',
        lg: 'w-full',
    };

    const normalClasses = 'border-field-border bg-field-primary-background';
    const hoverClasses = 'border-field-primary-hover';
    const focusClasses = 'border-field-primary outline-none';
    const errorClasses = 'border-field-border-error bg-field-background-error';
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