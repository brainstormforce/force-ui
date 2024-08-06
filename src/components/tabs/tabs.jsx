import React, { useCallback, forwardRef, isValidElement, createContext, useContext } from 'react';
import { twMerge } from 'tailwind-merge';

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
		size = 'sm', // Size of the tabs in the group ('sm', 'md', 'lg').
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
		gap = orientation === 'vertical' ? 'gap-0.5' : 'gap-1',
		border = 'border border-tab-border border-solid';

	if ( variant === 'rounded' || orientation === 'vertical' ) {
		borderRadius = 'rounded-md';
	} else if ( variant === 'underline' ) {
		borderRadius = 'rounded-none';
		padding = 'p-0';
		gap = 'gap-0';
		border = 'border-none';
	}

	// Determine width classes.
	const widthClasses = width === 'full' ? 'w-full' : '';
	// Determine orientation classes.
	const orientationClasses = orientation === 'vertical' ? 'flex-col' : '';

	// Base classes for the TabsGroup.
	const baseClasses = `box-border [&>*]:box-border bg-tab-background flex items-center ${ widthClasses } ${ orientationClasses }`;

	// Merge classes.
	const groupClassName = twMerge(
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
	const { slug, text, icon, className, disabled = false, badge = null, ...rest } = props;

	if ( ! providerValue ) {
		throw new Error( 'Tab should be used inside Tabs Group' );
	}

	const { activeItem, onChange, size, variant, orientation, iconPosition, width } = providerValue;

	// Determine size classes.
	const sizes = {
		sm: 'p-1 text-sm [&>svg]:h-4 [&>svg]:w-4',
		md: 'p-2 text-base [&>svg]:h-5 [&>svg]:w-5',
		lg: 'p-2.5 text-lg [&>svg]:h-6 [&>svg]:w-6',
	}[ size ];

	// Determine width and orientation classes for tabs.
	const fullWidth = width === 'full' ? 'flex-1' : '';
	const orientationClasses = orientation === 'vertical' ? 'w-full justify-between' : '';

	// Base classes for the Tab.
	const baseClasses = `bg-transparent text-primary cursor-pointer flex items-center justify-center transition-colors duration-200 ${ fullWidth } ${ orientationClasses }`;

	const borderClasses = 'border-none';

	let borderBottomClasses = '';
	let variantClasses = 'rounded-full';
	if ( variant === 'rounded' ) {
		variantClasses = 'rounded-md';
	} else if ( variant === 'underline' ) {
		variantClasses = 'rounded-none';
		borderBottomClasses = 'border-t-0 border-r-0 border-l-0 border-b border-solid border-tab-border';
	}

	const borderActiveInlineClasses = 'border-border-interactive';

	// Additional classes.
	const hoverClasses = 'hover:bg-misc-tab-item-hover';
	const focusClasses = 'focus:outline-none';
	const disabledClasses = disabled ? 'text-text-disabled cursor-not-allowed' : '';
	const activeClasses = activeItem === slug ? 'bg-background-primary' : '';

	// Merge classes.
	const tabClassName = twMerge(
		baseClasses,
		borderClasses,
		variantClasses,
		borderBottomClasses,
		activeItem === slug && variant === 'underline' ? borderActiveInlineClasses : '',
		hoverClasses,
		focusClasses,
		disabledClasses,
		sizes,
		activeClasses,
		className
	);

	const iconParentClasses = twMerge(
		'flex items-center gap-1'
	);

	// Handle click event.
	const handleClick = ( event ) => {
		onChange( event, { slug, text } );
	};

	return (
		<button ref={ ref } className={ tabClassName } disabled={ disabled } onClick={ handleClick } { ...rest }>
			<span className={ iconParentClasses }>
				{ iconPosition === 'left' && icon && <span className="mr-1">{ icon }</span> }
				{ text }
				{ iconPosition === 'right' && icon && <span className="ml-1">{ icon }</span> }
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
