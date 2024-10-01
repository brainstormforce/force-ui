import Badge from './badge.jsx';
import { Info } from 'lucide-react';

// Badge component story configuration
export default {
	title: 'Atoms/Badge',
	component: Badge,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			name: 'Variant',
			description: 'Defines the style variant of the badge.',
			control: 'select',
			options: ['neutral', 'red', 'yellow', 'green', 'blue', 'inverse'],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'neutral' },
			},
		},
		size: {
			name: 'Size',
			description: 'Defines the size of the badge.',
			control: 'select',
			options: ['xs', 'sm', 'md', 'lg'],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'md' },
			},
		},
		type: {
			name: 'Type',
			description: 'Defines the type of the badge.',
			control: 'select',
			options: ['pill', 'rounded'],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'pill' },
			},
		},
		disabled: {
			name: 'Disabled',
			description: 'Defines if the badge is disabled.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		closable: {
			name: 'Closable',
			description: 'Defines if the badge is closable.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'true' },
			},
		},
		label: {
			control: 'text',
			name: 'Label',
			description: 'Defines the Label of the badge.',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'Badge' },
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
		onClose: {
			name: 'On Close Event',
			description: 'Callback function for close event',
			control: 'function',
			table: {
				type: { summary: 'function' },
				defaultValue: { summary: '() => {}' },
			},
		},
		onMouseDown: {
			name: 'On Mouse Down Event',
			description: 'Callback function for mouse down event',
			control: 'function',
			table: {
				type: { summary: 'function' },
				defaultValue: { summary: '() => {}' },
			},
		},
		icon: {
			name: 'Icon',
			description: 'Custom Icon for the badge.',
			control: 'object',
			table: {
				type: { summary: 'object' },
				defaultValue: { summary: <Info /> },
			},
		},
	},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Neutral = {
	args: {
		variant: 'neutral',
		icon: <Info />,
		type: 'pill',
		size: 'sm',
		label: 'Badge',
	},
};

export const Disabled = {
	args: {
		variant: 'neutral',
		type: 'pill',
		size: 'sm',
		label: 'Badge',
		disabled: true,
	},
};

export const Red = {
	args: {
		variant: 'red',
		type: 'rounded',
		size: 'sm',
		label: 'Badge',
	},
};

export const Yellow = {
	args: {
		variant: 'yellow',
		type: 'rounded',
		size: 'sm',
		label: 'Badge',
	},
};

export const Green = {
	args: {
		variant: 'green',
		type: 'rounded',
		size: 'sm',
		label: 'Badge',
	},
};

export const Blue = {
	args: {
		variant: 'blue',
		type: 'rounded',
		size: 'sm',
		label: 'Badge',
	},
};

export const Inverse = {
	args: {
		variant: 'inverse',
		type: 'rounded',
		size: 'sm',
		label: 'Badge',
	},
};
