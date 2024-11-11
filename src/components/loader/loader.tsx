import { cn } from '@/utilities/functions';
import { LoaderCircle } from 'lucide-react';
import { type ReactNode } from 'react';

export interface LoaderProps {
	/** Defines the variant of the loader. Options are 'primary' or 'secondary'. */
	variant?: 'primary' | 'secondary';

	/** Defines the size of the loader. Options are 'sm', 'md', 'lg', or 'xl'. */
	size?: 'sm' | 'md' | 'lg' | 'xl';

	/** Optional icon to display instead of the default loader icon. */
	icon?: ReactNode;

	/** Additional custom classes for styling. */
	className?: string;
}

export const Loader = ( {
	variant = 'primary', // primary, secondary
	size = 'md', // sm, md, lg, xl,
	icon = null,
	className = '',
}: LoaderProps ) => {
	const variantClassNames = {
		primary: 'text-brand-primary-600',
		secondary: 'text-background-primary',
	}?.[ variant ];

	const sizeClassNames = {
		sm: '[&>svg]:h-4 [&>svg]:w-4',
		md: '[&>svg]:h-5 [&>svg]:w-5',
		lg: '[&>svg]:h-6 [&>svg]:w-6',
		xl: '[&>svg]:h-8 [&>svg]:w-8',
	}?.[ size ];

	return (
		<span
			className={ cn( 'flex', sizeClassNames, variantClassNames, className ) }
		>
			{ icon ? icon : <LoaderCircle className="animate-spin" /> }
		</span>
	);
};

export default Loader;
