import Loader from './loader.tsx';
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
			control: {
				type: 'select',
				options: [ 'primary', 'secondary' ],
			},
		},
		size: {
			control: {
				type: 'select',
				options: [ 'sm', 'md', 'lg', 'xl' ],
			},
		},
		icon: {
			control: 'none',
		},
		className: {
			control: 'text',
		},
	},
};

// Basic Loader
export const Basic = {
	args: {
		variant: 'primary',
		size: 'md',
		icon: null,
	},
};

// Secondary Variant Loader
export const Secondary = {
	args: {
		variant: 'secondary',
		size: 'md',
		icon: null,
	},
};

// Large Loader
export const Large = {
	args: {
		variant: 'primary',
		size: 'lg',
		icon: null,
	},
};

// Loader with Custom Icon
export const CustomIcon = {
	args: {
		variant: 'primary',
		size: 'md',
		icon: <LoaderPinwheel className="animate-spin" />,
	},
};
