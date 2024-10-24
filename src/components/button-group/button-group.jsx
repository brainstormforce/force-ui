import React, {
	useCallback,
	forwardRef,
	isValidElement,
	createContext,
	useContext,
} from 'react';
import { cn } from '@/utilities/functions';

/**
 * Context for managing the ButtonGroup state.
 */
const ButtonGroupContext = createContext();

/**
 * Hook to use the ButtonGroup context.
 * @return {Object} The context value of the ButtonGroup.
 */
const useButtonGroup = () => useContext(ButtonGroupContext);

/**
 * ButtonGroup component to wrap Button components.
 * @param {Object}          props                       - The properties passed to the component.
 * @param {React.ReactNode} props.children              - The children elements, expected to be Button components.
 * @param {string|null}     [props.activeItem=null]     - The currently active item in the group.
 * @param {Function}        [props.onChange]            - Callback when the active item changes.
 * @param {string}          [props.className]           - Additional class names for styling.
 * @param {string}          [props.size='md']           - Size of the buttons in the group ('xs', 'sm', 'md').
 * @param {string}          [props.iconPosition='left'] - Position of the icon in the button ('left' or 'right').
 */
const ButtonGroup = (props) => {
	const {
		children,
		activeItem = null,
		onChange,
		className,
		size = 'md',
		iconPosition = 'left',
	} = props;

	const handleChange = useCallback(
		(event, value) => {
			if (onChange) {
				onChange({ event, value });
			}
		},
		[onChange]
	);

	const groupClassName = cn(
		'box-border flex border border-border-subtle border-solid rounded',
		className
	);

	return (
		<div className={groupClassName}>
			<ButtonGroupContext.Provider
				value={{
					activeItem,
					onChange: handleChange,
					size,
					iconPosition,
				}}
			>
				{React.Children.map(children, (child, index) => {
					if (!isValidElement(child)) {
						return null;
					}
					const isFirstChild = index === 0;
					const isLastChild =
						index === React.Children.count(children) - 1;
					return React.cloneElement(child, {
						index,
						isFirstChild,
						isLastChild,
					});
				})}
			</ButtonGroupContext.Provider>
		</div>
	);
};

/**
 * Button component to be used within a ButtonGroup.
 * @param {Object}          props                  - The properties passed to the component.
 * @param {string}          props.slug             - Unique identifier for the button.
 * @param {string}          props.text             - Text to be displayed inside the button.
 * @param {React.ReactNode} [props.icon]           - Optional icon to be displayed inside the button.
 * @param {string}          [props.className]      - Additional class names for styling.
 * @param {boolean}         props.isFirstChild     - Flag indicating if this button is the first child in the group.
 * @param {boolean}         props.isLastChild      - Flag indicating if this button is the last child in the group.
 * @param {boolean}         [props.disabled=false] - Flag indicating if the button is disabled.
 * @param {Object}          [props.rest]           - Other properties to be passed to the button element.
 * @param {React.Ref}       ref                    - Reference to the button element.
 */
const ButtonComponent = (props, ref) => {
	const providerValue = useButtonGroup();
	const {
		slug,
		text,
		icon,
		className,
		disabled = false,
		isFirstChild,
		isLastChild,
		...rest
	} = props;

	if (!providerValue) {
		throw new Error('Button should be used inside Button Group');
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
		sizes[size],
		borderClasses,
		activeClasses,
		firstChildClasses,
		lastChildClasses,
		className
	);

	const handleClick = (event) => {
		onChange(event, { slug, text });
	};

	return (
		<button
			ref={ref}
			className={buttonClassName}
			disabled={disabled}
			onClick={handleClick}
			{...rest}
		>
			{iconPosition === 'left' && icon && (
				<span className="mr-1">{icon}</span>
			)}
			{text}
			{iconPosition === 'right' && icon && (
				<span className="ml-1">{icon}</span>
			)}
		</button>
	);
};
const Button = forwardRef(ButtonComponent);
Button.displayName = 'Button';

const exports = {
	Group: ButtonGroup,
	Button,
};

export default exports;
