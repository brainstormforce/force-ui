import { useEditor, EditorContent, ReactNodeViewRenderer } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import HardBreak from '@tiptap/extension-hard-break';
import Placeholder from '@tiptap/extension-placeholder';
import Mention from '@tiptap/extension-mention';
import { Extension } from '@tiptap/core';
import { Plugin } from '@tiptap/pm/state';
import type { SuggestionProps, SuggestionKeyDownProps } from '@tiptap/suggestion';
import type { Editor } from '@tiptap/core';
import {
	forwardRef,
	useImperativeHandle,
	useRef,
	useState,
	useCallback,
	useEffect,
	createContext,
} from 'react';
import { cn } from '@/utilities/functions';
import {
	editableContentAreaCommonClassNames,
	editorCommonClassNames,
	editorDisabledClassNames,
	editorInputClassNames,
} from './editor-input-style';
import MentionComponent from './mention-plugin/mention-component';
import EditorCombobox from './mention-plugin/mention-combobox';
import EditorPlaceholder from './editor-placeholder';
import { parseMarkup, serializeToMarkup } from './utils/markup';

export type TOptionItem = Record<string, unknown> | string;
export type TMenuComponent = React.ComponentType<
	React.ComponentProps<typeof EditorCombobox>
>;
export type TMenuItemComponent = React.ComponentType<
	React.ComponentProps<typeof EditorCombobox.Item>
>;

interface EditorInputProps<T = TOptionItem> {
	/** Default value for the editor input field. Accepts plain text with @[Label](id) mention markup. */
	defaultValue?: string;
	/** Placeholder text for the editor input field. */
	placeholder?: string;
	/** Called on every change with the serialised markup string and the TipTap Editor instance. */
	onChange?: ( markup: string, editor: Editor ) => void;
	/** Defines the sizes of the editor input. */
	size?: keyof typeof editorInputClassNames;
	/** Defines if the editor input is focused automatically. */
	autoFocus?: boolean;
	/** Array of options to be displayed in the mention dropdown. */
	options: T[];
	/** Key used to read the display label from object options. */
	by?: T extends Record<string, unknown> ? keyof T : string;
	/** Character that triggers the mention dropdown. Default: '@'. */
	trigger?: string;
	/** Custom component for the mention dropdown list. */
	menuComponent?: TMenuComponent;
	/** Custom component for individual mention dropdown items. */
	menuItemComponent?: TMenuItemComponent;
	/** Additional class names for the contenteditable element. */
	className?: string;
	/** Additional class names for the outer wrapper div. */
	wrapperClassName?: string;
	/** Disables the editor input. */
	disabled?: boolean;
	/** Inserts a space after a mention is selected. */
	autoSpaceAfterMention?: boolean;
	/** Inline styles applied to the contenteditable element. */
	style?: React.CSSProperties;
	/** Maximum character count (mentions count as 1 character each). */
	maxLength?: number;
	/** Allow multi-line input (Enter key inserts newline). Default: true. */
	multiline?: boolean;
}

export const EditorInputContext = createContext<{
	size: string;
	disabled: boolean;
}>( { size: 'md', disabled: false } );

const filterOptions = (
	options: TOptionItem[],
	query: string,
	by: string
): TOptionItem[] => {
	const q = query.toLowerCase();
	return options.filter( ( opt ) => {
		if ( typeof opt === 'string' ) {
			return opt.toLowerCase().includes( q );
		}
		const val = ( opt[ by ] as string | undefined )?.toString() ?? '';
		return val.toLowerCase().includes( q );
	} );
};

const cssPropertiesToString = ( style: React.CSSProperties ): string =>
	Object.entries( style )
		.map(
			( [ k, v ] ) =>
				`${ k.replace( /([A-Z])/g, ( c ) => `-${ c.toLowerCase() }` ) }:${ v }`
		)
		.join( ';' );

