import {
	useState,
	useCallback,
	useMemo,
	useRef,
	createContext,
	useContext,
	Children,
	cloneElement,
	isValidElement,
	useEffect,
	useLayoutEffect,
} from 'react';
import { cn } from '@/utilities/functions';
import { CheckIcon, ChevronDown, ChevronsUpDown, Search } from 'lucide-react';
import {
	useFloating,
	useClick,
	useDismiss,
	useRole,
	useListNavigation,
	useInteractions,
	FloatingFocusManager,
	useTypeahead,
	offset,
	flip,
	size,
	autoUpdate,
	FloatingPortal,
} from '@floating-ui/react';
import Badge from '../badge';
import { nanoid } from 'nanoid';
import { disabledClassNames, sizeClassNames } from './component-style';
import type {
	OnClick,
	OnKeyDown,
	SelectButtonProps,
	SelectContextValue,
	SelectGetValues,
	SelectOptionProps,
	SelectOptionsProps,
	SelectOptionValue,
	SelectPortalProps,
	SelectProps,
	SelectSizes,
} from './select-types';

// Context to manage the state of the select component.
const SelectContext = createContext<SelectContextValue>(
	{} as SelectContextValue
);
const useSelectContext = () => useContext( SelectContext );

export function SelectButton( {
	children,
	icon = null, // Icon to show in the select button.
	placeholder = 'Select an option', // Placeholder text.
	optionIcon = null, // Icon to show in the selected option.
	displayBy = 'name', // Used to display the value. Default is 'name'.
	label, // Label for the select component.
	className,
	...props
}: SelectButtonProps ) {
	const {
		sizeValue,
		getReferenceProps,
		getValues,
		selectId,
		refs,
		isOpen,
		multiple,
		combobox,
		setSelected,
		onChange,
		isControlled,
		disabled,
		by,
	} = useSelectContext();

	const badgeSize = {
		sm: 'xs',
		md: 'sm',
		lg: 'md',
	}?.[ sizeValue as SelectSizes ];

	// Get icon based on the Select component type and user provided icon.
	const getIcon = useCallback( () => {
		if ( icon ) {
			return icon;
		}

		const iconClassNames =
			'text-field-placeholder ' + disabledClassNames.icon;

		return combobox ? (
			<ChevronsUpDown className={ iconClassNames } />
		) : (
			<ChevronDown className={ iconClassNames } />
		);
	}, [ icon ] );

	const renderSelected = useCallback( () => {
		const selectedValue = getValues();

		if ( ! selectedValue ) {
			return null;
		}

		if ( typeof children === 'function' ) {
			const childProps = {
				value: selectedValue as SelectOptionValue,
				...( multiple
					? {
						onClose: handleOnCloseItem(
								selectedValue as SelectOptionValue
						),
					}
					: {} ),
			};
			return children( childProps );
		}

		if ( multiple ) {
			return ( selectedValue as SelectOptionValue[] ).map(
				( valueItem: SelectOptionValue, index: number ) => (
					<Badge
						className="cursor-default"
						icon={ optionIcon }
						type="rounded"
						key={ index }
						size={ badgeSize as SelectSizes }
						onMouseDown={ handleOnCloseItem( valueItem ) }
						label={
							typeof valueItem === 'object'
								? valueItem[ displayBy ]?.toString()
								: valueItem.toString()
						}
						closable={ true }
						disabled={ disabled }
					/>
				)
			);
		}

		let renderValue =
			typeof selectedValue === 'object'
				? ( selectedValue as Record<string, unknown> )[ displayBy ]
				: selectedValue;

		if ( isValidElement( children ) ) {
			renderValue = children;
		}

		return (
			<span
				className={ cn(
					'truncate',
					sizeClassNames[ sizeValue as SelectSizes ].displaySelected,
					disabledClassNames.text
				) }
			>
				{ renderValue as React.ReactNode }
			</span>
		);
	}, [ getValues, disabled ] );

	const handleOnCloseItem =
		( value: SelectOptionValue ) =>
			( event?: React.MouseEvent<HTMLElement> ) => {
				event?.preventDefault();
				event?.stopPropagation();

				const selectedValues = [
					...( ( getValues() as SelectOptionValue[] ) ?? [] ),
				];
				const selectedIndex = selectedValues.findIndex( ( val ) => {
					if ( val !== null && value !== null && typeof val === 'object' ) {
						return (
							( val as Record<string, unknown> )[ by ] ===
						( value as Record<string, unknown> )[ by ]
						);
					}
					return val === value;
				} );

				if ( selectedIndex === -1 ) {
					return;
				}

				selectedValues.splice( selectedIndex, 1 );

				if ( ! isControlled ) {
					setSelected( selectedValues );
				}
				if ( typeof onChange === 'function' ) {
					onChange( selectedValues );
				}
			};

	return (
		<div className="flex flex-col items-start gap-1.5 [&_*]:box-border box-border">
			{ !! label && (
				<label
					className={ cn(
						sizeClassNames[ sizeValue as SelectSizes ]?.label,
						'text-field-label'
					) }
					htmlFor={ selectId }
				>
					{ label }
				</label>
			) }
			<button
				id={ selectId }
				ref={ refs.setReference }
				className={ cn(
					'flex items-center justify-between w-full box-border transition-colors duration-150 bg-white',
					'outline outline-1 outline-field-border border-none cursor-pointer',
					! isOpen &&
						'focus:ring-2 focus:ring-offset-4 focus:outline-focus-border focus:ring-focus [&:hover:not(:focus):not(:disabled)]:outline-border-strong',
					sizeClassNames[ sizeValue as SelectSizes ].selectButton,
					multiple &&
						sizeClassNames[ sizeValue as SelectSizes ].multiSelect,
					disabledClassNames.selectButton,
					className
				) }
				tabIndex={ 0 }
				disabled={ disabled }
				{ ...props }
				{ ...getReferenceProps() }
			>
				{ /* Input and selected item container */ }
				<div
					className={ cn(
						'flex-1 grid items-center justify-start gap-1.5 overflow-hidden',
						getValues() && 'flex flex-wrap'
					) }
				>
					{ /* Show Selected item/items (Multiselector) */ }
					{ renderSelected() }

					{ /* Placeholder */ }
					{ ( multiple
						? ! ( getValues() as SelectOptionValue[] )?.length
						: ! getValues() ) && (
						<div
							className={ cn(
								'[grid-area:1/1/2/3] text-field-input px-1',
								sizeClassNames[ sizeValue as SelectSizes ]
									.displaySelected,
								disabledClassNames.text
							) }
						>
							{ placeholder }
						</div>
					) }
				</div>
				{ /* Suffix Icon */ }
				<div
					className={ cn(
						'flex items-center [&>svg]:shrink-0',
						sizeClassNames[ sizeValue as SelectSizes ].icon
					) }
				>
					{ getIcon() }
				</div>
			</button>
		</div>
	);
}

