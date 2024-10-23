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

export const columnClasses = {
	1: 'grid-cols-1',
	2: 'grid-cols-2',
	3: 'grid-cols-3',
	4: 'grid-cols-4',
	5: 'grid-cols-5',
	6: 'grid-cols-6',
	7: 'grid-cols-7',
	8: 'grid-cols-8',
	9: 'grid-cols-9',
	10: 'grid-cols-10',
	11: 'grid-cols-11',
	12: 'grid-cols-12',
};

export const getOperatingSystem = () => {
	const platform = window.navigator?.userAgentData?.platform || window.navigator.platform;
	const macosPlatforms = ['macOS', 'Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
	const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
  
	let operatingSystem = 'null';
  
	if (macosPlatforms.includes(platform)) {
		operatingSystem = 'Mac OS';
	} else if (windowsPlatforms.includes(platform)) {
		operatingSystem = 'Windows';
	}
	return operatingSystem;
}

