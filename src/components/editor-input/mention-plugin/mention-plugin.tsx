import React, {
	useCallback,
	useState,
	useMemo,
	useEffect,
	useRef,
} from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
	LexicalTypeaheadMenuPlugin,
	type TypeaheadMenuPluginProps,
	type MenuOption,
} from '@lexical/react/LexicalTypeaheadMenuPlugin';
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
	type RangeSelection,
	type CommandListener,
	FOCUS_COMMAND,
} from 'lexical';
import { mergeRegister } from '@lexical/utils';
import { type TOptionItem } from '../editor-input';
import {
	useFloating,
	autoPlacement,
	offset,
	flip,
	shift,
	autoUpdate,
} from '@floating-ui/react';

export type Trigger = '@' | '#' | ( string & {} );
export type TSizes = 'lg' | 'md' | 'sm';
export type OptionsArray = Array<TOptionItem>;
export type TMenuComponent = React.ComponentType<
	React.ComponentProps<typeof EditorCombobox>
>;
export type TMenuItemComponent = React.ComponentType<
	React.ComponentProps<typeof EditorCombobox.Item>
>;

export interface MentionPluginProps<T = OptionsArray> {
	optionsArray: T;
	by: T extends Array<infer U>
		? U extends Record<string, unknown>
			? keyof U
			: string
		: string;
	size: TSizes;
	trigger: Trigger;
	menuComponent?: TMenuComponent;
	menuItemComponent?: TMenuItemComponent;
	autoSpace: boolean;
}

