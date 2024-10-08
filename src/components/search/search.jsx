import { useState, forwardRef, useRef, createContext, useContext } from 'react';
import { cn } from '@/utilities/functions';
import { Search } from 'lucide-react';
import Loader from '../loader';
import {
	textSizeClassNames,
	variantClassNames,
	hoverClassNames,
	focusClassNames,
	disabledClassNames,
	baseClassNames,
	sizeClassNames,
	IconClasses
} from './styles';
import { autoUpdate, flip, FloatingPortal, offset, size, useDismiss, useFloating, useInteractions } from '@floating-ui/react';

const SearchContext = createContext();

const useSearchContext = () => {
	return useContext(SearchContext);
};

const SearchBox = forwardRef(({ className, dimension = 'sm', open = false, onOpenChange = () => { }, ...props }, ref) => {

	const inputRef = useRef(null);

	const { refs, floatingStyles, context } = useFloating({
		open: open,
		onOpenChange: onOpenChange,
		placement: 'bottom-start',
		whileElementsMounted: autoUpdate,
		middleware: [
			offset(5),
			flip({ padding: 10 }),
			size({
				apply({ rects, elements, availableHeight }) {
					Object.assign(elements.floating.style, {
						maxHeight: availableHeight,
						width: `${inputRef.current?.clientWidth || 0}px`, 
						fontFamily: window.getComputedStyle(elements.reference).fontFamily, // Retain parent's font family
					});
				},
				padding: 10,
			}),
		],
	});
	const dismiss = useDismiss(context);

	const { getReferenceProps, getFloatingProps } = useInteractions([
		dismiss,
	]);

	return (
		<SearchContext.Provider value={{ dimension, open, onOpenChange, refs, floatingStyles, context, getReferenceProps, getFloatingProps }}>
			<div
				className={cn('searchbox-wrapper relative w-full', className)}
				{...props}
				ref={inputRef}
			/>
		</SearchContext.Provider>
	);
});

const SearchBoxInput = forwardRef(({
	className,
	type = "text",
	placeholder = 'Search...',
	variant = 'primary',
	disabled = false,
	value,
	defaultValue,
	onChange,
	...props
}, ref) => {
	const [internalValue, setInternalValue] = useState(defaultValue || '');
	const isControlled = useRef(value !== undefined);
	const { dimension, open, onOpenChange, refs, getReferenceProps } = useSearchContext();

	const handleChange = (event) => {
		const newValue = event.target.value;
		if (!isControlled.current) {
			setInternalValue(newValue);
		}
		onChange?.(newValue, event);
		if (typeof onOpenChange === 'function') {
			if (newValue.trim()) {
				onOpenChange(true); // Open the dropdown
			} else {
				onOpenChange(false); // Close the dropdown
			}
		}
	};

	const inputValue = isControlled.current ? value : internalValue;

	return (
		<div
			tabIndex={0}
			ref={refs.setReference}
			className={cn("w-full group relative flex justify-center items-center gap-2 focus-within:z-10",
				baseClassNames,
				variantClassNames[variant],
				sizeClassNames[dimension],
				textSizeClassNames[dimension],
				disabled ? hoverClassNames.disabled : hoverClassNames.enabled,
				disabled ? disabledClassNames : '',
				'focus-within:border-focus-border focus-within:ring-2 focus-within:ring-focus focus-within:ring-offset-2',
			)

			}
			{...getReferenceProps}
		>
			<span
				className={cn(
					textSizeClassNames[dimension],
					!disabled && IconClasses,
					"flex justify-center items-center",
					"group-focus:text-text-secondary")}>
				<Search />
			</span>
			<input
				type={type}
				ref={ref}
				className={cn(
					textSizeClassNames[dimension],
					'flex-grow bg-transparent border-none outline-none border-transparent focus:ring-0',
					disabled && disabledClassNames,

					className
				)}
				disabled={disabled}
				value={inputValue}
				onChange={handleChange}
				placeholder={placeholder}
				{...props}
			/>
			<span
				className={cn(
					textSizeClassNames[dimension],
					!disabled && IconClasses,
					'bg-background-primary border border-solid border-border-subtle',
					'group-focus:text-text-secondary',
					dimension === 'sm'
						? 'px-2 py-0.5'
						: dimension === 'md'
							? 'px-3 py-1'
							: 'px-3.5 py-1'
				)}
			>
				/
			</span>

		</div >
	);
});

const SearchBoxContent = forwardRef(({
	className,
	dropdownPortalRoot = null, // Root element where the dropdown will be rendered.
	dropdownPortalId = '', // Id of the dropdown portal where the dropdown will be rendered.
	children, ...props
}, ref) => {
	const { open, refs, floatingStyles, getFloatingProps } = useSearchContext();

	if (!open) return null;

	return (
		<FloatingPortal id={dropdownPortalId} root={dropdownPortalRoot}>
			<div
				ref={refs.setFloating}
				style={{
					...floatingStyles
				}}
				className={cn(
					'bg-background-primary mt-2 rounded-md p-2 border-border-strong shadow-lg overflow-y-auto text-wrap',
					className
				)}
				{...getFloatingProps}
				{...props}
			>
				{children}
			</div>
		</FloatingPortal>
	);
});


const SearchBoxLoading = ({ loadingIcon = <Loader /> }) => {
	const { dimension } = useSearchContext();
	return (
		<div className={cn("justify-center p-4", textSizeClassNames[dimension])}>
		{loadingIcon}
	</div>
	)
};

const SearchBoxResults = forwardRef(({ className, children, ...props }, ref) => (
	<div ref={ref} className={cn('', className)} {...props}>
		{children}
	</div>
));

const SearchBoxResultTitle = forwardRef(({ className, children, ...props }, ref) => {
	const { dimension } = useSearchContext();

	return (
		<div
			ref={ref}
			className={cn(
				'flex p-1',
				className
			)}
			{...props}
		>
			<label className={cn("w-full text-text-secondary", textSizeClassNames[dimension])}>{children}</label>
		</div>
	)
});

const SearchBoxResultItem = forwardRef(({ className, children, icon, ...props }, ref) => {
	const { dimension } = useSearchContext();
	return (<div
		ref={ref}
		className={cn(
			'flex items-center gap-2 p-1 hover:bg-background-secondary',
			textSizeClassNames[dimension],
			!icon && "pl-4",
			className
		)}
		{...props}
	>
		{icon}
		<label className={cn(textSizeClassNames[dimension], "w-full text-text-secondary cursor-pointer")}>{children}</label>
	</div>)
});

const SearchBoxSeparator = forwardRef(({ className, ...props }, ref) => (
	<hr ref={ref} className={cn(' text-text-tertiary', className)} {...props} />
));

SearchBox.Input = SearchBoxInput;
SearchBox.Content = SearchBoxContent;
SearchBox.Loading = SearchBoxLoading;
SearchBox.Results = SearchBoxResults;
SearchBox.ResultTitle = SearchBoxResultTitle;
SearchBox.ResultItem = SearchBoxResultItem;
SearchBox.Separator = SearchBoxSeparator;

export default SearchBox;