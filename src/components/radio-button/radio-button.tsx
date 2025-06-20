import React, {
	useState,
	useCallback,
	useMemo,
	forwardRef,
	isValidElement,
	createContext,
	useContext,
	Fragment,
	type ReactNode,
	type ElementType,
} from 'react';
import { nanoid } from 'nanoid';
import { Check, Info } from 'lucide-react';

import { cn, columnClasses } from '@/utilities/functions';
import Switch from '../switch';
import {
	colorClassNames,
	disabledClassNames,
	sizeClassNames,
	textSizeClassNames,
	sizes,
	borderClasses,
	baseClasses,
	hoverClasses,
	focusClasses,
} from './styles';
import Tooltip from '../tooltip';

const RadioButtonContext = createContext<
	Partial<{
		name: string;
		value: string | string[];
		by: string;
		onChange:( value: string | string[] ) => void;
		isControlled: boolean;
		disableAll: boolean;
		style: 'simple' | 'tile';
		columns: number;
		multiSelection: boolean;
		size: 'sm' | 'md';
		checked?: boolean;
			}>
			>( {} );
const useRadioButton = () => useContext( RadioButtonContext );

/** Common props used across the radio button components */
export interface RadioButtonCommonProps {
	/** Custom class names for additional styling */
	className?: string;
	/** HTML element or React component to render the element as */
	as?: ElementType;
	/** Children components (usually RadioButton.Button instances) */
	children?: ReactNode;
	/** Disables the radio button */
	disabled?: boolean;
}

/** Props for the RadioButtonGroup component */
export interface RadioButtonGroupProps extends RadioButtonCommonProps {
	/** Name used for form submission */
	name?: string;
	/** Style of the radio button group: 'simple' or 'tile' */
	style?: 'simple' | 'tile';
	/** Size of the radio buttons: 'sm' or 'md' */
	size?: 'sm' | 'md';
	/** Controlled value of the group */
	value?: string | string[];
	/** Default value if the group is uncontrolled */
	defaultValue?: string | string[];
	/** Attribute to compare selected values, typically 'id' */
	by?: string;
	/** Handler invoked on value change */
	onChange?: ( value: string | string[] ) => void;
	/** Disables all radio buttons in the group */
	disableGroup?: boolean;
	/** Arranges the radio buttons vertically */
	vertical?: boolean;
	/** Number of columns for arranging the buttons */
	columns?: number;
	/** Enables multi-selection mode */
	multiSelection?: boolean;
	/** Gap between radio buttons */
	gapClassName?: string;
}

/** Props for an individual RadioButton */
export interface RadioButtonProps extends RadioButtonCommonProps {
	/** Unique identifier for the radio button */
	id?: string;
	/** Label content for the radio button */
	label?: { heading: string; description?: string };
	/** Value of the radio button */
	value: string;
	/** Disables the radio button */
	disabled?: boolean;
	/** Custom icon to display */
	icon?: ReactNode;
	/** Aligns icon inline with the label */
	inlineIcon?: boolean;
	/** Hides the selection indicator */
	hideSelection?: boolean;
	/** Reverses the position of icon and label */
	reversePosition?: boolean;
	/** Adds a border around the button */
	borderOn?: boolean;
	/** Adds a border when the button is active */
	borderOnActive?: boolean;
	/** Badge element to display */
	badgeItem?: ReactNode;
	/** Uses a switch for selection instead of radio input */
	useSwitch?: boolean;
	/** Info object with heading and description */
	info?: { heading: string; description?: string };
	/** Ensures the button has minimum width */
	minWidth?: boolean;
	/** Custom classes for the button wrapper */
	buttonWrapperClasses?: string;
	/** Checked state of the radio button */
	checked?: boolean;
}

