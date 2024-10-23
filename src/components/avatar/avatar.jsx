import { cn } from '@/utilities/functions';

const Avatar = (props) => {
	const {
		variant = 'primary',
		size = 'md',
		border = 'subtle',
		url = '',
		children,
		className,
	} = props;

	const effectiveBorder = url && border === 'none' ? 'subtle' : border;

	const baseClasses =
		'rounded-full overflow-hidden flex items-center justify-center';

	const variantClasses = {
		white: 'text-text-primary bg-background-primary',
		gray: 'text-text-primary bg-background-secondary',
		primary: 'text-text-on-color bg-background-brand',
		primaryLight: 'text-text-primary bg-brand-background-50',
		dark: 'text-text-on-color bg-button-secondary',
	}?.[variant];

	const sizeClasses = {
		xxs: 'size-5 [&>svg]:size-3 text-xs',
		xs: 'size-6 [&>svg]:size-4 text-sm',
		sm: 'size-8 [&>svg]:size-5 text-base',
		md: 'size-10 [&>svg]:size-6 text-lg',
		lg: 'size-12 [&>svg]:size-12 text-lg',
	}?.[size];

	const borderClasses = {
		none: '',
		subtle: 'ring-1 ring-border-transparent-subtle',
		ring: 'ring ring-border-subtle',
	}?.[effectiveBorder];

	const contentClasses = url ? 'bg-cover bg-center' : '';

	const getChildren = () => {
		if (!children) {
			return null;
		}
		if (typeof children === 'string') {
			return children?.[0]?.toUpperCase();
		}
		return children;
	};

	return (
		<div
			className={cn(
				baseClasses,
				!url && variantClasses,
				sizeClasses,
				borderClasses,
				contentClasses,
				className
			)}
			style={url ? { backgroundImage: `url(${url})` } : {}}
		>
			{getChildren()}
		</div>
	);
};

export default Avatar;
