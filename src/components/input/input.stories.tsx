import Input from './input';
import { Phone } from 'lucide-react';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
	title: 'Atoms/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: 'select',
		},
		size: {
			control: 'select',
		},
	},
};

export default meta;

type Story = StoryObj<typeof Input>;

// Basic Input
export const Basic: Story = {
	args: {
		type: 'text',
		size: 'sm',
		disabled: false,
		error: false,
		defaultValue: 'Basic Input',
	},
};

// Input with Error
export const ErrorState: Story = {
	args: {
		type: 'text',
		size: 'sm',
		disabled: false,
		error: true,
		defaultValue: 'Input with Error',
	},
};

// Disabled Input
export const Disabled: Story = {
	args: {
		type: 'text',
		size: 'sm',
		disabled: true,
		error: false,
		defaultValue: 'Disabled Input',
	},
};

// File Input
export const FileInput: Story = {
	args: {
		type: 'file',
		size: 'md',
		disabled: false,
		error: false,
	},
};

// Input with Prefix and Suffix
export const WithPrefixSuffix: Story = {
	args: {
		type: 'text',
		size: 'md',
		disabled: false,
		error: false,
		prefix: <Phone />,
		suffix: '#',
		defaultValue: '',
	},
};