export function SelectOptions( {
	children,
	searchBy = 'id', // Used to identify searched value using the key. Default is 'id'.
	searchPlaceholder = 'Search...', // Placeholder text for search box.
	className, // Additional class name for the dropdown.
}: SelectOptionsProps ) {
	const {
		isOpen,
		context,
		refs,
		combobox,
		floatingStyles,
		getFloatingProps,
		sizeValue,
		setSearchKeyword,
		setActiveIndex,
		setSelectedIndex,
		value,
		selected,
		getValues,
		searchKeyword,
		listContentRef,
		by,
	} = useSelectContext();

	const initialSelectedValueIndex = useMemo( () => {
		const currentValue = getValues();
		let indexValue = 0;

		if ( currentValue ) {
			indexValue = Children.toArray( children ).findIndex(
				( child: React.ReactNode ) => {
					if ( ! isValidElement( child ) ) {
						return false;
					}
					if ( typeof child.props.value === 'object' ) {
						return (
							child.props.value[ by ] ===
							( currentValue as Record<string, unknown> )[ by ]
						);
					}
					return child.props.value === currentValue;
				}
			);
		}

		return indexValue === -1 ? 0 : indexValue;
	}, [ value, selected, children ] );

	useLayoutEffect( () => {
		setActiveIndex( initialSelectedValueIndex );
		setSelectedIndex( initialSelectedValueIndex );
	}, [] );

	// Render children based on the search keyword.
	const renderChildren = useMemo( () => {
		return Children.map( children, ( child, index ) => {
			if ( ! isValidElement( child ) ) {
				return null;
			}
			if ( searchKeyword ) {
				const valueProp = child.props.value;
				if ( typeof valueProp === 'object' ) {
					if (
						valueProp[ searchBy ]
							.toLowerCase()
							.indexOf( searchKeyword.toLowerCase() ) === -1
					) {
						return null;
					}
				} else if (
					valueProp
						.toLowerCase()
						.indexOf( searchKeyword.toLowerCase() ) === -1
				) {
					return null;
				}
			}
			return cloneElement( child, {
				...child.props,
				index,
			} );
		} );
	}, [ searchKeyword, value, selected, children ] );
	const childrenCount = Children.count( renderChildren );

	// Update the content list reference.
	useEffect( () => {
		listContentRef.current = [];
		Children.forEach( children, ( child ) => {
			if ( ! isValidElement( child ) ) {
				return;
			}
			if ( child.props.value ) {
				if ( searchKeyword ) {
					const valueProp = child.props.value;
					if ( typeof valueProp === 'object' ) {
						if (
							valueProp[ searchBy ]
								.toLowerCase()
								.indexOf( searchKeyword.toLowerCase() ) === -1
						) {
							return;
						}
					} else if (
						valueProp
							.toLowerCase()
							.indexOf( searchKeyword.toLowerCase() ) === -1
					) {
						return;
					}
				}

				listContentRef.current.push( child.props.value );
			}
		} );
	}, [ searchKeyword ] );

	return (
		<>
			{ /* Dropdown */ }
			{ isOpen && (
				<>
					<FloatingFocusManager context={ context } modal={ false }>
						{ /* Dropdown Wrapper */ }
						<div
							ref={ refs.setFloating }
							className={ cn(
								'box-border [&_*]:box-border w-full bg-white outline-none shadow-lg outline outline-1 outline-border-subtle',
								combobox &&
									'grid grid-cols-1 grid-rows-[auto_1fr] divide-y divide-x-0 divide-solid divide-border-subtle',
								sizeClassNames[ sizeValue as SelectSizes ]
									.dropdown,
								! combobox && 'h-auto',
								! combobox
									? 'overflow-y-auto'
									: 'overflow-hidden',
								className
							) }
							style={ {
								...floatingStyles,
							} }
							{ ...getFloatingProps() }
						>
							{ /* Searchbox */ }
							{ combobox && (
								<div
									className={ cn(
										sizeClassNames[ sizeValue as SelectSizes ]
											.searchbarWrapper
									) }
								>
									<Search
										className={ cn(
											'text-icon-secondary shrink-0',
											sizeClassNames[
												sizeValue as SelectSizes
											].searchbarIcon
										) }
									/>
									<input
										className={ cn(
											'px-1 w-full placeholder:text-field-placeholder border-0 focus:outline-none focus:shadow-none',
											sizeClassNames[
												sizeValue as SelectSizes
											].searchbar
										) }
										type="search"
										name="keyword"
										placeholder={ searchPlaceholder }
										onChange={ ( event ) =>
											setSearchKeyword( event.target.value )
										}
										autoComplete="off"
									/>
								</div>
							) }
							{ /* Dropdown Items Wrapper */ }
							<div
								className={ cn(
									'overflow-y-auto',
									! combobox && 'w-full h-full',
									sizeClassNames[ sizeValue as SelectSizes ]
										.dropdownItemsWrapper
								) }
							>
								{ /* Dropdown Items */ }
								{ !! childrenCount && renderChildren }

								{ /* No items found */ }
								{ ! childrenCount && (
									<div className="p-2 text-center text-base font-medium text-field-placeholder">
										No items found
									</div>
								) }
							</div>
						</div>
					</FloatingFocusManager>
				</>
			) }
		</>
	);
}

