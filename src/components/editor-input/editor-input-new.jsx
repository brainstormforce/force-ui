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

const theme = {
	ltr: 'ltr',
	rtl: 'rtl',
	paragraph: 'editor-paragraph',
	quote: 'editor-quote',
	heading: {
		h1: 'editor-heading-h1',
		h2: 'editor-heading-h2',
		h3: 'editor-heading-h3',
		h4: 'editor-heading-h4',
		h5: 'editor-heading-h5',
		h6: 'editor-heading-h6',
	},
	list: {
		nested: {
			listitem: 'editor-nested-listitem',
		},
		ol: 'editor-list-ol',
		ul: 'editor-list-ul',
		listitem: 'editor-listItem',
		listitemChecked: 'editor-listItemChecked',
		listitemUnchecked: 'editor-listItemUnchecked',
	},
	hashtag: 'editor-hashtag',
	image: 'editor-image',
	link: 'editor-link',
	text: {
		bold: 'editor-textBold',
		code: 'editor-textCode',
		italic: 'editor-textItalic',
		strikethrough: 'editor-textStrikethrough',
		subscript: 'editor-textSubscript',
		superscript: 'editor-textSuperscript',
		underline: 'editor-textUnderline',
		underlineStrikethrough: 'editor-textUnderlineStrikethrough',
	},
	code: 'editor-code',
	codeHighlight: {
		atrule: 'editor-tokenAttr',
		attr: 'editor-tokenAttr',
		boolean: 'editor-tokenProperty',
		builtin: 'editor-tokenSelector',
		cdata: 'editor-tokenComment',
		char: 'editor-tokenSelector',
		class: 'editor-tokenFunction',
		'class-name': 'editor-tokenFunction',
		comment: 'editor-tokenComment',
		constant: 'editor-tokenProperty',
		deleted: 'editor-tokenProperty',
		doctype: 'editor-tokenComment',
		entity: 'editor-tokenOperator',
		function: 'editor-tokenFunction',
		important: 'editor-tokenVariable',
		inserted: 'editor-tokenSelector',
		keyword: 'editor-tokenAttr',
		namespace: 'editor-tokenVariable',
		number: 'editor-tokenProperty',
		operator: 'editor-tokenOperator',
		prolog: 'editor-tokenComment',
		property: 'editor-tokenProperty',
		punctuation: 'editor-tokenPunctuation',
		regex: 'editor-tokenVariable',
		selector: 'editor-tokenSelector',
		string: 'editor-tokenSelector',
		symbol: 'editor-tokenProperty',
		tag: 'editor-tokenProperty',
		url: 'editor-tokenOperator',
		variable: 'editor-tokenVariable',
	},
};

function onError(error) {
	console.error(error);
}

const Placeholder = ({ content }) => (
	<div className="pointer-events-none absolute inset-0 flex items-center justify-start text-field-placeholder">
		{content}
	</div>
);

const mentionItems = ['Anton', 'Boris', 'Catherine', 'Dmitri', 'Felix', 'Gina'];

function extractTextFromJson(jsonObj) {
	if (jsonObj && jsonObj.root && jsonObj.root.children) {
		let text = '';
		jsonObj.root.children.forEach((paragraph, index) => {
			if (paragraph.children.length > 0) {
				paragraph.children.forEach((element) => {
					switch (element.type) {
						case 'text':
							text += element.text;
							break;
						case 'mention':
							text += element.data.data;
							break;
						case 'linebreak':
							text += '\n\n';
							break;
					}
				});
				if (
					paragraph.children[paragraph.children.length - 1].type !==
						'linebreak' &&
					index !== jsonObj.root.children.length - 1
				) {
					text += '\n';
				}
			} else {
				text += '';
			}
		});
		return text;
	}

	return 'Not found';
}

const EditorInput = ({
	value,
	defaultValue,
	placeholder = 'Enter what you know',
	onChange,
	size = 'sm',
}) => {
	const initialConfig = {
		namespace: 'MyEditor',
		theme,
		onError,
		nodes: [MentionNode], // 👈 register the mention node
	};

	function onChange(editorState, editor) {
		editor.update(() => {
			const extractedText = extractTextFromJson(
				editor.getEditorState().toJSON()
			);
			console.log(extractedText);
		});
	}

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
				<AutoFocusPlugin />
				<MentionPlugin items={mentionItems} />
				<OnChangePlugin
					onChange={onChange}
					ignoreSelectionChange
				/>
			</LexicalComposer>
		</div>
	);
};

export default EditorInput;
