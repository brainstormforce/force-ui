import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';

import {
	BeautifulMentionsPlugin,
	BeautifulMentionNode,
	createBeautifulMentionNode,
	useBeautifulMentions,
} from 'lexical-beautiful-mentions';
import { forwardRef, useCallback, useRef, useState } from 'react';
import { cn } from '@/utilities/functions';
import { X } from 'lucide-react';

import { editorCommonClassNames, editorInputClassNames } from './editor-input-style';

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
	beautifulMentions: beautifulMentionsTheme,
};

function onError(error) {
	console.error(error);
}

const Placeholder = ({ content }) => (
	<div className="pointer-events-none absolute inset-0 flex items-center justify-start text-field-placeholder">{content}</div>
);

// ...
const beautifulMentionsTheme = {
	// 👇 use the trigger name as the key
	'@': 'px-1 mx-px',
	// 👇 add the "Focused" suffix to style the focused mention
	'@Focused': 'outline-none shadow-md',
};

const mentionItems = {
	'@': ['Anton', 'Boris', 'Catherine', 'Dmitri', 'Felix', 'Gina'],
};

const CustomMenu = forwardRef(({ loading, ...props }, ref) => (
	<ul ref={ref} className="m-0 px-2 py-1 w-fit bg-white shadow rounded border border-solid border-border-subtle" {...props} />
));
const CustomMenuItem = forwardRef(({ selected, item, className, ...props }, ref) => (
	<li
		ref={ref}
		className={cn(
			'm-0 px-1 py-0.5 rounded-sm flex',
			selected ? 'bg-background-secondary' : 'bg-white',
			className
		)}
		{...props}
	/>
));

const CustomMentionComponent = forwardRef(
	({ trigger, value, data: myData, className, children, ...other }, ref) => {
		const { removeMentions } = useBeautifulMentions();
		return (
			<div
				className={cn(
					'inline-flex items-center px-1 py-0.5 bg-background-secondary rounded',
					className
				)}
				{...other}
				ref={ref}
				title={trigger + value}
			>
				<span>{value}</span>
				<span onClick={() => removeMentions({trigger, value})} className="cursor-pointer inline-flex items-center">
					<X className="size-4 text-icon-secondary" />
				</span>
			</div>
		);
	}
);

/**
 * Combobox component for the BeautifulMentionsPlugin.
 */
export const Combobox = forwardRef(
	({ optionType, loading, ...other }, ref) => {
	  if (loading) {
		return (
		  <div
			ref={ref}
			className="h-full overflow-hidden rounded-b bg-popover p-3 text-sm text-popover-foreground"
		  >
			<div className="">Loading...</div>
		  </div>
		);
	  }
	  if ( optionType.itemType === 'trigger' ) {
		return false;
	  }
	  return (
		<ul
		  ref={ref}
		  style={{
			scrollbarWidth: "none",
			msOverflowStyle: "none",
		  }}
		  className="m-0 mt-[1px] h-full list-none overflow-scroll overflow-y-scroll rounded-b bg-popover p-[1px] text-popover-foreground"
		  {...other}
		/>
	  );
	},
  );
  Combobox.displayName = "Combobox";
  
  /**
   * ComboboxItem component for the BeautifulMentionsPlugin.
   */
  export const ComboboxItem = forwardRef(({ selected, item, ...props }, ref) => (
	<>
	  {item.data.dividerTop && (
		<div className="p-1">
		  <div className="flex border-b border-muted" />
		</div>
	  )}
	  <li
		ref={ref}
		className={cn(
		  "relative flex cursor-pointer select-none items-center rounded-md px-2 py-1.5 text-sm outline-none",
		  selected && "bg-accent text-accent-foreground",
		)}
		{...props}
	  />
	</>
  ));
  ComboboxItem.displayName = "ComboboxItem";

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
		nodes: [
			BeautifulMentionNode,
			...createBeautifulMentionNode(CustomMentionComponent),
		], // 👈 register the mention node
	};

	const [menuOrComboboxOpen, setMenuOrComboboxOpen] = useState(false);
	const [comboboxItemSelected, setComboboxItemSelected] = useState(false);
	const comboboxAnchor = useRef(null);

	const handleMenuOrComboboxOpen = useCallback(() => {
		setMenuOrComboboxOpen(true);
	  }, []);
	
	  const handleMenuOrComboboxClose = useCallback(() => {
		setMenuOrComboboxOpen(false);
	  }, []);
	
	  const handleComboboxFocusChange = useCallback(
		(item) => {
		  	setComboboxItemSelected(item !== null);
		},
		[],
	  );
	
	  const handleComboboxItemSelect = useCallback(
		(item) => {
		  if (item.itemType === "additional") {
			setMenuOrComboboxOpen(false);
		  }
		},
		[],
	  );

	return (
		<div ref={comboboxAnchor} className={cn(
			'relative [&_*]:text-sm [&_.editor-paragraph]:min-h-6 [&_[itemtype="trigger"]]:hidden',
			editorCommonClassNames,
			editorInputClassNames[size]
		)}>
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
				<BeautifulMentionsPlugin // 👈 add the mentions plugin
					menuAnchorClassName='surerank-styles'
					items={mentionItems}
					menuComponent={CustomMenu}
					menuItemComponent={CustomMenuItem}
					// 👇 add the combobox component to the mentions plugin
					combobox
					comboboxOpen={menuOrComboboxOpen}
					comboboxAnchor={ comboboxAnchor.current}
					comboboxComponent={ Combobox}
					comboboxItemComponent={ ComboboxItem}
					onComboboxOpen={ handleMenuOrComboboxOpen}
					onComboboxClose={ handleMenuOrComboboxClose}
					onComboboxFocusChange={ handleComboboxFocusChange}
					onComboboxItemSelect={ handleComboboxItemSelect}
				/>
			</LexicalComposer>
		</div>
	);
};

export default EditorInput;
