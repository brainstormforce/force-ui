import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from './button';
import { Plus } from 'lucide-react';

// Button component story configuration
const meta: Meta = {
	title: 'Atoms/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['primary', 'secondary', 'outline', 'ghost', 'link'],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'primary' },
			},
		},
		size: {
			control: 'select',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'md' },
			},
		},
		type: {
			control: 'select',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'button' },
			},
		},
		iconPosition: {
			control: 'select',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'left' },
			},
		},
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: 'Button',
		variant: 'primary',
		size: 'md',
		type: 'button',
		tag: 'button',
		className: '',
		disabled: false,
		destructive: false,
		icon: null,
		iconPosition: 'left',
		loading: false,
	},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		variant: 'primary',
		children: 'Button',
		icon: <Plus />,
		iconPosition: 'left',
	},
};

export const Disabled: Story = {
	args: {
		...Primary.args,
		disabled: true,
	},
};

export const Secondary: Story = {
	args: {
		...Primary.args,
		variant: 'secondary',
	},
};

export const Ghost: Story = {
	args: {
		...Primary.args,
		variant: 'ghost',
	},
};

export const Outline: Story = {
	args: {
		...Primary.args,
		variant: 'outline',
	},
};

export const Link: Story = {
	args: {
		...Primary.args,
		variant: 'link',
	},
};
