import React, {
	useState,
	useCallback,
	useMemo,
	forwardRef,
	useRef,
	type ReactNode,
	LabelHTMLAttributes,
} from 'react';
import { nanoid } from 'nanoid';
import { cn, formatFileSize } from '@/utilities/functions';
import { Upload, X, File, ImageOff, Trash } from 'lucide-react';
import Label from '../label';
import { mergeRefs } from '@/components/toaster/utils';

export declare interface InputProps {
	/** Unique identifier for the input element. */
	id?: string;

	/** Specifies the type of the input element (e.g., text, file). */
	type?: 'text' | 'password' | 'email' | 'file';

	/** Determines the input variant (default or file preview). */
	variant?: 'default' | 'preview';

	/** Initial value of the input element. */
	defaultValue?: string;

	/** Controlled value of the input element. */
	value?: string;

	/** Defines the size of the input (e.g., 'sm', 'md', 'lg'). */
	size?: 'sm' | 'md' | 'lg';

	/** Additional custom classes for styling. */
	className?: string;

	/** Disables the input element when true. */
	disabled?: boolean;

	/** Function called when the input value changes. */
	onChange?: ( value: string | null ) => void;

	/** Indicates whether the input has an error state. */
	error?: boolean;

	/** Function called when the input encounters an error. */
	onError?: () => void;

	/** React node displayed as a prefix inside the input. */
	prefix?: ReactNode;

	/** React node displayed as a suffix inside the input. */
	suffix?: ReactNode;

	/** Label displayed above the input field. */
	label?: string;

	/** Placeholder text for the input field. */
	placeholder?: string;

	/** Indicates whether the input is required. */
	required?: boolean;

	/** Function called when file is removed */
	onFileRemove?: () => void;

	/** Data of the selected file */
	selectedFileData?: {
		name: string;
		url: string;
		type: string;
		size?: number;
	};
}

const commonFilePreviewClasses = {
	sm: {
		image: 'w-8 h-8',
		name: 'text-xs',
		fileIcon: 'h-8',
		uploadText: 'text-xs',
	},
	md: {
		image: 'w-10 h-10',
		name: 'text-sm',
		fileIcon: 'h-10',
		uploadText: 'text-xs',
	},
	lg: {
		image: 'w-10 h-10',
		name: 'text-sm',
		fileIcon: 'h-10',
		uploadText: 'text-xs',
	},
};

const FilePreview = ( {
	file,
	onRemove,
	error,
	disabled,
	size = 'sm',
}: {
	file: File | { name: string; url: string; type: string; size: number };
	onRemove: () => void;
	error?: boolean;
	disabled?: boolean;
	size?: 'sm' | 'md' | 'lg';
} ) => {
	const renderFileIcon = () => (
		<span
			className={ cn(
				'inline-flex self-start p-0.5',
				commonFilePreviewClasses[ size ].fileIcon
			) }
		>
			<File className="size-5 text-icon-primary" />
		</span>
	);

	return (
		<div
			className={ cn(
				'w-full flex items-start justify-between rounded mt-2 bg-field-primary-background p-2 gap-3',
				error && 'border-alert-border-danger bg-alert-background-danger'
			) }
		>
			<div className="flex items-center gap-3 w-full">
				{ file.type.startsWith( 'image' ) ? (
					<div
						className={ cn(
							'rounded-sm flex items-center justify-center shrink-0',
							error && 'bg-gray-200'
						) }
					>
						{ error ? (
							<ImageOff className="size-6 text-field-helper" />
						) : (
							<img
								src={
									'url' in file
										? file.url
										: URL.createObjectURL( file )
								}
								alt="Preview"
								className={ cn(
									'w-full object-contain rounded-sm',
									commonFilePreviewClasses[ size ].image
								) }
							/>
						) }
					</div>
				) : (
					renderFileIcon()
				) }

				<div className="text-left flex flex-col gap-0 w-[calc(100%_-_5.5rem)]">
					<span
						className={ cn(
							commonFilePreviewClasses[ size ].name,
							'font-medium text-field-label truncate'
						) }
					>
						{ file.name }
					</span>
					{ file.size && file.size > 0 && (
						<span
							className={ cn(
								commonFilePreviewClasses[ size ].uploadText,
								'text-xs text-field-helper',
								error && 'text-support-error'
							) }
						>
							{ formatFileSize( file.size ) }
						</span>
					) }
				</div>
				{ ! disabled && (
					<button
						onClick={ onRemove }
						className="inline-flex cursor-pointer bg-transparent border-0 p-1 my-0 ml-auto mr-0 ring-0 focus:outline-none self-start"
					>
						<Trash className="size-4 text-support-error" />
					</button>
				) }
			</div>
		</div>
	);
};

