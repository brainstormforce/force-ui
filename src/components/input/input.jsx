import {
    useState,
	useCallback,
	useMemo,
	forwardRef
} from "react";
import { nanoid } from 'nanoid';
import { cn } from '../../utility/utils';

const Input = ({
	id,
    type = "text",
    defaultValue = "",
    value,
    size = "sm", // sm, md, lg
    className = "",
    disabled = false,
    onChange = () => {},
    error = false,
    onError = () => {},
    prefix = null,
    suffix = null,
	...props
}, ref) => {
	const inputId = useMemo(() => id || `input-${type}-${nanoid()}`, [id]);
	const isControlled = useMemo(
		() => typeof value !== 'undefined',
		[value]
	);
	const [ inputValue, setInputValue ] = useState( defaultValue );

    const getValue = useCallback(
		() => (isControlled ? value : inputValue),
		[isControlled, value, inputValue]
	);

    const handleChange = ( event ) => {
        if (disabled) return;

		const newValue = event.target.value;
		if (!isControlled) setInputValue(newValue);

		if (typeof onChange !== 'function') return;
		onChange(newValue);
    };
    

	let baseClasses = "border border-solid border-border-subtle bg-field-secondary-background font-normal placeholder-text-tertiary text-text-primary";
	const sizeClasses = {
		sm: "px-2 py-2 rounded",
		md: "px-2.5 py-2.5 rounded-md",
		lg: "px-3 py-3 rounded-lg",
	};

    const textClasses = {
        sm: "text-xs",
        md: "text-base",
        lg: "text-base",
    };

	const sizeClassesWithPrefix = {
		sm: prefix ? "pl-8" : "",
		md: prefix ? "pl-9" : "",
		lg: prefix ? "pl-10" : "",
	};

    const sizeClassesWithSuffix = {
		sm: suffix ? "pr-8" : "",
		md: suffix ? "pr-9" : "",
		lg: suffix ? "pr-10" : "",
	};

	const hoverClasses = disabled ? "hover:border-border-disabled" : "hover:border-border-strong";
	const focusClasses = "focus:border-focus-border focus:ring-2 focus:ring-toggle-on focus:ring-offset-2";
	const errorClasses = error ? "focus:border-focus-error-border focus:ring-field-color-error bg-field-background-error" : "";
	const disabledClasses = disabled ? "border-border-disabled bg-field-background-disabled cursor-not-allowed text-text-disabled" : "";

    const iconClasses = "font-normal placeholder-text-tertiary text-text-primary pointer-events-none absolute inset-y-0 flex flex-1 items-center [&>svg]:h-4 [&>svg]:w-4";
    
    const getPrefix = () => {
        if ( ! prefix ) {
            return null;
        }
        return (
            <div className={cn( iconClasses, "left-0 pl-3", textClasses[size] )}>
                {prefix}
            </div>
        );
    }

    const getSuffix = () => {
        if ( ! suffix ) {
            return null;
        }
        return (
            <div className={cn( iconClasses, "right-0 pr-3", textClasses[size] )}>
                {suffix}
            </div>
        );
    }

	return (
		<div className={cn("relative flex focus-within:z-10", className)}>
			{ getPrefix() }
			<input
                ref={ref}
                id={inputId} 
                type={type}
                className={
                    cn(
                        baseClasses,
                        disabledClasses,
                        sizeClasses[size],
                        textClasses[size],
                        sizeClassesWithPrefix[size],
                        sizeClassesWithSuffix[size],
                        focusClasses,
                        hoverClasses,
                        errorClasses
                    )
                }
                disabled={disabled}
                onChange={handleChange}
                onInvalid={onError}
                value={getValue()}
                {...props}
            />
            { getSuffix() }
		</div>
	);
};

export default forwardRef(Input);
