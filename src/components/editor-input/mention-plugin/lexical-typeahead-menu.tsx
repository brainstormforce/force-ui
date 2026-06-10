/**
 * A custom port of `@lexical/react`'s LexicalTypeaheadMenuPlugin.
 *
 * Lexical 0.38 removed the `menuRenderFn` prop from the published
 * `LexicalTypeaheadMenuPlugin`, so it always renders its own built-in menu.
 * This component restores the `menuRenderFn` contract (as it existed in 0.31)
 * so the mention plugin can keep rendering its custom `EditorCombobox` and
 * honour the public `menuComponent` / `menuItemComponent` props.
 *
 * The trigger-matching, node-splitting, positioning and keyboard behaviour are
 * ported faithfully from lexical 0.38's source; only the final render is
 * delegated to the supplied `menuRenderFn`. Helpers that lexical still exports
 * (`MenuOption`, `useDynamicPositioning`) are reused rather than re-copied.
 */
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
	MenuOption,
	useDynamicPositioning,
} from '@lexical/react/LexicalTypeaheadMenuPlugin';
import { mergeRegister } from '@lexical/utils';
import {
	$getSelection,
	$isRangeSelection,
	$isTextNode,
	COMMAND_PRIORITY_LOW,
	createCommand,
	getDOMSelectionForEditor,
	KEY_ARROW_DOWN_COMMAND,
	KEY_ARROW_UP_COMMAND,
	KEY_ENTER_COMMAND,
	KEY_ESCAPE_COMMAND,
	KEY_TAB_COMMAND,
	type CommandListenerPriority,
	type LexicalCommand,
	type LexicalEditor,
	type RangeSelection,
	type TextNode,
} from 'lexical';
import {
	startTransition,
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
	type MutableRefObject,
	type ReactNode,
} from 'react';

const CAN_USE_DOM =
	typeof window !== 'undefined' &&
	typeof window.document !== 'undefined' &&
	typeof window.document.createElement !== 'undefined';

const useLayoutEffectImpl = CAN_USE_DOM ? useLayoutEffect : useEffect;

export type MenuTextMatch = {
	leadOffset: number;
	matchingString: string;
	replaceableString: string;
};

export type MenuResolution = {
	match?: MenuTextMatch;
	getRect: () => DOMRect;
};

export type TriggerFn = (
	text: string,
	editor: LexicalEditor
) => MenuTextMatch | null;

export type MenuRenderFn< TOption extends MenuOption > = (
	anchorElementRef: MutableRefObject< HTMLElement | null >,
	itemProps: {
		selectedIndex: number | null;
		selectOptionAndCleanUp: ( option: TOption ) => void;
		setHighlightedIndex: ( index: number ) => void;
	},
	matchingString: string | null
) => ReactNode;

const SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND: LexicalCommand< {
	index: number;
	option: MenuOption;
} > = createCommand( 'SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND' );

// Compute the next/previous highlighted index, wrapping at the list bounds.
function getNextSelectedIndex(
	selectedIndex: number | null,
	length: number
): number {
	if ( selectedIndex === null ) {
		return 0;
	}
	return selectedIndex !== length - 1 ? selectedIndex + 1 : 0;
}

function getPrevSelectedIndex(
	selectedIndex: number | null,
	length: number
): number {
	if ( selectedIndex === null ) {
		return length - 1;
	}
	return selectedIndex !== 0 ? selectedIndex - 1 : length - 1;
}

const scrollIntoViewIfNeeded = ( target: HTMLElement ) => {
	// Scroll the highlighted option into view within its own scroll container
	// (the menu has a max-height + overflow). The previous implementation
	// looked up `#typeahead-menu` on `document`, which is null inside a Shadow
	// DOM and made it bail before scrolling — so keyboard navigation could not
	// reveal options below the fold. Scrolling the target directly works in
	// both light and shadow DOM.
	target.scrollIntoView( { block: 'nearest', inline: 'nearest' } );
};

// Walk backwards along user input and forward through entity title to try
// and replace more of the user's text with entity.
function getFullMatchOffset(
	documentText: string,
	entryText: string,
	offset: number
): number {
	let triggerOffset = offset;
	for ( let i = triggerOffset; i <= entryText.length; i++ ) {
		if ( documentText.slice( -i ) === entryText.substring( 0, i ) ) {
			triggerOffset = i;
		}
	}
	return triggerOffset;
}

