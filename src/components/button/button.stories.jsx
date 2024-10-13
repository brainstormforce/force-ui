import Button from './button';
import { Plus } from 'lucide-react';

// Button component story configuration
export default {
	title: 'Atoms/Button',
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
			options: [
				'button',
				'a',
				'div',
				'span',
				'p',
				'h1',
				'h2',
				'h3',
				'h4',
				'h5',
			],
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
		icon: {
			name: 'Icon',
			description: 'Custom Icon for the button.',
			control: 'object',
			table: {
				type: { summary: 'object' },
				defaultValue: { summary: 'null' },
			},
		},
		children: {
			name: 'Children',
			control: 'object',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '' },
			},
		},
	},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
	args: {
		variant: 'primary',
		children: 'Button',
		icon: <Plus />,
		iconPosition: 'left',
	},
};

export const Disabled = {
	args: {
		...Primary.args,
		disabled: true,
	},
};

export const Secondary = {
	args: {
		...Primary.args,
		variant: 'secondary',
	},
};

export const Ghost = {
	args: {
		...Primary.args,
		variant: 'ghost',
	},
};

export const Outline = {
	args: {
		...Primary.args,
		variant: 'outline',
	},
};

export const Link = {
	args: {
		...Primary.args,
		variant: 'link',
	},
};
