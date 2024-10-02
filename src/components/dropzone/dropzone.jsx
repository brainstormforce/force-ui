import React, { useState, createContext, useContext } from 'react';
import { X, CloudUpload, File } from 'lucide-react';
import { cn, formatFileSize } from '@/utilities/functions';

// Create a context to share file data between Dropzone and FilePreview
const FileContext = createContext();

const useFileContext = () => useContext(FileContext);

// Dropzone Component with embedded FilePreview subcomponent
const Dropzone = ({ onFileUpload, inlineIcon = false, label, helpText }) => {
	const [isLoading, setIsLoading] = useState(false);
	console.log(isLoading);
	const [file, setFile] = useState(null);
	const [isDragging, setIsDragging] = useState(false);
	const handleDrop = (e) => {
		setIsLoading(true);
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(false);
		const droppedFile = e.dataTransfer.files[0];
		if (droppedFile) {
			setFile(droppedFile);
			setIsLoading(false);
			if (onFileUpload) {
				onFileUpload(droppedFile);
			}
		}
	};

	const handleDragOver = (e) => {
		e.preventDefault();
		setIsDragging(true);
	};

	const handleDragLeave = () => {
		setIsDragging(false);
	};

	const handleFileChange = (e) => {
		setIsLoading(true);
		const selectedFile = e.target.files[0];
		if (selectedFile) {
			setFile(selectedFile);
			setIsLoading(false);
			if (onFileUpload) {
				onFileUpload(selectedFile);
			}
		}
	};

	const removeFile = () => {
		setFile(null);
	};

	return (
		<FileContext.Provider value={{ file, removeFile, isLoading }}>
			<div className="w-full max-w-md mx-auto">
				<div
					className={cn(
						'w-72 mx-auto p-4 border-dotted border-2 rounded-md text-center',
						isDragging ? 'border-blue-500' : 'border-gray-300'
					)}
					onDragOver={handleDragOver}
					onDragLeave={handleDragLeave}
					onDrop={handleDrop}
				>
					<label htmlFor="file-upload" className="cursor-pointer">
						<div
							className={cn(
								'flex flex-col items-center justify-center',
								inlineIcon && 'flex-row'
							)}
						>
							<div>
								<CloudUpload className="w-6 h-6" />
							</div>
							<div className="flex flex-col">
								<span
									className={cn(
										'mt-2 text-center text-sm font-medium text-gray-500',
										inlineIcon && 'text-left'
									)}
								>
									{label ?? 'Drag &amp; drop or browse files'}
								</span>
								{helpText && (
									<span
										className={cn(
											'mt-2 text-center text-sm font-medium text-gray-500',
											inlineIcon && 'text-left'
										)}
									>
										{helpText}
									</span>
								)}
							</div>
						</div>
					</label>
					<input
						id="file-upload"
						type="file"
						className="sr-only"
						onChange={handleFileChange}
					/>
				</div>

				<FilePreview />
			</div>
		</FileContext.Provider>
	);
};
Dropzone.displayName = 'Dropzone';

const FilePreview = () => {
	const { file, removeFile, isLoading } = useFileContext();

	if (!file) {
		return null;
	}

	return (
		<div className="flex items-center justify-between mt-4">
			<div className="flex items-center space-x-2">
				{isLoading ? (
					<span>Loading...</span>
				) : file.type.startsWith('image/') ? (
					<img
						src={URL.createObjectURL(file)}
						alt="Preview"
						className="h-20 w-20 object-cover"
					/>
				) : (
					<span>
						<File className="w-6 h-6" />
					</span>
				)}
				<div className="text-left flex flex-col">
					<span className="text-sm font-medium text-gray-700">
						{isLoading ? 'Loading...' : file.name}
					</span>
					{!isLoading && (
						<span className="text-xs text-gray-500">
							{formatFileSize(file.size)}
						</span>
					)}
				</div>
			</div>
			<button
				onClick={removeFile}
				className="cursor-pointer bg-transparent border-0 p-0 m-0 ring-0 text-gray-500 focus:outline-none"
			>
				<X className="h-6 w-6" />
			</button>
		</div>
	);
};

export default Dropzone;