// Split Lexical TextNode and return a new TextNode only containing matched text.
function $splitNodeContainingQuery( match: MenuTextMatch ): TextNode | null {
	const selection = $getSelection();
	if ( ! $isRangeSelection( selection ) || ! selection.isCollapsed() ) {
		return null;
	}
	const anchor = selection.anchor;
	if ( anchor.type !== 'text' ) {
		return null;
	}
	const anchorNode = anchor.getNode();
	if ( ! anchorNode.isSimpleText() ) {
		return null;
	}
	const selectionOffset = anchor.offset;
	const textContent = anchorNode
		.getTextContent()
		.slice( 0, selectionOffset );
	const characterOffset = match.replaceableString.length;
	const queryOffset = getFullMatchOffset(
		textContent,
		match.matchingString,
		characterOffset
	);
	const startOffset = selectionOffset - queryOffset;
	if ( startOffset < 0 ) {
		return null;
	}
	let newNode;
	if ( startOffset === 0 ) {
		[ newNode ] = anchorNode.splitText( selectionOffset );
	} else {
		[ , newNode ] = anchorNode.splitText( startOffset, selectionOffset );
	}
	return newNode;
}

function getTextUpToAnchor( selection: RangeSelection ): string | null {
	const anchor = selection.anchor;
	if ( anchor.type !== 'text' ) {
		return null;
	}
	const anchorNode = anchor.getNode();
	if ( ! anchorNode.isSimpleText() ) {
		return null;
	}
	const anchorOffset = anchor.offset;
	return anchorNode.getTextContent().slice( 0, anchorOffset );
}

function tryToPositionRange(
	leadOffset: number,
	range: Range,
	editor: LexicalEditor
): boolean {
	const domSelection = getDOMSelectionForEditor( editor );
	if ( domSelection === null || ! domSelection.isCollapsed ) {
		return false;
	}
	const anchorNode = domSelection.anchorNode;
	const startOffset = leadOffset;
	const endOffset = domSelection.anchorOffset;
	if ( anchorNode === null || endOffset === null ) {
		return false;
	}
	try {
		range.setStart( anchorNode, startOffset );
		range.setEnd( anchorNode, endOffset );
	} catch {
		return false;
	}
	return true;
}

function getQueryTextForSearch( editor: LexicalEditor ): string | null {
	let text: string | null = null;
	editor.getEditorState().read( () => {
		const selection = $getSelection();
		if ( ! $isRangeSelection( selection ) ) {
			return;
		}
		text = getTextUpToAnchor( selection );
	} );
	return text;
}

function isSelectionOnEntityBoundary(
	editor: LexicalEditor,
	offset: number
): boolean {
	if ( offset !== 0 ) {
		return false;
	}
	return editor.getEditorState().read( () => {
		const selection = $getSelection();
		if ( $isRangeSelection( selection ) ) {
			const anchor = selection.anchor;
			const anchorNode = anchor.getNode();
			const prevSibling = anchorNode.getPreviousSibling();
			return (
				$isTextNode( prevSibling ) && prevSibling.isTextEntity()
			);
		}
		return false;
	} );
}

function setContainerDivAttributes(
	containerDiv: HTMLElement,
	className?: string
) {
	if ( className !== undefined ) {
		containerDiv.className = className;
	}
	containerDiv.setAttribute( 'aria-label', 'Typeahead menu' );
	containerDiv.setAttribute( 'role', 'listbox' );
	containerDiv.style.display = 'block';
	containerDiv.style.position = 'absolute';
}

