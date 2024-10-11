import {
	useState,
	forwardRef,
	useRef,
	createContext,
	useContext,
	Children,
} from 'react';
import { cn } from '@/utilities/functions';
import { Search } from 'lucide-react';
import Loader from '../loader';
import {
	textSizeClassNames,
	variantClassNames,
	disabledClassNames,
	sizeClassNames,
	IconClasses,
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
			className, // Custom class names for additional styling
			size = 'sm', // Size of the SearchBox (default is 'sm')
			open = false, // Controls whether the dropdown is open or not (default is false)
			onOpenChange = () => {}, // Callback function to handle the open state change
			...props // Any additional props that are passed
		},
		ref
	) => {
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
					size, // Pass size to context
					open, // Pass open state to context
					onOpenChange, // Pass onOpenChange handler to context
					refs, // Pass refs to context
					floatingStyles, // Pass floating styles to context
					context, // Pass context to context (nested contexts)
					getReferenceProps, // Reference props for floating elements
					getFloatingProps, // Floating props for dropdown content
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
			className, // Custom class names for input styling
			type = 'text', // Input type (default is 'text')
			placeholder = 'Search...', // Placeholder text for input
			variant = 'primary', // Input variant (default is 'primary')
			disabled = false, // Whether input is disabled or not
			value, // Controlled value for the input
			defaultValue, // Default value if uncontrolled
			onChange, // Callback for handling value changes
			...props // Any additional props
		},
		ref
	) => {
		const [ internalValue, setInternalValue ] = useState( defaultValue || '' );
		const isControlled = useRef( value !== undefined );
		const { size, onOpenChange, refs, getReferenceProps } =
			useSearchContext();

		const handleChange = ( event ) => {
			const newValue = event.target.value;
			if ( ! isControlled.current ) {
				setInternalValue( newValue );
			}
			onChange?.( newValue, event );
			if ( typeof onOpenChange === 'function' ) {
				if ( newValue.trim() ) {
					onOpenChange( true ); // Open the dropdown
				} else {
					onOpenChange( false ); // Close the dropdown
				}
			}
		};

		const inputValue = isControlled.current ? value : internalValue;

		return (
			<div
				tabIndex={ 0 }
				ref={ refs.setReference }
				className={ cn(
					'w-full group relative flex justify-center items-center gap-1.5 focus-within:z-10 transition-colors ease-in-out duration-150',
					variantClassNames[ variant ],
					sizeClassNames.input[ size ],
					disabled
						? disabledClassNames
						: 'focus-within:ring-2 focus-within:ring-focus focus-within:ring-offset-2 focus-within:border-border-interactive focus-within:hover:border-border-interactive'
				) }
				{ ...getReferenceProps }
			>
				<span
					className={ cn(
						textSizeClassNames[ size ],
						disabled ? 'text-icon-disabled' : IconClasses,
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
						'flex-grow bg-transparent border-none outline-none border-transparent focus:ring-0',
						disabled
							? disabledClassNames
							: 'text-field-placeholder placeholder:text-field-placeholder group-hover:placeholder:text-field-input group-focus-within:placeholder:text-field-input focus-within:text-field-input group-hover:text-field-input',
						className
					) }
					disabled={ disabled }
					value={ inputValue }
					onChange={ handleChange }
					placeholder={ placeholder }
					{ ...props }
				/>
				<span
					className={ cn(
						textSizeClassNames[ size ],
						disabled ? 'text-icon-disabled' : IconClasses,
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

const SearchBoxLoading = ( { loadingIcon = <Loader /> } ) => {
	const { size } = useSearchContext();
	return (
		<div className={ cn( 'justify-center p-4', textSizeClassNames[ size ] ) }>
			{ loadingIcon }
		</div>
	);
};
SearchBoxLoading.displayName = 'SearchBox.Loading';

const SearchBoxResults = forwardRef(
	( { className, children, ...props }, ref ) => {
		const { size } = useSearchContext();
		const childrenCount = Children.count( children );

		return (
			<div
				ref={ ref }
				className={ cn( sizeClassNames.content[ size ], className ) }
				{ ...props }
			>
				{ children }
				{ childrenCount < 2 && (
					<div
						className={ cn(
							'flex justify-center items-center',
							sizeClassNames.content[ size ],
							sizeClassNames.item[ size ],
							'text-text-tertiary'
						) }
					>
						No results found
					</div>
				) }
			</div>
		);
	}
);
SearchBoxResults.displayName = 'SearchBox.Results';

const SearchBoxResultTitle = forwardRef(
	( { className, children, ...props }, ref ) => {
		const { size } = useSearchContext();

		return (
			<div
				ref={ ref }
				className={ cn( 'flex', sizeClassNames.title[ size ], className ) }
				{ ...props }
			>
				<label
					className={ cn(
						'w-full text-text-secondary',
						textSizeClassNames[ size ]
					) }
				>
					{ children }
				</label>
			</div>
		);
	}
);
SearchBoxResultTitle.displayName = 'SearchBox.ResultTitle';

const SearchBoxResultItem = forwardRef(
	(
		{
			onClick = () => {},
			className,
			children,
			icon, // Icons beside search result
			...props
		},
		ref
	) => {
		const { size } = useSearchContext();

		return (
			<div
				role="button"
				tabIndex={ 0 }
				ref={ ref }
				className={ cn(
					'flex items-center justify-center gap-1 p-1 hover:bg-background-secondary focus:bg-background-secondary',
					sizeClassNames.item[ size ],
					className
				) }
				onClick={ onClick }
				onKeyDown={ ( e ) => {
					if ( e.key === 'Enter' || e.key === ' ' ) {
						onClick();
					}
				} }
				{ ...props }
			>
				<div
					className={ cn(
						sizeClassNames.icon[ size ],
						'flex items-center justify-center'
					) }
				>
					{ icon }
				</div>
				<label
					className={ cn(
						'w-full text-inherit cursor-pointer',
						! icon && sizeClassNames.icon[ size ]
					) }
				>
					{ children }
				</label>
			</div>
		);
	}
);
SearchBoxResultItem.displayName = 'SearchBox.ResultItem';

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
SearchBox.Content = SearchBoxContent;
SearchBox.Loading = SearchBoxLoading;
SearchBox.Results = SearchBoxResults;
SearchBox.ResultTitle = SearchBoxResultTitle;
SearchBox.ResultItem = SearchBoxResultItem;
SearchBox.Separator = SearchBoxSeparator;

export default SearchBox;
