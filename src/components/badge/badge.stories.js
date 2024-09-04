import Badge from './badge.jsx';
import { fn } from '@storybook/test';

// Badge component story configuration
export default {
	title: 'Components/Badge',
	component: Badge,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		variant: {
			name: 'Variant',
			description: 'Defines the style variant of the badge.',
			control: 'select',
			options: [ 'neutral', 'red', 'yellow', 'green', 'blue', 'inverse' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'neutral' },
			},
		},
		size: {
			name: 'Size',
			description: 'Defines the size of the badge.',
			control: 'select',
			options: [ 'xs', 'sm', 'md', 'lg' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'md' },
			},
		},
		type: {
			name: 'Type',
			description: 'Defines the type of the badge.',
			control: 'select',
			options: [ 'pill', 'rounded' ],
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
			name: 'Clasable',
			description: 'Defines if the badge is closable.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'true' },
			},
		},
		label: { control: 'text', defaultValue: 'Badge' },
	},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Neutral = {
	args: {
		variant: 'neutral',
		children: 'Badge',
		type: 'pill',
		size: 'sm',
		label: 'Badge',
		onClose: fn(),
		onMouseDown: fn()
	},
};

export const Disabled = {
	args: {
		variant: 'neutral',
		children: 'Badge',
		type: 'pill',
		size: 'sm',
		label: 'Badge',
		onClose: fn(),
		onMouseDown: fn(),
		disabled: true,
	},
};

export const Red = {
	args: {
		variant: 'red',
		children: 'Badge',
		type: 'rounded',
		size: 'sm',
		label: 'Badge',
		onClose: fn(),
		onMouseDown: fn()
	},
};

export const Yellow = {
	args: {
		variant: 'yellow',
		children: 'Badge',
		type: 'rounded',
		size: 'sm',
		label: 'Badge',
		onClose: fn(),
		onMouseDown: fn()
	},
};

export const Green = {
	args: {
		variant: 'green',
		children: 'Badge',
		type: 'rounded',
		size: 'sm',
		label: 'Badge',
		onClose: fn(),
		onMouseDown: fn()
	},
};

export const Blue = {
	args: {
		variant: 'blue',
		children: 'Badge',
		type: 'rounded',
		size: 'sm',
		label: 'Badge',
		onClose: fn(),
		onMouseDown: fn()
	},
};

export const Inverse = {
	args: {
		variant: 'inverse',
		children: 'Badge',
		type: 'rounded',
		size: 'sm',
		label: 'Badge',
		onClose: fn(),
		onMouseDown: fn()
	},
};
