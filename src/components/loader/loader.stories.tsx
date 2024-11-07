import Loader from './loader.tsx';
import { LoaderPinwheel } from 'lucide-react';
import type { Meta, StoryFn } from '@storybook/react';

const meta: Meta<typeof Loader> = {
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
			},
		},
		size: {
			control: {
				type: 'select',
			},
		},
		icon: {
			control: false,
		},
	},
};

export default meta;

type Story = StoryFn<typeof Loader>;

// Template function for Loader stories
const Template: Story = ( args ) => (
	<Loader
		className={ args.variant === 'secondary' ? 'bg-brand-primary-600' : '' }
		{ ...args }
	/>
);

// Basic Loader
export const Basic: Story = Template.bind( {} );
Basic.args = {
	variant: 'primary',
	size: 'md',
	icon: null,
};

// Secondary Variant Loader
export const Secondary: Story = Template.bind( {} );
Secondary.args = {
	variant: 'secondary',
	size: 'md',
	icon: null,
};

// Large Loader
export const Large: Story = Template.bind( {} );
Large.args = {
	variant: 'primary',
	size: 'lg',
	icon: null,
};

// Loader with Custom Icon
export const CustomIcon: Story = Template.bind( {} );
CustomIcon.args = {
	variant: 'primary',
	size: 'md',
	icon: <LoaderPinwheel className="animate-spin" />,
};
