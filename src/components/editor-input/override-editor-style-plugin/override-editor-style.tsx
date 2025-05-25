import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useLayoutEffect } from 'react';

interface OverrideEditorStyleProps {
	/** Override the editor input style. */
	style?: React.CSSProperties;
}

const OverrideEditorStyle = ( {
	style,
}: OverrideEditorStyleProps ) => {
	const [ editor ] = useLexicalComposerContext();

	useLayoutEffect( () => {
		if ( ! editor ) {
			return;
		}

		editor.registerRootListener( ( root ) => {
			if ( ! root || ! style || Object.keys( style ).length === 0 ) {
				return;
			}

			const rootStyle = root.style;
			Object.assign( rootStyle, style );
		} );
	}, [ editor ] );

	return null;
};

export default OverrideEditorStyle;
