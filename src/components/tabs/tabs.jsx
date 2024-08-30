import React, {
	useCallback,
	forwardRef,
	isValidElement,
	createContext,
	useContext,
} from 'react';
// import { twMerge } from 'tailwind-merge';
import { cn } from '@/utilities/functions';

// Context for managing the TabsGroup state.
const TabsGroupContext = createContext();

// Hook to use the TabsGroup context.
const useTabsGroup = () => useContext( TabsGroupContext );

// TabsGroup component to wrap Tab components.
const TabsGroup = ( props ) => {
	const {
		children,
		activeItem = null, // The currently active item in the group.
		onChange, // Callback when the active item changes.
		className, // Additional class names for styling.
		size = 'sm', // Size of the tabs in the group ('xs', 'sm', 'md', 'lg').
		orientation = 'horizontal', // Orientation of the tabs ('horizontal', 'vertical').
		variant = 'pill', // Style variant of the tabs ('pill', 'rounded', 'underline').
		iconPosition = 'left', // Position of the icon in the tab ('left' or 'right').
		width = 'auto', // Width of the tabs ('auto' or 'full').
	} = props;

	// Handle change event.
	const handleChange = useCallback(
		( event, value ) => {
			if ( onChange ) {
				onChange( { event, value } );
			}
		},
		[ onChange ]
	);

	// Determine styles based on the variant and orientation.
	let borderRadius = 'rounded-full',
		padding = 'p-1',
		gap,
		border = 'border border-tab-border border-solid';

	if ( orientation === 'vertical' ) {
		gap = 'gap-0.5';
	} else if ( variant === 'rounded' || variant === 'pill' ) {
		if ( size === 'xs' || size === 'sm' ) {
			gap = 'gap-0.5';
		} else if ( size === 'md' || size === 'lg' ) {
			gap = 'gap-1';
		}
	}

	if ( variant === 'rounded' || orientation === 'vertical' ) {
		borderRadius = 'rounded-md';
	} else if ( variant === 'underline' ) {
		borderRadius = 'rounded-none';
		padding = 'p-0';
		border = 'border-none';
		if ( size === 'xs' ) {
			gap = 'gap-0';
		} else if ( size === 'sm' ) {
			gap = 'gap-2.5';
		} else if ( size === 'md' || size === 'lg' ) {
			gap = 'gap-3';
		}
	}

	// Determine width classes.
	const widthClasses = width === 'full' ? 'w-full' : '';
	// Determine orientation classes.
	const orientationClasses = orientation === 'vertical' ? 'flex-col' : '';

	// Base classes for the TabsGroup.
	const baseClasses = `box-border [&>*]:box-border flex items-center ${ widthClasses } ${ orientationClasses }`;

	// Merge classes.
	const groupClassName = cn(
		baseClasses,
		borderRadius,
		padding,
		gap,
		border,
		className
	);

	return (
		<div className={ groupClassName }>
			<TabsGroupContext.Provider
				value={ {
					activeItem,
					onChange: handleChange,
					size,
					variant,
					orientation,
					iconPosition,
					width,
				} }
			>
				{ React.Children.map( children, ( child ) => {
					if ( ! isValidElement( child ) ) {
						return null;
					}
					return React.cloneElement( child );
				} ) }
			</TabsGroupContext.Provider>
		</div>
	);
};

// Tab component to be used within a TabsGroup.
const Tab = ( props, ref ) => {
	const providerValue = useTabsGroup();
	const {
		slug,
		text,
		icon,
		className,
		disabled = false,
		badge = null,
		...rest
	} = props;

	if ( ! providerValue ) {
		throw new Error( 'Tab should be used inside Tabs Group' );
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
		xs: 'px-1.5 py-0.5 text-xs [&>svg]:h-3 [&>svg]:w-3',
		sm: variant === 'underline' ? 'py-1.5 text-sm [&>svg]:h-4 [&>svg]:w-4' : 'px-3 py-1.5 text-sm [&>svg]:h-4 [&>svg]:w-4',
		md: variant === 'underline' ? 'py-2 text-base [&>svg]:h-5 [&>svg]:w-5' : 'px-3.5 py-1.5 text-base [&>svg]:h-5 [&>svg]:w-5',
		lg: variant === 'underline' ? 'p-2.5 text-lg [&>svg]:h-6 [&>svg]:w-6' : 'px-3.5 py-1.5 text-lg [&>svg]:h-6 [&>svg]:w-6',
	}[ size ];

	// Determine width and orientation classes for tabs.
	const fullWidth = width === 'full' ? 'flex-1' : '';
	const orientationClasses =
        orientation === 'vertical' ? 'w-full justify-between' : '';

	// Base classes for the Tab.
	const baseClasses = `bg-transparent text-text-tertiary cursor-pointer flex items-center justify-center transition-colors duration-200 ${ fullWidth } ${ orientationClasses }`;

	const borderClasses = 'border-none';

	let borderBottomClasses = '';
	let variantClasses = 'rounded-full';
	if ( variant === 'rounded' ) {
		variantClasses = 'rounded-md';
	} else if ( variant === 'underline' ) {
		variantClasses = 'rounded-none';
		borderBottomClasses =
            'border-t-0 border-r-0 border-l-0 border-b border-solid border-tab-border';
	}

	const borderActiveInlineClasses = 'border-border-interactive';

	// Additional classes.
	const hoverClasses = '';
	const focusClasses = 'focus:outline-none';
	const disabledClasses = disabled
		? 'text-text-disabled cursor-not-allowed'
		: '';
	const activeClasses = activeItem === slug ? 'bg-background-primary text-text-primary' : '';

	// Merge classes.
	const tabClassName = cn(
		baseClasses,
		borderClasses,
		variantClasses,
		borderBottomClasses,
		activeItem === slug && variant === 'underline'
			? borderActiveInlineClasses
			: '',
		hoverClasses,
		focusClasses,
		disabledClasses,
		sizes,
		activeClasses,
		className
	);

	const iconParentClasses = cn( 'flex items-center gap-1' );

	// Handle click event.
	const handleClick = ( event ) => {
		onChange( event, { slug, text } );
	};

	return (
		<button
			ref={ ref }
			className={ tabClassName }
			disabled={ disabled }
			onClick={ handleClick }
			{ ...rest }
		>
			<span className={ iconParentClasses }>
				{ iconPosition === 'left' && icon && (
					<span className="mr-1">{ icon }</span>
				) }
				{ text }
				{ iconPosition === 'right' && icon && (
					<span className="ml-1">{ icon }</span>
				) }
			</span>
			{ badge && isValidElement( badge ) && badge }
		</button>
	);
};

const exports = {
	Group: TabsGroup,
	Tab: forwardRef( Tab ),
};

export default exports;
