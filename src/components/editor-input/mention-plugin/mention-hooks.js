import { useEffect, useState } from 'react';

const mentionsCache = new Map();

function useMentionLookupService( options, mentionString, by = 'name' ) {
	const [ results, setResults ] = useState( [] );

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
		lookupService.search( options, mentionString, ( newResults ) => {
			mentionsCache.set( mentionString, newResults );
			setResults( newResults );
		}, by );
	}, [ mentionString ] );

	return results;
}

const lookupService = {
	search( options, string, callback, by ) {
		setTimeout( () => {
			const results = options.filter( ( mention ) => {
				if ( typeof mention === 'string' ) {
					return mention.toLowerCase().includes( string.toLowerCase() );
				}

				const strValue = mention?.[ by ]?.toString();
				if ( ! strValue ) {
					return false;
				}
				return strValue.toLowerCase().includes( string.toLowerCase() );
			} );
			callback( results );
		}, 500 );
	},
};

export default useMentionLookupService;
