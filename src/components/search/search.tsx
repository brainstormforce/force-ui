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
} from '@floating-ui/react';

type TSearchContentValue = Partial<{
	size: 'sm' | 'md' | 'lg';
	searchTerm: string;
	isLoading: boolean;
	onOpenChange: ( open: boolean ) => void;
	refs: UseFloatingReturn['refs'];
	floatingStyles: UseFloatingReturn['floatingStyles'];
	getReferenceProps: UseInteractionsReturn['getReferenceProps'];
	getFloatingProps: UseInteractionsReturn['getFloatingProps'];
	setSearchTerm: React.Dispatch<React.SetStateAction<string | undefined>>;
	open: boolean;
	context: UseFloatingReturn['context'];
	setIsLoading: ( loading: boolean ) => void;
}>;

// Define a context for the SearchBox
const SearchContext = createContext<TSearchContentValue>( {} );

const useSearchContext = () => {
	return useContext<TSearchContentValue>( SearchContext );
};

// Define the Size type
type Size = 'sm' | 'md' | 'lg';

// Define a common interface for SearchBox props
export interface BaseSearchBoxProps {
	/** Additional class names for styling. */
	className?: string;

	/** Size of the SearchBox. */
	size?: 'sm' | 'md' | 'lg';

	/** Whether the dropdown is open. */
	open?: boolean;

	/** Callback when dropdown state changes. */
	onOpenChange?: ( open: boolean ) => void;

	/** Whether to show loading state. */
	loading?: boolean;

	/** Child components to be rendered. */
	children?: ReactNode;
}

type SearchBoxPortalProps = {
	/** Additional class names for styling. */
	className?: string;

	/** Child components to be rendered. */
	children: ReactNode;

	/** Unique identifier for the portal, which determines where the dropdown will be rendered in the DOM. */
	id?: string;

	/** The HTML element that serves as the root for the portal, defining the location in the DOM where the dropdown will be displayed. This can be null if no specific root is provided. */
	root?: HTMLElement | null;
};

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

export const SearchBox = forwardRef<HTMLDivElement, BaseSearchBoxProps>(
	(
		{
			className,
			size = 'sm' as Size,
			open = false,
			onOpenChange = () => {},
			loading = false,
			...props
		},
		ref
	) => {
		const [ searchTerm, setSearchTerm ] = useState<string | undefined>( '' );
		const [ isLoading, setIsLoading ] = useState<boolean>( loading ?? false );

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
		const dismiss = useDismiss( context );

		const { getReferenceProps, getFloatingProps } = useInteractions( [
			dismiss,
		] );

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
					searchTerm,
					setSearchTerm,
					isLoading,
					setIsLoading,
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

// Define props for SearchBoxInput
export interface SearchBoxInputProps extends BaseSearchBoxProps {
	/** Type of the input (e.g., text, search). */
	type?: string;

	/** Placeholder text for the input. */
	placeholder?: string;

	/** Style variant of the input. */
	variant?: 'primary' | 'secondary' | 'ghost';

	/** Whether the input is disabled. */
	disabled?: boolean;

	/** Callback for input changes. */
	onChange?: ( value: string ) => void;

	/** Child components to be rendered. */
	children?: ReactNode;
}

export const SearchBoxInput = forwardRef<HTMLInputElement, SearchBoxInputProps>(
	(
		{
			className,
			type = 'text',
			placeholder = 'Search...',
			variant = 'primary',
			disabled = false,
			onChange = () => {},
			...props
		},
		ref
	) => {
		const {
			size,
			onOpenChange,
			refs,
			getReferenceProps,
			searchTerm,
			setSearchTerm,
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

		return (
			<div
				ref={ refs!.setReference }
				className={ cn(
					'w-full group relative flex justify-center items-center gap-1.5 focus-within:z-10 transition-colors ease-in-out duration-150',
					variantClassNames[ variant ],
					sizeClassNames.input[ size! ],
					disabled
						? disabledClassNames[ variant ]
						: 'focus-within:ring-2 focus-within:ring-focus focus-within:ring-offset-2 focus-within:border-focus-border focus-within:hover:border-focus-border'
				) }
				{ ...getReferenceProps }
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
						'flex-grow font-medium bg-transparent border-none outline-none border-transparent focus:ring-0 py-0',
						disabled
							? disabledClassNames[ variant ]
							: [
								'text-field-placeholder focus-within:text-field-input group-hover:text-field-input',
								'placeholder:text-field-placeholder',
							],
						className
					) }
					disabled={ disabled }
					value={ searchTerm }
					onChange={ handleChange }
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

	/** Root element where the dropdown will be rendered. */
	dropdownPortalRoot?: HTMLElement | null;

	/** Id of the dropdown portal where the dropdown will be rendered. */
	dropdownPortalId?: string;

	/** Child components to be rendered inside the dropdown. */
	children: ReactNode;
}

export const SearchBoxContent = ( {
	className,
	dropdownPortalRoot, // Root element where the dropdown will be rendered.
	dropdownPortalId, // Id of the dropdown portal where the dropdown will be rendered.
	children,
	...props
}: SearchBoxContentProps ) => {
	const { size, open, refs, floatingStyles, getFloatingProps } =
		useSearchContext();

	if ( ! open ) {
		return null;
	}

	return (
		<FloatingPortal id={ dropdownPortalId } root={ dropdownPortalRoot }>
			<div
				ref={ refs!.setFloating }
				style={ {
					...floatingStyles,
				} }
				className={ cn(
					'bg-background-primary rounded-md border border-solid border-border-subtle shadow-soft-shadow-lg overflow-y-auto text-wrap',
					sizeClassNames.dialog[ size! ],
					className
				) }
				{ ...getFloatingProps!() }
				{ ...props }
			>
				{ children }
			</div>
		</FloatingPortal>
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
export interface SearchBoxListProps {
	/** Whether to filter children based on the search term. */
	filter?: boolean;

	/** Child components to be rendered. */
	children: ReactNode;
}

export const SearchBoxList = ( {
	filter = true,
	children,
}: SearchBoxListProps ) => {
	const { searchTerm, isLoading } = useSearchContext();

	if ( ! filter ) {
		return <div>{ children }</div>;
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
		<div>
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
}

export const SearchBoxItem = forwardRef<HTMLDivElement, SearchBoxItemProps>(
	( { className, icon, children, ...props }, ref ) => {
		const { size } = useSearchContext();
		return (
			<div
				ref={ ref }
				className={ cn(
					'flex items-center justify-start gap-1 p-1 hover:bg-background-secondary focus:bg-background-secondary cursor-pointer',
					sizeClassNames.item[ size! ]
				) }
				{ ...props }
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
						'flex-grow p-1 font-normal cursor-pointer',
						sizeClassNames.item[ size! ],
						className
					) }
				>
					{ children }
				</span>
			</div>
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
