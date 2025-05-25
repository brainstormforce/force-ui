import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $trimTextContentFromAnchor } from '@lexical/selection';
import { $restoreEditorState } from '@lexical/utils';
import {
	$getSelection,
	$isRangeSelection,
	EditorState,
	RootNode,
	$getRoot,
} from 'lexical';
import { useEffect } from 'react';

// Function to calculate total content size including MentionNodes
function calculateTotalContentSize( editorState: EditorState ): number {
	// Get normal text content size
	const rootNode = $getRoot();
	const textContentSize = rootNode.getTextContentSize();

	// Get mention count by checking for nodes with type 'mention'
	let mentionContentSize = 0;
	const nodeMap = editorState._nodeMap;
	for ( const [ , node ] of nodeMap ) {
		if ( node.__type === 'mention' ) {
			mentionContentSize += 1;
		}
	}
	// Return combined size, counting each mention with the specified weight
	return textContentSize + mentionContentSize;
}

export function MaxLengthPlugin( { maxLength }: { maxLength: number } ): null {
	const [ editor ] = useLexicalComposerContext();

	useEffect( () => {
		let lastRestoredEditorState: EditorState | null = null;

		return editor.registerNodeTransform( RootNode, () => {
			const selection = $getSelection();
			if ( ! $isRangeSelection( selection ) || ! selection.isCollapsed() ) {
				return;
			}
			const prevEditorState = editor.getEditorState();
			const prevTextContentSize = prevEditorState.read( () =>
				calculateTotalContentSize( prevEditorState )
			);
			const textContentSize = calculateTotalContentSize( prevEditorState );
			if ( prevTextContentSize !== textContentSize ) {
				const delCount = textContentSize - maxLength;
				const anchor = selection.anchor;

				if ( delCount > 0 ) {
					// Restore the old editor state instead if the last
					// text content was already at the limit.
					if (
						prevTextContentSize === maxLength &&
						lastRestoredEditorState !== prevEditorState
					) {
						lastRestoredEditorState = prevEditorState;
						$restoreEditorState( editor, prevEditorState );
					} else {
						$trimTextContentFromAnchor( editor, anchor, delCount );
					}
				}
			}
		} );
	}, [ editor, maxLength ] );

	return null;
}

export default MaxLengthPlugin;
