import { twMerge } from "tailwind-merge";
import { X, Info } from "lucide-react";

const Input = (props) => {
	const {
		type = "text",
		value = "",
		size = "sm", // sm, md, lg
		className = "",
		disabled = false,
		inputProps,
		onChange = () => {},
		error = false,
		onError = () => {},
		icon = null,
	} = props;

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
		<div className={twMerge("relative flex focus-within:z-10", className)}>
			{icon && <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 [&>svg]:h-4 [&>svg]:w-4">{icon}</div>}
			<input type={type} className={twMerge(baseClasses, disabledClasses, sizeClasses[size], sizeClassesWithIcon[size], focusClasses, hoverClasses, errorClasses)} {...inputProps} disabled={disabled} onChange={onChange} onInvalid={onError} value={value} />
		</div>
	);
};

export default Input;
