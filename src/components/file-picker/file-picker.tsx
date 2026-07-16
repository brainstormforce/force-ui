import React, {
	useState,
	useEffect,
	useMemo,
	forwardRef,
	useRef,
	LabelHTMLAttributes,
} from 'react';
import { nanoid } from 'nanoid';
import { cn } from '@/utilities/functions';
import { Upload, X } from 'lucide-react';
import Label from '../label';
import { mergeRefs } from '@/components/toaster/utils';

export declare interface FilePickerProps {
	/**
	 * Unique identifier for the picker trigger element.
	 *
	 * @since x.x.x
	 */
	id?: string;

	/**
	 * Controlled display value. Accepts a File, an array of Files, or a
	 * previously saved filename string. Renders in the preview segment as if
	 * the file was selected via the picker.
	 *
	 * @since x.x.x
	 */
	value?: File | File[] | string | null;

	/**
	 * Defines the size of the picker (e.g., 'sm', 'md', 'lg').
	 *
	 * @since x.x.x
	 */
	size?: 'sm' | 'md' | 'lg';

	/**
	 * Additional custom classes for styling.
	 *
	 * @since x.x.x
	 */
	className?: string;

	/**
	 * Disables the picker when true.
	 *
	 * @since x.x.x
	 */
	disabled?: boolean;

	/**
	 * Function called with the selected FileList, or null when the selection
	 * is cleared.
	 *
	 * @since x.x.x
	 */
	onChange?: ( files: FileList | null ) => void;

	/**
	 * Indicates whether the picker has an error state.
	 *
	 * @since x.x.x
	 */
	error?: boolean;

	/**
	 * Label displayed above the picker.
	 *
	 * @since x.x.x
	 */
	label?: string;

	/**
	 * Indicates whether a file selection is required.
	 *
	 * @since x.x.x
	 */
	required?: boolean;

	/**
	 * Shows a remove ("X") affordance when a file is selected, replacing the
	 * upload icon. Clicking it clears the selection and fires onChange(null).
	 *
	 * @since x.x.x
	 */
	clearable?: boolean;
}