export function SelectPortal( { children, root, id }: SelectPortalProps ) {
	return (
		<FloatingPortal id={ id } root={ root }>
			{ children }
		</FloatingPortal>
	);
}

export function SelectItem( {
	value,
	selected,
	children,
	className,
	...props
}: SelectOptionProps ) {
	const {
		sizeValue,
		getItemProps,
		onKeyDownItem,
		onClickItem,
		activeIndex,
		selectedIndex,
		updateListRef,
		getValues,
		by,
		multiple,
	} = useSelectContext();
	const { index: indx } = props;

	const selectItemClassNames = {
		sm: 'py-1.5 px-2 text-sm font-normal',
		md: 'p-2 text-sm font-normal',
		lg: 'p-2 text-base font-normal',
	};
	const selectedIconClassName = {
		sm: 'size-4',
		md: 'size-4',
		lg: 'size-5',
	};

	const multipleChecked = useMemo( () => {
		if ( ! multiple ) {
			return false;
		}
		const currentValue = getValues();
		if ( ! currentValue ) {
			return false;
		}
		return ( currentValue as SelectOptionValue[] ).some( ( val ) => {
			if ( val !== null && value !== null && typeof val === 'object' ) {
				return (
					( val as Record<string, unknown> )[ by ] ===
					( value as Record<string, unknown> )[ by ]
				);
			}
			return val === value;
		} );
	}, [ value, getValues ] );

	const isChecked = useMemo( () => {
		if ( typeof selected === 'boolean' ) {
			return selected;
		}

		if ( multiple ) {
			return multipleChecked;
		}

		return indx === selectedIndex;
	}, [ multipleChecked, selectedIndex, selected ] );

	return (
		<div
			className={ cn(
				'w-full flex items-center justify-between text-text-primary hover:bg-button-tertiary-hover rounded-md transition-all duration-150 cursor-pointer focus:outline-none focus-within:outline-none outline-none',
				selectItemClassNames[ sizeValue as SelectSizes ],
				indx === activeIndex && 'bg-button-tertiary-hover',
				className
			) }
			ref={ ( node ) => {
				updateListRef( indx as number, node as HTMLElement );
			} }
			role="option"
			tabIndex={ indx === activeIndex ? 0 : -1 }
			aria-selected={ isChecked && indx === activeIndex }
			{ ...getItemProps( {
				// Handle pointer select.
				onClick() {
					onClickItem( indx as number, value );
				},
				// Handle keyboard select.
				onKeyDown( event: React.KeyboardEvent ) {
					onKeyDownItem( event, indx as number, value );
				},
			} ) }
		>
			<span className="w-full truncate">{ children }</span>
			{ isChecked && (
				<CheckIcon
					className={ cn(
						'text-icon-on-color-disabled',
						selectedIconClassName[ sizeValue as SelectSizes ]
					) }
				/>
			) }
		</div>
	);
}

