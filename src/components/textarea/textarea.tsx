import { useState, useCallback, useMemo, forwardRef } from 'react';
import { nanoid } from 'nanoid';
import { cn } from '@/utilities/functions';

export interface TextAreaProps {
	/** ID of the textarea element. */
	id?: string;
	/** Default value when used in uncontrolled mode. */
	defaultValue?: string;
	/** Value when used in controlled mode. */
	value?: string;
	/** Size of the textarea (sm, md, lg). */
	size?: 'sm' | 'md' | 'lg';
	/** Additional class names for the textarea. */
	className?: string;
	/** Disables the textarea if true. */
	disabled?: boolean;
	/** Handles changes in the textarea value. */
	onChange?: ( value: string ) => void;
	/** Marks the field with an error state. */
	error?: boolean;
	/** Callback triggered when the field is invalid. */
	onError?: () => void;
}

export const TextAreaComponent = (
	{
		id,
		defaultValue = '',
		value,
		size = 'sm', // sm, md, lg
		className = '',
		disabled = false,
		onChange = () => {},
		error = false,
		onError = () => {},
		...props
	}: TextAreaProps,
	ref: React.ForwardedRef<HTMLTextAreaElement>
) => {
	const inputId = useMemo( () => id || `input-textarea-${ nanoid() }`, [ id ] );
	const isControlled = useMemo( () => typeof value !== 'undefined', [ value ] );
	const [ inputValue, setInputValue ] = useState( defaultValue );

	const getValue = useCallback(
		() => ( isControlled ? value : inputValue ),
		[ isControlled, value, inputValue ]
	);

	const handleChange = ( event: React.ChangeEvent<HTMLTextAreaElement> ) => {
		if ( disabled ) {
			return;
		}

		const newValue = event.target.value;
		if ( ! isControlled ) {
			setInputValue( newValue );
		}

		if ( typeof onChange !== 'function' ) {
			return;
		}
		onChange( newValue );
	};

	const baseClasses =
		'py-2 rounded border border-solid border-border-subtle bg-field-secondary-background font-normal placeholder-text-tertiary text-text-primary focus:outline-none transition ease-in-out duration-200';
	const sizeClasses = {
		sm: 'px-3 rounded text-xs',
		md: 'px-3 rounded-md text-sm',
		lg: 'px-4 rounded-lg text-base',
	};

	const hoverClasses = disabled
		? 'hover:border-border-disabled'
		: 'hover:border-border-strong';
	const focusClasses =
		'focus:border-focus-border focus:ring-2 focus:ring-toggle-on focus:ring-offset-2';
	const errorClasses = error
		? 'focus:border-focus-error-border focus:ring-field-color-error border-focus-error-border'
		: '';
	const disabledClasses = disabled
		? 'border-border-disabled bg-field-background-disabled cursor-not-allowed text-text-disabled'
		: '';

	return (
		<textarea
			ref={ ref }
			id={ inputId }
			className={ cn(
				baseClasses,
				disabledClasses,
				sizeClasses[ size ],
				focusClasses,
				hoverClasses,
				errorClasses,
				className
			) }
			disabled={ disabled }
			onChange={ handleChange }
			onInvalid={ onError }
			value={ getValue() }
			{ ...props }
		/>
	);
};
const TextArea = forwardRef( TextAreaComponent );
TextArea.displayName = 'TextArea';

export default TextArea;
