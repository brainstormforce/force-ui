import { twMerge } from "tailwind-merge";

const TextArea = (props) => {
    const {
        value = "",
        size = "sm", // sm, md, lg
        className = "",
        disabled = false,
        inputProps,
        onChange = () => {},
        error = false,
        onError = () => {},
    } = props;

    let baseClasses = 'rounded py-2 border bg-field-primary-background font-normal border-field-border';
    const sizeClasses = {
        sm: 'px-3 rounded text-xs',
        md: 'px-3 rounded-md text-sm',
        lg: 'px-4 rounded-lg text-base',
    };

    const hoverClasses = 'hover:border-strong';
    const focusClasses = 'focus:border-focus-border focus:ring-2 focus:ring-toggle-on focus:ring-offset-2';
    const errorClasses = error ? 'focus:border-focus-error-border focus:ring-field-color-error bg-field-background-error' : "";
    const disabledClasses = disabled ? 'border-field-border-disabled bg-field-background-disabled cursor-not-allowed' : '';

    return (
        <textarea
            className={twMerge( baseClasses, disabledClasses, sizeClasses[size], focusClasses, hoverClasses, errorClasses, className )}
            {...inputProps}
            disabled={disabled}
            onChange={onChange}
            onInvalid={onError}
            value={value}
        />
    );
};

export default TextArea;