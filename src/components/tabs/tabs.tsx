import React, {
	useCallback,
	forwardRef,
	isValidElement,
	createContext,
	useContext,
} from 'react';
import { cn } from '@/utilities/functions';
import { motion } from 'framer-motion';

declare type Ref = HTMLButtonElement;
declare type OnChangeValue = {slug: string, text: string};
declare type InternalOnChange = (event: React.MouseEvent<HTMLButtonElement>, value: OnChangeValue) => void;

export declare interface TabsProps {
	/** Controls the active tab. */
	activeItem?: string | null;
	/** Callback when the active item changes. */
	onChange?: ({event, value}: {event: React.MouseEvent<HTMLButtonElement>, value: OnChangeValue}) => void;
	/** Additional class names for styling. */
	className?: string;
	/** Defines the size of the tabs. */
	size?: 'xs' | 'sm' | 'md' | 'lg';
	/** Defines the orientation of the tabs. */
	orientation?: 'horizontal' | 'vertical';
	/** Defines the style variant of the tabs. */
	variant?: 'pill' | 'rounded' | 'underline';
	/** Defines the position of the icon. */
	iconPosition?: 'left' | 'right';
	/** Defines the width of the tabs. */
	width?: 'auto' | 'full';
	/** Tabs to display in the group. */
	children: React.ReactNode;
}

export declare interface TabProps {
	/** Unique identifier for the tab. */
	slug: string;
	/** Text to display in the tab. */
	text: string;
	/** Icon to display in the tab. */
	icon?: React.ReactNode;
	/** Additional class names for styling. */
	className?: string;
	/** Disables the tab. */
	disabled?: boolean;
	/** Badge to display in the tab. */
	badge?: React.ReactNode;
}

// Context for managing the TabsGroup state.
const TabsGroupContext = createContext<{
	activeItem: string | null;
	onChange: InternalOnChange;
	size: 'xs' | 'sm' | 'md' | 'lg';
	variant: 'pill' | 'rounded' | 'underline';
	orientation: 'horizontal' | 'vertical';
	iconPosition: 'left' | 'right';
	width: 'auto' | 'full';
} | null>(null);

// Hook to use the TabsGroup context.
const useTabsGroup = () => useContext(TabsGroupContext);

// TabsGroup component to wrap Tab components.
export const TabsGroup = ({
	children,
	activeItem = null, // The currently active item in the group.
	onChange, // Callback when the active item changes.
	className, // Additional class names for styling.
	size = 'sm', // Size of the tabs in the group ('xs', 'sm', 'md', 'lg').
	orientation = 'horizontal', // Orientation of the tabs ('horizontal', 'vertical').
	variant = 'pill', // Style variant of the tabs ('pill', 'rounded', 'underline').
	iconPosition = 'left', // Position of the icon in the tab ('left' or 'right').
	width = 'full', // Width of the tabs ('auto' or 'full').
}: TabsProps) => {
	// Handle change event.
	const handleChange: InternalOnChange = useCallback(
		(event, value) => {
			if (onChange) {
				onChange({ event, value });
			}
		},
		[onChange]
	);

	// Determine styles based on the variant and orientation.
	let borderRadius = 'rounded-full',
		padding = 'p-1',
		gap,
		border = 'ring-1 ring-tab-border';

	if (orientation === 'vertical') {
		gap = 'gap-0.5';
	} else if (variant === 'rounded' || variant === 'pill') {
		if (size === 'xs' || size === 'sm') {
			gap = 'gap-0.5';
		} else if (size === 'md' || size === 'lg') {
			gap = 'gap-1';
		}
	}

	if (variant === 'rounded' || orientation === 'vertical') {
		borderRadius = 'rounded-md';
	} else if (variant === 'underline') {
		borderRadius = 'rounded-none';
		padding = 'p-0';
		border =
			'border-t-0 border-r-0 border-l-0 border-b border-solid border-tab-border';
		if (size === 'xs') {
			gap = 'gap-0';
		} else if (size === 'sm') {
			gap = 'gap-2.5';
		} else if (size === 'md' || size === 'lg') {
			gap = 'gap-3';
		}
	}

	// Determine width classes.
	const widthClasses = width === 'full' ? 'w-full' : '';
	// Determine orientation classes.
	const orientationClasses = orientation === 'vertical' ? 'flex-col' : '';

	// Base classes for the TabsGroup.
	const baseClasses = `box-border [&>*]:box-border flex items-center ${widthClasses} ${orientationClasses}`;

	// Container background color.
	const backgroundColorClass =
		variant !== 'underline' ? 'bg-tab-background' : '';

	// Merge classes.
	const groupClassName = cn(
		baseClasses,
		borderRadius,
		padding,
		gap,
		border,
		backgroundColorClass,
		className
	);

	return (
		<div className={groupClassName}>
			<TabsGroupContext.Provider
				value={{
					activeItem,
					onChange: handleChange,
					size,
					variant,
					orientation,
					iconPosition,
					width,
				}}
			>
				{React.Children.map(children, (child) => {
					if (!isValidElement(child)) {
						return null;
					}
					return React.cloneElement(child);
				})}
			</TabsGroupContext.Provider>
		</div>
	);
};
TabsGroup.displayName = 'Tabs.Group';

