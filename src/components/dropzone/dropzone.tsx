import { useState, createContext, useContext } from 'react';
import { X, CloudUpload, File, Loader } from 'lucide-react';
import { cn, formatFileSize } from '@/utilities/functions';

// Common interface for props shared between Dropzone and FilePreview
export interface BaseProps {
	/** Indicates if the component is disabled */
	disabled?: boolean;
}

export interface DropzoneProps extends BaseProps {
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
}

// Context interface for file data sharing
export interface FileUploadContextType {
	file: File | null;
	removeFile: () => void;
	isLoading: boolean;
}

// Create a context to share file data between Dropzone and FilePreview
const FileUploadContext = createContext<FileUploadContextType | null>( null );

const useFileUploadContext = () => useContext( FileUploadContext );

// FilePreview subcomponent
export const FilePreview = () => {
	const { file, removeFile, isLoading } = useFileUploadContext()!;

	if ( ! file ) {
		return null;
	}

	return (
		<div className="flex items-center justify-between mt-4 bg-field-primary-background">
			<div className="flex items-center space-x-2">
				{ isLoading && <Loader className="w-6 h-6" /> }

				{ ! isLoading &&
					( file.type.startsWith( 'image/' ) ? (
						<div className="w-10 h-10 flex items-center justify-center">
							<img
								src={ URL.createObjectURL( file ) }
								alt="Preview"
								className="w-full object-cover"
							/>
						</div>
					) : (
						<span>
							<File className="w-6 h-6" />
						</span>
					) ) }

				<div className="text-left flex flex-col">
					<span className="text-sm font-medium text-gray-700">
						{ isLoading ? 'Loading...' : file.name }
					</span>
					{ ! isLoading && (
						<span className="text-xs text-gray-500">
							{ formatFileSize( file.size ) }
						</span>
					) }
				</div>
			</div>
			<button
				onClick={ removeFile }
				className="cursor-pointer bg-transparent border-0 p-0 m-0 ring-0 text-gray-500 focus:outline-none"
			>
				<X className="h-6 w-6" />
			</button>
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
}: DropzoneProps ) => {
	const [ isLoading, setIsLoading ] = useState( false );
	const [ file, setFile ] = useState( null );
	const [ isDragging, setIsDragging ] = useState( false );

	const handleDrop = ( e ) => {
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
			setIsLoading( false );
			if ( onFileUpload ) {
				onFileUpload( droppedFile );
			}
		}
	};

	const handleDragOver = ( e ) => {
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

	const handleFileChange = ( e ) => {
		if ( disabled ) {
			return;
		}
		setIsLoading( true );
		const selectedFile = e.target.files[ 0 ];
		if ( selectedFile ) {
			setFile( selectedFile );
			setIsLoading( false );
			if ( onFileUpload ) {
				onFileUpload( selectedFile );
			}
		}
	};

	const removeFile = () => {
		setFile( null );
	};
	const sizeClasses = {
		sm: {
			label: 'text-sm',
			helpText: 'text-xs',
			icon: 'w-5 h-5',
		},
		md: {
			label: 'text-sm',
			helpText: 'text-xs',
			icon: 'w-5 h-5',
		},
		lg: {
			label: 'text-base',
			helpText: 'text-sm',
			icon: 'w-6 h-6',
		},
	};

	return (
		<FileUploadContext.Provider value={ { file, removeFile, isLoading } }>
			<div>
				<label htmlFor="fui-file-upload">
					<div
						className={ cn(
							'min-w-80 cursor-pointer p-4 mx-auto border-dotted border-2 rounded-md text-center hover:border-field-dropzone-color hover:bg-field-dropzone-background-hover',
							isDragging
								? 'border-field-dropzone-color bg-field-dropzone-background-hover'
								: 'border-field-border',
							disabled &&
								'border-field-border bg-field-background-disabled cursor-not-allowed hover:border-field-border'
						) }
						onDragOver={ handleDragOver }
						onDragLeave={ handleDragLeave }
						onDrop={ handleDrop }
					>
						<div
							className={ cn(
								'flex flex-col items-center justify-center',
								inlineIcon && 'flex-row items-start gap-4'
							) }
						>
							<div>
								<CloudUpload
									className={ cn(
										'text-field-dropzone-color w-6 h-6',
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
							id="fui-file-upload"
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
