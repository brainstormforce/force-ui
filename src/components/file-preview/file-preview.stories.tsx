import { Meta, StoryFn } from '@storybook/react';
import { FilePreview, FilePreviewFile, FilePreviewProps } from './file-preview';
import { Input } from '@/index';
import { useState } from 'react';

type InputValue = string | FileList | null;

const meta = {
	title: 'Components/FilePreview',
	component: FilePreview,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		onRemove: { action: 'removed' },
	},
	decorators: [
		( Story: React.FC ) => (
			<div className="w-72">
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof FilePreview>;

export default meta;

type Story = StoryFn<typeof FilePreview>;

const Template: Story = ( args: FilePreviewProps ) => <FilePreview { ...args } />;

const placeholderFile = {
	name: 'example-file.png',
	url: 'https://placehold.co/600x400.png',
	type: 'image/png',
	size: 102400,
} as FilePreviewFile;

export const Default: Story = Template.bind( {} );
Default.args = {
	file: placeholderFile,
	onRemove: () => {},
	disabled: false,
	size: 'md',
	error: false,
};

export const ErrorState = Template.bind( {} );
ErrorState.args = {
	file: placeholderFile,
	onRemove: () => {},
	disabled: false,
	size: 'md',
	error: true,
};

export const DisabledState = Template.bind( {} );
DisabledState.args = {
	file: placeholderFile,
	onRemove: () => {},
	disabled: true,
	size: 'md',
	error: false,
};

export const FileInputWithPreview: Story = ( args ) => {
	const [ selectedFile, setSelectedFile ] = useState<File | null>( null );

	const handleFileChange = ( value: InputValue ) => {
		if ( ! value ) {
			setSelectedFile( null );
			return;
		}

		let files: FileList | null = null;

		if ( value instanceof FileList ) {
			files = value;
		}

		setSelectedFile( files?.[ 0 ] || null );
	};

	return (
		<>
			<Input
				type="file"
				size="md"
				disabled={ false }
				error={ false }
				onChange={ handleFileChange }
			/>
			{ selectedFile && (
				<div className="mt-2">
					<FilePreview
						{ ...args }
						file={ selectedFile }
						onRemove={ () => setSelectedFile( null ) }
					/>
				</div>
			) }
		</>
	);
};
