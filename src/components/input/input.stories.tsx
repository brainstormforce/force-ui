import Input from './input';
import { Phone } from 'lucide-react';

export default {
	title: 'Atoms/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		type: {
			control: 'select',
		},
		size: {
			control: 'select',
		},
	},
};

// Basic Input
export const Basic = {
	args: {
		type: 'text',
		size: 'sm',
		disabled: false,
		error: false,
		defaultValue: 'Basic Input',
	},
};

// Input with Error
export const ErrorState = {
	args: {
		type: 'text',
		size: 'sm',
		disabled: false,
		error: true,
		defaultValue: 'Input with Error',
	},
};

// Disabled Input
export const Disabled = {
	args: {
		type: 'text',
		size: 'sm',
		disabled: true,
		error: false,
		defaultValue: 'Disabled Input',
	},
};

// File Input
export const FileInput = {
	args: {
		type: 'file',
		size: 'md',
		disabled: false,
		error: false,
	},
};

// Input with Prefix and Suffix
export const WithPrefixSuffix = {
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