export const RadioButtonGroup = ( {
	children,
	name,
	style = 'simple',
	size = 'md',
	value,
	defaultValue,
	by = 'id',
	as: AsElement = 'div',
	onChange,
	className,
	disableGroup = false,
	vertical = false,
	columns = 4,
	multiSelection = false,
	gapClassName = 'gap-2',
}: RadioButtonGroupProps ) => {
	const isControlled = useMemo( () => typeof value !== 'undefined', [ value ] );
	const nameAttr = useMemo(
		() => name || `radio-button-group-${ nanoid() }`,
		[ name ]
	);
	let initialSelectedValue;
	if ( isControlled ) {
		initialSelectedValue = value;
	} else if ( multiSelection ) {
		initialSelectedValue = defaultValue ?? [];
	} else {
		initialSelectedValue = defaultValue;
	}

	const [ selectedValue, setSelectedValue ] = useState( initialSelectedValue );

	const handleChange = useCallback(
		( newValue: string | string[] ) => {
			if ( multiSelection ) {
				// Handles multi-selection logic
				setSelectedValue( ( prevValue ) => {
					const isAlreadySelected =
						Array.isArray( prevValue ) &&
						typeof newValue === 'string' &&
						prevValue.includes( newValue );
					let updatedValue: string[];
					if ( isAlreadySelected ) {
						updatedValue = ( prevValue as string[] ).filter(
							( val ) => val !== newValue
						);
					} else {
						updatedValue = [
							...( Array.isArray( prevValue ) ? prevValue : [] ),
							...( typeof newValue === 'string' ? [ newValue ] : [] ),
						];
					}

					if ( typeof onChange === 'function' ) {
						onChange( updatedValue );
					}
					return updatedValue;
				} );
			} else {
				// Handles single selection logic
				if ( ! isControlled ) {
					setSelectedValue( newValue );
				}
				if ( typeof onChange !== 'function' ) {
					return;
				}
				onChange( newValue );
			}
		},
		[ onChange ]
	);
	className = cn(
		`grid grid-cols-4`,
		columnClasses[ columns as keyof typeof columnClasses ],
		gapClassName,
		style === 'tile' && 'gap-0',
		vertical && 'grid-cols-1',
		className
	);

	const groupClassName = cn(
		style === 'tile'
			? 'border border-border-subtle border-solid rounded-md shadow-sm'
			: 'gap-6',
		className
	);

	const renderRadioButtonContext = () => (
		<RadioButtonContext.Provider
			value={ {
				name: nameAttr,
				value: isControlled ? value : selectedValue,
				by,
				onChange: handleChange,
				isControlled,
				disableAll: disableGroup,
				style,
				columns,
				multiSelection,
				size,
			} }
		>
			{ React.Children.map( children, ( child ) => {
				if ( ! isValidElement( child ) ) {
					return null;
				}
				return child;
			} ) }
		</RadioButtonContext.Provider>
	);

	return (
		<>
			{ style === 'tile' ? (
				<div className={ groupClassName }>
					{ renderRadioButtonContext() }
				</div>
			) : (
				<AsElement { ...( AsElement === Fragment ? {} : { className } ) }>
					{ renderRadioButtonContext() }
				</AsElement>
			) }
		</>
	);
};
RadioButtonGroup.displayName = 'RadioButton.Group';

