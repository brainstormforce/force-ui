import { useState, useCallback, useMemo, forwardRef, useRef } from 'react';
import { nanoid } from 'nanoid';
import { cn } from '@/utilities/functions';
import { Upload, X } from 'lucide-react';

const InputComponent = (
	{
		id,
		type = 'text',
		defaultValue = '',
		value,
		size = 'sm', // sm, md, lg
		className = '',
		disabled = false,
		onChange = () => {},
		error = false,
		onError = () => {},
		prefix = null,
		suffix = null,
		label = '',
		...props
	},
	ref
) => {
	const inputRef = useRef( null );
	const inputId = useMemo( () => id || `input-${ type }-${ nanoid() }`, [ id ] );
	const isControlled = useMemo( () => typeof value !== 'undefined', [ value ] );
	const [ inputValue, setInputValue ] = useState( defaultValue );
	const [ selectedFile, setSelectedFile ] = useState( null );

	const getValue = useCallback(
		() => ( isControlled ? value : inputValue ),
		[ isControlled, value, inputValue ]
	);

	const handleChange = ( event ) => {
		if ( disabled ) {
			return;
		}

		let newValue;
		if ( type === 'file' ) {
			newValue = event.target.files;
			if ( newValue.length > 0 ) {
				setSelectedFile( newValue[ 0 ].name );
			} else {
				setSelectedFile( null );
			}
		} else {
			newValue = event.target.value;
		}

		if ( ! isControlled && type !== 'file' ) {
			setInputValue( newValue );
		}

		if ( typeof onChange !== 'function' ) {
			return;
		}
		onChange( newValue );
	};

	const handleReset = () => {
		// Reset file selection when "X" icon is clicked
		setSelectedFile( null );
		if ( inputRef.current ) {
			inputRef.current.value = null;
		}
		onChange( null );
	};

	const baseClasses =
		'border border-solid border-border-subtle box-border bg-field-secondary-background font-normal placeholder-text-tertiary text-text-primary w-full focus:outline-none';
	const sizeClasses = {
		xs: 'px-2 py-1 rounded max-h-6',
		sm: 'p-3 py-2 rounded max-h-8',
		md: 'p-3.5 py-2.5 rounded-md max-h-10',
		lg: 'p-4 py-3 rounded-lg max-h-12',
	};
	const labelClasses = {
		xs: 'text-xs font-medium',
		sm: 'text-sm font-medium',
		md: 'text-sm font-medium',
		lg: 'text-base font-medium',
	};
	const textClasses = {
		xs: 'text-xs',
		sm: 'text-xs',
		md: 'text-sm',
		lg: 'text-base',
	};
	const sizeClassesWithPrefix = {
		sm: prefix ? 'pl-8' : '',
		md: prefix ? 'pl-9' : '',
		lg: prefix ? 'pl-10' : '',
	};
	const sizeClassesWithSuffix = {
		sm: suffix ? 'pr-8' : '',
		md: suffix ? 'pr-9' : '',
		lg: suffix ? 'pr-10' : '',
	};

	const hoverClasses = disabled
		? 'hover:border-border-disabled'
		: 'hover:border-border-strong';
	const focusClasses =
		'focus:border-focus-border focus:ring-2 focus:ring-toggle-on focus:ring-offset-2';
	const errorClasses = error
		? 'focus:border-focus-error-border focus:ring-field-color-error border-focus-error-border'
		: '';
	const errorFileClasses = error
		? 'focus:border-focus-error-border focus:ring-field-color-error border-focus-error-border'
		: '';
	const disabledClasses = disabled
		? 'border-border-disabled bg-field-background-disabled cursor-not-allowed text-text-disabled'
		: '';
	const disabledUploadFileClasses = disabled
		? 'border-border-disabled cursor-not-allowed text-text-disabled file:text-text-tertiary'
		: '';
	const iconClasses =
		'font-normal placeholder-text-tertiary text-text-primary pointer-events-none absolute inset-y-0 flex flex-1 items-center [&>svg]:h-4 [&>svg]:w-4';
	const uploadIconClasses = disabled
		? 'font-normal placeholder-text-tertiary text-icon-disabled pointer-events-none absolute inset-y-0 flex flex-1 items-center'
		: 'font-normal placeholder-text-tertiary text-field-placeholder pointer-events-none absolute inset-y-0 flex flex-1 items-center';

	const uploadIconSizeClasses = {
		xs: '[&>svg]:size-4',
		sm: '[&>svg]:size-4',
		md: '[&>svg]:size-5',
		lg: '[&>svg]:size-6',
	};

	const getPrefix = () => {
		if ( ! prefix ) {
			return null;
		}
		return (
			<div className={ cn( iconClasses, 'left-0 pl-3', textClasses[ size ] ) }>
				{ prefix }
			</div>
		);
	};

	const getSuffix = () => {
		if ( type === 'file' ) {
			if ( selectedFile ) {
				return (
					<div
						className={ cn(
							uploadIconClasses,
							'right-0 pr-3 cursor-pointer z-20 pointer-events-auto',
							uploadIconSizeClasses[ size ]
						) }
						onClick={ handleReset }
						role="button"
						tabIndex={ 0 }
						onKeyDown={ ( e ) => {
							if ( e.key === 'Enter' || e.key === ' ' ) {
								handleReset();
							}
						} }
					>
						<X />
					</div>
				);
			}
			return (
				<div
					className={ cn(
						uploadIconClasses,
						'right-0 pr-3',
						uploadIconSizeClasses[ size ]
					) }
				>
					<Upload />
				</div>
			);
		}else if ( ! suffix ) {
			return null;
		}
		
		return (
			<div className={ cn( iconClasses, 'right-0 pr-3', textClasses[ size ] ) }>
				{ suffix }
			</div>
		);
	};

	const fileClasses = selectedFile
		? 'file:border-0 file:bg-transparent pr-10'
		: 'text-text-tertiary file:border-0 file:bg-transparent pr-10';

	if ( type === 'file' ) {
		return (
			<div className="flex flex-col items-start gap-1.5 [&_*]:box-border box-border">
				<label
					className={ cn( labelClasses[ size ], 'text-field-label' ) }
					htmlFor={ inputId }
				>
					{ label }
				</label>
				<div
					className={ cn(
						'w-full relative flex focus-within:z-10',
						className
					) }
				>
					<input
						ref={ ref }
						id={ inputId }
						type="file"
						className={ cn(
							baseClasses,
							disabledUploadFileClasses,
							sizeClasses[ size ],
							textClasses[ size ],
							focusClasses,
							hoverClasses,
							errorFileClasses,
							fileClasses
						) }
						disabled={ disabled }
						onChange={ handleChange }
						onInvalid={ onError }
						{ ...props }
					/>
					<div
						className={ cn(
							uploadIconClasses,
							'right-0 pr-3',
							uploadIconSizeClasses[ size ]
						) }
					>
						<Upload />
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="flex flex-col items-start gap-1.5 [&_*]:box-border box-border">
			<label
				className={ cn( labelClasses[ size ], 'text-field-label' ) }
				htmlFor={ inputId }
			>
				{ label }
			</label>
			<div
				className={ cn(
					'w-full relative flex focus-within:z-10',
					className
				) }
			>
				{ getPrefix() }
				<input
					ref={ inputRef }
					id={ inputId }
					type={ type }
					className={ cn(
						baseClasses,
						disabledClasses,
						sizeClasses[ size ],
						textClasses[ size ],
						sizeClassesWithPrefix[ size ],
						sizeClassesWithSuffix[ size ],
						focusClasses,
						hoverClasses,
						errorClasses
					) }
					disabled={ disabled }
					onChange={ handleChange }
					onInvalid={ onError }
					value={ getValue() }
					{ ...props }
				/>
				{ getSuffix() }
			</div>
		</div>
	);
};

const Input = forwardRef( InputComponent );
Input.displayName = 'Input';

export default Input;
