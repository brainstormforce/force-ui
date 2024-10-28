import { forwardRef } from 'react';
import { cn } from '@/utilities/functions';
import { X } from 'lucide-react';

export interface BadgeProps {
	/**
	 * Defines the Label of the badge.
	 */
	label?: string;
	/**
	 * Defines the size of the badge.
	 */
	size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
	/**
	 * Defines the extra classes
	 */
	className?: string;
	/**
	 * Defines the type of the badge.
	 */
	type?: 'pill' | 'rounded';
	/**
	 * Defines the style variant of the badge.
	 */
	variant?: 'neutral' | 'red' | 'yellow' | 'green' | 'blue' | 'inverse';
	/**
	 * Custom Icon for the badge.
	 */
	icon?: React.ReactNode;
	/**
	 * Defines if the badge is disabled.
	 */
	disabled?: boolean;
	/**
	 * Callback function for close event
	 */
	onClose?: () => void;
	/**
	 * Defines if the badge is closable.
	 */
	closable?: boolean;
	/**
	 * Callback function for mouse down event.
	 */
	onMouseDown?: () => void;
}

export type Ref = HTMLSpanElement;

const Badge = forwardRef<Ref, BadgeProps>(
	(
		{
			label = '',
			size = 'sm', // xxs, xs, sm, md, lg
			className = '',
			type = 'pill', // pill, rounded
			variant = 'neutral', // neutral, red, yellow, green, blue, inverse
			icon = null,
			disabled = false,
			onClose = () => {},
			closable = false,
			onMouseDown = () => {},
		},
		ref
	) => {
		// Base classes - Mandatory classes
		const baseClasses =
			'font-medium border-badge-border-gray flex items-center justify-center border border-solid box-border';

		// Size classes - Based on the size prop
		const sizeClasses = {
			xxs: 'py-0.5 px-0.5 text-xs h-4',
			xs: 'py-0.5 px-1 text-xs h-5',
			sm: 'py-1 px-1.5 text-xs h-6',
			md: 'py-1 px-1.5 text-sm h-7',
			lg: 'py-1 px-1.5 text-base h-8',
		};

		// Type classes - Based on the type prop
		const typeClasses = {
			pill: 'rounded-full',
			rounded: 'rounded',
		};

		// Variant classes - Based on the variant prop
		const variantClasses = {
			neutral:
				'bg-badge-background-gray hover:bg-badge-hover-gray text-badge-color-gray border-badge-border-gray',
			red: 'bg-badge-background-red hover:bg-badge-hover-red text-badge-color-red border-badge-border-red',
			yellow: 'bg-badge-background-yellow hover:bg-badge-hover-yellow text-badge-color-yellow border-badge-border-yellow',
			green: 'bg-badge-background-green hover:bg-badge-hover-green text-badge-color-green border-badge-border-green',
			blue: 'bg-badge-background-sky hover:bg-badge-hover-sky text-badge-color-sky border-badge-border-sky',
			inverse:
				'bg-background-inverse hover:bg-badge-hover-inverse text-text-inverse border-background-inverse',
			disabled:
				'bg-badge-background-disabled hover:bg-badge-hover-disabled text-badge-color-disabled border-badge-border-disabled disabled cursor-not-allowed',
		};

		let filteredClasses = '';
		let buttonClasses =
			'group relative justify-center flex items-center cursor-pointer';

		const iconSizeClasses = {
			xxs: '[&>svg]:size-3',
			xs: '[&>svg]:size-3',
			sm: '[&>svg]:size-3',
			md: '[&>svg]:size-4',
			lg: '[&>svg]:size-5',
		};

		if (disabled) {
			filteredClasses = variantClasses.disabled;
			buttonClasses += ' cursor-not-allowed disabled';
		} else {
			filteredClasses = variantClasses[variant];
		}

		if (!label) {
			return null;
		}

		return (
			<span
				className={cn(
					baseClasses,
					sizeClasses[size],
					typeClasses[type],
					'gap-0.5',
					filteredClasses,
					className
				)}
				ref={ref}
			>
				{icon ? (
					<span
						className={cn(
							'justify-center flex items-center',
							iconSizeClasses[size]
						)}
					>
						{icon}
					</span>
				) : null}
				<span className="px-1">{label}</span>
				{closable && (
					<span
						className={cn(buttonClasses, iconSizeClasses[size])}
						onMouseDown={onMouseDown}
						role="button"
						tabIndex={0}
						{...(!disabled && {
							onClick: onClose,
						})}
					>
						<span className="sr-only">{`Remove ${label}`}</span>
						<X />
						<span className="absolute -inset-1" />
					</span>
				)}
			</span>
		);
	}
);

Badge.displayName = 'Badge';

export default Badge;
