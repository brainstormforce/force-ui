import type { JSONContent } from '@tiptap/core';
import { parseMarkup, serializeToMarkup } from './markup';

// ---------------------------------------------------------------------------
// Lexical JSON shape (subset — only the fields the v1.7 editor produced/read)
// ---------------------------------------------------------------------------

export interface LexicalTextNode {
	type: 'text';
	text: string;
	detail?: number;
	format?: number;
	mode?: string;
	style?: string;
	version?: number;
}

export interface LexicalMentionNode {
	type: 'mention';
	data: { id: string | number; label: string };
	version?: number;
}

export interface LexicalLineBreakNode {
	type: 'linebreak';
	version?: number;
}

export type LexicalInlineNode =
	| LexicalTextNode
	| LexicalMentionNode
	| LexicalLineBreakNode;

export interface LexicalParagraph {
	type: 'paragraph';
	children: LexicalInlineNode[];
	direction?: string | null;
	format?: string;
	indent?: number;
	version?: number;
	textFormat?: number;
	textStyle?: string;
}

export interface LexicalJSON {
	root: {
		type: 'root';
		children: LexicalParagraph[];
		direction?: string | null;
		format?: string;
		indent?: number;
		version?: number;
	};
}

// ---------------------------------------------------------------------------
// Deprecation warning helper (one-time, dev-only)
// ---------------------------------------------------------------------------

const warned = new Set<string>();

export function warnDeprecation( feature: string ): void {
	if (
		typeof process !== 'undefined' &&
		process.env &&
		process.env.NODE_ENV === 'production'
	) {
		return;
	}
	if ( warned.has( feature ) ) {
		return;
	}
	warned.add( feature );
	// eslint-disable-next-line no-console
	console.warn(
		`[force-ui] EditorInput: ${ feature } is deprecated and will be removed in @bsf/force-ui 2.0. See migration guide in editor-input/readme.md.`
	);
}

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

function coerceLexical( input: string | LexicalJSON ): LexicalJSON | null {
	if ( ! input ) {
		return null;
	}
	if ( typeof input === 'string' ) {
		try {
			return JSON.parse( input ) as LexicalJSON;
		} catch {
			return null;
		}
	}
	return input;
}

function lexicalParagraphToTipTap( para: LexicalParagraph ): JSONContent {
	const content: JSONContent[] = [];
	for ( const child of para.children ?? [] ) {
		if ( child.type === 'text' ) {
			if ( child.text ) {
				content.push( { type: 'text', text: child.text } );
			}
			continue;
		}
		if ( child.type === 'mention' ) {
			const { id, label } = child.data ?? { id: '', label: '' };
			content.push( {
				type: 'mention',
				attrs: { id: String( id ), label },
			} );
			continue;
		}
		if ( child.type === 'linebreak' ) {
			content.push( { type: 'hardBreak' } );
			continue;
		}
	}
	return {
		type: 'paragraph',
		...( content.length ? { content } : {} ),
	};
}

function tipTapParagraphToLexical( para: JSONContent ): LexicalParagraph {
	const children: LexicalInlineNode[] = [];
	for ( const node of para.content ?? [] ) {
		if ( node.type === 'text' ) {
			children.push( {
				type: 'text',
				text: node.text ?? '',
				detail: 0,
				format: 0,
				mode: 'normal',
				style: '',
				version: 1,
			} );
			continue;
		}
		if ( node.type === 'mention' ) {
			const id = node.attrs?.id ?? '';
			const label = ( node.attrs?.label as string ) ?? '';
			children.push( {
				type: 'mention',
				data: { id, label },
				version: 1,
			} );
			continue;
		}
		if ( node.type === 'hardBreak' ) {
			children.push( { type: 'linebreak', version: 1 } );
			continue;
		}
	}
	return {
		type: 'paragraph',
		children,
		direction: 'ltr',
		format: '',
		indent: 0,
		version: 1,
		textFormat: 0,
		textStyle: '',
	};
}

// ---------------------------------------------------------------------------
// Public converters
// ---------------------------------------------------------------------------

export function lexicalJSONToTipTapDoc(
	input: string | LexicalJSON
): JSONContent {
	const lexical = coerceLexical( input );
	if ( ! lexical || ! lexical.root || ! Array.isArray( lexical.root.children ) ) {
		return { type: 'doc', content: [ { type: 'paragraph' } ] };
	}
	const paragraphs = lexical.root.children
		.filter( ( p ) => p && p.type === 'paragraph' )
		.map( lexicalParagraphToTipTap );

	return {
		type: 'doc',
		content: paragraphs.length ? paragraphs : [ { type: 'paragraph' } ],
	};
}

export function tipTapDocToLexicalJSON( doc: JSONContent ): LexicalJSON {
	const children = ( doc.content ?? [] )
		.filter( ( n ) => n.type === 'paragraph' )
		.map( tipTapParagraphToLexical );

	return {
		root: {
			type: 'root',
			children,
			direction: 'ltr',
			format: '',
			indent: 0,
			version: 1,
		},
	};
}

export function lexicalToMarkup( input: string | LexicalJSON ): string {
	warnDeprecation( 'lexicalToMarkup()' );
	const doc = lexicalJSONToTipTapDoc( input );
	return serializeToMarkup( doc );
}

export function markupToLexical( markup: string ): LexicalJSON {
	warnDeprecation( 'markupToLexical()' );
	const doc = parseMarkup( markup );
	return tipTapDocToLexicalJSON( doc );
}
