import Badge from './badge';
import { Info } from 'lucide-react';
import type { Meta, StoryObj } from '@storybook/react';

// Badge component story configuration
const meta: Meta = {
	title: 'Atoms/Badge',
	component: Badge,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		variant: {
			control: 'select',
		},
		size: {
			control: 'select',
		},
		type: {
			control: 'select',
		},
	},
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof Badge>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Neutral: Story = {
	args: {
		variant: 'neutral',
		icon: <Info />,
		type: 'pill',
		size: 'sm',
		label: 'Badge',
	},
};

export const Disabled: Story = {
	args: {
		variant: 'neutral',
		type: 'pill',
		size: 'sm',
		label: 'Badge',
		disabled: true,
	},
};

export const Red: Story = {
	args: {
		variant: 'red',
		type: 'rounded',
		size: 'sm',
		label: 'Badge',
	},
};

export const Yellow: Story = {
	args: {
		variant: 'yellow',
		type: 'rounded',
		size: 'sm',
		label: 'Badge',
	},
};

export const Green: Story = {
	args: {
		variant: 'green',
		type: 'rounded',
		size: 'sm',
		label: 'Badge',
	},
};

export const Blue: Story = {
	args: {
		variant: 'blue',
		type: 'rounded',
		size: 'sm',
		label: 'Badge',
	},
};

export const Inverse: Story = {
	args: {
		variant: 'inverse',
		type: 'rounded',
		size: 'sm',
		label: 'Badge',
	},
};
