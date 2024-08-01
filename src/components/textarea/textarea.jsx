import { twMerge } from 'tailwind-merge';

const TextArea = ( props ) => {
	const {
		value = '',
		size = 'sm', // sm, md, lg
		className = '',
		disabled = false,
		inputProps,
		onChange = () => {},
		error = false,
		onError = () => {},
	} = props;

	const baseClasses = 'py-2 rounded border border-solid border-border-subtle bg-field-secondary-background font-normal placeholder-text-tertiary text-text-primary';
	const sizeClasses = {
		sm: 'px-3 rounded text-xs',
		md: 'px-3 rounded-md text-sm',
		lg: 'px-4 rounded-lg text-base',
	};

	const hoverClasses = disabled ? 'hover:border-border-disabled' : 'hover:border-border-strong';
	const focusClasses = 'focus:border-focus-border focus:ring-2 focus:ring-toggle-on focus:ring-offset-2';
	const errorClasses = error ? 'focus:border-focus-error-border focus:ring-field-color-error bg-field-background-error' : '';
	const disabledClasses = disabled ? 'border-border-disabled bg-field-background-disabled cursor-not-allowed text-text-disabled' : '';

	return <textarea className={ twMerge( baseClasses, disabledClasses, sizeClasses[ size ], focusClasses, hoverClasses, errorClasses, className ) } { ...inputProps } disabled={ disabled } onChange={ onChange } onInvalid={ onError } value={ value } />;
};

export default TextArea;
