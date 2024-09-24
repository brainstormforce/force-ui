import TextArea from './textarea.jsx';

export default {
	title: 'Atoms/TextArea',
	component: TextArea,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		size: {
			name: 'Size',
			description: 'Defines the size of the text area.',
			control: 'select',
			options: [ 'sm', 'md', 'lg' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'sm' },
			},
		},
		disabled: {
			name: 'Disabled',
			description: 'Disables the text area.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		error: {
			name: 'Error',
			description: 'Shows the error state of the text area.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		defaultValue: {
			name: 'Default Value',
			description: 'Initial value of the text area.',
			control: 'text',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '' },
			},
		},
		value: {
			name: 'Value',
			description: 'Controlled value of the text area.',
			control: 'text',
			table: {
				type: { summary: 'string' },
			},
		},
		onChange: {
			name: 'onChange',
			description: 'Callback when the value changes.',
			action: 'changed',
			table: {
				type: { summary: 'function' },
			},
		},
	},
};

// Basic TextArea Story
export const Basic = {
	args: {
		size: 'sm',
		disabled: false,
		error: false,
		defaultValue: 'Basic TextArea',
	},
};

// Disabled TextArea Story
export const Disabled = {
	args: {
		size: 'md',
		disabled: true,
		error: false,
		defaultValue: 'Disabled TextArea',
	},
};

// TextArea with Error State Story
export const ErrorState = {
	args: {
		size: 'md',
		disabled: false,
		error: true,
		defaultValue: 'TextArea with Error',
	},
};

// Large TextArea Story
export const Large = {
	args: {
		size: 'lg',
		disabled: false,
		error: false,
		defaultValue: 'Large TextArea',
	},
};
