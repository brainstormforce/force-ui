import React, {
	useState,
	type ReactNode,
	useEffect,
	forwardRef,
	createContext,
	useContext,
	Children,
	cloneElement,
} from 'react';
import { omit } from 'lodash'; // or define your own omit function
import { cn, getOperatingSystem } from '@/utilities/functions';
import { Search } from 'lucide-react';
import Loader from '../loader';
import Badge from '../badge';
import {
	textSizeClassNames,
	variantClassNames,
	disabledClassNames,
	sizeClassNames,
	iconClasses,
} from './styles';
import {
	autoUpdate,
	flip,
	FloatingPortal,
	offset,
	size as floatingSize,
	useDismiss,
	useFloating,
	useInteractions,
	type UseFloatingReturn,
	type UseInteractionsReturn,
	useListNavigation,
	FloatingFocusManager,
	FloatingList,
	useListItem,
} from '@floating-ui/react';

export interface CommonSearchBoxProps {
	/** Additional class names for styling. */
	className?: string;
}

// Define the Size type
type Size = 'sm' | 'md' | 'lg';

// Define a common interface for SearchBox props
export interface BaseSearchBoxProps {
	/** Additional class names for styling. */
	className?: string;

	/** Size of the SearchBox. */
	size?: 'sm' | 'md' | 'lg';

	/** Style variant of the input. */
	variant?: 'primary' | 'secondary' | 'ghost';

	/** Whether the dropdown is open. */
	open?: boolean;

	/** Callback when dropdown state changes. */
	onOpenChange?: ( open: boolean ) => void;

	/** Whether to filter children based on the search term. Turn off when you want to filter children manually. */
	filter?: boolean;

	/** Whether to show loading state. */
	loading?: boolean;

	/** Child components to be rendered. */
	children?: ReactNode;

	/** Clear search on clicking result item. */
	clearSearchOnClick?: boolean;

	/** Close on clicking result item. */
	closeOnClick?: boolean;
}

type SearchBoxPortalProps = {
	/** Child components to be rendered. */
	children: ReactNode;

	/** Unique identifier for the portal, which determines where the dropdown will be rendered in the DOM. */
	id?: string;

	/** The HTML element that serves as the root for the portal, defining the location in the DOM where the dropdown will be displayed. This can be null if no specific root is provided. */
	root?: HTMLElement | null;
};

// Define props for SearchBoxInput
export interface SearchBoxInputProps extends CommonSearchBoxProps {
	/** Type of the input (e.g., text, search). */
	type?: string;

	/** Placeholder text for the input. */
	placeholder?: string;

	/** Whether the input is disabled. */
	disabled?: boolean;

	/** Callback for input changes. */
	onChange?: ( value: string ) => void;

	/** Child components to be rendered. */
	children?: ReactNode;
}

// Extend the type to allow assigning subcomponents to SearchBox
type SearchBoxComponent = React.ForwardRefExoticComponent<
	BaseSearchBoxProps & React.RefAttributes<HTMLDivElement>
> & {
	Input: typeof SearchBoxInput;
	Loading: typeof SearchBoxLoading;
	Separator: typeof SearchBoxSeparator;
	Content: typeof SearchBoxContent;
	List: typeof SearchBoxList;
	Empty: typeof SearchBoxEmpty;
	Group: typeof SearchBoxGroup;
	Item: typeof SearchBoxItem;
	Portal: typeof SearchBoxPortal;
};

type TSearchContentValue = Partial<{
	size: 'sm' | 'md' | 'lg';
	searchTerm: string;
	isLoading: boolean;
	onOpenChange: ( open: boolean ) => void;
	refs: UseFloatingReturn['refs'];
	floatingStyles: UseFloatingReturn['floatingStyles'];
	getReferenceProps: UseInteractionsReturn['getReferenceProps'];
	getFloatingProps: UseInteractionsReturn['getFloatingProps'];
	getItemProps: (
		userProps?: React.HTMLProps<HTMLElement>
	) => Record<string, unknown>;
	activeIndex: number | null;
	setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
	listRef: React.MutableRefObject<( HTMLElement | null )[]>;
	setSearchTerm: React.Dispatch<React.SetStateAction<string | undefined>>;
	open: boolean;
	context: UseFloatingReturn['context'];
	setIsLoading: ( loading: boolean ) => void;
	clearSearchOnClick: boolean;
	closeOnClick: boolean;
	variant: BaseSearchBoxProps['variant'];
	filter: boolean;
}>;

