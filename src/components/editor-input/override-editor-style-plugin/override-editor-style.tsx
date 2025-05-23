import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useLayoutEffect } from 'react';

const OverrideEditorStyle = ( {
	wordBreak = 'break-all',
}: {
	wordBreak?: string;
} ) => {
	const [ editor ] = useLexicalComposerContext();

	useLayoutEffect( () => {
		if ( ! editor ) {
			return;
		}

		editor.registerRootListener( ( root ) => {
			if ( ! root ) {
				return;
			}

			const style = root.style;
			style.wordBreak = wordBreak ?? 'break-all';
		} );
	}, [ editor ] );

	return null;
};

export default OverrideEditorStyle;
