import { useEffect, useState } from 'react';
import { OptionsArray } from './mention-plugin';

const mentionsCache = new Map();

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

	useEffect( () => {
		if ( mentionString === null ) {
			setResults( [] );
			return;
		}

		const cachedResults = mentionsCache.get( mentionString );
		if ( cachedResults === null ) {
			return;
		} else if ( cachedResults !== undefined ) {
			setResults( cachedResults );
			return;
		}

		mentionsCache.set( mentionString, null );
		lookupService.search(
			options,
			mentionString,
			( newResults ) => {
				mentionsCache.set( mentionString, newResults );
				setResults( newResults as OptionsArray );
			},
			by
		);
	}, [ mentionString ] );

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
		setTimeout( () => {
			if ( ! Array.isArray( options ) ) {
				return [];
			}
			const results = options.filter(
				( mention: string | Record<string, unknown> ) => {
					if ( typeof mention === 'string' ) {
						return mention
							.toLowerCase()
							.includes( string.toLowerCase() );
					}

					const strValue = mention?.[ by ]?.toString();
					if ( ! strValue ) {
						return false;
					}
					return strValue
						.toLowerCase()
						.includes( string.toLowerCase() );
				}
			);
			callback( results as T );
		}, 500 );
	},
};

export default useMentionLookupService;