export const RadioButtonComponent = (
	{
		id,
		label,
		value,
		children,
		disabled,
		icon = null,
		inlineIcon = false,
		hideSelection = false,
		reversePosition = false,
		borderOn = false,
		borderOnActive = true,
		badgeItem = null,
		useSwitch = false,
		info = undefined,
		minWidth = true,
		...props
	}: RadioButtonProps,
	ref: React.ForwardedRef<HTMLInputElement>
) => {
	const { buttonWrapperClasses, ...restProps } = props;
	const providerValue = useRadioButton();
	const {
		name,
		value: selectedValue,
		by,
		onChange,
		disableAll,
		checked,
		multiSelection,
		size = 'md', // Default size to 'md' if not provided
	} = providerValue as {
		name: string;
		value: string | string[];
		by: string;
		onChange: ( newValue: string | string[], newChecked?: boolean ) => void;
		disableAll: boolean;
		checked?: boolean;
		multiSelection: boolean;
		size: 'sm' | 'md';
	};

	const color = 'primary';
	const radioButtonId = useMemo( () => id || `radio-button-${ nanoid() }`, [ id ] ),
		isDisabled = useMemo(
			() => disableAll || disabled,
			[ disableAll, disabled ]
		);
	const checkedValue = useMemo( () => {
		if ( multiSelection ) {
			return (
				Array.isArray( selectedValue ) && selectedValue.includes( value )
			);
		}
		if ( typeof checked !== 'undefined' ) {
			return checked;
		}

		if ( typeof selectedValue !== typeof value ) {
			return false;
		}
		if ( typeof selectedValue === 'string' ) {
			return selectedValue === value;
		}

		if ( Array.isArray( selectedValue ) ) {
			return selectedValue.includes( value );
		}

		return (
			( selectedValue as Record<string, unknown> )[ by ] ===
			( value as unknown as Record<string, unknown> )[ by ]
		);
	}, [ selectedValue, value, checked ] );

	const renderLabel = useCallback( () => {
		if ( isValidElement( label ) ) {
			return label;
		}

		if ( ! label?.heading ) {
			return null;
		}
		return (
			<div
				className={ cn(
					! inlineIcon && {
						'space-y-3': size === 'sm',
						'space-y-4': size === 'md',
					},
					reversePosition && ( useSwitch ? 'ml-10' : 'ml-4' ),
					inlineIcon && 'flex gap-2',
					inlineIcon && ! label.description && 'items-center'
				) }
			>
				{ icon && <>{ icon }</> }
				<div
					className={ cn(
						! ( icon && useSwitch ) || ( icon && badgeItem )
							? {
								'space-y-0.5': size === 'sm',
								'space-y-1': size === 'md',
							}
							: 'space-y-0.5'
					) }
				>
					<p
						className={ cn(
							'text-text-primary font-medium m-0',
							textSizeClassNames[
								size as keyof typeof textSizeClassNames
							],
							disabled && 'text-text-disabled cursor-not-allowed'
						) }
					>
						{ label.heading }
					</p>
					{ label.description && (
						<p className="text-text-tertiary text-sm font-normal leading-5 m-0">
							{ label.description }
						</p>
					) }
				</div>
			</div>
		);
	}, [ label ] );

	if ( providerValue.style === 'tile' ) {
		return (
			<ButtonGroupItem
				id={ id }
				label={ label }
				value={ value }
				disabled={ disabled }
				size={ size }
			>
				{ children }
			</ButtonGroupItem>
		);
	}

	const handleLabelClick = () => {
		if ( ! isDisabled ) {
			if ( multiSelection ) {
				// In multi-selection, toggle each individual selection
				if ( useSwitch ) {
					onChange( value, ! checkedValue );
				}
			} else {
				// In single selection, toggle on and off
				onChange( value ); // If it's selected, deselect it; otherwise, select it
			}
		}
	};

	const paddingClasses = {
		'pl-3.5 pr-2.5 py-2.5': size === 'sm' && ! ( icon && useSwitch ),
		'p-3': size === 'sm' && ( ( icon && useSwitch ) || ( icon && badgeItem ) ),
		'pl-4 pr-3 py-3': size === 'md' && ! ( icon && useSwitch ),
		'p-4': size === 'md' && ( ( icon && useSwitch ) || ( icon && badgeItem ) ),
	};

	return (
		<label
			className={ cn(
				'inline-flex items-center relative cursor-pointer transition-all duration-300',
				!! label && 'items-start justify-between',
				minWidth && 'min-w-[180px]',
				borderOn &&
					'outline outline-field-border outline-1 rounded-md shadow-sm hover:outline-border-interactive',
				borderOnActive &&
					borderOn &&
					checkedValue &&
					'outline-border-interactive',
				paddingClasses,
				'pr-12',
				isDisabled && 'cursor-not-allowed opacity-40',
				buttonWrapperClasses
			) }
			htmlFor={ radioButtonId }
			onClick={ handleLabelClick } // Toggle switch when label is clicked
		>
			{ !! label && (
				<label
					className={ cn(
						'cursor-pointer',
						isDisabled && 'cursor-not-allowed'
					) }
					htmlFor={ radioButtonId }
				>
					{ renderLabel() }
				</label>
			) }
			{ !! info && (
				<div className="absolute mr-0.5 bottom-1.5 right-3">
					<Tooltip title={ info?.heading } content={ info?.description }>
						<Info
							className={ cn(
								'text-text-primary',
								sizeClassNames[ size ]?.info
							) }
						/>
					</Tooltip>
				</div>
			) }
			<label
				className={ cn(
					'absolute mr-0.5 right-3 flex items-center cursor-pointer rounded-full gap-2',
					reversePosition && 'left-0',
					isDisabled && 'cursor-not-allowed',
					inlineIcon && 'mr-3'
				) }
				onClick={ handleLabelClick }
			>
				{ !! badgeItem && badgeItem }
				{ ! hideSelection &&
					( useSwitch ? (
						<>
							<Switch
								defaultValue={ false }
								size={ size }
								onChange={ () => {
									if ( ! multiSelection ) {
										// Toggle the switch on or off
										onChange( value );
									} else {
										// In multi-selection, toggle the current state
										onChange( value, ! checkedValue );
									}
								} }
								checked={ checkedValue }
								{ ...restProps }
								aria-label={ label?.heading ?? 'Switch' }
							/>
						</>
					) : (
						<span className="relative p-0.5">
							<input
								ref={ ref }
								id={ radioButtonId }
								type={ multiSelection ? 'checkbox' : 'radio' }
								className={ cn(
									"peer flex relative cursor-pointer appearance-none transition-all m-0 before:content-[''] checked:before:content-[''] checked:before:hidden before:hidden !border-1.5 border-solid",
									! multiSelection && 'rounded-full',
									colorClassNames[ color ].checkbox,
									sizeClassNames[ size ].checkbox,
									isDisabled && disabledClassNames.checkbox
								) }
								name={ name }
								value={ value }
								onChange={ ( e ) => onChange( e.target.value ) }
								checked={ checkedValue }
								disabled={ isDisabled }
								{ ...restProps }
							/>
							<span
								className={ cn(
									'inline-flex items-center absolute top-2/4 not-rtl:left-2/4 rtl:right-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100',
									colorClassNames[ color ].icon,
									isDisabled && disabledClassNames.icon
								) }
							>
								{ multiSelection ? (
									<Check
										className={
											size === 'sm' ? 'size-3' : 'size-4'
										}
									/>
								) : (
									<div
										className={ cn(
											'rounded-full bg-current',
											sizeClassNames[ size ]?.icon
										) }
									/>
								) }
							</span>
						</span>
					) ) }
			</label>
		</label>
	);
};
export const RadioButton = forwardRef( RadioButtonComponent );
RadioButton.displayName = 'RadioButton.Button';

