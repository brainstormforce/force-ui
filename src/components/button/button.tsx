import React, { forwardRef } from 'react';
import { cn } from '@/utilities/functions';

export interface ButtonProps {
	/**
	 * Defines the style variant of the button.
	 */
	variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
	/**
	 * Defines the size of the button.
	 */
	size?: 'xs' | 'sm' | 'md' | 'lg';
	/**
	 * Defines the type of the button.
	 */
	type?: 'button' | 'submit' | 'reset';
	/**
	 * Defines the tag of the button.
	 */
	tag?: string | React.ElementType;
	/**
	 * The class name of the button
	 */
	className?: string;
	/**
	 * The children of the button
	 */
	children?: React.ReactNode;
	/**
	 * Defines if the button is disabled.
	 */
	disabled?: boolean;
	/**
	 * Defines if the button is destructive.
	 */
	destructive?: boolean;
	/**
	 * Custom Icon for the button.
	 */
	icon?: React.ReactNode;
	/**
	 * Defines the position of the icon.
	 */
	iconPosition?: 'left' | 'right';
	/**
	 * Defines if the button is loading.
	 */
	loading?: boolean;

	/** On click event. */
	onClick?: (event: React.MouseEvent<HTMLElement>) => void;

	/**
	 * The rest of the props.
	 */
	[key: string]: any;
}
export type Ref = React.ForwardedRef<HTMLElement>;

const Button: React.FunctionComponent<ButtonProps> = forwardRef(
	(props: ButtonProps, ref: Ref) => {
		const {
			variant = 'primary', // primary, secondary, outline, ghost, link
			size = 'md', // xs, sm, md, lg
			type = 'button',
			tag = 'button',
			className,
			children,
			disabled = false,
			destructive = false, // true, false
			icon = null, // icon component
			iconPosition = 'left', // left, right,
			loading = false,
			...rest
		} = props;

		const commonClass =
			'border border-solid cursor-pointer transition-colors duration-300 ease-in-out text-xs font-semibold focus:ring-2 focus:ring-toggle-on focus:ring-offset-2 disabled:text-text-disabled';

		const loadingClass = loading
			? 'opacity-50 disabled:cursor-not-allowed'
			: '';

		const variantClassNames: string | undefined = ({
			primary:
				'text-text-on-color bg-button-primary hover:bg-button-primary-hover border-button-primary hover:border-button-primary-hover disabled:bg-button-disabled disabled:border-button-disabled',
			secondary:
				'text-text-on-color bg-button-secondary hover:bg-button-secondary-hover border-button-secondary hover:border-button-secondary-hover disabled:bg-button-disabled disabled:border-button-disabled',
			outline:
				'text-button-tertiary-color border border-border-subtle bg-button-tertiary hover:bg-button-tertiary-hover hover:border-border-subtle disabled:bg-button-tertiary disabled:border-border-disabled',
			ghost: 'text-text-primary bg-transparent border border-transparent hover:bg-button-tertiary-hover',
			link: 'text-link-primary bg-transparent hover:text-link-primary-hover hover:underline p-0 border-0 leading-none',
		})[variant];

		const destructiveClassNames: string | undefined =
			destructive && !disabled
				? {
						primary:
							'bg-button-danger hover:bg-button-danger-hover border-button-danger hover:border-button-danger-hover',
						secondary:
							'bg-button-danger hover:bg-button-danger-hover border-button-danger hover:border-button-danger-hover',
						outline:
							'text-button-danger border border-button-danger hover:border-button-danger bg-button-tertiary hover:bg-field-background-error',
						ghost: 'text-button-danger hover:bg-field-background-error',
						link: 'text-button-danger hover:text-button-danger-secondary',
					}[variant]
				: '';

		const sizeClassNames: string | undefined = {
			xs: 'p-1 rounded-sm [&>svg]:h-4 [&>svg]:w-4',
			sm: 'p-2 rounded-sm [&>svg]:h-4 [&>svg]:w-4',
			md: 'p-2.5 rounded-md text-sm [&>svg]:h-5 [&>svg]:w-5',
			lg: 'p-3 rounded-lg text-base [&>svg]:h-6 [&>svg]:w-6',
		}?.[size];

		let iconLeft,
			iconRight = null;
		let iconClass = '';
		if (icon) {
			iconClass = 'flex items-center justify-center gap-1';
			if (iconPosition === 'left') {
				iconLeft = icon;
			} else {
				iconRight = icon;
			}
		}

		const Tag = tag;
		return (
			<Tag
				ref={ ref }
				type={type}
				className={cn(
					iconClass,
					commonClass,
					sizeClassNames,
					variantClassNames,
					destructiveClassNames,
					loadingClass,
					className
				)}
				disabled={disabled}
				{...rest}
			>
				{iconLeft}
				{children}
				{iconRight}
			</Tag>
		);
	}
);

export default Button;
