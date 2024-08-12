import Button from './button.jsx';

// Button component story configuration
export default {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		variant: {
			name: 'Variant',
			description: 'Defines the style variant of the button.',
			control: 'select',
			options: [ 'primary', 'secondary', 'outline', 'ghost', 'link' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'primary' },
			},
		},
		size: {
			name: 'Size',
			description: 'Defines the size of the button.',
			control: 'select',
			options: [ 'xs', 'sm', 'md', 'lg' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'md' },
			},
		},
		type: {
			name: 'Type',
			description: 'Defines the type of the button.',
			control: 'select',
			options: [ 'button', 'submit', 'reset' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'button' },
			},
		},
		tag: {
			name: 'Tag',
			description: 'Defines the tag of the button.',
			control: 'select',
			// Add 6 to 10 closable tags
			options: [ 'button', 'a', 'div', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'button' },
			},
		},
		iconPosition: {
			name: 'Icon Position',
			description: 'Defines the position of the icon.',
			control: 'select',
			options: [ 'left', 'right' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'left' },
			},
		},
		disabled: {
			name: 'Disabled',
			description: 'Defines if the button is disabled.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		destructive: {
			name: 'Destructive',
			description: 'Defines if the button is destructive.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		children: { control: 'text', defaultValue: 'Button' },
	},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
	args: {
		variant: 'primary',
		children: 'Button',
	},
};
