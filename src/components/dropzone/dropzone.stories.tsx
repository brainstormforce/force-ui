// Dropzone.stories.js

import Dropzone from './dropzone'; // Adjust the import path as needed
import { Meta, StoryFn } from '@storybook/react';

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
			options: [ 'sm', 'md', 'lg' ],
			description: 'Size of the dropzone component',
			defaultValue: 'sm',
		},
		inlineIcon: {
			control: { type: 'boolean' },
			description: 'Display the icon inline with the label',
			defaultValue: false,
		},
		label: {
			control: { type: 'text' },
			description: 'Label for the dropzone component',
			defaultValue: 'Drag & drop or browse files',
		},
		helpText: {
			control: { type: 'text' },
			description: 'Help text for the dropzone component',
		},
		disabled: {
			control: { type: 'boolean' },
			description: 'Disable the dropzone component',
			defaultValue: false,
		},
	},
};

export default meta;

const Template: StoryFn<typeof Dropzone> = ( args ) => <Dropzone { ...args } />;

export const Basic = Template.bind( {} );
Basic.args = {
	label: 'Drag & drop or browse files',
	size: 'sm',
	inlineIcon: false,
	helpText: 'Supports PNG, JPG, and PDF files',
	disabled: false,
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
