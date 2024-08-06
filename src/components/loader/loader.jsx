import { cn } from '../../utility/utils';
import { LoaderCircle } from 'lucide-react';

const Loader = ( {
	variant = 'primary', // primary, secondary
	size = 'md', // sm, md, lg, xl,
	icon = null,
	className = '',
} ) => {
	const variantClassNames = {
		primary: 'text-brand-primary-600 bg-background-primary',
		secondary: 'text-background-primary bg-brand-primary-600',
	}?.[ variant ];

	const sizeClassNames = {
		sm: '[&>svg]:h-4 [&>svg]:w-4',
		md: '[&>svg]:h-5 [&>svg]:w-5',
		lg: '[&>svg]:h-6 [&>svg]:w-6',
		xl: '[&>svg]:h-8 [&>svg]:w-8',
	}?.[ size ];

	return <span className={ cn( 'flex', sizeClassNames, variantClassNames, className ) }>{ icon ? icon : <LoaderCircle className="animate-spin" /> }</span>;
};

export default Loader;
