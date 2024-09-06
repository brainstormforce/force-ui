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
			defaultValue: 'Title',
		},
		content: {
			name: 'Content',
			description: 'Defines the content of the alert.',
			control: 'text',
			defaultValue: 'This is a description',
		},
		className: {
			name: 'Classname',
			description: 'Defines the extra classes',
			control: 'select',
			options: [ 'inline', 'stack' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'inline' },
			},
		},
		action: {
			name: 'Action',
			description: 'Defines the icon of the alert.',
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
	},
};

export const Info = {
	args: {
		variant: 'info',
		disabled: true,
	},
};

export const Warning = {
	args: {
		variant: 'warning',
	},
};

export const Error = {
	args: {
		variant: 'error',
	},
};

export const Success = {
	args: {
		variant: 'success',
	},
};

export const Stack = {
	args: {
		variant: 'info',
		design: 'stack',
	},
};

export const Dark = {
	args: {
		variant: 'error',
		theme: 'dark',
	},
};

export const WithAction = {
	args: {
		variant: 'info',
		design: 'stack',
		action: {
			label: 'My Action',
			onClick: () => {},
			type: 'button',
		}
	},
};

export const WithCustomIcon = {
	args: {
		variant: 'info',
		// icon: <Plus />,
		action: {
			label: 'My Action',
			onClick: () => {},
			type: 'button',
		}
	},
};
