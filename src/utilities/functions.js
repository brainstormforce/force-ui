import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

export function prefix() {
	return 'force-ui-';
}

/**
 * For Conditional classNames and merging TailwindCSS classes.
 * @param {...any} classNames
 * @return  {string} - Merged TailwindCSS classes.
 */
export const cn = ( ...classNames ) => twMerge( clsx( ...classNames ) );

/**
 * Call provided functions with the given arguments.
 * @param {...Function} fns
 * @return {Function} - Function that calls all provided functions.
 */
export const callAll = ( ...fns ) => {
	return ( ...args ) => fns.forEach( ( fn ) => fn?.( ...args ) );
};

export const getGapClass = ( gap ) => {
	const gapClasses = {
		0: 'gap-0',
		xxs: 'gap-1',
		xs: 'gap-2',
		sm: 'gap-3',
		md: 'gap-4',
		lg: 'gap-5',
		xl: 'gap-6',
		'2xl': 'gap-8',
	};

	return gapClasses[ gap ] || gapClasses.md;
};
