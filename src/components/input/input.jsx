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
    icon = null,
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
    

	let baseClasses = "rounded border border-solid border-border-subtle bg-field-secondary-background font-normal placeholder-text-tertiary text-text-primary";
	const sizeClasses = {
		sm: "px-2 py-2 rounded text-xs",
		md: "px-2.5 py-2.5 rounded-md text-base",
		lg: "px-3 py-3 rounded-lg text-base",
	};

	const sizeClassesWithIcon = {
		sm: icon ? "pl-8" : "",
		md: icon ? "pl-9" : "",
		lg: icon ? "pl-10" : "",
	};

	const hoverClasses = disabled ? "hover:border-border-disabled" : "hover:border-border-strong";
	const focusClasses = "focus:border-focus-border focus:ring-2 focus:ring-toggle-on focus:ring-offset-2";
	const errorClasses = error ? "focus:border-focus-error-border focus:ring-field-color-error bg-field-background-error" : "";
	const disabledClasses = disabled ? "border-border-disabled bg-field-background-disabled cursor-not-allowed text-text-disabled" : "";

	return (
		<div className={cn("relative flex focus-within:z-10", className)}>
			{icon && <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 [&>svg]:h-4 [&>svg]:w-4">{icon}</div>}
			<input id={inputId} type={type} className={cn(baseClasses, disabledClasses, sizeClasses[size], sizeClassesWithIcon[size], focusClasses, hoverClasses, errorClasses)} {...props} disabled={disabled} onChange={handleChange} onInvalid={onError} value={getValue()} />
		</div>
	);
};

export default forwardRef(Input);
