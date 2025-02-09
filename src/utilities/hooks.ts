import { useState, useEffect, useCallback, useRef } from 'react';

type AsyncFunction<T extends unknown[], R> = ( ...args: T ) => Promise<R>;

/**
 * Debounce a value
 * @param {any}    value - The value to debounce
 * @param {number} delay - The delay in milliseconds
 * @return {any} The debounced value
 */
export const useDebounce = ( value: unknown, delay: number = 500 ) => {
	const [ debouncedValue, setDebouncedValue ] = useState( value );

	useEffect( () => {
		const timeout = setTimeout( () => setDebouncedValue( value ), delay );

		return () => clearTimeout( timeout );
	}, [ value, delay ] );

	return debouncedValue;
};

/**
 * Debounce a callback function.
 * @param {Function} func  - The function to debounce
 * @param {number}   delay - The delay in milliseconds
 * @return {Function} The debounced function
 */
export const useDebouncedCallback = (
	func: AsyncFunction<unknown[], void>,
	delay: number = 500
) => {
	const timeoutRef = useRef<NodeJS.Timeout | null>( null );

	return useCallback(
		( ...args: unknown[] ) => {
			if ( timeoutRef.current ) {
				clearTimeout( timeoutRef.current );
			}

			timeoutRef.current = setTimeout(
				() => func( ...( args as [unknown] ) ),
				delay
			);
		},
		[ func, delay ]
	);
};
