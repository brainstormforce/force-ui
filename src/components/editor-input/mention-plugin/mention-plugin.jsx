import { useCallback, useState, useMemo, useEffect, useRef } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { LexicalTypeaheadMenuPlugin } from '@lexical/react/LexicalTypeaheadMenuPlugin';
import { $createMentionNode, $isMentionNode } from './mention-node';
import OptionItem from './mention-option-item';
import useMentionLookupService from './mention-hooks';
import EditorCombobox from './mention-combobox';
import {
	$createTextNode,
	$getSelection,
	COMMAND_PRIORITY_LOW,
	KEY_DOWN_COMMAND,
	KEY_BACKSPACE_COMMAND,
} from 'lexical';
import { mergeRegister } from '@lexical/utils';

const MentionPlugin = ({
	optionsArray,
	by = 'name',
	size = 'md',
	trigger = '@', // Default trigger value
	menuComponent: MenuComponent = EditorCombobox,
	menuItemComponent: MenuItemComponent = EditorCombobox.Item,
	autoSpace = true,
}) => {
	const autoSpaceTempOff = useRef(false);
	// Define PUNCTUATION and other necessary variables inside the component
	const PUNCTUATION =
		'\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%\'"~=<>_:;';

	const TRIGGERS = [trigger].join(''); // Use the trigger prop dynamically

	const VALID_CHARS = '[^' + TRIGGERS + PUNCTUATION + '\\s]';

	const VALID_JOINS =
		'(?:' +
		'\\.[ |$]|' + // E.g. "r. " in "Mr. Smith"
		' |' + // E.g. " " in "Josh Duck"
		'[' +
		PUNCTUATION +
		']|' + // E.g. "-' in "Salier-Hellendag"
		')';

	const LENGTH_LIMIT = 75;

	const AtSignMentionsRegex = new RegExp(
		`(^|\\s|\\()([${TRIGGERS}]((?:${VALID_CHARS}${VALID_JOINS}){0,${LENGTH_LIMIT}}))$`
	);

	// 50 is the longest alias length limit
	const ALIAS_LENGTH_LIMIT = 50;

	// Regex used to match alias
	const AtSignMentionsRegexAliasRegex = new RegExp(
		`(^|\\s|\\()([${TRIGGERS}]((?:${VALID_CHARS}){0,${ALIAS_LENGTH_LIMIT}}))$`
	);

	// Define checkForAtSignMentions function inside the component where it has access to the regex
	const checkForAtSignMentions = (text) => {
		let match = AtSignMentionsRegex.exec(text);

		if (match === null) {
			match = AtSignMentionsRegexAliasRegex.exec(text);
		}
		if (match !== null) {
			// The strategy ignores leading whitespace but we need to know its
			// length to add it to the leadOffset
			const maybeLeadingWhitespace = match[1];

			const matchingString = match[3];
			if (matchingString.length >= 0) {
				return {
					leadOffset: match.index + maybeLeadingWhitespace.length,
					matchingString,
					replaceableString: match[2],
				};
			}
		}
		return null;
	};

	const [editor] = useLexicalComposerContext();
	const [queryString, setQueryString] = useState(null);

	// Use the hook to get lookup results
	const results = useMentionLookupService(optionsArray, queryString, by);

	const onSelectOption = useCallback(
		(selectedOption, nodeToReplace, closeMenu) => {
			editor.update(() => {
				const mentionNode = $createMentionNode(
					selectedOption.data,
					by,
					size
				);
				if (nodeToReplace) {
					nodeToReplace.replace(mentionNode);
				}
				closeMenu();
			});
		},
		[editor]
	);

	const options = useMemo(() => {
		return results.map((result) => new OptionItem(result));
	}, [editor, results]);

	const handleAutoSpaceAfterMention = useCallback(
		(event) => {
			if (!autoSpace) {
				return false;
			}
			const { key, ctrlKey, metaKey } = event;

			if (
				ctrlKey ||
				metaKey ||
				key === ' ' ||
				key.length > 1 ||
				autoSpaceTempOff.current
			) {
				if (autoSpaceTempOff.current) {
					autoSpaceTempOff.current = false;
				}
				return false;
			}
			const selection = $getSelection(editor);
			const { focus, anchor } = selection;
			const [node] = selection.getNodes();

			if (
				!anchor ||
				!focus ||
				anchor?.key !== focus?.key ||
				anchor?.offset !== focus?.offset ||
				!node
			) {
				return false;
			}

			if ($isMentionNode(node)) {
				const textNode = $createTextNode(' ');
				node.insertAfter(textNode);
			}
		},
		[editor, trigger, autoSpace]
	);

	const turnOffAutoSpaceIfNecessary = useCallback(
		(event) => {
			const { key } = event;
			if (key === 'Backspace') {
				autoSpaceTempOff.current = true;
			}
		},
		[autoSpaceTempOff]
	);

	useEffect(() => {
		if (!editor) {
			return;
		}

		return mergeRegister(
			editor.registerCommand(
				KEY_DOWN_COMMAND,
				handleAutoSpaceAfterMention,
				COMMAND_PRIORITY_LOW
			),
			editor.registerCommand(
				KEY_BACKSPACE_COMMAND,
				turnOffAutoSpaceIfNecessary,
				COMMAND_PRIORITY_LOW
			)
		);
	}, [editor, handleAutoSpaceAfterMention]);

	return (
		<LexicalTypeaheadMenuPlugin
			onQueryChange={setQueryString}
			onSelectOption={onSelectOption}
			triggerFn={checkForAtSignMentions} // Use the locally defined function
			options={options}
			menuRenderFn={(
				anchorElementRef,
				{ selectedIndex, selectOptionAndCleanUp, setHighlightedIndex }
			) => {
				return (
					anchorElementRef.current &&
					!!options?.length && (
						<MenuComponent size={size}>
							{options.map((option, index) => (
								<MenuItemComponent
									key={index}
									ref={option.ref}
									size={size}
									selected={index === selectedIndex}
									onMouseEnter={() => {
										setHighlightedIndex(index);
									}}
									onClick={() =>
										selectOptionAndCleanUp(option)
									}
								>
									{typeof option.data === 'string'
										? option.data
										: option.data?.[by]}
								</MenuItemComponent>
							))}
						</MenuComponent>
					)
				);
			}}
		/>
	);
};

export default MentionPlugin;
