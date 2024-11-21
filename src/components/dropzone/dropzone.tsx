import { useState, createContext, useContext, useRef, useMemo } from 'react';
import { CloudUpload, File, ImageOff, Trash } from 'lucide-react';
import { cn, formatFileSize } from '@/utilities/functions';
import Loader from '../loader';
import { nanoid } from 'nanoid';

export interface DropzoneProps {
	/** Callback function when a file is uploaded */
	onFileUpload?: ( file: File ) => void;
	/** Determines if the icon should be inline */
	inlineIcon?: boolean;
	/** Label for the dropzone */
	label?: string;
	/** Help text for the dropzone */
	helpText?: string;
	/** Size variant of the dropzone */
	size?: 'sm' | 'md' | 'lg';
	/** Indicates if the component is disabled */
	disabled?: boolean;
	/** Indicates if the component is in error state */
	error?: boolean;
	/** Error text to display */
	errorText?: string;
}

// Context interface for file data sharing
export interface FileUploadContextType {
	file: File | null;
	removeFile: () => void;
	isLoading: boolean;
	error: boolean;
	errorText?: string;
}

// Create a context to share file data between Dropzone and FilePreview
const FileUploadContext = createContext<FileUploadContextType | null>( null );

const useFileUploadContext = () => useContext( FileUploadContext );

// FilePreview
export const FilePreview = () => {
	const { file, removeFile, isLoading, error, errorText } =
		useFileUploadContext()!;

	if ( ! file ) {
		return null;
	}

	const renderFileIcon = useMemo(() => {
		return (
			<span className="inline-flex self-start p-0.5">
				<File className="size-5 text-icon-primary" />
			</span>
		);
	} , [ file ]);

	return (
		<div
			className={ cn(
				'border border-solid border-transparent flex items-start justify-between rounded mt-2 bg-field-primary-background p-3 gap-3',
				error && 'border-alert-border-danger bg-alert-background-danger'
			) }
		>
			<div className="flex items-center gap-3 w-full">
				{ isLoading && renderFileIcon }
				{ ! isLoading &&
					( file.type.startsWith( 'image/' ) ? (
						<div
							className={ cn(
								'size-10 rounded-sm flex items-center justify-center shrink-0',
								error && 'bg-gray-200 '
							) }
						>
							{ error ? (
								<ImageOff className="size-6 text-field-helper" />
							) : (
								<img
									src={ URL.createObjectURL( file ) }
									alt="Preview"
									className="w-full object-cover"
								/>
							) }
						</div>
					) : (
						renderFileIcon
					) ) }

				<div className="text-left flex flex-col gap-1 w-[calc(100%_-_5.5rem)]">
					<span className="text-sm font-medium text-field-label truncate">
						{ isLoading ? 'Loading...' : file.name }
					</span>
					{ ! isLoading && (
						<span
							className={ cn(
								'text-xs text-field-helper',
								error && 'text-support-error'
							) }
						>
							{ error ? errorText : formatFileSize( file.size ) }
						</span>
					) }
				</div>
				{ isLoading ? (
					<span className='inline-flex ml-auto p-0.5'>
						<Loader className='inline-flex' />
					</span>
				) : (
					<button
						onClick={ removeFile }
						className="inline-flex cursor-pointer bg-transparent border-0 p-1 my-0 ml-auto mr-0 ring-0 focus:outline-none self-start"
					>
						<Trash className="size-4 text-support-error" />
					</button>
				) }
			</div>
		</div>
	);
};