export interface ButtonGroupItemProps {
	id?: string;
	children: ReactNode;
	value: string;
	disabled?: boolean;
	size?: 'sm' | 'md';
	[key: string]: unknown;
}

export const ButtonGroupItem = ( {
	id,
	children,
	value,
	disabled,
	size = 'md',
	...props
}: ButtonGroupItemProps ) => {
	const providerValue = useRadioButton();

	const {
		name,
		value: selectedValue,
		by,
		onChange,
		disableAll,
		checked,
	} = providerValue || {};

	const radioButtonId = useMemo( () => id || `radio-button-${ nanoid() }`, [ id ] );
	const isDisabled = useMemo(
		() => disableAll || disabled,
		[ disableAll, disabled ]
	);

	const checkedValue = useMemo( () => {
		if ( typeof checked !== 'undefined' ) {
			return checked;
		}

		if ( typeof selectedValue !== typeof value ) {
			return false;
		}
		if ( typeof selectedValue === 'string' ) {
			return selectedValue === value;
		}

		if ( Array.isArray( selectedValue ) ) {
			return selectedValue.includes( value );
		}

		return selectedValue && by
			? ( selectedValue as Record<string, unknown> )[ by ] ===
					( value as unknown as Record<string, unknown> )[ by ]
			: false;
	}, [ selectedValue, value, checked, by ] );

	const handleClick = () => {
		if ( onChange ) {
			onChange( value );
		}
	};

	const disabledClasses = isDisabled
		? 'text-text-disabled cursor-not-allowed'
		: '';
	const buttonClassName = cn(
		baseClasses,
		hoverClasses,
		focusClasses,
		disabledClasses,
		sizes[ size ],
		borderClasses
	);

	return (
		<>
			<button
				type="button"
				id={ radioButtonId }
				aria-label="Radio Button"
				className={ cn(
					buttonClassName,
					'first:rounded-tl first:rounded-bl first:border-0 first:border-r first:border-border-subtle last:rounded-tr last:rounded-br last:border-0',
					checkedValue && 'bg-button-disabled'
				) }
				onClick={ handleClick }
				disabled={ isDisabled }
				{ ...props }
			>
				<input
					type="hidden"
					value={ value }
					name={ name }
					checked={ checkedValue }
					onChange={ ( e ) => onChange?.( e.target.value ) }
				/>
				{ children }
			</button>
		</>
	);
};

export default Object.assign( RadioButton, {
	Group: RadioButtonGroup,
	Button: RadioButton,
} );