function useMenuAnchorRef(
	resolution: MenuResolution | null,
	setResolution: ( r: MenuResolution | null ) => void,
	className?: string,
	parent: HTMLElement | undefined = CAN_USE_DOM ? document.body : undefined,
	shouldIncludePageYOffset = true
): MutableRefObject< HTMLElement | null > {
	const [ editor ] = useLexicalComposerContext();
	const anchorElementRef = useRef< HTMLElement | null >( null );
	// Create the anchor element lazily, only once a menu actually has to be
	// shown. Creating and appending it eagerly on every mount (as lexical
	// 0.38 does) appends/removes a <div> on document.body for every editor
	// instance, forcing style recalcs on heavy pages — very visible when a
	// consumer mounts many editors or remounts them while typing. The element
	// is created during render (lazy ref init) but only appended in
	// positionMenu(), which runs from an effect.
	if ( resolution !== null && anchorElementRef.current === null && CAN_USE_DOM ) {
		anchorElementRef.current = document.createElement( 'div' );
	}
	const positionMenu = useCallback( () => {
		if ( anchorElementRef.current === null || parent === undefined ) {
			return;
		}
		anchorElementRef.current.style.top =
			anchorElementRef.current.style.bottom;
		const rootElement = editor.getRootElement();
		const containerDiv = anchorElementRef.current;
		const menuEle = containerDiv.firstChild as HTMLElement | null;
		if ( rootElement !== null && resolution !== null ) {
			const { left, top, width, height } = resolution.getRect();
			const anchorHeight = anchorElementRef.current.offsetHeight;
			containerDiv.style.top = `${
				top +
				anchorHeight +
				3 +
				( shouldIncludePageYOffset ? window.pageYOffset : 0 )
			}px`;
			containerDiv.style.left = `${ left + window.pageXOffset }px`;
			containerDiv.style.height = `${ height }px`;
			containerDiv.style.width = `${ width }px`;
			if ( menuEle !== null ) {
				menuEle.style.top = `${ top }`;
				const menuRect = menuEle.getBoundingClientRect();
				const menuHeight = menuRect.height;
				const menuWidth = menuRect.width;
				const rootElementRect = rootElement.getBoundingClientRect();
				if ( left + menuWidth > rootElementRect.right ) {
					containerDiv.style.left = `${
						rootElementRect.right - menuWidth + window.pageXOffset
					}px`;
				}
				if (
					( top + menuHeight > window.innerHeight ||
						top + menuHeight > rootElementRect.bottom ) &&
					top - rootElementRect.top > menuHeight + height
				) {
					containerDiv.style.top = `${
						top -
						menuHeight -
						height +
						( shouldIncludePageYOffset ? window.pageYOffset : 0 )
					}px`;
				}
			}
			if ( ! containerDiv.isConnected ) {
				setContainerDivAttributes( containerDiv, className );
				parent.append( containerDiv );
			}
			containerDiv.setAttribute( 'id', 'typeahead-menu' );
			rootElement.setAttribute( 'aria-controls', 'typeahead-menu' );
		}
	}, [
		editor,
		resolution,
		shouldIncludePageYOffset,
		className,
		parent,
	] );

	useEffect( () => {
		const rootElement = editor.getRootElement();
		if ( resolution !== null ) {
			positionMenu();
		}
		return () => {
			if ( rootElement !== null ) {
				rootElement.removeAttribute( 'aria-controls' );
			}
			const containerDiv = anchorElementRef.current;
			if ( containerDiv !== null && containerDiv.isConnected ) {
				containerDiv.remove();
				containerDiv.removeAttribute( 'id' );
			}
		};
	}, [ editor, positionMenu, resolution ] );

	const onVisibilityChange = useCallback(
		( isInView: boolean ) => {
			if ( resolution !== null ) {
				if ( ! isInView ) {
					setResolution( null );
				}
			}
		},
		[ resolution, setResolution ]
	);

	useDynamicPositioning(
		resolution,
		anchorElementRef.current,
		positionMenu,
		onVisibilityChange
	);

	return anchorElementRef;
}

type LexicalMenuProps< TOption extends MenuOption > = {
	close: () => void;
	editor: LexicalEditor;
	anchorElementRef: MutableRefObject< HTMLElement | null >;
	resolution: MenuResolution;
	options: Array< TOption >;
	menuRenderFn: MenuRenderFn< TOption >;
	onSelectOption: (
		option: TOption,
		textNodeContainingQuery: TextNode | null,
		closeMenu: () => void,
		matchingString: string
	) => void;
	shouldSplitNodeWithQuery?: boolean;
	commandPriority?: CommandListenerPriority;
	preselectFirstItem?: boolean;
};