const createCharacterLimitPlugin = ( maxLength: number ) =>
	Extension.create( {
		name: 'characterLimit',
		addProseMirrorPlugins() {
			return [
				new Plugin( {
					filterTransaction( tr ) {
						if ( ! tr.docChanged ) {
							return true;
						}
						let count = 0;
						tr.doc.descendants( ( node ) => {
							if ( node.isText ) {
								count += node.text!.length;
							}
							if ( node.type.name === 'mention' ) {
								count += 1;
							}
						} );
						return count <= maxLength;
					},
				} ),
			];
		},
	} );

const EditorInput = forwardRef<Editor | null, EditorInputProps>(
	(
		{
			defaultValue = '',
			placeholder = 'Press @ to view variable suggestions',
			onChange,
			size = 'md',
			autoFocus = false,
			options,
			by = 'name' as string,
			trigger = '@',
			menuComponent: MenuComponent = EditorCombobox,
			menuItemComponent: MenuItemComponent = EditorCombobox.Item,
			className,
			wrapperClassName,
			disabled = false,
			autoSpaceAfterMention = false,
			style,
			maxLength,
			multiline = true,
		}: EditorInputProps,
		ref
	) => {
		// Refs for dynamic values read inside stable extension closures
		const optionsRef = useRef( options );
		useEffect( () => {
			optionsRef.current = options;
		}, [ options ] );

		const byRef = useRef( by as string );
		useEffect( () => {
			byRef.current = by as string;
		}, [ by ] );

		const autoSpaceRef = useRef( autoSpaceAfterMention );
		useEffect( () => {
			autoSpaceRef.current = autoSpaceAfterMention;
		}, [ autoSpaceAfterMention ] );

		// Suggestion state
		const [ suggestionState, setSuggestionState ] =
			useState<SuggestionProps | null>( null );
		const itemRefs = useRef<( HTMLElement | null )[]>( [] );
		const [ selectedIndex, setSelectedIndex ] = useState( 0 );

		// Scroll selected item into view when navigating with keyboard
		useEffect( () => {
			itemRefs.current[ selectedIndex ]?.scrollIntoView( { block: 'nearest' } );
		}, [ selectedIndex ] );

		const keyDownRef = useRef<
			( ( props: SuggestionKeyDownProps ) => boolean ) | null
				>( null );

		// Track isEmpty for placeholder visibility
		const [ isEmpty, setIsEmpty ] = useState( ! defaultValue );

		const onSuggestionStart = useCallback( ( props: SuggestionProps ) => {
			setSelectedIndex( 0 );
			setSuggestionState( props );
		}, [] );

		const onSuggestionUpdate = useCallback( ( props: SuggestionProps ) => {
			setSelectedIndex( 0 );
			setSuggestionState( { ...props } );
		}, [] );

		const onSuggestionExit = useCallback( () => {
			setSuggestionState( null );
			setSelectedIndex( 0 );
		}, [] );

		const onSuggestionKeyDown = useCallback(
			( props: SuggestionKeyDownProps ): boolean => {
				if ( keyDownRef.current ) {
					return keyDownRef.current( props );
				}
				return false;
			},
			[]
		);

		const editor = useEditor( {
			extensions: [
				Document,
				Paragraph,
				Text,
				HardBreak,
				Placeholder.configure( { placeholder } ),
				...( maxLength
					? [ createCharacterLimitPlugin( maxLength ) ]
					: [] ),
				Mention.extend( {
					renderText( { node } ) {
						const { id, label } = node.attrs;
						return `@[${ label }](${ id })`;
					},
					addNodeView() {
						return ReactNodeViewRenderer( MentionComponent );
					},
				} ).configure( {
					HTMLAttributes: { class: 'mention' },
					suggestion: {
						char: trigger,
						items( { query } ) {
							return filterOptions(
								optionsRef.current,
								query,
								byRef.current
							);
						},
						command( { editor: ed, range, props } ) {
							const item = props as unknown as TOptionItem;
							const label =
								typeof item === 'string'
									? item
									: ( ( item[ byRef.current ] as string ) ?? '' );
							const id = label;
							ed.chain()
								.focus()
								.insertContentAt( range, [
									{
										type: 'mention',
										attrs: { id, label },
									},
									...( autoSpaceRef.current
										? [ { type: 'text', text: ' ' } ]
										: [] ),
								] )
								.run();
						},
						render() {
							return {
								onStart: onSuggestionStart,
								onUpdate: onSuggestionUpdate,
								onExit: onSuggestionExit,
								onKeyDown: onSuggestionKeyDown,
							};
						},
					},
				} ),
			],
			content: parseMarkup( defaultValue ),
			editable: ! disabled,
			autofocus: autoFocus,
			onUpdate( { editor: ed } ) {
				setIsEmpty( ed.isEmpty );
				if ( typeof onChange === 'function' ) {
					onChange( serializeToMarkup( ed.getJSON() ), ed );
				}
			},
			editorProps: {
				attributes: {
					class: cn(
						'editor-content focus-visible:outline-none outline-none',
						editableContentAreaCommonClassNames,
						className
					),
					...( style
						? { style: cssPropertiesToString( style ) }
						: {} ),
				},
				handleKeyDown( _view, event ) {
					if ( ! multiline && event.key === 'Enter' ) {
						return true;
					}
					return false;
				},
			},
		} );

		// Sync disabled state when prop changes
		useEffect( () => {
			if ( editor ) {
				editor.setEditable( ! disabled );
			}
		}, [ editor, disabled ] );

		// Expose editor via ref
		useImperativeHandle( ref, () => editor, [ editor ] );

		// Register keyboard handler for suggestion navigation
		useEffect( () => {
			if ( ! suggestionState ) {
				keyDownRef.current = null;
				return;
			}
			const items = suggestionState.items as TOptionItem[];

			keyDownRef.current = ( { event }: SuggestionKeyDownProps ): boolean => {
				if ( event.key === 'ArrowUp' ) {
					setSelectedIndex( ( i ) =>
						( i - 1 + Math.max( items.length, 1 ) ) %
						Math.max( items.length, 1 )
					);
					return true;
				}
				if ( event.key === 'ArrowDown' ) {
					setSelectedIndex( ( i ) => ( i + 1 ) % Math.max( items.length, 1 ) );
					return true;
				}
				if ( event.key === 'Enter' ) {
					const item = items[ selectedIndex ];
					if ( item ) {
						suggestionState.command( item );
					}
					return true;
				}
				return false;
			};
		}, [ suggestionState, selectedIndex ] );

		const suggestionItems = ( suggestionState?.items ?? [] ) as TOptionItem[];

		return (
			<EditorInputContext.Provider value={ { size, disabled } }>
				<div
					className={ cn(
						'relative w-full',
						editorCommonClassNames,
						editorInputClassNames[ size ],
						disabled && editorDisabledClassNames,
						wrapperClassName
					) }
				>
					<div className="relative w-full [&_p]:m-0">
						<EditorContent editor={ editor } />
						{ isEmpty && <EditorPlaceholder content={ placeholder } /> }
					</div>

					{ suggestionState && suggestionItems.length > 0 && (
						<MenuComponent size={ size }>
							{ suggestionItems.map( ( item, index ) => (
								<MenuItemComponent
									key={ index }
									ref={ ( el ) => {
										itemRefs.current[ index ] = el;
									} }
									size={ size }
									selected={ index === selectedIndex }
									onMouseEnter={ () => setSelectedIndex( index ) }
									onClick={ () => {
										suggestionState.command( item );
									} }
								>
									{ typeof item === 'string'
										? item
										: ( ( item[ by as string ] as string ) ?? '' ) }
								</MenuItemComponent>
							) ) }
						</MenuComponent>
					) }
				</div>
			</EditorInputContext.Provider>
		);
	}
);

EditorInput.displayName = 'EditorInput';

export default EditorInput;