// Define a context for the SearchBox
const SearchContext = createContext<TSearchContentValue>( {} );

const useSearchContext = () => {
	return useContext<TSearchContentValue>( SearchContext );
};

export const SearchBox = forwardRef<HTMLDivElement, BaseSearchBoxProps>(
	(
		{
			className,
			size = 'sm' as Size,
			open = false,
			onOpenChange = () => {},
			loading = false,
			clearSearchOnClick = false,
			closeOnClick = false,
			variant = 'primary',
			filter = true,
			...props
		},
		ref
	) => {
		const [ searchTerm, setSearchTerm ] = useState<string | undefined>( '' );
		const [ isLoading, setIsLoading ] = useState<boolean>( loading ?? false );
		const [ activeIndex, setActiveIndex ] = useState<number | null>( null );
		const listRef = React.useRef<( HTMLElement | null )[]>( [] );

		const { refs, floatingStyles, context } = useFloating( {
			open,
			onOpenChange,
			placement: 'bottom-start',
			whileElementsMounted: autoUpdate,
			middleware: [
				offset( size === 'sm' ? 4 : 6 ),
				flip( { padding: 10 } ),
				floatingSize( {
					apply( { rects, elements, availableHeight } ) {
						elements.floating.style.maxHeight = `${ availableHeight }px`;
						elements.floating.style.width = `${ rects.reference.width }px`;
						elements.floating.style.fontFamily =
							window.getComputedStyle(
								elements.reference as Element
							).fontFamily; // Retain parent's font family
					},
				} ),
			],
		} );

		const listNavigation = useListNavigation( context, {
			listRef,
			activeIndex,
			onNavigate: setActiveIndex,
			loop: true,
			// Prevent opening the dropdown with arrow keys
			openOnArrowKeyDown: false,
		} );

		const dismiss = useDismiss( context );

		const { getReferenceProps, getFloatingProps, getItemProps } =
			useInteractions( [ dismiss, listNavigation ] );

		useEffect( () => {
			const operatingSystem = getOperatingSystem();

			const handleKeyDown = ( event: KeyboardEvent ) => {
				const isMac = operatingSystem === 'Mac OS';
				const metaOrCtrlKey = isMac ? event.metaKey : event.ctrlKey;

				// Check if the Meta (command/windows) key and '/' are pressed together
				if ( event.key === '/' && metaOrCtrlKey ) {
					event.preventDefault();

					if ( refs.reference && refs.reference.current ) {
						const inputElement =
							refs.reference.current instanceof HTMLElement
								? refs.reference.current.querySelector( 'input' )
								: null;

						if ( inputElement ) {
							inputElement.focus();
						}
					}
				}
			};

			window.addEventListener( 'keydown', handleKeyDown );

			return () => {
				window.removeEventListener( 'keydown', handleKeyDown );
			};
		}, [ refs.reference ] );

		// Reset active index when closing dropdown
		useEffect( () => {
			if ( ! open ) {
				setActiveIndex( null );
			}
		}, [ open ] );

		return (
			<SearchContext.Provider
				value={ {
					size,
					open,
					onOpenChange,
					refs,
					floatingStyles,
					context,
					getReferenceProps,
					getFloatingProps,
					getItemProps,
					activeIndex,
					setActiveIndex,
					listRef,
					searchTerm,
					setSearchTerm,
					isLoading,
					setIsLoading,
					clearSearchOnClick,
					closeOnClick,
					variant,
					filter,
				} }
			>
				<div
					className={ cn(
						'searchbox-wrapper box-border relative w-full',
						className
					) }
					{ ...props }
					ref={ ref }
				/>
			</SearchContext.Provider>
		);
	}
) as SearchBoxComponent;
SearchBox.displayName = 'SearchBox';

