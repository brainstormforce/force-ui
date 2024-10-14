import React, { forwardRef } from 'react';
import { cn } from '@/utilities/functions';

const Button = forwardRef( ( props, ref ) => {
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

	const variantClassNames = {
		primary:
			'text-text-on-color bg-button-primary hover:bg-button-primary-hover border-button-primary hover:border-button-primary-hover disabled:bg-button-disabled disabled:border-button-disabled',
		secondary:
			'text-text-on-color bg-button-secondary hover:bg-button-secondary-hover border-button-secondary hover:border-button-secondary-hover disabled:bg-button-disabled disabled:border-button-disabled',
		outline:
			'text-button-tertiary-color border border-border-subtle bg-button-tertiary hover:bg-button-tertiary-hover hover:border-border-subtle disabled:bg-button-tertiary disabled:border-border-disabled',
		ghost: 'text-text-primary bg-transparent border border-transparent hover:bg-button-tertiary-hover',
		link: 'text-link-primary bg-transparent hover:text-link-primary-hover hover:underline p-0 border-0 leading-none',
	}?.[ variant ];

	const destructiveClassNames =
		destructive && ! disabled
			? {
				primary:
						'bg-button-danger hover:bg-button-danger-hover border-button-danger hover:border-button-danger-hover',
				outline:
						'text-button-danger border border-button-danger hover:border-button-danger bg-button-tertiary hover:bg-field-background-error',
				ghost: 'text-button-danger hover:bg-field-background-error',
				link: 'text-button-danger hover:text-button-danger-secondary',
			}?.[ variant ]
			: '';

	const sizeClassNames = {
		xs: 'p-1 rounded [&>svg]:size-4 h-6 gap-1',
		sm: 'p-2 rounded [&>svg]:size-4 h-8 gap-1.5',
		md: 'p-2.5 rounded-md text-sm [&>svg]:size-5 h-10 gap-2',
		lg: 'p-3 rounded-lg text-base [&>svg]:size-6 h-12 gap-2',
	}?.[ size ];

	let iconLeft,
		iconRight = null;
	let iconClass = '';
	if ( icon ) {
		iconClass = 'flex items-center justify-center gap-1';
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
				className
			) }
			disabled={ disabled }
			{ ...rest }
		>
			{ iconLeft }
			{ children }
			{ iconRight }
		</Tag>
	);
} );

export default Button;
