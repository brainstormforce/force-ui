import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';

import { cn } from '@/utilities/functions';

import {
	editorCommonClassNames,
	editorInputClassNames,
} from './editor-input-style';
import MentionPlugin from './mention-plugin';
import MentionNode from './mention-node';
import editorTheme from './editor-theme';

function onError(error) {
	console.error(error);
}

const Placeholder = ({ content }) => (
	<div className="pointer-events-none absolute inset-0 flex items-center justify-start text-field-placeholder">
		{content}
	</div>
);

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

const EditorInput = ({
	defaultValue,
	placeholder = 'Enter what you know',
	onChange = () => {},
	size = 'sm',
	autoFocus = false,
	options = [],
}) => {
	const initialConfig = {
		namespace: 'Editor',
		editorTheme,
		onError,
		nodes: [MentionNode],
		editorState: defaultValue ? defaultValue : EMPTY_CONTENT,
	};

	return (
		<div
			className={cn(
				'relative [&_*]:text-sm [&_.editor-paragraph]:min-h-6 [&_[itemtype="trigger"]]:hidden',
				editorCommonClassNames,
				editorInputClassNames[size]
			)}
		>
			<LexicalComposer initialConfig={initialConfig}>
				<div className="relative w-full [&_p]:m-0">
					<PlainTextPlugin
						contentEditable={<ContentEditable />}
						placeholder={<Placeholder content={placeholder} />}
						ErrorBoundary={LexicalErrorBoundary}
					/>
				</div>
				<HistoryPlugin />
				<MentionPlugin optionsArray={options} />
				<OnChangePlugin
					onChange={onChange}
					ignoreSelectionChange
				/>
				{autoFocus && <AutoFocusPlugin />}
			</LexicalComposer>
		</div>
	);
};

export default EditorInput;
