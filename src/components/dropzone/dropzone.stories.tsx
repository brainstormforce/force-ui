// Dropzone.stories.js

import Dropzone from './dropzone'; // Adjust the import path as needed
import type { Meta, StoryFn } from '@storybook/react';

const meta: Meta<typeof Dropzone> = {
	title: 'Molecules/Dropzone',
	component: Dropzone,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		size: {
			control: { type: 'select' },
		},
	},
};

export default meta;

const Template: StoryFn<typeof Dropzone> = ( args ) => <Dropzone { ...args } />;

export const Basic = Template.bind( {} );
Basic.args = {
	size: 'md',
	label: 'Drag and drop or browse files',
	helpText: 'Click to upload your files',
	inlineIcon: false,
	disabled: false,
	error: false,
	errorText: 'Upload failed, please try again.',
};

export const LargeSize = Template.bind( {} );
LargeSize.args = {
	...Basic.args,
	size: 'lg',
};

export const DisabledDropzone = Template.bind( {} );
DisabledDropzone.args = {
	...Basic.args,
	disabled: true,
};

export const InlineIcon = Template.bind( {} );
InlineIcon.args = {
	...Basic.args,
	inlineIcon: true,
};

export const CustomHelpText = Template.bind( {} );
CustomHelpText.args = {
	...Basic.args,
	helpText: 'Ensure your files do not exceed 10MB',
};
