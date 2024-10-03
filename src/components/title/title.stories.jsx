import Title from './title.jsx';
import { House } from 'lucide-react';

export default {
	title: 'Atoms/Title',
	component: Title,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		size: {
			name: 'Size',
			description: 'Defines the size of the title.',
			control: 'select',
			options: [ 'xs', 'sm', 'md', 'lg' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'sm' },
			},
		},
		tag: {
			name: 'Tag',
			description: 'Defines the HTML tag used for the title.',
			control: 'select',
			options: [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'h2' },
			},
		},
		title: {
			name: 'Title',
			description: 'The content to be displayed inside the title.',
			control: 'text',
			table: {
				type: { summary: 'string' },
			},
		},
		description: {
			name: 'Description',
			description: 'The description displayed below the title.',
			control: 'text',
			table: {
				type: { summary: 'string' },
			},
		},
		icon: {
			name: 'Icon',
			description: 'Icon displayed beside the title.',
			control: 'none', // No direct control, will pass ReactNode
			table: {
				type: { summary: 'ReactNode' },
			},
		},
		iconPosition: {
			name: 'Icon Position',
			description: 'Position of the icon relative to the title.',
			control: 'select',
			options: [ 'left', 'right' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'right' },
			},
		},
		className: {
			name: 'Class Name',
			description: 'Additional custom classes for styling.',
			control: 'text',
			table: {
				type: { summary: 'string' },
			},
		},
	},
};

// Basic Title Story
export const Basic = {
	args: {
		size: 'sm',
		tag: 'h2',
		title: 'Basic Title',
		description: '',
		icon: null,
		iconPosition: 'right',
	},
};

// Title with Description
export const WithDescription = {
	args: {
		size: 'md',
		tag: 'h2',
		title: 'Title with Description',
		description: 'This is a description below the title.',
		icon: null,
		iconPosition: 'right',
	},
};

// Title with Icon on Left
export const WithIconLeft = {
	args: {
		size: 'sm',
		tag: 'h2',
		title: 'Title with Icon',
		description: '',
		icon: <House />,
		iconPosition: 'left',
	},
};

// Title with Icon on Right
export const WithIconRight = {
	args: {
		size: 'lg',
		tag: 'h2',
		title: 'Large Title with Icon',
		description: 'This is a description with an icon on the right.',
		icon: <House />,
		iconPosition: 'right',
	},
};
