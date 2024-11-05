import { cn } from '@/utilities/functions';
import React, { type ElementType, forwardRef, type ReactNode } from 'react';

export interface LabelProps {
	/** The content of the label. */
	children: ReactNode;
	/** Defines the HTML tag to use for the label. */
	tag?: string | ElementType;
	/** Defines the size of the label. */
	size?: 'xs' | 'sm' | 'md';
	/** Defines the extra classes. */
	className?: string;
	/** Defines the style variant of the label. */
	variant?: 'neutral' | 'help' | 'error' | 'disabled';
	/** Defines if the label is required. */
	required?: boolean;
}

const Label = forwardRef(
	(
		{
			children = null,
			tag: Tag = 'label',
			size = 'sm', // xs, sm, md
			className = '',
			variant = 'neutral', // neutral, help, error, disabled
			required = false,
			...props
		}: LabelProps,
		ref: React.Ref<HTMLElement>
	) => {
		// Base classes. - Mandatory classes.
		const baseClasses =
			'font-medium text-field-label flex items-center gap-0.5';

		// Size classes - Based on the size prop.
		const sizeClasses = {
			xs: 'text-xs [&>*]:text-xs [&>svg]:h-3 [&>svg]:w-3',
			sm: 'text-sm [&>*]:text-sm [&>svg]:h-4 [&>svg]:w-4',
			md: 'text-base [&>*]:text-base [&>svg]:h-5 [&>svg]:w-5',
		};

		// Variant classes - Based on the variant prop.
		const variantClasses = {
			neutral: 'text-field-label [&>*]:text-field-label',
			help: 'text-field-helper [&>*]:text-field-helper',
			error: 'text-support-error [&>*]:text-support-error',
			disabled:
				'text-field-color-disabled disabled cursor-not-allowed [&>*]:text-field-color-disabled',
		};

		if ( ! children ) {
			return null;
		}

		let requiredClasses = '';

		if ( required ) {
			requiredClasses =
				"after:content-['*'] after:text-field-required after:ml-0.5";
		}

		return (
			<Tag
				ref={ ref }
				className={ cn(
					baseClasses,
					sizeClasses[ size ],
					variantClasses[ variant ],
					requiredClasses,
					className
				) }
				{ ...props }
			>
				{ children }
			</Tag>
		);
	}
);

export default Label;