function LexicalMenu< TOption extends MenuOption >( {
	close,
	editor,
	anchorElementRef,
	resolution,
	options,
	menuRenderFn,
	onSelectOption,
	shouldSplitNodeWithQuery = false,
	commandPriority = COMMAND_PRIORITY_LOW,
	preselectFirstItem = true,
}: LexicalMenuProps< TOption > ): ReactNode {
	const [ rawSelectedIndex, setHighlightedIndex ] = useState<
		number | null
	>( null );
	const selectedIndex =
		rawSelectedIndex !== null
			? Math.min( options.length - 1, rawSelectedIndex )
			: null;
	const matchingString =
		( resolution.match && resolution.match.matchingString ) || null;

	useEffect( () => {
		if ( preselectFirstItem ) {
			setHighlightedIndex( 0 );
		}
	}, [ matchingString, preselectFirstItem ] );

	const selectOptionAndCleanUp = useCallback(
		( selectedEntry: TOption ) => {
			editor.update( () => {
				const textNodeContainingQuery =
					resolution.match && shouldSplitNodeWithQuery
						? $splitNodeContainingQuery( resolution.match )
						: null;
				onSelectOption(
					selectedEntry,
					textNodeContainingQuery,
					close,
					resolution.match ? resolution.match.matchingString : ''
				);
			} );
		},
		[
			editor,
			shouldSplitNodeWithQuery,
			resolution.match,
			onSelectOption,
			close,
		]
	);

	const updateSelectedIndex = useCallback(
		( index: number ) => {
			const rootElem = editor.getRootElement();
			if ( rootElem !== null ) {
				rootElem.setAttribute(
					'aria-activedescendant',
					'typeahead-item-' + index
				);
				setHighlightedIndex( index );
			}
		},
		[ editor ]
	);

	useEffect( () => {
		return () => {
			const rootElem = editor.getRootElement();
			if ( rootElem !== null ) {
				rootElem.removeAttribute( 'aria-activedescendant' );
			}
		};
	}, [ editor ] );

	useLayoutEffectImpl( () => {
		if ( options === null ) {
			setHighlightedIndex( null );
		} else if ( selectedIndex === null && preselectFirstItem ) {
			updateSelectedIndex( 0 );
		}
	}, [ options, selectedIndex, updateSelectedIndex, preselectFirstItem ] );

	useEffect( () => {
		return mergeRegister(
			editor.registerCommand(
				SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND,
				( { option } ) => {
					if ( option.ref && option.ref.current !== null ) {
						scrollIntoViewIfNeeded( option.ref.current );
						return true;
					}
					return false;
				},
				commandPriority
			)
		);
	}, [ editor, updateSelectedIndex, commandPriority ] );

	useEffect( () => {
		return mergeRegister(
			editor.registerCommand(
				KEY_ARROW_DOWN_COMMAND,
				( payload ) => {
					const event = payload;
					if ( options !== null && options.length ) {
						const newSelectedIndex = getNextSelectedIndex(
							selectedIndex,
							options.length
						);
						updateSelectedIndex( newSelectedIndex );
						const option = options[ newSelectedIndex ];
						if ( ! option ) {
							updateSelectedIndex( -1 );
							event.preventDefault();
							event.stopImmediatePropagation();
							return true;
						}
						if ( option.ref && option.ref.current ) {
							editor.dispatchCommand(
								SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND,
								{ index: newSelectedIndex, option }
							);
						}
						event.preventDefault();
						event.stopImmediatePropagation();
					}
					return true;
				},
				commandPriority
			),
			editor.registerCommand(
				KEY_ARROW_UP_COMMAND,
				( payload ) => {
					const event = payload;
					if ( options !== null && options.length ) {
						const newSelectedIndex = getPrevSelectedIndex(
							selectedIndex,
							options.length
						);
						updateSelectedIndex( newSelectedIndex );
						const option = options[ newSelectedIndex ];
						if ( ! option ) {
							updateSelectedIndex( -1 );
							event.preventDefault();
							event.stopImmediatePropagation();
							return true;
						}
						if ( option.ref && option.ref.current ) {
							scrollIntoViewIfNeeded( option.ref.current );
						}
						event.preventDefault();
						event.stopImmediatePropagation();
					}
					return true;
				},
				commandPriority
			),
			editor.registerCommand(
				KEY_ESCAPE_COMMAND,
				( payload ) => {
					const event = payload;
					event.preventDefault();
					event.stopImmediatePropagation();
					close();
					return true;
				},
				commandPriority
			),
			editor.registerCommand(
				KEY_TAB_COMMAND,
				( payload ) => {
					const event = payload;
					if (
						options === null ||
						selectedIndex === null ||
						! options[ selectedIndex ]
					) {
						return false;
					}
					event.preventDefault();
					event.stopImmediatePropagation();
					selectOptionAndCleanUp( options[ selectedIndex ] );
					return true;
				},
				commandPriority
			),
			editor.registerCommand(
				KEY_ENTER_COMMAND,
				( event ) => {
					if (
						options === null ||
						selectedIndex === null ||
						! options[ selectedIndex ]
					) {
						return false;
					}
					if ( event !== null ) {
						event.preventDefault();
						event.stopImmediatePropagation();
					}
					selectOptionAndCleanUp( options[ selectedIndex ] );
					return true;
				},
				commandPriority
			)
		);
	}, [
		selectOptionAndCleanUp,
		close,
		editor,
		options,
		selectedIndex,
		updateSelectedIndex,
		commandPriority,
	] );

	return menuRenderFn(
		anchorElementRef,
		{ selectedIndex, selectOptionAndCleanUp, setHighlightedIndex },
		matchingString
	);
}

