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
		sm: '[&>svg]:size-4',
		md: '[&>svg]:size-5',
		lg: '[&>svg]:size-6',
		xl: '[&>svg]:size-8',
	}?.[ size ];

	return (
		<span
			className={ cn( 'flex', sizeClassNames, variantClassNames, className ) }
		>
			{ icon ? icon : <LoaderCircle className="animate-spin shrink-0" /> }
		</span>
	);
};

export default Loader;
