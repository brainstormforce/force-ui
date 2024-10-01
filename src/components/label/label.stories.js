import Label from './label.jsx';

export default {
	title: 'Atoms/Label',
	component: Label,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		size: {
			name: 'Size',
			description: 'Defines the size of the label.',
			control: 'select',
			options: [ 'xs', 'sm', 'md' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'sm' },
			},
		},
		variant: {
			name: 'Variant',
			description: 'Defines the style variant of the label.',
			control: 'select',
			options: [ 'neutral', 'help', 'error', 'disabled' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'neutral' },
			},
		},
		required: {
			name: 'Required',
			description: 'Defines if the label is required.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		tag: {
			name: 'Tag',
			description: 'Defines the tag of the button.',
			control: 'select',
			// Add 6 to 10 closable tags
			options: [ 'label', 'p' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'label' },
			},
		},
		children: {
			name: 'Children',
			description: 'The label text or content.',
			control: 'object',
			table: {
				type: { summary: 'onject' },
				defaultValue: { summary: 'Label Text' },
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
	},
};

// Basic Label
export const Basic = {
	args: {
		size: 'sm',
		variant: 'neutral',
		required: false,
		children: 'Basic Label',
	},
};

// Required Label
export const Required = {
	args: {
		size: 'sm',
		variant: 'neutral',
		required: true,
		children: 'Required Label',
	},
};

// Error Variant
export const Error = {
	args: {
		size: 'sm',
		variant: 'error',
		required: false,
		children: 'Error Label',
	},
};

// Disabled Variant
export const Disabled = {
	args: {
		size: 'sm',
		variant: 'disabled',
		required: false,
		children: 'Disabled Label',
	},
};
