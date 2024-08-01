import { useState, useCallback, useMemo, useRef, createContext, useContext } from 'react';
import { cn } from '../../utility/utils';
import { ChevronDown, ChevronsUpDown } from 'lucide-react';
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

const options = [
	'Red',
	'Orange',
	'Yellow',
	'Green',
	'Cyan',
	'Blue',
	'Purple',
	'Pink',
	'Maroon',
	'Black',
	'White',
	'Gray',
	'Brown',
	'Beige',
	'Magenta',
	'Teal',
	'Navy',
	'Olive',
	'Lime',
	'Indigo',
	'Violet',
	'Fuchsia',
	'Silver',
	'Gold',
	'Bronze',
	'Copper',
	'Platinum',
	'Titanium',
	'Steel',
	'Iron',
	'Aluminum',
	'Lead',
	'Mercury',
	'Tin',
	'Nickel',
	'Zinc',
	'Cobalt',
	'Manganese',
	'Magnesium',
	'Calcium',
	'Potassium',
	'Sodium',
	'Chlorine',
	'Fluorine',
	'Oxygen',
	'Nitrogen',
	'Carbon',
	'Hydrogen',
	'Helium',
	'Lithium',
	'Beryllium',
	'Boron',
	'Neon',
	'Argon',
	'Krypton',
	'Xenon',
	'Radon',
	'Polonium',
	'Radium',
	'Uranium',
	'Plutonium',
	'Americium',
	'Curium',
	'Berkelium',
	'Californium',
	'Einsteinium',
	'Fermium',
	'Mendelevium',
	'Nobelium',
	'Lawrencium',
	'Rutherfordium',
	'Dubnium',
	'Seaborgium',
	'Bohrium',
	'Hassium',
	'Meitnerium',
	'Darmstadtium',
	'Roentgenium',
	'Copernicium',
	'Nihonium',
	'Flerovium',
	'Moscovium',
	'Livermorium',
	'Tennessine',
	'Oganesson',
];

const SelectContext = createContext();
const useSelectContext = () => useContext(SelectContext);

const SelectItem = ({ value, disabled = false }) => {
	const {
		sizeValue,
		listRef,
		getItemProps,
		onKeyDownItem,
		onClickItem,
	} = useSelectContext();

	const selectItemClassNames = {
		sm: 'py-1.5 px-2 text-sm font-normal',
		md: 'p-2 text-base font-normal',
		lg: 'p-2 text-base font-normal',
	};

	return (
		<div
			className={cn(
				'text-text-primary hover:bg-button-tertiary-hover rounded-md transition-all duration-150',
				selectItemClassNames[sizeValue],
				// indx === activeIndex && 'bg-button-tertiary-hover'
			)}
			ref={(node) => {
				listRef.current[indx] = node;
			}}
			role="option"
			tabIndex={indx === activeIndex ? 0 : -1}
			aria-selected={indx === selectedIndex && indx === activeIndex}
			{...getItemProps({
				// Handle pointer select.
				onClick() {
					onClickItem(indx);
				},
				// Handle keyboard select.
				onKeyDown(event) {
					onKeyDownItem(event);
				},
			})}
		>
			{value}
			<span aria-hidden>{indx === selectedIndex ? ' ✓' : ''}</span>
		</div>
	);
};