export const FilePickerComponent = (
	{
		id,
		value,
		size = 'sm', // sm, md, lg
		className = '',
		disabled = false,
		onChange = () => {},
		error = false,
		label = '',
		required = false,
		clearable = false,
		'aria-label': ariaLabel,
		'aria-labelledby': ariaLabelledBy,
		...props
	}: FilePickerProps &
		Omit<
			React.InputHTMLAttributes<HTMLInputElement>,
			'size' | 'onChange' | 'value' | 'type'
		>,
	ref: React.ForwardedRef<HTMLInputElement>
) => {
	const inputRef = useRef<HTMLInputElement>( null );
	const pickerId = useMemo( () => id || `file-picker-${ nanoid() }`, [ id ] );
	// undefined = untouched (fall back to the value prop), null = explicitly cleared.
	const [ selection, setSelection ] = useState<string | null | undefined>(
		undefined
	);

	useEffect( () => {
		// A changed value prop takes over the display again (controlled replace).
		setSelection( undefined );
	}, [ value ] );

	const valueDisplayName = useMemo( () => {
		if ( value === null || value === undefined ) {
			return null;
		}
		if ( typeof value === 'string' ) {
			return value || null;
		}
		if ( Array.isArray( value ) ) {
			return value.map( ( file ) => file.name ).join( ', ' ) || null;
		}
		return value.name;
	}, [ value ] );

	const displayName = selection !== undefined ? selection : valueDisplayName;

	const handleChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
		if ( disabled ) {
			return;
		}

		const files = event.target.files;
		if ( files && files.length > 0 ) {
			setSelection(
				Array.from( files )
					.map( ( file ) => file.name )
					.join( ', ' )
			);
		} else {
			setSelection( null );
		}

		if ( typeof onChange !== 'function' ) {
			return;
		}
		onChange( files );
	};

	const handleReset = () => {
		// Reset file selection when "X" icon is clicked
		setSelection( null );
		if ( inputRef.current ) {
			inputRef.current.value = '';
		}
		onChange( null );
	};

	const openFileDialog = () => {
		inputRef.current?.click();
	};

	const baseClasses =
		'bg-field-secondary-background font-normal placeholder-text-tertiary text-text-primary w-full outline outline-1 outline-border-subtle border-none transition-[color,box-shadow,outline] duration-200';
	const sizeClasses = {
		sm: 'p-3 py-2 rounded',
		md: 'p-3.5 py-2.5 rounded-md',
		lg: 'p-4 py-3 rounded-lg',
	};
	const labelClasses = {
		sm: 'text-sm font-medium',
		md: 'text-sm font-medium',
		lg: 'text-base font-medium',
	};
	const textClasses = {
		sm: 'text-xs',
		md: 'text-sm',
		lg: 'text-base',
	};

	const hoverClasses = disabled
		? 'hover:outline-border-disabled'
		: 'hover:outline-border-strong';
	const focusClasses =
		'focus:outline-focus-border focus:ring-2 focus:ring-toggle-on focus:ring-offset-2';
	const errorFileClasses = error
		? 'focus:outline-focus-error-border focus:ring-field-color-error outline-focus-error-border'
		: '';
	const disabledUploadFileClasses = disabled
		? 'outline-border-disabled cursor-not-allowed text-text-disabled'
		: '';
	const uploadIconClasses = disabled
		? 'font-normal placeholder-text-tertiary text-icon-disabled pointer-events-none absolute inset-y-0 flex flex-1 items-center'
		: 'font-normal placeholder-text-tertiary text-field-placeholder pointer-events-none absolute inset-y-0 flex flex-1 items-center';

	const uploadIconSizeClasses = {
		sm: '[&>svg]:size-4',
		md: '[&>svg]:size-5',
		lg: '[&>svg]:size-6',
	};

	const fileClasses = 'pr-10';

	const renderLabel = useMemo( () => {
		if ( ! label ) {
			return null;
		}
		return (
			<Label<LabelHTMLAttributes<HTMLLabelElement>>
				className={ cn( labelClasses[ size ] ) }
				htmlFor={ pickerId }
				{ ...( required && { required: true } ) }
			>
				{ label }
			</Label>
		);
	}, [ label, size, pickerId, required ] );

	const renderSuffix = () => {
		if ( clearable && displayName && ! disabled ) {
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
					aria-label="Remove file"
					onKeyDown={ ( e ) => {
						if ( e.key === 'Enter' || e.key === ' ' ) {
							handleReset();
						}
					} }
				>
					<X aria-hidden="true" />
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
				aria-hidden="true"
			>
				<Upload />
			</div>
		);
	};

	return (
		<div className="flex flex-col items-start gap-1.5 [&_*]:box-border box-border">
			{ renderLabel }
			<div
				className={ cn(
					'w-full relative flex focus-within:z-10',
					className
				) }
			>
				<button
					type="button"
					id={ pickerId }
					className={ cn(
						baseClasses,
						disabledUploadFileClasses,
						sizeClasses[ size ],
						textClasses[ size ],
						focusClasses,
						hoverClasses,
						errorFileClasses,
						fileClasses,
						'flex items-center gap-2 text-left cursor-pointer',
						disabled && 'cursor-not-allowed'
					) }
					disabled={ disabled }
					onClick={ openFileDialog }
					aria-label={ ariaLabel }
					aria-labelledby={ ariaLabelledBy }
					{ ...( error && { 'aria-invalid': true } ) }
				>
					<span
						className={ cn(
							'shrink-0',
							disabled && 'text-text-tertiary'
						) }
					>
						Choose File
					</span>
					<span
						className={ cn(
							'truncate',
							! displayName && 'text-text-tertiary'
						) }
					>
						{ displayName ?? 'No file chosen' }
					</span>
				</button>
				{ renderSuffix() }
				<input
					ref={ mergeRefs( inputRef, ref ) }
					type="file"
					className="sr-only"
					tabIndex={ -1 }
					aria-hidden="true"
					disabled={ disabled }
					required={ required }
					onChange={ handleChange }
					{ ...props }
				/>
			</div>
		</div>
	);
};

const FilePicker = forwardRef( FilePickerComponent );
FilePicker.displayName = 'FilePicker';

export default FilePicker;
