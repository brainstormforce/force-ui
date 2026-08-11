import { type ReactNode, isValidElement } from 'react';
import type { SelectOptionValue } from './select-types';

/**
 * Normalize a select value into an array of selected values.
 *
 * Multi-select code paths assume an array, but the value can be a single
 * value when `multiple` is toggled at runtime or when a single value is
 * passed while `multiple` is true. Wrapping instead of assuming keeps those
 * paths from throwing on non-iterable values.
 *
 * @param {SelectOptionValue | SelectOptionValue[] | null | undefined} value - Current select value.
 * @return {SelectOptionValue[]} Array of selected values.
 * @since x.x.x
 */
export const toValuesArray = (
	value: SelectOptionValue | SelectOptionValue[] | null | undefined
): SelectOptionValue[] => {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( value === null || typeof value === 'undefined' || value === '' ) {
		return [];
	}
	return [ value ];
};

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
