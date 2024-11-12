import Label from './label';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Atoms/Label',
	component: Label,
	tags: [ 'autodocs' ],
	argTypes: {
		size: {
			control: {
				type: 'select',
			},
		},
		variant: {
			control: {
				type: 'select',
			},
		},
	},
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

// Basic Label
export const Basic: Story = {
	args: {
		size: 'sm',
		variant: 'neutral',
		required: false,
		children: 'Basic Label',
	},
};

// Required Label
export const Required: Story = {
	args: {
		size: 'sm',
		variant: 'neutral',
		required: true,
		children: 'Required Label',
	},
};

// Error Variant
export const Error: Story = {
	args: {
		size: 'sm',
		variant: 'error',
		required: false,
		children: 'Error Label',
	},
};

// Disabled Variant
export const Disabled: Story = {
	args: {
		size: 'sm',
		variant: 'disabled',
		required: false,
		children: 'Disabled Label',
	},
};