const Select = ( {
	id,
	size: sizeValue = 'md', // sm, md, lg
	value, // Value of the select (for controlled component).
	defaultValue, // Default value of the select (for uncontrolled component).
	onChange, // Callback function to handle the change event.
	by = 'id', // Used to identify the select component. Default is 'id'.
	children,
	multiple = false, // If true, it will allow multiple selection.
	combobox = false, // If true, it will show a search box.
	disabled = false, // If true, it will disable the select component.
}: SelectProps ) => {
	const selectId = useMemo( () => id || `select-${ nanoid() }`, [ id ] );
	const isControlled = useMemo( () => typeof value !== 'undefined', [ value ] );
	const [ selected, setSelected ] = useState<
		SelectOptionValue | SelectOptionValue[]
	>( defaultValue! );
	const [ searchKeyword, setSearchKeyword ] = useState( '' );

	const getValues = useCallback<SelectGetValues>( () => {
		if ( isControlled ) {
			return value as string | number | Record<string, unknown>;
		}
		return selected as string | number | Record<string, unknown>;
	}, [ isControlled, value, selected ] );

	// Dropdown position related code (Start)
	const [ isOpen, setIsOpen ] = useState( false );
	const [ activeIndex, setActiveIndex ] = useState<number | null>( null );
	const [ selectedIndex, setSelectedIndex ] = useState<number | null>( null );

	const dropdownMaxHeightBySize = {
		sm: combobox ? 256 : 172,
		md: combobox ? 256 : 216,
		lg: combobox ? 256 : 216,
	};

	const { refs, floatingStyles, context } = useFloating( {
		placement: 'bottom-start',
		open: isOpen,
		onOpenChange: setIsOpen,
		whileElementsMounted: autoUpdate,
		middleware: [
			offset( 5 ),
			flip( { padding: 10 } ),
			size( {
				apply( { rects, elements, availableHeight } ) {
					Object.assign( elements.floating.style, {
						maxHeight: `min(${ availableHeight }px, ${ dropdownMaxHeightBySize[ sizeValue as SelectSizes ] }px)`,
						maxWidth: `${ rects.reference.width }px`,
					} );
				},
				padding: 10,
			} ),
		],
	} );

	const listRef = useRef<Array<HTMLElement | null>>( [] );
	const listContentRef = useRef( [] );
	const isTypingRef = useRef( false );

	const click = useClick( context, { event: 'mousedown' } );
	const dismiss = useDismiss( context );
	const role = useRole( context, { role: 'listbox' } );
	const listNav = useListNavigation( context, {
		listRef,
		activeIndex,
		selectedIndex,
		onNavigate: setActiveIndex,
		// This is a large list, allow looping.
		loop: true,
	} );
	const typeahead = useTypeahead( context, {
		listRef: listContentRef,
		activeIndex,
		selectedIndex,
		onMatch: isOpen ? setActiveIndex : setSelectedIndex,
		onTypingChange( isTyping ) {
			isTypingRef.current = isTyping;
		},
	} );

	const { getReferenceProps, getFloatingProps, getItemProps } =
		useInteractions( [
			dismiss,
			role,
			listNav,
			click,
			...( ! combobox ? [ typeahead ] : [] ),
		] );

	const handleMultiSelect: OnClick = ( index, newValue ) => {
		const selectedValues = [
			...( ( getValues() as SelectOptionValue[] ) ?? [] ),
		];
		const valueIndex = selectedValues.findIndex( ( selectedValue ) => {
			if (
				selectedValue !== null &&
				newValue !== null &&
				typeof selectedValue === 'object'
			) {
				return (
					( selectedValue as Record<string, unknown> )[ by ] ===
					( newValue as Record<string, unknown> )[ by ]
				);
			}
			return selectedValue === newValue;
		} );

		if ( valueIndex !== -1 ) {
			return;
		}
		selectedValues.push( newValue );

		if ( ! isControlled ) {
			setSelected( selectedValues );
		}
		setSelectedIndex( index );
		( refs.reference.current as HTMLElement ).focus();
		setIsOpen( false );
		setSearchKeyword( '' );
		if ( typeof onChange === 'function' ) {
			onChange( selectedValues );
		}
	};

	const handleSelect: OnClick = ( index, newValue ) => {
		if ( multiple ) {
			return handleMultiSelect( index, newValue );
		}
		setSelectedIndex( index );
		if ( ! isControlled ) {
			setSelected( newValue );
		}
		( refs.reference.current as HTMLElement ).focus();
		setIsOpen( false );
		setSearchKeyword( '' );
		if ( typeof onChange === 'function' ) {
			onChange( newValue );
		}
	};
	// Dropdown position related code (End)

	const updateListRef = useCallback( ( index: number, node: HTMLElement ) => {
		listRef.current[ index ] = node;
	}, [] );

	const onClickItem: OnClick = ( index, newValue ) => {
		handleSelect( index, newValue );
	};

	const onKeyDownItem: OnKeyDown = ( event, index, newValue ) => {
		if ( event.key === 'Enter' ) {
			event.preventDefault();
			handleSelect( index, newValue );
		}

		if ( event.key === ' ' && ! isTypingRef.current ) {
			event.preventDefault();
			handleSelect( index, newValue );
		}
	};

	return (
		<SelectContext.Provider
			value={ {
				selectedIndex,
				setSelectedIndex,
				activeIndex,
				setActiveIndex,
				selected,
				setSelected,
				handleSelect,
				combobox,
				sizeValue,
				multiple,
				onChange,
				isTypingRef,
				getItemProps,
				onClickItem,
				onKeyDownItem,
				getValues,
				selectId,
				getReferenceProps,
				isOpen,
				value,
				updateListRef,
				refs,
				listContentRef,
				by,
				getFloatingProps,
				floatingStyles,
				context,
				searchKeyword,
				setSearchKeyword,
				disabled,
				isControlled,
			} }
		>
			{ children }
		</SelectContext.Provider>
	);
};

SelectPortal.displayName = 'Select.Portal';
SelectButton.displayName = 'Select.Button';
SelectOptions.displayName = 'Select.Options';
SelectItem.displayName = 'Select.Option';

Select.Portal = SelectPortal;
Select.Button = SelectButton;
Select.Options = SelectOptions;
Select.Option = SelectItem;

export default Select;
