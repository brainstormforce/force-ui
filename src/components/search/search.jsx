import {
	useState,
	forwardRef,
	createContext,
	useContext,
	Children,
	cloneElement,
} from 'react';
import { cn } from '@/utilities/functions';
import { Search } from 'lucide-react';
import Loader from '../loader';
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
} from '@floating-ui/react';

const SearchContext = createContext();

const useSearchContext = () => {
	return useContext( SearchContext );
};

const SearchBox = forwardRef(
	(
		{
			className,
			size = 'sm',
			open = false,
			onOpenChange = () => {},
			loading = false,
			...props
		},
		ref
	) => {
		const [ searchTerm, setSearchTerm ] = useState( '' );
		const [ isLoading, setIsLoading ] = useState( loading ?? false );

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
								elements.reference
							).fontFamily; // Retain parent's font family
					},
				} ),
			],
		} );
		const dismiss = useDismiss( context );

		const { getReferenceProps, getFloatingProps } = useInteractions( [
			dismiss,
		] );

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
);
SearchBox.displayName = 'SearchBox';

const SearchBoxInput = forwardRef(
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

		const handleChange = ( event ) => {
			const newValue = event.target.value;
			setSearchTerm( newValue );
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
				tabIndex={ 0 }
				ref={ refs.setReference }
				className={ cn(
					'w-full group relative flex justify-center items-center gap-1.5 focus-within:z-10 transition-colors ease-in-out duration-150',
					variantClassNames[ variant ],
					sizeClassNames.input[ size ],
					disabled
						? disabledClassNames[ variant ]
						: 'focus-within:ring-2 focus-within:ring-focus focus-within:ring-offset-2 focus-within:border-focus-border focus-within:hover:border-focus-border'
				) }
				{ ...getReferenceProps }
			>
				<span
					className={ cn(
						textSizeClassNames[ size ],
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
						textSizeClassNames[ size ],
						'flex-grow font-medium bg-transparent border-none outline-none border-transparent focus:ring-0',
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
					{ ...props }
				/>
				<span
					className={ cn(
						textSizeClassNames[ size ],
						disabled ? 'text-icon-disabled' : iconClasses,
						'bg-field-secondary-background border border-solid border-field-border',
						sizeClassNames.slashIcon[ size ]
					) }
				>
					/
				</span>
			</div>
		);
	}
);
SearchBoxInput.displayName = 'SearchBox.Input';

const SearchBoxContent = ( {
	className,
	dropdownPortalRoot = null, // Root element where the dropdown will be rendered.
	dropdownPortalId = '', // Id of the dropdown portal where the dropdown will be rendered.
	children,
	...props
} ) => {
	const { size, open, refs, floatingStyles, getFloatingProps } =
		useSearchContext();

	if ( ! open ) {
		return null;
	}

	return (
		<FloatingPortal id={ dropdownPortalId } root={ dropdownPortalRoot }>
			<div
				ref={ refs.setFloating }
				style={ {
					...floatingStyles,
				} }
				className={ cn(
					'bg-background-primary rounded-md border border-solid border-border-subtle shadow-soft-shadow-lg overflow-y-auto text-wrap',
					sizeClassNames.dialog[ size ],
					className
				) }
				{ ...getFloatingProps() }
				{ ...props }
			>
				{ children }
			</div>
		</FloatingPortal>
	);
};
SearchBoxContent.displayName = 'SearchBox.Content';

const SearchBoxList = ( { filter = true, children } ) => {
	const { searchTerm, isLoading } = useSearchContext();

	if ( ! filter ) {
		return <div>{ children }</div>;
	}
	const filteredChildren = Children.toArray( children )
		.map( ( child ) => {
			if ( child.type === SearchBoxGroup ) {
				const filteredItems = Children.toArray(
					child.props.children
				).filter( ( item ) =>
					item.props.children
						.toLowerCase()
						.includes( searchTerm.toLowerCase() )
				);
				return filteredItems.length > 0
					? cloneElement( child, { children: filteredItems } )
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
				( child ) => child.type !== SearchBoxSeparator
			) ? (
					filteredChildren
				) : (
					<SearchBoxEmpty />
				) }
		</div>
	);
};
SearchBoxList.displayName = 'SearchBox.List';

const SearchBoxEmpty = ( { children = 'No results found.' } ) => {
	const { size } = useSearchContext();
	return (
		<div
			className={ cn(
				'flex justify-center items-center',
				sizeClassNames.item[ size ],
				'text-text-tertiary p-4'
			) }
		>
			{ children }
		</div>
	);
};
SearchBoxEmpty.displayName = 'SearchBox.Empty';

const SearchBoxGroup = ( { heading, children } ) => {
	const { size } = useSearchContext();
	return (
		<div
			className={ cn(
				sizeClassNames.content[ size ],
				sizeClassNames.item[ size ]
			) }
		>
			{ heading && (
				<div
					className={ cn(
						sizeClassNames.title[ size ],
						'text-text-secondary'
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

const SearchBoxItem = forwardRef(
	( { className, icon, children, ...props }, ref ) => {
		const { size } = useSearchContext();
		return (
			<div
				ref={ ref }
				className={ cn(
					'flex items-center justify-start gap-1 p-1 hover:bg-background-secondary focus:bg-background-secondary cursor-pointer',
					sizeClassNames.item[ size ]
				) }
				{ ...props }
			>
				{ icon && (
					<span
						className={ cn(
							sizeClassNames.icon[ size ],
							'flex items-center justify-center'
						) }
					>
						{ icon }
					</span>
				) }
				<span
					className={ cn(
						'flex-grow p-1 font-normal cursor-pointer',
						sizeClassNames.item[ size ],
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

const SearchBoxLoading = ( { loadingIcon = <Loader /> } ) => {
	const { size } = useSearchContext();

	// Clone the loadingIcon element to pass the size prop
	const loadingIconWithSize = cloneElement( loadingIcon, { size } );
	return (
		<div
			className={ cn(
				'flex justify-center p-4',
				textSizeClassNames[ size ],
				sizeClassNames.item[ size ]
			) }
		>
			{ loadingIconWithSize }
		</div>
	);
};
SearchBoxLoading.displayName = 'SearchBox.Loading';

const SearchBoxSeparator = forwardRef( ( { className, ...props }, ref ) => (
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

export default SearchBox;
