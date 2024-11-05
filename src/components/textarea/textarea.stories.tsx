import { Meta, StoryObj } from '@storybook/react';
import TextArea, { TextAreaProps } from './textarea';

const meta: Meta<TextAreaProps> = {
	title: 'Atoms/TextArea',
	component: TextArea,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		size: {
			control: 'select',
		},
	},
};

export default meta;

type Story = StoryObj<TextAreaProps>;

// Basic TextArea Example
export const Basic: Story = {
	args: {
		size: 'sm',
		disabled: false,
		error: false,
		defaultValue: 'Basic TextArea',
	},
};

// Disabled TextArea Example
export const Disabled: Story = {
	args: {
		size: 'md',
		disabled: true,
		error: false,
		defaultValue: 'Disabled TextArea',
	},
};

// TextArea with Error State Example
export const ErrorState: Story = {
	args: {
		size: 'md',
		disabled: false,
		error: true,
		defaultValue: 'TextArea with Error',
	},
};

// Large TextArea Example
export const Large: Story = {
	args: {
		size: 'lg',
		disabled: false,
		error: false,
		defaultValue: 'Large TextArea',
	},
};
