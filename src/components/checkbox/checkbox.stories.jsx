import Checkbox from './checkbox.jsx';

// Avatar component story configuration
export default {
	title: 'Atoms/Checkbox',
	component: Checkbox,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		id: {
			name: 'ID',
			description: 'Defines the ID of the checkbox.',
			control: 'text',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '' },
			},
		},
		label: {
			name: 'Name',
			description: 'Defines the label of the checkbox',
			control: 'object',
			table: {
				type: { summary: 'object' },
				defaultValue: {
					summary: {
						heading: 'Checkbox Label',
						descriptio: 'Checkbox Description',
					},
				},
			},
		},
		defaultChecked: {
			name: 'Default Checked value.',
			control: 'boolean',
			defaultValue: false,
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: false },
			},
		},
		checked: {
			name: 'Checked',
			description: 'Defines the checked/unchecked value.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: false },
			},
		},
		onChange: {
			name: 'On Change',
			description: 'Defines the onChange callback.',
			control: 'function',
			table: {
				type: { summary: 'object' },
				defaultValue: {
					summary: ( value ) => {
						return value;
					},
				},
			},
		},
		indeterminate: {
			name: 'Indeterminate',
			description: 'Defines if the checkbox is indeterminate.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: false },
			},
		},
		disabled: {
			name: 'Disabled',
			description: 'Defines if the checkbox is disabled.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: false },
			},
		},
		size: {
			name: 'Size',
			description: 'Defines the sizes of the checkbox.',
			control: 'select',
			options: [ 'sm', 'md' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'md' },
			},
		},
	},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Small = {
	args: {
		size: 'sm',
		label: {
			heading: 'Checkbox Label',
			description: 'Checkbox Description',
		},
	},
};

export const Medium = {
	args: {
		size: 'md',
		label: {
			heading: 'Checkbox Label',
			description: 'Checkbox Description',
		},
	},
};

export const Disabled = {
	args: {
		label: {
			heading: 'Checkbox Label',
			description: 'Checkbox Description',
		},
		disabled: true,
	},
};
