import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { EditorRefPlugin } from '@lexical/react/LexicalEditorRefPlugin';
import { cn } from '@/utilities/functions';
import {
	editableContentAreaCommonClassNames,
	editorCommonClassNames,
	editorDisabledClassNames,
	editorInputClassNames,
} from './editor-input-style';
import MentionPlugin from './mention-plugin/mention-plugin';
import MentionNode from './mention-plugin/mention-node';
import editorTheme from './editor-theme';
import EditorPlaceholder from './editor-placeholder';
import { forwardRef, isValidElement } from 'react';

function onError( error ) {
	// eslint-disable-next-line no-console
	console.error( error );
}

const EMPTY_CONTENT = `{
    "root": {
        "children": [
            {
                "children": [],
                "direction": null,
                "format": "",
                "indent": 0,
                "type": "paragraph",
                "version": 1,
                "textFormat": 0,
                "textStyle": ""
            }
        ],
        "direction": null,
        "format": "",
        "indent": 0,
        "type": "root",
        "version": 1
    }
}`;

const EditorInputComponent = (
	{
		defaultValue = '',
		placeholder = 'Press @ to view variable suggestions',
		onChange,
		size = 'md',
		autoFocus = false,
		options = [],
		by = 'name',
		trigger = '@',
		menuComponent,
		menuItemComponent,
		className,
		disabled = false,
		autoSpaceAfterMention = false,
	},
	ref
) => {
	const initialConfig = {
		namespace: 'Editor',
		editorTheme,
		onError,
		nodes: [ MentionNode ],
		editorState: defaultValue ? defaultValue : EMPTY_CONTENT,
		editable: disabled ? false : true,
	};

	const handleOnChange = ( editorState, editor ) => {
		if ( typeof onChange !== 'function' ) {
			return;
		}
		onChange( editorState, editor );
	};

	let menuComponentToUse;
	let menuItemComponentToUse;
	if ( isValidElement( menuComponent ) ) {
		menuComponentToUse = menuComponent;
	}
	if ( isValidElement( menuItemComponent ) ) {
		menuItemComponentToUse = menuItemComponent;
	}

	return (
		<div
			className={ cn(
				'relative w-full',
				editorCommonClassNames,
				editorInputClassNames[ size ],
				disabled && editorDisabledClassNames
			) }
		>
			<LexicalComposer initialConfig={ initialConfig }>
				<div className="relative w-full [&_p]:m-0">
					<PlainTextPlugin
						contentEditable={
							<ContentEditable
								className={ cn(
									'editor-content focus-visible:outline-none outline-none',
									editableContentAreaCommonClassNames,
									className
								) }
							/>
						}
						placeholder={
							<EditorPlaceholder content={ placeholder } />
						}
						ErrorBoundary={ LexicalErrorBoundary }
					/>
				</div>
				<HistoryPlugin />
				<MentionPlugin
					menuComponent={ menuComponentToUse }
					menuItemComponent={ menuItemComponentToUse }
					size={ size }
					by={ by }
					optionsArray={ options }
					trigger={ trigger }
					autoSpace={ autoSpaceAfterMention }
				/>
				<OnChangePlugin
					onChange={ handleOnChange }
					ignoreSelectionChange
				/>
				{ ref && <EditorRefPlugin editorRef={ ref } /> }
				{ autoFocus && <AutoFocusPlugin /> }
			</LexicalComposer>
		</div>
	);
};
const EditorInput = forwardRef( EditorInputComponent );
EditorInput.displayName = 'EditorInput';

export default EditorInput;
