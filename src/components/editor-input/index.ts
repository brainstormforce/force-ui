export { default } from './editor-input';
export type {
	LegacyEditorState,
	EditorInputRef,
} from './editor-input';
export {
	lexicalJSONToTipTapDoc,
	tipTapDocToLexicalJSON,
	lexicalToMarkup,
	markupToLexical,
} from './utils/lexical-compat';
export type {
	LexicalJSON,
	LexicalParagraph,
	LexicalInlineNode,
	LexicalTextNode,
	LexicalMentionNode,
	LexicalLineBreakNode,
} from './utils/lexical-compat';
