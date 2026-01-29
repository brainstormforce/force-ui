import { useEffect, useState, useRef } from 'react';
import { OptionsArray } from './mention-plugin';

// Wrapper class for string keys
class StringKey {
	value: string;

	constructor( value: string ) {
		this.value = value;
	}
}

type TBy<T> =
	T extends Array<infer U>
		? U extends Record<string, unknown>
			? keyof U & ( string & {} )
			: string
		: string;

function useMentionLookupService<T = OptionsArray>(
	options: T,
	mentionString: string | null,
	by: TBy<T> = 'name' as TBy<T>
): OptionsArray {
	const [ results, setResults ] = useState<OptionsArray>( [] );

	// Create instance-specific cache using WeakMap
	const mentionsCacheRef = useRef<WeakMap<StringKey, OptionsArray | null>>(
		new WeakMap()
	);

	// Store reference to key objects
	const keysRef = useRef<Map<string, StringKey>>( new Map() );

	// Track the previous options reference
	const prevOptionsRef = useRef<T>( options );

	// Clear cache when options change
	useEffect( () => {
		// Check if options actually changed (not just re-rendered with same data)
		if ( prevOptionsRef.current !== options ) {
			// Options changed, clear cache
			mentionsCacheRef.current = new WeakMap();
			keysRef.current.clear();
			prevOptionsRef.current = options;

			// Re-run search if we have an active search
			if ( mentionString !== null ) {
				// Trigger search with new options
				lookupService.search(
					options,
					mentionString,
					( newResults ) => {
						setResults( newResults as OptionsArray );
					},
					by
				);
			}
		}
	}, [ options, by, mentionString ] );

	useEffect( () => {
		if ( mentionString === null ) {
			setResults( [] );
			return;
		}

		const mentionsCache = mentionsCacheRef.current;
		const keysMap = keysRef.current;

		// Get or create key object for this string
		let keyObj = keysMap.get( mentionString );
		if ( ! keyObj ) {
			keyObj = new StringKey( mentionString );
			keysMap.set( mentionString, keyObj );
		}

		const cachedResults = mentionsCache.get( keyObj );
		if ( cachedResults === null ) {
			return;
		} else if ( cachedResults !== undefined ) {
			setResults( cachedResults );
			return;
		}

		mentionsCache.set( keyObj, null );
		lookupService.search(
			options,
			mentionString,
			( newResults ) => {
				// Ensure the key object still exists
				const currentKeyObj = keysMap.get( mentionString );
				if ( currentKeyObj ) {
					mentionsCache.set(
						currentKeyObj,
						newResults as OptionsArray
					);
					setResults( newResults as OptionsArray );
				}
			},
			by
		);

		// Periodically clean up old keys
		if ( keysMap.size > 100 ) {
			const keysToKeep = Array.from( keysMap.entries() ).slice( -50 );
			keysRef.current = new Map( keysToKeep );
		}
	}, [ mentionString, options, by ] );

	return results;
}

const lookupService = {
	search<T = OptionsArray>(
		options: T,
		string: string,
		callback: ( result: T ) => void,
		by: T extends Array<infer U>
			? U extends Record<string, unknown>
				? keyof U
				: string
			: string
	) {
		// Remove setTimeout for immediate response - debouncing should happen at input level if needed
		if ( ! Array.isArray( options ) ) {
			callback( [] as T );
			return;
		}

		const lowerString = string.toLowerCase();
		const results = options.filter(
			( mention: string | Record<string, unknown> ) => {
				if ( typeof mention === 'string' ) {
					return mention.toLowerCase().includes( lowerString );
				}

				const strValue = mention?.[ by ]?.toString();
				if ( ! strValue ) {
					return false;
				}
				return strValue.toLowerCase().includes( lowerString );
			}
		);
		callback( results as T );
	},
};

export default useMentionLookupService;
