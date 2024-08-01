import { twMerge } from "tailwind-merge";
import { LoaderCircle } from "lucide-react";

const Button = (props) => {
	const {
		variant = "primary", // primary, secondary, outline, ghost, link
		size = "md", // xs, sm, md, lg
		type = "button",
		tag = "button",
		className,
		children,
		disabled = false,
		destructive = false, // true, false
		icon = null, // icon component
		iconPosition = "left", // left, right
		...rest
	} = props;

	const commonClass = "border border-solid cursor-pointer transition-colors duration-300 ease-in-out text-xs font-semibold focus:ring-2 focus:ring-toggle-on focus:ring-offset-2 disabled:text-text-disabled";

	const variantClassNames = {
		primary: "text-text-on-color bg-button-primary hover:bg-button-primary-hover border-button-primary hover:border-button-primary-hover disabled:bg-button-disabled disabled:border-button-disabled",
		secondary: "text-text-on-color bg-button-secondary hover:bg-button-secondary-hover border-button-secondary hover:border-button-secondary-hover disabled:bg-button-disabled disabled:border-button-disabled",
		outline: "text-button-tertiary-color border border-border-subtle bg-button-tertiary hover:bg-button-tertiary-hover hover:border-border-subtle disabled:bg-button-tertiary disabled:border-border-disabled",
		ghost: "text-text-primary bg-transparent border border-transparent hover:bg-button-tertiary-hover",
		link: "text-link-primary bg-transparent hover:text-link-primary-hover hover:underline p-0 border-0 leading-none",
	}?.[variant];

	const destructiveClassNames =
		destructive && !disabled
			? {
					primary: "bg-button-danger hover:bg-button-danger-hover border-button-danger hover:border-button-danger-hover",
					outline: "text-button-danger border border-button-danger hover:border-button-danger bg-button-tertiary hover:bg-field-background-error",
					ghost: "text-button-danger hover:bg-field-background-error",
					link: "text-button-danger hover:text-button-danger-secondary",
				}?.[variant]
			: "";

	const sizeClassNames = {
		xs: "p-1 rounded-sm [&>svg]:h-4 [&>svg]:w-4",
		sm: "p-2 rounded-sm [&>svg]:h-4 [&>svg]:w-4",
		md: "p-2.5 rounded-md text-sm [&>svg]:h-5 [&>svg]:w-5",
		lg: "p-3 rounded-lg text-base [&>svg]:h-6 [&>svg]:w-6",
	}?.[size];

	let iconLeft,
		iconRight = null;
	let iconClass = "";
	if (icon) {
		iconClass = "flex items-center justify-center gap-1";
		if (iconPosition === "left") {
			iconLeft = icon;
		} else {
			iconRight = icon;
		}
	}

	const Tag = tag;
	return (
		<Tag type={type} className={twMerge(iconClass, commonClass, sizeClassNames, variantClassNames, destructiveClassNames, className)} disabled={disabled} {...rest}>
			{iconLeft}
			{children}
			{iconRight}
		</Tag>
	);
};

export default Button;