const Select = ({
	size: sizeValue = 'md', // sm, md, lg
	dropdownPortalId = '',
	dropdownPortalRoot = null,
	placeholder = 'Select an option',
	combobox = false, // If true, it will show a search box.
	icon = null,
	value, // Value of the select (for controlled component).
	defaultValue, // Default value of the select (for uncontrolled component).
	onChange, // Callback function to handle the change event.
	multiple, // If true, it will allow multiple selection.
	disabled = false, // If true, it will disable the select.
	children,
}) => {
	// Dropdown position related code (Start)
	const [isOpen, setIsOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const dropdownMaxHeightBySize = {
		sm: combobox ? 256 : 172,
		md: combobox ? 256 : 216,
		lg: combobox ? 256 : 216,
	};

	const { refs, floatingStyles, context } = useFloating({
		placement: 'bottom-start',
		open: isOpen,
		onOpenChange: setIsOpen,
		whileElementsMounted: autoUpdate,
		middleware: [
			offset(5),
			flip({ padding: 10 }),
			size({
				apply({ rects, elements, availableHeight }) {
					Object.assign(elements.floating.style, {
						maxHeight: `min(${availableHeight}px, ${dropdownMaxHeightBySize[sizeValue]}px)`,
						minWidth: `${rects.reference.width}px`,
					});
				},
				padding: 10,
			}),
		],
	});

	const listRef = useRef([]);
	const listContentRef = useRef(options);
	const isTypingRef = useRef(false);

	const click = useClick(context, { event: 'mousedown' });
	const dismiss = useDismiss(context);
	const role = useRole(context, { role: 'listbox' });
	const listNav = useListNavigation(context, {
		listRef,
		activeIndex,
		selectedIndex,
		onNavigate: setActiveIndex,
		// This is a large list, allow looping.
		loop: true,
	});
	const typeahead = useTypeahead(context, {
		listRef: listContentRef,
		activeIndex,
		selectedIndex,
		onMatch: isOpen ? setActiveIndex : setSelectedIndex,
		onTypingChange(isTyping) {
			isTypingRef.current = isTyping;
		},
	});

	const { getReferenceProps, getFloatingProps, getItemProps } =
		useInteractions([
			dismiss,
			role,
			listNav,
			click,
			...(! combobox ? [typeahead] : []),
		]);

	const handleSelect = (index) => {
		setSelectedIndex(index);
		refs.reference.current.focus();
	};

	const selectedItemLabel =
		selectedIndex !== null ? options[selectedIndex] : undefined;

	// Dropdown position related code (End)

	const sizeClassNames = {
		sm: {
			icon: '[&>svg]:size-4',
			searchIcon: '[&>svg]:size-4',
			mainContainer:
				'pl-1.5 pr-2 py-1.5 rounded text-xs font-medium leading-4',
			selectPlaceholder: 'text-xs font-normal',
			dropdown: 'rounded-md',
			dropdownItemsWrapper: 'p-1.5',
			searchbarWrapper: 'p-3 flex items-center gap-0.5',
			searchbar: 'font-medium text-xs',
		},
		md: {
			icon: '[&>svg]:size-5',
			searchIcon: '[&>svg]:size-5',
			mainContainer:
				'pl-2 pr-2.5 py-2 rounded-md text-xs font-medium leading-4',
			selectPlaceholder: 'text-sm font-normal',
			dropdown: 'rounded-lg',
			dropdownItemsWrapper: 'p-2',
			searchbarWrapper: 'p-2.5 flex items-center gap-1',
			searchbar: 'font-medium text-sm',
		},
		lg: {
			icon: '[&>svg]:size-6',
			searchIcon: '[&>svg]:size-5',
			mainContainer:
				'pl-3 py-3 pr-3.5 rounded-lg text-sm font-medium leading-5',
			selectPlaceholder: 'text-sm font-normal',
			dropdown: 'rounded-lg',
			dropdownItemsWrapper: 'p-2',
			searchbarWrapper: 'p-2.5 flex items-center gap-1',
			searchbar: 'font-medium text-sm',
		},
	};

	// Get icon based on the Select component type and user provided icon.
	const getIcon = useCallback(() => {
		if (icon) {
			return icon;
		}

		const iconClassNames = "text-field-placeholder";

		return combobox ? <ChevronsUpDown className={iconClassNames} />: <ChevronDown className={iconClassNames} />;
	}, [icon])

	const onClickItem = (value) => {
		handleSelect(value);
	}

	const onKeyDownItem = (event) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			handleSelect(indx);
		}

		if (event.key === ' ' && !isTypingRef.current) {
			event.preventDefault();
			handleSelect(indx);
		}
	}

	return (
		<>
			<div
				ref={refs.setReference}
				className={cn(
					'flex items-center justify-between border border-solid w-full box-border transition-colors duration-150',
					'border border-solid border-field-border',
					!isOpen &&
						'focus:ring-2 focus:ring-offset-4 focus:border-focus-border focus:ring-focus [&:hover:not(:focus)]:border-border-strong',
					sizeClassNames[sizeValue].mainContainer
				)}
				aria-labelledby="select-label"
				aria-autocomplete="none"
				tabIndex={0}
				{...getReferenceProps()}
			>
				{/* Input and selected item container */}
				<div
					className={cn(
						'flex-1 grid items-center justify-start gap-1.5 '
						// 'flex flex-wrap'
					)}
				>
					{/* Show Selected item/items (Multiselector) */}

					{/* Placeholder */}
					<div
						className={cn(
							'[grid-area:1/1/2/3] text-field-input',
							sizeClassNames[sizeValue].selectPlaceholder
						)}
					>
						{placeholder}
					</div>
				</div>
				{/* Suffix Icon */}
				<div
					className={cn(
						'flex items-center [&>svg]:shrink-0',
						sizeClassNames[sizeValue].icon
					)}
				>
					{getIcon()}
				</div>
			</div>

			<SelectContext.Provider value={{
				selectedIndex,
				setSelectedIndex,
				activeIndex,
				setActiveIndex,
				handleSelect,
				combobox,
				sizeValue,
				globalDisabled: disabled,
				multiple,
				value,
				defaultValue,
				onChange,
				listRef,
				isTypingRef,
				refs,
				getItemProps,
				onClickItem,
				onKeyDownItem,
			}}>
				{/* Dropdown */}
				{isOpen && (
					<FloatingPortal id={dropdownPortalId} root={dropdownPortalRoot}>
						<FloatingFocusManager context={context} modal={false}>
							{/* Dropdown Wrapper */}
							<div
								ref={refs.setFloating}
								className={cn(
									'box-border [&_*]:box-border h-full bg-white outline-none shadow-lg border border-solid border-border-subtle overflow-hidden',
									combobox &&
										'grid grid-cols-1 grid-rows-[auto_1fr] divide-y divide-x-0 divide-solid divide-border-subtle',
									sizeClassNames[sizeValue].dropdown
								)}
								style={{
									...floatingStyles,
								}}
								{...getFloatingProps()}
							>
								{/* Searchbox */}
								{combobox && (
									<div
										className={cn(
											sizeClassNames[sizeValue]
												.searchbarWrapper
										)}
									>
										<input
											className={cn(
												'w-full',
												sizeClassNames[sizeValue].searchbar
											)}
											type="search"
											name="keyword"
											placeholder="Search"
										/>
									</div>
								)}
								{/* Dropdown Items Wrapper */}
								<div
									className={cn(
										'overflow-y-auto',
										!combobox && 'w-full h-full',
										sizeClassNames[sizeValue]
											.dropdownItemsWrapper
									)}
								>
									{/* Dropdown Items */}
									{ children }
								</div>
							</div>
						</FloatingFocusManager>
					</FloatingPortal>
				)}
			</SelectContext.Provider>
		</>
	);
};

export default {
	Select,
	SelectItem,
};
