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
 * @param {...Function | undefined} fns
 * @return {Function} - Function that calls all provided functions.
 */
export const callAll = ( ...fns ) => {
	return ( ...args ) => fns.filter( Boolean ).forEach( ( fn ) => fn?.( ...args ) );
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
	const platform =
		window.navigator?.userAgentData?.platform || window.navigator.platform;
	const macosPlatforms = [
		'macOS',
		'Macintosh',
		'MacIntel',
		'MacPPC',
		'Mac68K',
	];
	const windowsPlatforms = [ 'Win32', 'Win64', 'Windows', 'WinCE' ];

	let operatingSystem = 'null';

	if ( macosPlatforms.includes( platform ) ) {
		operatingSystem = 'Mac OS';
	} else if ( windowsPlatforms.includes( platform ) ) {
		operatingSystem = 'Windows';
	}
	return operatingSystem;
};

// Utility function to convert bytes to a more readable format
export const formatFileSize = ( size ) => {
	if ( size < 1024 ) {
		return `${ size } bytes`;
	}
	if ( size < 1024 * 1024 ) {
		return `${ ( size / 1024 ).toFixed( 2 ) } KB`;
	}
	if ( size < 1024 * 1024 * 1024 ) {
		return `${ ( size / ( 1024 * 1024 ) ).toFixed( 2 ) } MB`;
	}
	return `${ ( size / ( 1024 * 1024 * 1024 ) ).toFixed( 2 ) } GB`; // Format size to GB
};

/**
 * Safe local storage set, get and remove functions.
 *
 */
export const safeLocalStorage = {
	set: ( key, value ) => {
		if ( typeof window === 'undefined' ) {
			return;
		}
		try {
			localStorage.setItem( key, JSON.stringify( value ) );
		} catch ( error ) {
			// eslint-disable-next-line no-console
			console.error( error );
		}
	},
	get: ( key ) => {
		if ( typeof window === 'undefined' ) {
			return null;
		}
		try {
			const value = localStorage.getItem( key );
			return value ? JSON.parse( value ) : null;
		} catch ( error ) {
			// eslint-disable-next-line no-console
			console.error( error );
			return null;
		}
	},
	remove: ( key ) => {
		if ( typeof window === 'undefined' ) {
			return;
		}
		try {
			localStorage.removeItem( key );
		} catch ( error ) {
			// eslint-disable-next-line no-console
			console.error( error );
		}
	},
};
