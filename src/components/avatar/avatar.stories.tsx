import type { Meta, StoryObj } from '@storybook/react';
import { User, Bell } from 'lucide-react';
import Avatar from './avatar';

// Avatar component story configuration
const meta: Meta = {
	title: 'Atoms/Avatar',
	component: Avatar,
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
		border: {
			control: 'select',
		},
		children: {
			control: 'text',
		},
	},
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof Avatar>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {
		children: 'Avatar',
		src: '',
		alt: '',
	},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		variant: 'primary',
		children: 'Avatar',
		src: '',
		alt: '',
	},
};

export const White: Story = {
	args: {
		variant: 'white',
		children: 'Avatar',
	},
};

export const Gray: Story = {
	args: {
		variant: 'gray',
		children: <User />,
	},
};

export const PrimaryLight: Story = {
	args: {
		variant: 'primary-light',
		children: <Bell />,
	},
};

export const Dark: Story = {
	args: {
		variant: 'dark',
		children: 'Avatar',
	},
};

export const URLAvatar: Story = {
	args: {
		variant: 'primary',
		alt: 'Vrunda Kansara',
		src: 'https://0.gravatar.com/avatar/05d8f4a5468440075f82adcea83d5cc3?s=128&d=mm&r=g',
	},
};
