import Alert from './alert.jsx';
import { fn } from '@storybook/test';
import { Plus } from 'lucide-react';

// Alert component story configuration
export default {
	title: 'Atoms/Alert',
	component: Alert,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		variant: {
			name: 'Variant',
			description: 'Defines the style variant of the alert.',
			control: 'select',
			options: [ 'neutral', 'info', 'warning', 'error', 'success', 'inverse' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'neutral' },
			},
		},
		theme: {
			name: 'Theme',
			description: 'Defines the theme of the alert.',
			control: 'select',
			options: [ 'light', 'dark' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'light' },
			},
		},
		design: {
			name: 'Design',
			description: 'Defines the design of the alert.',
			control: 'select',
			options: [ 'inline', 'stack' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'inline' },
			},
		},
		title: {
			name: 'Title',
			description: 'Defines the title of the alert.',
			control: 'text',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'Title' },
			},
		},
		content: {
			name: 'Content',
			description: 'Defines the content of the alert.',
			control: 'text',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'This is a description' },
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
		icon: {
			name: 'Icon',
			description: 'Custom Icon for the alert.',
			control: 'object',
			table: {
				type: { summary: 'object' },
				defaultValue: { summary: 'null' },
			},
		},
		action: {
			name: 'Action',
			description: 'Defines the description of the alert.',
			control: 'object',
			table: {
				type: { summary: 'object' },
				defaultValue: {
					label: 'Action',
					onClick: () => {},
					type: 'link',
				},
			},
		},
	},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Neutral = {
	args: {
		variant: 'neutral',
		onClose: fn(),
	},
};

export const Info = {
	args: {
		variant: 'info',
		disabled: true,
		onClose: fn(),
	},
};

export const Warning = {
	args: {
		variant: 'warning',
		onClose: fn(),
	},
};

export const Error = {
	args: {
		variant: 'error',
		onClose: fn(),
	},
};

export const Success = {
	args: {
		variant: 'success',
		onClose: fn(),
	},
};

export const Stack = {
	args: {
		variant: 'info',
		design: 'stack',
		onClose: fn(),
	},
};

export const Dark = {
	args: {
		variant: 'error',
		theme: 'dark',
		onClose: fn(),
	},
};

export const WithAction = {
	args: {
		onClose: fn(),
		variant: 'info',
		design: 'stack',
		action: {
			label: 'My Action',
			onClick: () => {},
			type: 'button',
		},
	},
};

export const WithCustomIcon = {
	args: {
		onClose: fn(),
		variant: 'info',
		icon: <Plus />,
		action: {
			label: 'My Action',
			onClick: () => {},
			type: 'button',
		},
	},
};
