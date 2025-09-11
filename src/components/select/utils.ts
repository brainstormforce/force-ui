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
		return node.map( getTextContent ).join( ' ' );
	}

	// Handle React elements
	if ( isValidElement( node ) ) {
		// If it has children, recursively get text from children
		if ( node.props && node.props.children ) {
			return getTextContent( node.props.children );
		}
		return '';
	}

	// Handle objects with textContent property (DOM nodes)
	if ( typeof node === 'object' && 'textContent' in node! ) {
		return node.textContent?.toString() || '';
	}

	// Handle objects with children property
	if ( typeof node === 'object' && node && 'children' in node ) {
		return getTextContent( ( node as { children: ReactNode } ).children );
	}

	// Fallback for other object types
	if ( typeof node === 'object' ) {
		return '';
	}

	return '';
};
