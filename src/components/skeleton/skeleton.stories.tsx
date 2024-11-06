import type { Meta, StoryObj } from '@storybook/react';
import Skeleton from './skeleton';

const meta: Meta<typeof Skeleton> = {
	title: 'Atoms/Skeleton',
	component: Skeleton,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		variant: {
			control: 'select',
		},
	},
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Rectangular: Story = {
	args: {
		variant: 'rectangular',
	},
};

export const Circular = {
	args: {
		variant: 'circular',
	},
};
