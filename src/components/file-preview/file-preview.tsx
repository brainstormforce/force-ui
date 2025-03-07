import { cn, formatFileSize } from '@/utilities/functions';
import { File, ImageOff, Trash } from 'lucide-react';

export type FilePreviewFile = File | { name: string; url: string; type: string; size: number };

export interface FilePreviewProps {
	/** The file to display. */
	file: FilePreviewFile;

	/** Function called when the file is removed. */
	onRemove: ( selectedFile: FilePreviewFile ) => void;

	/** Indicates whether the file preview is disabled. */
	disabled?: boolean;

	/** The size of the file preview. */
	size?: 'sm' | 'md' | 'lg';

	/** Indicates whether the file preview has an error. */
	error?: boolean;
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

export const FilePreview = ( {
	file,
	onRemove,
	error,
	disabled,
	size = 'sm',
}: FilePreviewProps ) => {
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
						onClick={ () => onRemove( file ) }
						className="inline-flex cursor-pointer bg-transparent border-0 p-1 my-0 ml-auto mr-0 ring-0 focus:outline-none self-start"
					>
						<Trash className="size-4 text-support-error" />
					</button>
				) }
			</div>
		</div>
	);
};

export default FilePreview;