// Tab component to be used within a TabsGroup.
export const Tab = forwardRef<Ref, TabProps>(({
	slug,
	text,
	icon,
	className,
	disabled = false,
	badge = null,
	...rest
}, ref) => {
	const providerValue = useTabsGroup();

	if (!providerValue) {
		throw new Error('Tab should be used inside Tabs Group');
	}

	const {
		activeItem,
		onChange,
		size,
		variant,
		orientation,
		iconPosition,
		width,
	} = providerValue;

	// Determine size classes.
	const sizes = {
		xs: 'px-1.5 py-0.5 text-xs [&_svg]:size-3',
		sm:
			variant === 'underline'
				? 'py-1.5 text-sm [&_svg]:size-4'
				: 'px-3 py-1.5 text-sm [&_svg]:size-4',
		md:
			variant === 'underline'
				? 'py-2 text-base [&_svg]:size-5'
				: 'px-3.5 py-1.5 text-base [&_svg]:size-5',
		lg:
			variant === 'underline'
				? 'p-2.5 text-lg [&_svg]:size-6'
				: 'px-3.5 py-1.5 text-lg [&_svg]:size-6',
	}[size];

	// Determine width and orientation classes for tabs.
	const fullWidth = width === 'full' ? 'flex-1' : '';
	const orientationClasses =
		orientation === 'vertical' ? 'w-full justify-between' : '';

	// Base classes for the Tab.
	const baseClasses = cn(
		'relative border-none bg-transparent text-text-secondary cursor-pointer flex items-center justify-center transition-[box-shadow,color,background-color] duration-200',
		fullWidth,
		orientationClasses
	);

	const borderClasses = 'border-none';

	let variantClasses = 'rounded-full';
	if (variant === 'rounded') {
		variantClasses = 'rounded-md';
	} else if (variant === 'underline') {
		variantClasses = 'rounded-none';
	}

	// Additional classes.
	const hoverClasses = 'hover:text-text-primary group';
	const focusClasses = 'focus:outline-none';
	const disabledClasses = disabled
		? 'text-text-disabled cursor-not-allowed'
		: '';
	const activeClasses =
		activeItem === slug
			? 'bg-background-primary text-text-primary shadow-sm'
			: '';

	// Merge classes.
	const tabClassName = cn(
		baseClasses,
		borderClasses,
		variantClasses,
		hoverClasses,
		focusClasses,
		disabledClasses,
		sizes,
		activeClasses,
		className
	);

	const iconParentClasses = 'flex items-center gap-1';

	// Handle click event.
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		onChange(event, { slug, text });
	};

	return (
		<button
			ref={ref}
			className={tabClassName}
			disabled={disabled}
			onClick={handleClick}
			{...rest}
		>
			{activeItem === slug && variant === 'underline' && (
				<motion.span
					layoutId="underline"
					className="absolute right-0 left-0 -bottom-px h-px bg-border-interactive"
				/>
			)}
			<span className={iconParentClasses}>
				{iconPosition === 'left' && icon && (
					<span className="mr-1 contents center-center group-hover:text-text-primary">
						{icon}
					</span>
				)}
				{text}
				{iconPosition === 'right' && icon && (
					<span className="ml-1 contents center-center group-hover:text-text-primary">
						{icon}
					</span>
				)}
			</span>
			{badge && isValidElement(badge) && badge}
		</button>
	);
});
Tab.displayName = 'Tabs.Tab';

const exports = {
	Group: TabsGroup,
	Tab,
};

export default exports;
