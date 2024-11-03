import { cn } from '@/utilities/functions';

export interface AvatarProps {
	/** Defines the style variant of the avatar. */
	variant?: 'white' | 'gray' | 'primary' | 'primaryLight' | 'dark';
	/** Defines the size of the avatar. */
	size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
	/** Defines the border of the avatar. */
	border?: 'none' | 'subtle' | 'ring';
	/** The URL of the Avatar image */
	url?: string;
	/** Defines the children of the avatar. */
	children?: string | React.ReactNode;
	/** Defines the extra classes */
	className?: string;
}

const Avatar = ( {
	variant = 'primary',
	size = 'md',
	border = 'subtle',
	url = '',
	children,
	className,
}: AvatarProps ) => {
	const effectiveBorder = url && border === 'none' ? 'subtle' : border;

	const baseClasses =
		'rounded-full overflow-hidden flex items-center justify-center';

	const variantClasses = {
		white: 'text-text-primary bg-background-primary',
		gray: 'text-text-primary bg-background-secondary',
		primary: 'text-text-on-color bg-background-brand',
		primaryLight: 'text-text-primary bg-brand-background-50',
		dark: 'text-text-on-color bg-button-secondary',
	}?.[ variant ];

	const sizeClasses = {
		xxs: 'size-5 [&>svg]:size-3 text-xs',
		xs: 'size-6 [&>svg]:size-4 text-sm',
		sm: 'size-8 [&>svg]:size-5 text-base',
		md: 'size-10 [&>svg]:size-6 text-lg',
		lg: 'size-12 [&>svg]:size-12 text-lg',
	}?.[ size ];

	const borderClasses = {
		none: '',
		subtle: 'ring-1 ring-border-transparent-subtle',
		ring: 'ring ring-border-subtle',
	}?.[ effectiveBorder ];

	const contentClasses = url ? 'bg-cover bg-center' : '';

	const getChildren = () => {
		if ( ! children ) {
			return null;
		}
		if ( typeof children === 'string' ) {
			return children?.[ 0 ]?.toUpperCase();
		}
		return children;
	};

	return (
		<div
			className={ cn(
				baseClasses,
				! url && variantClasses,
				sizeClasses,
				borderClasses,
				contentClasses,
				className
			) }
			style={ url ? { backgroundImage: `url(${ url })` } : {} }
		>
			{ getChildren() }
		</div>
	);
};

export default Avatar;