export const SearchBoxInput = forwardRef<HTMLInputElement, SearchBoxInputProps>(
	(
		{
			className,
			type = 'text',
			placeholder = 'Search...',
			disabled = false,
			onChange = () => {},
			...props
		},
		ref
	) => {
		const {
			size,
			refs,
			getReferenceProps,
			searchTerm,
			setSearchTerm,
			open,
			setActiveIndex,
			listRef,
			onOpenChange,
			variant,
		} = useSearchContext();
		const badgeSize = size === 'lg' ? 'sm' : 'xs';

		const handleChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
			const newValue = event.target.value;
			setSearchTerm!( newValue );
			onChange( newValue );

			if ( typeof onOpenChange === 'function' ) {
				if ( newValue.trim() ) {
					onOpenChange( true ); // Open the dropdown
				} else {
					onOpenChange( false ); // Close the dropdown
				}
			}
		};

		const handleFocus = () => {
			if ( disabled || typeof onOpenChange !== 'function' ) {
				return;
			}
			if ( searchTerm?.trim() ) {
				onOpenChange!( true ); // Open the dropdown on focus if input is not empty
			}
		};

		const handleKeyDown = ( event: React.KeyboardEvent ) => {
			if ( disabled ) {
				return;
			}

			// Do not open dropdown on arrow keys
			if ( event.key === 'ArrowDown' || event.key === 'ArrowUp' ) {
				// Only navigate if dropdown is already open
				if ( open ) {
					event.preventDefault();
					if ( event.key === 'ArrowDown' ) {
						// Navigate to first item if none selected, otherwise listNavigation will handle it
						setActiveIndex!( ( prev ) => ( prev === null ? 0 : prev ) );
					} else if ( event.key === 'ArrowUp' ) {
						// Navigate to last item if none selected, otherwise listNavigation will handle it
						setActiveIndex!( ( prev ) => {
							// Get the length of the list to select the last item
							const listLength = listRef?.current?.length || 0;
							return prev === null && listLength > 0
								? listLength - 1
								: prev;
						} );
					}
				}
				// Do not open the dropdown
				return;
			}

			if ( event.key === 'Escape' ) {
				onOpenChange!( false );
			}
		};

		return (
			<div
				ref={ refs!.setReference }
				className={ cn(
					'w-full group relative flex justify-center items-center gap-1.5 focus-within:z-10 transition-all ease-in-out duration-200',
					variantClassNames[ variant! ],
					sizeClassNames.input[ size! ],
					disabled
						? disabledClassNames[ variant! ]
						: 'focus-within:ring-2 focus-within:ring-focus focus-within:ring-offset-2 focus-within:border-focus-border focus-within:hover:border-focus-border',
					className
				) }
				{ ...getReferenceProps!() }
			>
				<span
					className={ cn(
						textSizeClassNames[ size! ],
						disabled ? 'text-icon-disabled' : iconClasses,
						'flex justify-center items-center'
					) }
				>
					<Search />
				</span>
				<input
					type={ type }
					ref={ ref }
					className={ cn(
						textSizeClassNames[ size! ],
						'flex-grow font-medium bg-transparent border-none outline-none border-transparent focus:ring-0 p-0 min-h-fit',
						disabled &&
							'text-field-placeholder focus-within:text-field-input group-hover:text-field-input placeholder:text-field-placeholder'
					) }
					disabled={ disabled }
					value={ searchTerm }
					onChange={ handleChange }
					onFocus={ handleFocus }
					onKeyDown={ handleKeyDown }
					placeholder={ placeholder }
					// Omit custom props that are not valid for input
					{ ...omit( props, [
						'size',
						'open',
						'onOpenChange',
						'loading',
					] ) }
				/>
				<Badge
					label={ `⌘/` }
					size={ badgeSize }
					type="rounded"
					variant="neutral"
				/>
			</div>
		);
	}
);
SearchBoxInput.displayName = 'SearchBox.Input';

// Define props for SearchBoxContent
export interface SearchBoxContentProps {
	/** Additional class names for styling. */
	className?: string;

	/** Child components to be rendered inside the dropdown. */
	children: ReactNode;
}

