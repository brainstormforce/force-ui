import { useState, forwardRef, useRef, createContext, useContext } from 'react';
import { cn } from '@/utilities/functions';
import { File, Folder, Search, SquareSlash } from 'lucide-react';
import { Label } from '..';
import Loader from '../loader';
import {
	textSizeClassNames,
	variantClassNames,
	hoverClassNames,
	focusClassNames,
	disabledClassNames,
	baseClassNames,
	sizeClassNames
} from './styles';
import { autoUpdate, useFloating } from '@floating-ui/react';
// Create a context for size
const SizeContext = createContext();

const useSize = () => {
	return useContext(SizeContext);
};

// Update your SearchBox component to use this context
const SearchBox = forwardRef(({ className, size = 'sm', open = false, onOpenChange = () => { }, ...props }, ref) => {
	const { refs, floatingStyles } = useFloating({
		whileElementsMounted: autoUpdate,
	});
	return (
		<SizeContext.Provider value={{ size, open, onOpenChange, refs, floatingStyles }}>
			<div className={cn('searchbox-wrapper relative w-full', className)}
				{...props} ref={ref} />
		</SizeContext.Provider>
	);
});
SearchBox.displayName = 'SearchBox';
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
	const { size, open, onOpenChange, refs } = useSize();

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
		<div className={cn("w-full no-clear-button group relative flex justify-center items-center gap-1 focus-within:z-10",
			baseClassNames,
			variantClassNames[variant],
			sizeClassNames[size],
			textSizeClassNames[size],
			disabled ? hoverClassNames.disabled : hoverClassNames.enabled,
			disabled ? disabledClassNames : "",
			focusClassNames,)
		}>
			<span className={cn(textSizeClassNames[size], "flex justify-center items-center")}>
				<Search />
			</span>
			<input
				type={type}
				// ref={ref}
				ref={refs.setReference}
				className={cn(
					textSizeClassNames[size],
					'flex-grow bg-transparent border-none outline-none border-transparent focus:ring-0',
					className
				)}
				disabled={disabled}
				value={inputValue}
				onChange={handleChange}
				placeholder={placeholder}
				{...props}
			/>
			<span className={cn(textSizeClassNames[size], "flex justify-center items-center")}>
				<SquareSlash className='bg-field-secondary-background rounded-md' />
			</span>
		</div >
	);
});
SearchBoxInput.displayName = 'SearchBoxInput';

const SearchBoxContent = forwardRef(({ className, isOpen, setIsOpen, ...props }, ref) => {
	const { size, open, onOpenChange, refs, floatingStyles } = useSize();
	// Use conditional rendering
	if (!open) return null;

	return (
		<div
			// ref={ref}
			ref={refs.setFloating}
			style={floatingStyles}
			className={cn(
				'bg-background-primary rounded-md p-2 mt-2 w-full left-0 z-50 border-border-strong shadow-lg max-h-60 overflow-y-auto',
				className
			)}
			{...props}
		/>
	);
});
SearchBoxContent.displayName = 'SearchBoxContent';

const SearchBoxLoading = ({ loadingIcon = <Loader /> }) => (
	<div className="justify-center p-4">
		{loadingIcon}
	</div>
);

const SearchBoxResults = forwardRef(({ className, children, ...props }, ref) => (
	<div ref={ref} className={cn('space-y-1', className)} {...props}>
		{children}
	</div>
));
SearchBoxResults.displayName = 'SearchBoxResults';

const SearchBoxResultTitle = forwardRef(({ className, children, ...props }, ref) => {
	const { size } = useSize();

	return (
		<div
			ref={ref}
			className={cn(
				'flex p-1',
				className
			)}
			{...props}
		>
			<label className={cn("w-full text-text-secondary", textSizeClassNames[size])}>{children}</label>
		</div>
	)
});
SearchBoxResultTitle.displayName = 'SearchBoxResultTitle';

const SearchBoxResultItem = forwardRef(({ className, children, icon, ...props }, ref) => {
	const { size } = useSize();
	return (<div
		ref={ref}
		className={cn(
			'flex items-center gap-2 p-1 hover:bg-gray-200 cursor-pointer',
			textSizeClassNames[size],
			className
		)}
		{...props}
	>
		{icon}
		<label className={cn("w-full text-text-secondary", textSizeClassNames[size])}>{children}</label>
	</div>)
});
SearchBoxResultItem.displayName = 'SearchBoxResultItem';

const SearchBoxSeparator = forwardRef(({ className, ...props }, ref) => (
	<hr ref={ref} className={cn('w-full text-text-tertiary', className)} {...props} />
));
SearchBoxSeparator.displayName = 'SearchBoxSeparator';

export {
	SearchBox,
	SearchBoxInput,
	SearchBoxContent,
	SearchBoxLoading,
	SearchBoxResults,
	SearchBoxResultTitle,
	SearchBoxResultItem,
	SearchBoxSeparator,
};