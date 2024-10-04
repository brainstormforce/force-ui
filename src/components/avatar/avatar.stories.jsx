import { User, Bell } from 'lucide-react';
import Avatar from './avatar.jsx';

// Avatar component story configuration
export default {
	title: 'Atoms/Avatar',
	component: Avatar,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		variant: {
			name: 'Variant',
			description: 'Defines the style variant of the avatar.',
			control: 'select',
			options: [ 'primary', 'dark', 'primaryLight', 'white', 'gray' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'primary' },
			},
		},
		size: {
			name: 'Size',
			description: 'Defines the size of the avatar.',
			control: 'select',
			options: [ 'xs', 'sm', 'md', 'lg' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'md' },
			},
		},
		border: {
			name: 'Border',
			description: 'Defines the border of the avatar.',
			control: 'select',
			options: [ 'subtle', 'none', 'ring' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'subtle' },
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
		url: {
			name: 'URL',
			description: 'The URL of the Avatar image',
			control: 'text',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '' },
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
		children: 'Avatar',
	},
};

export const White = {
	args: {
		variant: 'white',
		children: 'Avatar',
	},
};

export const Gray = {
	args: {
		variant: 'gray',
		children: <User />,
	},
};

export const PrimaryLight = {
	args: {
		variant: 'primaryLight',
		children: <Bell />,
	},
};

export const Dark = {
	args: {
		variant: 'dark',
		children: 'Avatar',
	},
};

export const URLAvatar = {
	args: {
		variant: 'primary',
		url: 'https://0.gravatar.com/avatar/05d8f4a5468440075f82adcea83d5cc3?s=128&d=mm&r=g',
	},
};
