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
import MentionPlugin, {
	type TMenuComponent,
	type TMenuItemComponent,
} from './mention-plugin/mention-plugin';
import MentionNode from './mention-plugin/mention-node';
import editorTheme from './editor-theme';
import EditorPlaceholder from './editor-placeholder';
import { forwardRef, isValidElement } from 'react';

import type { EditorState, LexicalEditor } from 'lexical';

function onError( error: Error ) {
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

export type TOptionItem = Record<string, unknown> | string;

interface EditorInputProps<T = TOptionItem> {
	/** The default value of the editor. */
	defaultValue?: string;
	/** The placeholder of the editor. */
	placeholder?: string;
	/** The function to be called when the editor content changes. */
	onChange?: ( editorState: EditorState, editor: LexicalEditor ) => void;
	/** The size of the editor. */
	size?: keyof typeof editorInputClassNames;
	/** Whether the editor should be focused automatically. */
	autoFocus?: boolean;
	/** The options to be shown in the mention menu. */
	options: T[];
	/** The key to be used for the mention options. */
	by?: T extends Record<string, unknown> ? keyof T : string;
	/** The trigger to be used for the mention options. */
	trigger?: string;
	/** The component to be used for the mention menu. */
	menuComponent?: TMenuComponent;
	/** The component to be used for the mention menu items. */
	menuItemComponent?: TMenuItemComponent;
	/** The class name of the editor. */
	className?: string;
	/** The class name of the wrapper. */
	wrapperClassName?: string;
	/** Whether the editor is disabled. */
	disabled?: boolean;
	/** Whether to add a space after the mention. */
	autoSpaceAfterMention?: boolean;
}

type Ref = React.Ref<LexicalEditor>;

const EditorInput = forwardRef<LexicalEditor, EditorInputProps>(
	(
		{
			defaultValue = '',
			placeholder = 'Press @ to view variable suggestions',
			onChange,
			size = 'md',
			autoFocus = false,
			options,
			by = 'name',
			trigger = '@',
			menuComponent,
			menuItemComponent,
			className,
			wrapperClassName,
			disabled = false,
			autoSpaceAfterMention = false,
		}: EditorInputProps,
		ref: Ref
	) => {
		const initialConfig = {
			namespace: 'Editor',
			editorTheme,
			onError,
			nodes: [ MentionNode ],
			editorState: defaultValue ? defaultValue : EMPTY_CONTENT,
			editable: disabled ? false : true,
		};

		const handleOnChange = (
			editorState: EditorState,
			editor: LexicalEditor
		) => {
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
					disabled && editorDisabledClassNames,
					wrapperClassName
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
	}
);
EditorInput.displayName = 'EditorInput';

export default EditorInput;
