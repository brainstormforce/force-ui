import { type ReactNode, isValidElement } from 'react';

/**
 * Get text content of a node
 * @param {ReactNode} node - React node
 * @return {string} text content of the node
 */
export const getTextContent = ( node: ReactNode ): string => {
	// Handle null, undefined, boolean
	if ( node === null || typeof node === 'boolean' ) {
		return '';
	}

	// Handle string and number
	if ( typeof node === 'string' || typeof node === 'number' ) {
		return node.toString();
	}

	// Handle arrays of React nodes
	if ( Array.isArray( node ) ) {
		return node.map( getTextContent ).join( ' ' ).trim();
	}

	// Handle React elements (JSX components)
	if ( isValidElement( node ) ) {
		// Recursively get text from children
		if ( node.props && node.props.children ) {
			return getTextContent( node.props.children );
		}
		return '';
	}

	// Handle objects with textContent property (DOM nodes)
	if ( typeof node === 'object' && 'textContent' in node! ) {
		return node.textContent?.toString().toLowerCase() || '';
	}

	// Handle objects with children property
	if ( typeof node === 'object' && 'children' in node! ) {
		return getTextContent( ( node as { children: ReactNode } ).children );
	}

	return '';
};
