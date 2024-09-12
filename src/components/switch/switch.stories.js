import Switch from './switch.jsx';

export default {
	title: 'Atoms/Switch',
	component: Switch,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		size: {
			name: 'Size',
			description: 'Defines the size of the switch.',
			control: 'radio',
			options: [ 'sm', 'lg' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'lg' },
			},
		},
		disabled: {
			name: 'disabled',
			description: 'Defines if the switch is disabled.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		label: {
			name: 'Label',
			description: 'Defines the label and description of the switch. Can be an object or a React element.',
			table: {
				type: { summary: 'object | ReactNode' },
			},
		},
		name: {
			name: 'name',
			description: 'Name attribute of the input element.',
			control: 'text',
			table: {
				type: { summary: 'string' },
			},
		},
		onChange: {
			name: 'onChange',
			description: 'Callback function fired when the switch state changes.',
			table: {
				type: { summary: 'function' },
			},
		},
		defaultValue: {
			name: 'defaultValue',
			description: 'Default value for uncontrolled switch (true/false).',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
	},
};

export const Basic = {
	args: {
		size: 'lg',
		defaultValue: false,
	},
};

export const WithLabel = {
	args: {
		...Basic.args,
		label: {
			heading: 'Switch Label',
			description: 'Switch Description',
		},
		defaultValue: true,
	},
};

export const Disabled = {
	args: {
		...Basic.args,
		label: {
			heading: 'Disabled Switch',
			description: 'This switch is disabled and cannot be changed.',
		},
		disabled: true,
	},
};
