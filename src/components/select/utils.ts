import { type ReactNode } from 'react';

/**
 * Get text content of a node
 * @param {ReactNode} node - React node
 * @return {string} text content of the node
 */
export const getTextContent = ( node: ReactNode ): string => {
	if ( typeof node === 'string' ) {
		return node;
	}

	if ( typeof node === 'object' && 'textContent' in node! ) {
		return node.textContent?.toString().toLowerCase() || '';
	}

	if ( typeof node === 'object' && 'children' in node! ) {
		return getTextContent( node.children );
	}

	return '';
};
