import React from 'react';
import Input from './input.jsx';
import { Phone } from 'lucide-react';

export default {
	title: 'Atoms/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		type: {
			name: 'Type',
			description: 'Defines the input type.',
			control: 'select',
			options: ['text', 'password', 'email', 'file'],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'text' },
			},
		},
		size: {
			name: 'Size',
			description: 'Defines the size of the input.',
			control: 'select',
			options: ['sm', 'md', 'lg'],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'sm' },
			},
		},
		disabled: {
			name: 'Disabled',
			description: 'Defines if the input is disabled.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		error: {
			name: 'Error',
			description: 'Defines if the input has an error state.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		defaultValue: {
			name: 'Default Value',
			description: 'Initial value of the input.',
			control: 'text',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '' },
			},
		},
		prefix: {
			name: 'Prefix',
			description: 'Prefix element for the input.',
			control: 'text',
			table: {
				type: { summary: 'ReactNode' },
			},
		},
		suffix: {
			name: 'Suffix',
			description: 'Suffix element for the input.',
			control: 'text',
			table: {
				type: { summary: 'ReactNode' },
			},
		},
		className: {
			name: 'Class Name',
			description: 'Defines the extra classes',
			control: 'text',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '' },
			},
		},
		onChange: {
			name: 'On Change Event',
			description: 'Callback function for change event',
			control: 'function',
			table: {
				type: { summary: 'function' },
				defaultValue: { summary: '() => {}' },
			},
		},
		onError: {
			name: 'On Error Event',
			description: 'Callback function for error event',
			control: 'function',
			table: {
				type: { summary: 'function' },
				defaultValue: { summary: '() => {}' },
			},
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