const MentionPlugin = ( {
	optionsArray,
	by = 'name',
	size = 'md',
	trigger = '@', // Default trigger value
	menuComponent: MenuComponent = EditorCombobox,
	menuItemComponent: MenuItemComponent = EditorCombobox.Item,
	autoSpace = true,
}: MentionPluginProps ) => {
	const { y, refs, strategy } = useFloating( {
		placement: 'bottom',
		strategy: 'absolute',
		middleware: [ offset( 8 ), autoPlacement(), shift(), flip() ],
		whileElementsMounted: autoUpdate,
	} );

	const autoSpaceTempOff = useRef( false );
	const menuRef = useRef<HTMLElement | null>( null );
	// Define PUNCTUATION and other necessary variables inside the component
	const PUNCTUATION =
		'\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%\'"~=<>_:;';

	const TRIGGERS = [ trigger ].join( '' ); // Use the trigger prop dynamically

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
		`(^|\\s|\\()([${ TRIGGERS }]((?:${ VALID_CHARS }${ VALID_JOINS }){0,${ LENGTH_LIMIT }}))$`
	);

	// 50 is the longest alias length limit
	const ALIAS_LENGTH_LIMIT = 50;

	// Regex used to match alias
	const AtSignMentionsRegexAliasRegex = new RegExp(
		`(^|\\s|\\()([${ TRIGGERS }]((?:${ VALID_CHARS }){0,${ ALIAS_LENGTH_LIMIT }}))$`
	);

	// Define checkForAtSignMentions function inside the component where it has access to the regex
	const checkForAtSignMentions = ( text: string ) => {
		let match = AtSignMentionsRegex.exec( text );

		if ( match === null ) {
			match = AtSignMentionsRegexAliasRegex.exec( text );
		}
		if ( match !== null ) {
			// The strategy ignores leading whitespace but we need to know its
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
	};

	const [ editor ] = useLexicalComposerContext();
	const [ queryString, setQueryString ] = useState<string | null>( null );
	const [ isMenuOpen, setIsMenuOpen ] = useState<boolean>( false );

	// Use the hook to get lookup results
	const results = useMentionLookupService( optionsArray, queryString, by );

	const onSelectOption = useCallback<
		TypeaheadMenuPluginProps<
			MenuOption & { data: TOptionItem }
		>['onSelectOption']
	>(
		( selectedOption, nodeToReplace, closeMenu ) => {
			editor.update( () => {
				const mentionNode = $createMentionNode(
					selectedOption.data,
					by as keyof TOptionItem,
					size
				);
				if ( nodeToReplace ) {
					nodeToReplace.replace( mentionNode );
				}
				closeMenu();
				setIsMenuOpen( false );
			} );
		},
		[ editor ]
	);

	const options = useMemo( () => {
		return results.map( ( result ) => new OptionItem( result ) );
	}, [ editor, results ] );

	const handleAutoSpaceAfterMention = useCallback<
		CommandListener<KeyboardEvent>
	>(
		( event ) => {
			if ( ! autoSpace ) {
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
				if ( autoSpaceTempOff.current ) {
					autoSpaceTempOff.current = false;
				}
				return false;
			}
			const selection = $getSelection();
			const { focus, anchor } = selection as RangeSelection;
			const [ node ] = selection!.getNodes();

			if (
				! anchor ||
				! focus ||
				anchor?.key !== focus?.key ||
				anchor?.offset !== focus?.offset ||
				! node
			) {
				return false;
			}

			if ( $isMentionNode( node ) ) {
				const textNode = $createTextNode( ' ' );
				node.insertAfter( textNode );
				return true;
			}
			return false;
		},
		[ editor, trigger, autoSpace ]
	);

	const turnOffAutoSpaceIfNecessary = useCallback<
		CommandListener<KeyboardEvent>
	>(
		( event ) => {
			const { key } = event;
			if ( key === 'Backspace' ) {
				autoSpaceTempOff.current = true;
				return true;
			}
			return false;
		},
		[ autoSpaceTempOff ]
	);

	const handleOpen = useCallback( () => {
		setIsMenuOpen( true );
	}, [] );

	const handleFocus = useCallback( () => {
		handleOpen();
		return false;
	}, [] );

	useEffect( () => {
		if ( ! editor ) {
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
			),
			editor.registerCommand(
				FOCUS_COMMAND,
				handleFocus,
				COMMAND_PRIORITY_LOW
			)
		);
	}, [ editor, handleAutoSpaceAfterMention ] );

	// Set the floating reference to the editor input.
	useEffect( () => {
		if ( ! editor ) {
			return;
		}
		const reference = editor.getRootElement()?.parentElement?.parentElement;
		if ( ! reference ) {
			return;
		}
		refs.setReference( reference );
	}, [ editor, refs ] );

	// Update menu open state based on options availability
	useEffect( () => {
		if ( isMenuOpen ) {
			return;
		}
		setIsMenuOpen( options.length > 0 );
	}, [ options ] );

	// Handle outside clicks to close the dropdown
	useEffect( () => {
		if ( ! isMenuOpen ) {
			return;
		}

		const handleOutsideClick = ( event: MouseEvent ) => {
			const target = event.target as Node;
			const editorRoot = editor.getRootElement();
			const floatingElement = refs.floating.current;

			// Check if click is outside editor and dropdown menu
			if (
				editorRoot &&
				! editorRoot.contains( target ) &&
				floatingElement &&
				! floatingElement.contains( target )
			) {
				setIsMenuOpen( false );
				setQueryString( null );
			}
		};

		// Handle editor blur
		const handleEditorBlur = () => {
			// Small delay to check if focus moved to the dropdown
			setTimeout( () => {
				const editorRoot = editor.getRootElement();
				const floatingElement = refs.floating.current;

				if ( editorRoot ) {
					const doc = editorRoot.ownerDocument;
					const activeElement = doc.activeElement;

					if (
						floatingElement &&
						( ! activeElement ||
							! floatingElement.contains( activeElement ) )
					) {
						setIsMenuOpen( false );
						setQueryString( null );
					}
				}
			}, 100 );
		};

		// Add event listeners
		document.addEventListener( 'mousedown', handleOutsideClick );

		const editorRoot = editor.getRootElement();
		if ( editorRoot ) {
			editorRoot.addEventListener( 'blur', handleEditorBlur, true );
		}

		// Cleanup
		return () => {
			document.removeEventListener( 'mousedown', handleOutsideClick );
			if ( editorRoot ) {
				editorRoot.removeEventListener( 'blur', handleEditorBlur, true );
			}
		};
	}, [ isMenuOpen, editor, refs.floating ] );

	return (
		<LexicalTypeaheadMenuPlugin
			onOpen={ handleOpen }
			onQueryChange={ setQueryString }
			onSelectOption={ onSelectOption }
			triggerFn={ checkForAtSignMentions } // Use the locally defined function
			options={ options }
			menuRenderFn={ (
				anchorElementRef,
				{ selectedIndex, selectOptionAndCleanUp, setHighlightedIndex }
			): React.JSX.Element | null => {
				if (
					! isMenuOpen ||
					! anchorElementRef.current ||
					! options?.length
				) {
					return null;
				}

				return (
					<MenuComponent
						className="w-full"
						size={ size }
						ref={ ( node ) => {
							refs.setFloating( node );
							menuRef.current = node;
						} }
						style={ {
							position: strategy,
							top: y ?? 0,
							left: -2,
							width: 'calc(100% + 4px)',
						} }
					>
						{ options.map( ( option, index ) => (
							<MenuItemComponent
								key={ index }
								ref={ option.ref }
								size={ size }
								selected={ index === selectedIndex }
								onMouseEnter={ () => {
									setHighlightedIndex( index );
								} }
								onClick={ () => selectOptionAndCleanUp( option ) }
							>
								{ typeof option.data === 'string'
									? option.data
									: ( option.data?.[ by ] as string ) }
							</MenuItemComponent>
						) ) }
					</MenuComponent>
				);
			} }
		/>
	);
};

export default MentionPlugin;
