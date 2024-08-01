import React, {
	useState,
	useCallback,
	useMemo,
	forwardRef,
	isValidElement,
	createContext,
	useContext,
	Fragment,
} from 'react';
import { nanoid } from 'nanoid';
import { cn } from '../../utility/utils';

const RadioButtonContext = createContext();
const useRadioButton = () => useContext( RadioButtonContext );

const RadioButtonGroup = ( {
	children,
	name,
	value,
	defaultValue,
	by = 'id',
	as: AsElement = Fragment,
	onChange,
	className,
	disabled = false,
} ) => {
	const isControlled = useMemo( () => typeof value !== 'undefined', [ value ] );
	const nameAttr = useMemo(
		() => name || `radio-button-group-${ nanoid() }`,
		[ name ]
	);
	const [ selectedValue, setSelectedValue ] = useState( isControlled ? value : defaultValue );

	const handleChange = useCallback(
		( event ) => {
			const newValue = event.target.value;
			if ( ! isControlled ) {
				setSelectedValue( newValue );
			}

			if ( typeof onChange !== 'function' ) {
				return;
			}
			onChange( newValue );
		},
		[ onChange ]
	);

	return (
		<AsElement { ...( AsElement === Fragment ? {} : { className } ) }>
			<RadioButtonContext.Provider
				value={ {
					name: nameAttr,
					value: isControlled ? value : selectedValue,
					by,
					onChange: handleChange,
					isControlled,
					disableAll: disabled,
				} }
			>
				{ React.Children.map( children, ( child ) => {
					if ( ! isValidElement( child ) ) {
						return null;
					}

					return child;
				} ) }
			</RadioButtonContext.Provider>
		</AsElement>
	);
};

const RadioButton = (
	{ id, label, value, disabled, size = 'md', ...props },
	ref
) => {
	const providerValue = useRadioButton();

	if ( ! providerValue ) {
		throw new Error( 'RadioButton should be used inside RadioButton Group' );
	}

	const {
		name,
		value: selectedValue,
		by,
		onChange,
		disableAll,
		checked,
	} = providerValue;
	const color = 'primary';
	const radioButtonId = useMemo( () => id || `radio-button-${ nanoid() }`, [ id ] ),
		isDisabled = useMemo( () => disableAll || disabled, [ disableAll, disabled ] );
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

		return selectedValue[ by ] === value[ by ];
	}, [ selectedValue, value, checked ] );

	const sizeClassNames = {
		sm: {
			checkbox: 'size-4',
			icon: 'size-1.5',
		},
		md: {
			checkbox: 'size-5',
			icon: 'size-2',
		},
	};
	const colorClassNames = {
		primary: {
			checkbox:
				'border-border-strong hover:border-border-interactive checked:border-border-interactive bg-white checked:bg-toggle-on checked:hover:bg-toggle-on-hover checked:hover:border-toggle-on-hover focus:ring-2 focus:ring-offset-4 focus:ring-focus',
			icon: 'text-white',
		},
	};
	const disabledClassNames = {
		checkbox:
			'disabled:bg-white checked:disabled:bg-white disabled:border-border-disabled checked:disabled:border-border-disabled',
		icon: 'peer-disabled:text-border-disabled',
	};

	const renderLabel = useCallback( () => {
		if ( isValidElement( label ) ) {
			return label;
		}

		if ( ! label.heading || ! label.description ) {
			return null;
		}
		return (
			<div className="space-y-1.5">
				<p className="text-text-primary text-base font-medium leading-4 m-0">
					{ label.heading }
				</p>
				<p className="text-text-secondary text-sm font-normal leading-5 m-0">
					{ label.description }
				</p>
			</div>
		);
	}, [ label ] );

	return (
		<div
			className={ cn( 'inline-flex items-center', !! label && 'items-start' ) }
		>
			<label
				className={ cn(
					'relative flex items-center rounded-full',
					! isDisabled && 'cursor-pointer'
				) }
				htmlFor={ radioButtonId }
			>
				<input
					ref={ ref }
					id={ radioButtonId }
					type="radio"
					className={ cn(
						"peer relative cursor-pointer appearance-none transition-all m-0 before:content-[''] checked:before:content-[''] checked:before:hidden before:hidden !border-1.5 border-solid rounded-full",
						colorClassNames[ color ].checkbox,
						sizeClassNames[ size ].checkbox,
						isDisabled && disabledClassNames.checkbox
					) }
					name={ name }
					value={ value }
					onChange={ onChange }
					checked={ checkedValue }
					disabled={ isDisabled }
					{ ...props }
				/>
				<span
					className={ cn(
						'pointer-events-none inline-flex items-center absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100',
						colorClassNames[ color ].icon,
						isDisabled && disabledClassNames.icon
					) }
				>
					<div
						className={ cn(
							'rounded-full bg-current',
							sizeClassNames[ size ]?.icon
						) }
					/>
				</span>
			</label>
			{ !! label && (
				<label
					className={ cn( 'ml-3', ! isDisabled && 'cursor-pointer' ) }
					htmlFor={ radioButtonId }
				>
					{ renderLabel() }
				</label>
			) }
		</div>
	);
};

const exports = {
	Group: RadioButtonGroup,
	Button: forwardRef( RadioButton ),
};

export default exports;
