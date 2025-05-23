import { StoryFn } from '@storybook/react';
import Title from './title';
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
			control: 'select',
		},
		tag: {
			control: 'select',
		},
		icon: {
			control: false,
		},
	},
};

const Template: StoryFn<typeof Title> = ( args ) => <Title { ...args } />;

export const Basic = Template.bind( {} );
Basic.args = {
	size: 'sm',
	tag: 'h2',
	title: 'Basic Title',
	description: '',
	icon: null,
	iconPosition: 'right',
};

export const WithDescription = Template.bind( {} );
WithDescription.args = {
	size: 'md',
	tag: 'h2',
	title: 'Title with Description',
	description: 'This is a description below the title.',
	icon: null,
	iconPosition: 'right',
};

export const WithIconLeft = Template.bind( {} );
WithIconLeft.args = {
	size: 'sm',
	tag: 'h2',
	title: 'Title with Icon',
	description: '',
	icon: <House />,
	iconPosition: 'left',
};

export const WithIconRight = Template.bind( {} );
WithIconRight.args = {
	size: 'lg',
	tag: 'h2',
	title: 'Large Title with Icon',
	description: 'This is a description with an icon on the right.',
	icon: <House />,
	iconPosition: 'right',
};
