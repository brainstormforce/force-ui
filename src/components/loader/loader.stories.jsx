import React from 'react';
import Loader from './loader.jsx';
import { LoaderPinwheel } from 'lucide-react';

export default {
	title: 'Atoms/Loader',
	component: Loader,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		variant: {
			name: 'Variant',
			description: 'Defines the variant style of the loader.',
			control: 'select',
			options: [ 'primary', 'secondary' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'primary' },
			},
		},
		size: {
			name: 'Size',
			description: 'Defines the size of the loader.',
			control: 'select',
			options: [ 'sm', 'md', 'lg', 'xl' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'md' },
			},
		},
		icon: {
			name: 'Icon',
			description: 'Custom icon for the loader.',
			control: 'none',
			table: {
				type: { summary: 'ReactNode' },
			},
		},
	},
};

// Basic
export const Basic = {
	args: {
		variant: 'primary',
		size: 'md',
		icon: null,
	},
};

// Secondary Variant
export const Secondary = {
	args: {
		variant: 'secondary',
		size: 'md',
		icon: null,
	},
};

// Large Size
export const Large = {
	args: {
		variant: 'primary',
		size: 'lg',
		icon: null,
	},
};

// Custom Icon
export const CustomIcon = {
	args: {
		variant: 'primary',
		size: 'md',
		icon: <LoaderPinwheel className="animate-spin" />,
	},
};
