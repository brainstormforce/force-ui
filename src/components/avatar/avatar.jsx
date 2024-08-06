import { cn } from '../../utility/utils';

const Avatar = ( props ) => {
	const { variant = 'primary', size = 'md', border = 'subtle', url = '', children, className } = props;

	const effectiveBorder = url && border === 'none' ? 'subtle' : border;

	const baseClasses = 'rounded-full overflow-hidden flex items-center justify-center';

	const variantClasses = {
		white: 'text-text-primary bg-background-primary',
		gray: 'text-text-primary bg-background-secondary',
		primary: 'text-text-on-color bg-background-brand',
		primaryLight: 'text-text-primary bg-brand-background-50',
		dark: 'text-text-on-color bg-button-secondary',
	}?.[ variant ];

	const sizeClasses = {
		xs: 'w-5 h-5 [&>svg]:h-3 [&>svg]:w-3 text-xs',
		sm: 'w-6 h-6 [&>svg]:h-4 [&>svg]:w-4 text-sm',
		md: 'w-8 h-8 [&>svg]:h-5 [&>svg]:w-5 text-base',
		lg: 'w-10 h-10 [&>svg]:h-6 [&>svg]:w-6 text-lg',
	}?.[ size ];

	const borderClasses = {
		none: '',
		subtle: 'border border-solid border-border-transparent-subtle',
		ring: 'border-4 border-solid border-border-white',
	}?.[ effectiveBorder ];

	const contentClasses = url ? 'bg-cover bg-center bg-no-repeat' : '';

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
		<div className={ cn( baseClasses, ! url && variantClasses, sizeClasses, borderClasses, contentClasses, className ) } style={ url ? { backgroundImage: `url(${ url })` } : {} }>
			{ getChildren() }
		</div>
	);
};

export default Avatar;