export const InputComponent = (
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
		onFileRemove,
		selectedFileData = { name: '', url: '', type: '', size: 0 },
		variant = 'default',
		...props
	}: InputProps &
		Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'>,
	ref: React.ForwardedRef<HTMLInputElement>
) => {
	const inputRef = useRef<HTMLInputElement>( null );
	const inputId = useMemo( () => id || `input-${ type }-${ nanoid() }`, [ id ] );
	const isControlled = useMemo( () => typeof value !== 'undefined', [ value ] );
	const [ inputValue, setInputValue ] = useState<string>( defaultValue );
	const [ selectedFile, setSelectedFile ] = useState<string | null>( null );

	const getValue = useCallback(
		() => ( isControlled ? value : inputValue ),
		[ isControlled, value, inputValue ]
	);

	const handleChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
		if ( disabled ) {
			return;
		}

		let newValue: string | FileList | null;
		if ( type === 'file' ) {
			newValue = event.target.files;
			if ( newValue && newValue.length > 0 ) {
				setSelectedFile( newValue[ 0 ].name );
			} else {
				setSelectedFile( null );
			}
		} else {
			newValue = event.target.value;
		}

		if ( ! isControlled && type !== 'file' ) {
			setInputValue( newValue as string );
		}

		if ( typeof onChange !== 'function' ) {
			return;
		}
		onChange( newValue as string );
	};

	const handleReset = () => {
		// Reset file selection when "X" icon is clicked
		setSelectedFile( null );
		if ( inputRef.current ) {
			inputRef.current.value = '';
		}
		onChange( null );
	};

	const selectedFileObject = useMemo( () => {
		if (
			selectedFileData &&
			selectedFileData.size &&
			selectedFileData.size > 0
		) {
			return {
				name: selectedFileData.name,
				url: selectedFileData.url,
				type: selectedFileData.type,
				size: selectedFileData.size ?? 0, // Default size if not provided
			};
		}
		if ( ! inputRef.current?.files?.length ) {
			return null;
		}
		return inputRef.current.files[ 0 ];
	}, [ selectedFileData ] );

	const baseClasses =
		'bg-field-secondary-background font-normal placeholder-text-tertiary text-text-primary w-full outline outline-1 outline-border-subtle border-none transition-[color,box-shadow,outline] duration-200';
	const sizeClasses = {
		xs: 'px-2 py-1 rounded',
		sm: 'p-3 py-2 rounded',
		md: 'p-3.5 py-2.5 rounded-md',
		lg: 'p-4 py-3 rounded-lg',
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
		? 'hover:outline-border-disabled'
		: 'hover:outline-border-strong';
	const focusClasses =
		'focus:outline-focus-border focus:ring-2 focus:ring-toggle-on focus:ring-offset-2';
	const errorClasses = error
		? 'focus:outline-focus-error-border focus:ring-field-color-error outline-focus-error-border'
		: '';
	const errorFileClasses = error
		? 'focus:outline-focus-error-border focus:ring-field-color-error outline-focus-error-border'
		: '';
	const disabledClasses = disabled
		? 'outline-border-disabled bg-field-background-disabled cursor-not-allowed text-text-disabled'
		: '';
	const disabledUploadFileClasses = disabled
		? 'outline-border-disabled cursor-not-allowed text-text-disabled file:text-text-tertiary'
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
		}

		if ( ! suffix ) {
			return null;
		}

		return (
			<div className={ cn( iconClasses, 'right-0 pr-3', textClasses[ size ] ) }>
				{ suffix }
			</div>
		);
	};

	const renderLabel = useMemo( () => {
		if ( ! label ) {
			return null;
		}
		return (
			<Label<LabelHTMLAttributes<HTMLLabelElement>>
				className={ cn( labelClasses[ size ] ) }
				htmlFor={ inputId }
				{ ...( props?.required && { required: true } ) }
			>
				{ label }
			</Label>
		);
	}, [ label, size, inputId ] );

	const fileClasses = selectedFile
		? 'file:border-0 file:bg-transparent pr-10'
		: 'text-text-tertiary file:border-0 file:bg-transparent pr-10';

	if ( type === 'file' ) {
		return (
			<div className="flex flex-col items-start gap-1.5 [&_*]:box-border box-border">
				{ renderLabel }
				<div
					className={ cn(
						'w-full relative flex focus-within:z-10',
						className
					) }
				>
					<input
						ref={ mergeRefs( inputRef, ref ) }
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
				{ selectedFileObject &&
					variant === 'preview' &&
					selectedFileObject.size > 0 && (
					<FilePreview
						file={ selectedFileObject }
						onRemove={ () => {
							handleReset();
							onFileRemove?.();
						} }
						error={ error }
						disabled={ disabled }
						size={ size }
					/>
				) }
			</div>
		);
	}

	return (
		<div className="flex flex-col items-start gap-1.5 [&_*]:box-border box-border">
			{ renderLabel }
			<div
				className={ cn(
					'w-full relative flex focus-within:z-10',
					className
				) }
			>
				{ getPrefix() }
				<input
					ref={ mergeRefs( inputRef, ref ) }
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
