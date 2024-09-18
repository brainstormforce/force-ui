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

export const getGridColsClass = ( columns ) => {
	switch ( columns ) {
		case 1:
			return 'grid-cols-1';
		case 2:
			return 'grid-cols-2';
		case 3:
			return 'grid-cols-3';
		case 4:
			return 'grid-cols-4';
		case 5:
			return 'grid-cols-5';
		case 6:
			return 'grid-cols-6';
		case 7:
			return 'grid-cols-7';
		case 8:
			return 'grid-cols-8';
		case 9:
			return 'grid-cols-9';
		case 10:
			return 'grid-cols-10';
		case 11:
			return 'grid-cols-11';
		case 12:
			return 'grid-cols-12';
		default:
			return 'grid-cols-1'; // Fallback to 1 column if an invalid number is provided
	}
};