export type TypeaheadMenuPluginProps< TOption extends MenuOption > = {
	onQueryChange: ( matchingString: string | null ) => void;
	onSelectOption: (
		option: TOption,
		textNodeContainingQuery: TextNode | null,
		closeMenu: () => void,
		matchingString: string
	) => void;
	options: Array< TOption >;
	menuRenderFn: MenuRenderFn< TOption >;
	triggerFn: TriggerFn;
	onOpen?: ( resolution: MenuResolution ) => void;
	onClose?: () => void;
	anchorClassName?: string;
	commandPriority?: CommandListenerPriority;
	parent?: HTMLElement;
	preselectFirstItem?: boolean;
	ignoreEntityBoundary?: boolean;
};

export function LexicalTypeaheadMenuPlugin< TOption extends MenuOption >( {
	options,
	onQueryChange,
	onSelectOption,
	onOpen,
	onClose,
	menuRenderFn,
	triggerFn,
	anchorClassName,
	commandPriority = COMMAND_PRIORITY_LOW,
	parent,
	preselectFirstItem = true,
	ignoreEntityBoundary = false,
}: TypeaheadMenuPluginProps< TOption > ): ReactNode {
	const [ editor ] = useLexicalComposerContext();
	const [ resolution, setResolution ] = useState< MenuResolution | null >(
		null
	);
	const anchorElementRef = useMenuAnchorRef(
		resolution,
		setResolution,
		anchorClassName,
		parent
	);

	const closeTypeahead = useCallback( () => {
		setResolution( null );
		if ( onClose !== undefined && resolution !== null ) {
			onClose();
		}
	}, [ onClose, resolution ] );

	const openTypeahead = useCallback(
		( res: MenuResolution ) => {
			setResolution( res );
			if ( onOpen !== undefined && resolution === null ) {
				onOpen( res );
			}
		},
		[ onOpen, resolution ]
	);

	useEffect( () => {
		const updateListener = () => {
			editor.getEditorState().read( () => {
				if ( ! editor.isEditable() ) {
					closeTypeahead();
					return;
				}
				if ( editor.isComposing() ) {
					return;
				}
				const editorWindow =
					( editor._window as Window | null ) || window;
				const range = editorWindow.document.createRange();
				const selection = $getSelection();
				const text = getQueryTextForSearch( editor );
				if (
					! $isRangeSelection( selection ) ||
					! selection.isCollapsed() ||
					text === null ||
					range === null
				) {
					closeTypeahead();
					return;
				}
				const match = triggerFn( text, editor );
				onQueryChange( match ? match.matchingString : null );
				if (
					match !== null &&
					( ignoreEntityBoundary ||
						! isSelectionOnEntityBoundary(
							editor,
							match.leadOffset
						) )
				) {
					const isRangePositioned = tryToPositionRange(
						match.leadOffset,
						range,
						editor
					);
					if ( isRangePositioned ) {
						startTransition( () =>
							openTypeahead( {
								getRect: () =>
									range.getBoundingClientRect(),
								match,
							} )
						);
						return;
					}
				}
				closeTypeahead();
			} );
		};
		const removeUpdateListener =
			editor.registerUpdateListener( updateListener );
		return () => {
			removeUpdateListener();
		};
	}, [
		editor,
		triggerFn,
		onQueryChange,
		resolution,
		closeTypeahead,
		openTypeahead,
		ignoreEntityBoundary,
	] );

	useEffect(
		() =>
			editor.registerEditableListener( ( isEditable ) => {
				if ( ! isEditable ) {
					closeTypeahead();
				}
			} ),
		[ editor, closeTypeahead ]
	);

	return resolution === null ||
		editor === null ||
		anchorElementRef.current === null ? null : (
			<LexicalMenu
				close={ closeTypeahead }
				resolution={ resolution }
				editor={ editor }
				anchorElementRef={ anchorElementRef }
				options={ options }
				menuRenderFn={ menuRenderFn }
				shouldSplitNodeWithQuery={ true }
				onSelectOption={ onSelectOption }
				commandPriority={ commandPriority }
				preselectFirstItem={ preselectFirstItem }
			/>
		);
}

export { MenuOption };
