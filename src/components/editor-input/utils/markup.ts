import type { JSONContent } from '@tiptap/core';

const MENTION_REGEX = /@\[([^\]]+)\]\(([^)]+)\)/g;

function parseParagraphContent( line: string ): JSONContent[] {
	const nodes: JSONContent[] = [];
	let lastIndex = 0;
	MENTION_REGEX.lastIndex = 0;
	let match: RegExpExecArray | null;

	while ( ( match = MENTION_REGEX.exec( line ) ) !== null ) {
		if ( match.index > lastIndex ) {
			nodes.push( { type: 'text', text: line.slice( lastIndex, match.index ) } );
		}
		nodes.push( {
			type: 'mention',
			attrs: { id: match[ 2 ], label: match[ 1 ] },
		} );
		lastIndex = match.index + match[ 0 ].length;
	}

	if ( lastIndex < line.length ) {
		nodes.push( { type: 'text', text: line.slice( lastIndex ) } );
	}

	return nodes;
}

export function parseMarkup( input: string ): JSONContent {
	if ( ! input || input.trim() === '' ) {
		return { type: 'doc', content: [ { type: 'paragraph' } ] };
	}

	const lines = input.split( '\n' );
	const paragraphs: JSONContent[] = lines.map( ( line ) => {
		const content = parseParagraphContent( line );
		return { type: 'paragraph', content: content.length ? content : undefined };
	} );

	return { type: 'doc', content: paragraphs };
}

function serializeParagraph( para: JSONContent ): string {
	if ( ! para.content ) {
		return '';
	}
	return para.content
		.map( ( node ) => {
			if ( node.type === 'text' ) {
				return node.text ?? '';
			}
			if ( node.type === 'mention' ) {
				const { id, label } = node.attrs ?? {};
				return `@[${ label }](${ id })`;
			}
			if ( node.type === 'hardBreak' ) {
				return '\n';
			}
			return '';
		} )
		.join( '' );
}

export function serializeToMarkup( doc: JSONContent ): string {
	if ( ! doc.content ) {
		return '';
	}
	return doc.content.map( serializeParagraph ).join( '\n' );
}