// Dropzone Component with embedded FilePreview subcomponent
export const Dropzone = ( {
	onFileUpload,
	inlineIcon = false,
	label = 'Drag and drop or browse files',
	helpText = 'Help Text',
	size = 'sm',
	disabled = false,
	error = false,
	errorText = 'Upload failed, please try again.',
}: DropzoneProps ) => {
	const [ isLoading, setIsLoading ] = useState( false );
	const [ file, setFile ] = useState<File | null>( null );
	const [ isDragging, setIsDragging ] = useState( false );

	const handleDrop = ( e: React.DragEvent<HTMLDivElement> ) => {
		if ( disabled ) {
			return;
		}
		setIsLoading( true );
		e.preventDefault();
		e.stopPropagation();
		setIsDragging( false );
		const droppedFile = e.dataTransfer.files[ 0 ];
		if ( droppedFile ) {
			setFile( droppedFile );
			if ( onFileUpload ) {
				onFileUpload( droppedFile );
			}
		}
		setIsLoading( false );
	};

	const handleDragOver = ( e: React.DragEvent<HTMLDivElement> ) => {
		if ( disabled ) {
			return;
		}
		e.preventDefault();
		setIsDragging( true );
	};

	const handleDragLeave = () => {
		if ( ! disabled ) {
			setIsDragging( false );
		}
	};

	const handleFileChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
		if ( disabled ) {
			return;
		}
		setIsLoading( true );
		const files = e.target.files;
		if ( ! files ) {
			return;
		}
		const selectedFile = files[ 0 ];
		if ( selectedFile ) {
			setFile( selectedFile );
			if ( onFileUpload ) {
				onFileUpload( selectedFile );
			}
		}
		setIsLoading( false );
	};

	const removeFile = () => {
		setFile( null );
	};
	const sizeClasses = {
		sm: {
			label: 'text-sm',
			helpText: 'text-xs',
			icon: 'size-5',
			padding: inlineIcon ? 'p-3' : 'p-5',
			gap: 'gap-2.5',
		},
		md: {
			label: 'text-sm',
			helpText: 'text-xs',
			icon: 'size-5',
			padding: inlineIcon ? 'p-4' : 'p-6',
			gap: 'gap-3',
		},
		lg: {
			label: 'text-base',
			helpText: 'text-sm',
			icon: 'size-6',
			padding: inlineIcon ? 'p-4' : 'p-6',
			gap: 'gap-3',
		},
	};
	const uploadInputID = useRef( `fui-file-upload-${ nanoid() }` );
	return (
		<FileUploadContext.Provider
			value={ { file, removeFile, isLoading, error, errorText } }
		>
			<div>
				<label htmlFor={ uploadInputID.current }>
					<div
						className={ cn(
							'min-w-80 cursor-pointer mx-auto border-dotted border-2 rounded-md text-center hover:border-field-dropzone-color hover:bg-field-dropzone-background-hover focus:outline-none focus:ring focus:ring-toggle-on focus:ring-offset-2 transition duration-200 ease-in-out',
							isDragging
								? 'border-field-dropzone-color bg-field-dropzone-background-hover'
								: 'border-field-border',
							disabled &&
								'border-field-border bg-field-background-disabled cursor-not-allowed hover:border-field-border',
							sizeClasses[ size ].padding
						) }
						onDragOver={ handleDragOver }
						onDragLeave={ handleDragLeave }
						onDrop={ handleDrop }
					>
						<div
							className={ cn(
								'flex flex-col items-center justify-center',
								inlineIcon &&
									`flex-row items-start ${ sizeClasses[ size ].gap }`
							) }
						>
							<div>
								<CloudUpload
									className={ cn(
										'text-field-dropzone-color size-6',
										sizeClasses[ size ].icon,
										disabled && 'text-field-color-disabled'
									) }
								/>
							</div>
							<div className="flex flex-col">
								<span
									className={ cn(
										'mt-1 text-center font-medium text-field-label',
										inlineIcon && 'text-left mt-0',
										sizeClasses[ size ].label,
										disabled && 'text-field-color-disabled'
									) }
								>
									{ label }
								</span>
								{ helpText && (
									<span
										className={ cn(
											'mt-1 text-center font-medium text-field-helper',
											inlineIcon && 'text-left',
											sizeClasses[ size ].helpText,
											disabled &&
												'text-field-color-disabled'
										) }
									>
										{ helpText }
									</span>
								) }
							</div>
						</div>
						<input
							id={ uploadInputID.current }
							type="file"
							className="sr-only"
							onChange={ handleFileChange }
							disabled={ disabled }
						/>
					</div>
				</label>

				<FilePreview />
			</div>
		</FileUploadContext.Provider>
	);
};
Dropzone.displayName = 'Dropzone';

export default Dropzone;
