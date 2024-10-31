import React, {
	useCallback,
	forwardRef,
	isValidElement,
	createContext,
	ReactNode,
	ReactElement,
} from 'react';
import { cn } from '@/utilities/functions';

/**
 * Context for managing the ButtonGroup state.
 */
export const ButtonGroupContext = createContext<{
	activeItem: string | null;
	onChange:( value: ButtonValue ) => void;
	size: 'xs' | 'sm' | 'md';
	iconPosition: 'left' | 'right';
		}>( {
			activeItem: null,
			onChange: () => {},
			size: 'md',
			iconPosition: 'left',
		} );

/** Defines the common props shared by components. */
export interface CommonProps {
	/** Additional class names for styling. */
	className?: string;
}

/** Type for the value passed to the onChange callback. */
export interface ButtonValue {
	event: React.MouseEvent<HTMLButtonElement>;
	value: {
		slug: string;
		text: string;
	};
}

/** Props for the ButtonGroup component. */
export interface ButtonGroupProps extends CommonProps {
	/** Child elements, typically Button components. */
	children: ReactNode;
	/** Active item slug in the group. */
	activeItem?: string | null;
	/** Callback when the active item changes. */
	onChange?: ( value: ButtonValue ) => void;
	/** Size of the buttons in the group. */
	size?: 'xs' | 'sm' | 'md';
	/** Position of the icon inside the button. */
	iconPosition?: 'left' | 'right';
}
export const ButtonGroup = ( {
	children,
	activeItem = null,
	onChange,
	className,
	size = 'md',
	iconPosition = 'left',
}: ButtonGroupProps ) => {
	const handleChange = useCallback(
		( value: ButtonValue ) => {
			if ( onChange ) {
				onChange( value );
			}
		},
		[ onChange ]
	);

	const groupClassName = cn(
		'box-border flex border border-border-subtle border-solid rounded',
		className
	);

	return (
		<div className={ groupClassName }>
			<ButtonGroupContext.Provider
				value={ {
					activeItem,
					onChange: handleChange,
					size,
					iconPosition,
				} }
			>
				{ React.Children.map( children, ( child, index ) => {
					if ( ! isValidElement( child ) ) {
						return null;
					}
					const isFirstChild = index === 0;
					const isLastChild =
						index === React.Children.count( children ) - 1;
					return React.cloneElement( child, {
						...child.props,
						index,
						isFirstChild,
						isLastChild,
					} );
				} ) }
			</ButtonGroupContext.Provider>
		</div>
	);
};

/** Props for the Button component. */
export interface ButtonProps extends CommonProps {
	/** Unique slug identifying the button. */
	slug: string;
	/** Text content of the button. */
	text: string;
	/** Icon displayed inside the button. */
	icon?: ReactElement;
	/** Marks the button as disabled. */
	disabled?: boolean;
	/** Indicates if the button is the first child in the group. */
	isFirstChild?: boolean;
	/** Indicates if the button is the last child in the group. */
	isLastChild?: boolean;
}

export const ButtonComponent = (
	{
		slug,
		text,
		icon,
		className,
		disabled = false,
		isFirstChild,
		isLastChild,
		...rest
	}: ButtonProps,
	ref: React.Ref<HTMLButtonElement>
) => {
	const providerValue = React.useContext( ButtonGroupContext );

	if ( ! providerValue ) {
		throw new Error( 'Button should be used inside Button Group' );
	}

	const { activeItem, onChange, size, iconPosition } = providerValue;

	const sizes = {
		xs: 'py-1 px-1 text-sm gap-0.5 [&>svg]:size-4',
		sm: 'py-2 px-2 text-base gap-1 [&>svg]:size-4',
		md: 'py-2.5 px-2.5 text-base gap-1 [&>svg]:size-5',
	};

	const baseClasses =
		'bg-background-primary text-primary cursor-pointer flex items-center justify-center';

	// Button hover classes.
	const hoverClasses = 'hover:bg-button-tertiary-hover';

	// Button focus classes.
	const focusClasses = 'focus:outline-none';

	// Button disabled classes.
	const disabledClasses = disabled
		? 'text-text-disabled cursor-not-allowed'
		: '';

	const firstChildClasses = isFirstChild
		? 'rounded-tl rounded-bl border-0 border-r border-border-subtle'
		: '';
	const lastChildClasses = isLastChild
		? 'rounded-tr rounded-br border-0'
		: '';
	const borderClasses = 'border-0 border-r border-border-subtle border-solid';
	const activeClasses = activeItem === slug ? 'bg-button-disabled' : '';

	const buttonClassName = cn(
		baseClasses,
		hoverClasses,
		focusClasses,
		disabledClasses,
		sizes[ size ],
		borderClasses,
		activeClasses,
		firstChildClasses,
		lastChildClasses,
		className
	);

	const handleClick = ( event: React.MouseEvent<HTMLButtonElement> ) => {
		onChange( { event, value: { slug, text } } );
	};

	return (
		<button
			ref={ ref }
			className={ buttonClassName }
			disabled={ disabled }
			onClick={ handleClick }
			{ ...rest }
		>
			{ iconPosition === 'left' && icon && (
				<span className="mr-1">{ icon }</span>
			) }
			{ text }
			{ iconPosition === 'right' && icon && (
				<span className="ml-1">{ icon }</span>
			) }
		</button>
	);
};
const Button = forwardRef( ButtonComponent );
Button.displayName = 'Button';

const exports = {
	Group: ButtonGroup,
	Button,
};

export default exports;