export const SearchBoxContent = ( {
	className,
	children,
	...props
}: SearchBoxContentProps ) => {
	const { size, open, refs, floatingStyles, getFloatingProps, context } =
		useSearchContext();

	if ( ! open ) {
		return null;
	}

	return (
		<FloatingFocusManager
			context={ context! }
			initialFocus={ -1 }
			returnFocus={ true }
		>
			<div
				ref={ refs!.setFloating }
				style={ {
					...floatingStyles,
				} }
				className={ cn(
					'bg-background-primary rounded-md border border-solid border-border-subtle shadow-soft-shadow-lg overflow-y-auto text-wrap focus:outline-none',
					sizeClassNames.dialog[ size! ],
					className
				) }
				{ ...getFloatingProps!() }
				{ ...props }
			>
				{ children }
			</div>
		</FloatingFocusManager>
	);
};
SearchBoxContent.displayName = 'SearchBox.Content';

export const SearchBoxPortal = ( {
	children,
	id,
	root,
}: SearchBoxPortalProps ) => {
	return (
		<FloatingPortal id={ id } root={ root }>
			{ children }
		</FloatingPortal>
	);
};
SearchBoxPortal.displayName = 'SearchBox.Portal';

// Define props for SearchBoxList
export interface SearchBoxListProps extends CommonSearchBoxProps {
	/** Child components to be rendered. */
	children: ReactNode;
}

export const SearchBoxList = ( {
	children,
	className,
}: SearchBoxListProps ) => {
	const { searchTerm, isLoading, listRef, filter = true } = useSearchContext();

	if ( ! filter ) {
		return (
			<FloatingList elementsRef={ listRef! }>
				<div>{ children }</div>
			</FloatingList>
		);
	}
	const filteredChildren = Children.toArray( children )
		.map( ( child ) => {
			if ( React.isValidElement( child ) && child.type === SearchBoxGroup ) {
				const filteredItems = Children.toArray(
					child.props.children
				).filter(
					( item ) =>
						React.isValidElement( item ) &&
						typeof item.props.children === 'string' &&
						item.props.children
							.toLowerCase()
							.includes( searchTerm!.toLowerCase() )
				);
				return filteredItems.length > 0
					? cloneElement( child as React.ReactElement, {
						children: filteredItems,
					} )
					: null;
			}
			return child;
		} )
		.filter( Boolean );

	if ( isLoading ) {
		return <SearchBoxLoading />;
	}
	return (
		<FloatingList elementsRef={ listRef! }>
			<div className={ className }>
				{ filteredChildren.some(
					( child ) =>
						React.isValidElement( child ) &&
						child.type !== SearchBoxSeparator
				) ? (
						filteredChildren
					) : (
						<SearchBoxEmpty />
					) }
			</div>
		</FloatingList>
	);
};
SearchBoxList.displayName = 'SearchBox.List';

// Define props for SearchBoxEmpty
export interface SearchBoxEmptyProps {
	/** Content to display when there are no results. */
	children?: ReactNode;
}

export const SearchBoxEmpty = ( {
	children = 'No results found.',
}: SearchBoxEmptyProps ) => {
	const { size } = useSearchContext();
	return (
		<div
			className={ cn(
				'flex justify-center items-center',
				sizeClassNames.item[ size! ],
				'text-text-tertiary p-4'
			) }
		>
			{ children }
		</div>
	);
};
SearchBoxEmpty.displayName = 'SearchBox.Empty';

// Define props for SearchBoxGroup
export interface SearchBoxGroupProps {
	/** Heading for the group. */
	heading?: string;

	/** Child components to be rendered in the group. */
	children: ReactNode;
}

export const SearchBoxGroup = ( { heading, children }: SearchBoxGroupProps ) => {
	const { size } = useSearchContext();
	return (
		<div
			className={ cn(
				sizeClassNames.content[ size as 'sm' | 'md' | 'lg' ],
				sizeClassNames.item[ size! ]
			) }
		>
			{ heading && (
				<div
					className={ cn(
						sizeClassNames.title[ size! ],
						'text-text-tertiary'
					) }
				>
					{ heading }
				</div>
			) }
			{ children }
		</div>
	);
};
SearchBoxGroup.displayName = 'SearchBox.Group';

