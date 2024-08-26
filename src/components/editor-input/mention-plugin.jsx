import { useCallback, useState, useMemo } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
	LexicalTypeaheadMenuPlugin,
} from '@lexical/react/LexicalTypeaheadMenuPlugin';
import { $createMentionNode } from './mention-node';
import OptionItem from './option-item';
import useMentionLookupService from './editor-hooks';
import EditorCombobox from './mention-combobox';

const PUNCTUATION =
	'\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%\'"~=<>_:;';

const TRIGGERS = [ '@' ].join( '' );

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
	'(^|\\s|\\()(' +
		'[' +
		TRIGGERS +
		']' +
		'((?:' +
		VALID_CHARS +
		VALID_JOINS +
		'){0,' +
		LENGTH_LIMIT +
		'})' +
		')$'
);

// 50 is the longest alias length limit.
const ALIAS_LENGTH_LIMIT = 50;

// Regex used to match alias.
const AtSignMentionsRegexAliasRegex = new RegExp(
	'(^|\\s|\\()(' +
		'[' +
		TRIGGERS +
		']' +
		'((?:' +
		VALID_CHARS +
		'){0,' +
		ALIAS_LENGTH_LIMIT +
		'})' +
		')$'
);

function checkForAtSignMentions( text ) {
	let match = AtSignMentionsRegex.exec( text );

	if ( match === null ) {
		match = AtSignMentionsRegexAliasRegex.exec( text );
	}
	if ( match !== null ) {
		// The strategy ignores leading whitespace but we need to know it's
		// length to add it to the leadOffset
		const maybeLeadingWhitespace = match[ 1 ];

		const matchingString = match[ 3 ];
		if ( matchingString.length >= 0 ) {
			return {
				leadOffset: match.index + maybeLeadingWhitespace.length,
				matchingString,
				replaceableString: match[ 2 ],
			};
		}
	}
	return null;
}

const MentionPlugin = ( {
	optionsArray,
	by = 'name',
	size = 'md',
	menuComponent: MenuComponent = EditorCombobox,
	menuItemComponent: MenuItemComponent = EditorCombobox.Item,
} ) => {
	const [ editor ] = useLexicalComposerContext();
	const [ queryString, setQueryString ] = useState( null );

	const results = useMentionLookupService( optionsArray, queryString, by );

	const onSelectOption = useCallback(
		( selectedOption, nodeToReplace, closeMenu ) => {
			editor.update( () => {
				const mentionNode = $createMentionNode(
					selectedOption.data,
					by,
					size
				);
				if ( nodeToReplace ) {
					nodeToReplace.replace( mentionNode );
				}
				closeMenu();
			} );
		},
		[ editor ]
	);

	const options = useMemo( () => {
		return results.map( ( result ) => new OptionItem( result ) );
	}, [ editor, results ] );

	return (
		<LexicalTypeaheadMenuPlugin
			onQueryChange={ setQueryString }
			onSelectOption={ onSelectOption }
			triggerFn={ checkForAtSignMentions }
			options={ options }
			menuRenderFn={ (
				anchorElementRef,
				{ selectedIndex, selectOptionAndCleanUp, setHighlightedIndex }
			) => {
				return (
					anchorElementRef.current &&
					!! options?.length && (
						<MenuComponent size={ size }>
							{ options.map( ( option, index ) => (
								<MenuItemComponent
									key={ index }
									ref={ option.ref }
									size={ size }
									selected={ index === selectedIndex }
									onMouseEnter={ () => {
										setHighlightedIndex( index );
									} }
									onClick={ () =>
										selectOptionAndCleanUp( option )
									}
								>
									{ typeof option.data === 'string'
										? option.data
										: option.data?.[ by ] }
								</MenuItemComponent>
							) ) }
						</MenuComponent>
					)
				);
			} }
		/>
	);
};

export default MentionPlugin;
