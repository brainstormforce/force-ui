import React, {
	forwardRef,
	Fragment,
	type ElementType,
	type ReactNode,
} from 'react';
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
	tag?: ElementType;
	/**
	 * The class name of the button
	 */
	className?: string;
	/**
	 * The children of the button
	 */
	children?: ReactNode;
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
	icon?: ReactNode;
	/**
	 * Defines the position of the icon.
	 */
	iconPosition?: 'left' | 'right';
	/**
	 * Defines if the button is loading.
	 */
	loading?: boolean;

	/** On click event. */
	onClick?: ( event: React.MouseEvent<HTMLButtonElement> ) => void;
}
export type Ref = React.ForwardedRef<HTMLButtonElement>;

const Button: React.FunctionComponent<ButtonProps> = forwardRef(
	( props: ButtonProps, ref: Ref ) => {
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
			'outline outline-1 border-none cursor-pointer transition-colors duration-300 ease-in-out text-xs font-semibold focus:ring-2 focus:ring-toggle-on focus:ring-offset-2 disabled:text-text-disabled';

		const loadingClass = loading
			? 'opacity-50 disabled:cursor-not-allowed'
			: '';

		const variantClassNames = {
			primary:
				'text-text-on-color bg-button-primary hover:bg-button-primary-hover outline-button-primary hover:outline-button-primary-hover shadow-xs disabled:shadow-none focus:shadow-none disabled:bg-button-disabled disabled:outline-button-disabled',
			secondary:
				'text-text-on-color bg-button-secondary hover:bg-button-secondary-hover outline-button-secondary hover:outline-button-secondary-hover shadow-xs focus:shadow-none disabled:shadow-none disabled:bg-button-disabled disabled:outline-button-disabled',
			outline:
				'text-button-tertiary-color outline-border-subtle bg-button-tertiary shadow-sm focus:shadow-none hover:bg-button-tertiary-hover hover:outline-border-subtle disabled:bg-button-tertiary disabled:outline-border-disabled',
			ghost: 'text-text-primary bg-transparent outline-transparent hover:bg-button-tertiary-hover',
			link: 'outline-none text-link-primary bg-transparent hover:text-link-primary-hover hover:underline p-0 border-0 leading-none',
		}?.[ variant ];

		const destructiveClassNames =
			destructive && ! disabled
				? {
					primary:
							'bg-button-danger hover:bg-button-danger-hover outline-button-danger hover:outline-button-danger-hover',
					secondary:
							'bg-button-danger hover:bg-button-danger-hover outline-button-danger hover:outline-button-danger-hover',
					outline:
							'text-button-danger outline outline-1 outline-button-danger hover:outline-button-danger bg-button-tertiary hover:bg-field-background-error',
					ghost: 'text-button-danger hover:bg-field-background-error',
					link: 'text-button-danger hover:text-button-danger-secondary',
				}?.[ variant ]
				: '';

		const sizeClassNames = {
			xs: 'p-1 rounded [&>svg]:size-4',
			sm: 'p-2 rounded [&>svg]:size-4 gap-0.5',
			md: 'p-2.5 rounded-md text-sm [&>svg]:size-5 gap-1',
			lg: 'p-3 rounded-lg text-base [&>svg]:size-6 gap-1',
		}?.[ size ];

		let iconLeft,
			iconRight = null;
		let iconClass = '';
		if ( icon ) {
			iconClass = 'flex items-center justify-center';
			if ( iconPosition === 'left' ) {
				iconLeft = icon;
			} else {
				iconRight = icon;
			}
		}

		const Tag = tag;
		return (
			<Tag
				ref={ ref }
				type={ type }
				className={ cn(
					iconClass,
					commonClass,
					sizeClassNames,
					variantClassNames,
					destructiveClassNames,
					loadingClass,
					{
						'cursor-default': disabled,
					},
					className
				) }
				disabled={ disabled }
				{ ...rest }
			>
				<Fragment key="left-icon">{ iconLeft }</Fragment>
				{ children ? <span className="px-1">{ children }</span> : null }
				<Fragment key="right-icon">{ iconRight }</Fragment>
			</Tag>
		);
	}
);

Button.displayName = 'Button';

export default Button;