// Define props for SearchBoxItem
export interface SearchBoxItemProps {
	/** Additional class names for styling. */
	className?: string;

	/** Icon to display next to the item. */
	icon?: ReactNode;

	/** Child components to be rendered. */
	children: ReactNode;

	/** On click handler. */
	onClick?: () => void;
}

export const SearchBoxItem = forwardRef<HTMLButtonElement, SearchBoxItemProps>(
	( { className, icon, children, onClick, ...props }, ref ) => {
		const {
			size,
			setSearchTerm,
			clearSearchOnClick,
			getItemProps,
			activeIndex,
			onOpenChange,
			closeOnClick,
		} = useSearchContext();
		const { ref: itemRef, index } = useListItem();

		// Combine the refs
		const combinedRef = ( node: HTMLButtonElement | null ) => {
			if ( typeof ref === 'function' ) {
				ref( node );
			} else if ( ref ) {
				ref.current = node;
			}
			itemRef( node );
		};

		const isActive = activeIndex === index;

		const handleClick = () => {
			if ( typeof onClick === 'function' ) {
				onClick();
			}

			if ( clearSearchOnClick ) {
				setSearchTerm!( '' );
			}

			if ( closeOnClick ) {
				onOpenChange!( false );
			}
		};

		return (
			<button
				type="button"
				ref={ combinedRef }
				className={ cn(
					'flex w-full items-center justify-start gap-1 p-1 cursor-pointer border-none bg-transparent text-left focus:outline-none',
					isActive && 'bg-background-secondary',
					! isActive &&
						'hover:bg-background-secondary focus:bg-background-secondary',
					sizeClassNames.item[ size! ],
					className
				) }
				{ ...getItemProps?.( {
					role: 'option',
					'aria-selected': isActive,
					onClick: handleClick,
					...props,
				} ) }
			>
				{ icon && (
					<span
						className={ cn(
							sizeClassNames.icon[ size! ],
							'flex items-center justify-center'
						) }
					>
						{ icon }
					</span>
				) }
				<span
					className={ cn(
						'flex-grow p-1 font-normal',
						sizeClassNames.item[ size! ],
					) }
				>
					{ children }
				</span>
			</button>
		);
	}
);
SearchBoxItem.displayName = 'SearchBox.Item';

// Define props for SearchBoxLoading
export interface SearchBoxLoadingProps {
	/** Loading icon to display while loading. */
	loadingIcon?: ReactNode & { size?: string };
}

export const SearchBoxLoading = ( {
	loadingIcon = <Loader />,
}: SearchBoxLoadingProps ) => {
	const { size } = useSearchContext();

	// Clone the loadingIcon element to pass the size prop
	const loadingIconWithSize = React.isValidElement( loadingIcon )
		? cloneElement( loadingIcon, { size } )
		: loadingIcon;
	return (
		<div
			className={ cn(
				'flex justify-center p-4',
				textSizeClassNames[ size! ],
				sizeClassNames.item[ size! ]
			) }
		>
			{ loadingIconWithSize }
		</div>
	);
};
SearchBoxLoading.displayName = 'SearchBox.Loading';

// Define props for SearchBoxSeparator
export interface SearchBoxSeparatorProps {
	/** Additional class names for styling. */
	className?: string;
}

export const SearchBoxSeparator = forwardRef<
	HTMLHRElement,
	SearchBoxSeparatorProps
>( ( { className, ...props }, ref ) => (
	<hr
		ref={ ref }
		className={ cn(
			'border-0 border-t border-border-subtle border-solid m-0',
			className
		) }
		{ ...props }
	/>
) );
SearchBoxSeparator.displayName = 'SearchBox.Separator';

SearchBox.Input = SearchBoxInput;
SearchBox.Loading = SearchBoxLoading;
SearchBox.Separator = SearchBoxSeparator;
SearchBox.Content = SearchBoxContent;
SearchBox.List = SearchBoxList;
SearchBox.Empty = SearchBoxEmpty;
SearchBox.Group = SearchBoxGroup;
SearchBox.Item = SearchBoxItem;
SearchBox.Portal = SearchBoxPortal;
export default SearchBox;
