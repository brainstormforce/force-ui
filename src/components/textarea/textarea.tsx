import {
	useState,
	useCallback,
	useMemo,
	useRef,
	useLayoutEffect,
	forwardRef,
} from 'react';
import { nanoid } from 'nanoid';
import { cn } from '@/utilities/functions';
import { mergeRefs } from '@/components/toaster/utils';

const toCssSize = ( v: number | string | undefined ) =>
	typeof v === 'number' ? `${ v }px` : v;

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
	/** When true, the textarea height auto-adjusts to fit its content. */
	autoResize?: boolean;
	/** Minimum height of the textarea. Accepts a number (px) or any CSS length string (e.g. '10rem'). Applied regardless of autoResize. */
	minHeight?: number | string;
	/** Maximum height of the textarea. When auto-resize reaches this value, the textarea becomes scrollable. Accepts a number (px) or any CSS length string. Applied regardless of autoResize. Defaults to 160px. */
	maxHeight?: number | string;
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
		autoResize = false,
		minHeight,
		maxHeight = 160,
		style: callerStyle,
		...props
	}: TextAreaProps &
		Omit<
			React.TextareaHTMLAttributes<HTMLTextAreaElement>,
			'size' | 'onChange'
		>,
	ref: React.ForwardedRef<HTMLTextAreaElement>
) => {
	const internalRef = useRef<HTMLTextAreaElement>( null );
	const inputId = useMemo( () => id || `input-textarea-${ nanoid() }`, [ id ] );
	const isControlled = useMemo( () => typeof value !== 'undefined', [ value ] );
	const [ inputValue, setInputValue ] = useState( defaultValue );

	const getValue = useCallback(
		() => ( isControlled ? value : inputValue ),
		[ isControlled, value, inputValue ]
	);

	useLayoutEffect( () => {
		if ( ! autoResize ) {
			return;
		}
		const el = internalRef.current;
		if ( ! el ) {
			return;
		}
		el.style.height = 'auto';
		el.style.height = `${ el.scrollHeight }px`;
	}, [ autoResize, getValue(), minHeight, maxHeight ] );

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
		'py-2 rounded border border-solid border-border-subtle bg-field-secondary-background font-normal placeholder-text-tertiary text-text-primary focus:outline-none focus-visible:outline-none transition ease-in-out duration-200';
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

	const computedStyle: React.CSSProperties = {
		...( callerStyle ?? {} ),
		minHeight: toCssSize( minHeight ),
		maxHeight: toCssSize( maxHeight ),
		...( autoResize && {
			resize: 'none',
			overflow: maxHeight != null ? 'auto' : 'hidden',
		} ),
	};

	return (
		<textarea
			ref={ mergeRefs( internalRef, ref ) }
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
			style={ computedStyle }
			{ ...( error && { 'aria-invalid': true } ) }
			{ ...props }
		/>
	);
};
const TextArea = forwardRef( TextAreaComponent );
TextArea.displayName = 'TextArea';

export default TextArea;
