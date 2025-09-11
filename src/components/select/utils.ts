import {
	type ReactNode,
	type ReactElement,
} from 'react';

/**
 * Simple text extraction utility for Force UI Select component
 *
 * Extracts searchable text from React nodes. For complex JSX components,
 * use the `searchValue` prop on Select.Option for reliable search.
 *
 * @param {ReactNode} node - React node to extract text from
 * @return {string} Extracted text content for search functionality
 */
export const getTextContent = ( node: ReactNode ): string => {
	// Handle primitives
	if ( node === null || typeof node === 'boolean' ) {
		return '';
	}

	if ( typeof node === 'string' || typeof node === 'number' ) {
		return node.toString();
	}

	// Handle arrays
	if ( Array.isArray( node ) ) {
		return node.map( getTextContent ).join( ' ' );
	}

	// Handle React elements - extract from children
	if ( typeof node === 'object' && node !== null && 'props' in node ) {
		const element = node as ReactElement;
		if ( element.props?.children ) {
			return getTextContent( element.props.children );
		}
	}

	return '';
};
