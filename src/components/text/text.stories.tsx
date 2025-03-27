import { Meta, StoryFn } from '@storybook/react';
import Text from './text';
import {
	fontWeightClassNames,
	fontSizeClassNames,
	lineHeightClassNames,
	letterSpacingClassNames,
	fontColorClassNames,
} from './styles';

export default {
	title: 'Atoms/Text',
	component: Text,
	tags: [ 'autodocs' ],
	argTypes: {
		weight: {
			control: 'select',
			options: Object.keys( fontWeightClassNames ).map( Number ),
			description: 'The font weight of the text',
		},
		size: {
			control: 'select',
			options: Object.keys( fontSizeClassNames ).map( Number ),
			description: 'The font size of the text',
		},
		lineHeight: {
			control: 'select',
			options: Object.keys( lineHeightClassNames ).map( Number ),
			description: 'The line height of the text',
		},
		letterSpacing: {
			control: 'select',
			options: Object.keys( letterSpacingClassNames ).map( Number ),
			description: 'The letter spacing of the text',
		},
		color: {
			control: 'select',
			options: Object.keys( fontColorClassNames ),
			description: 'The font color of the text',
		},
		as: {
			control: 'select',
			options: [ 'p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div' ],
			description: 'The element to render the text as',
		},
		children: {
			control: 'text',
			description: 'The content of the text',
		},
		className: {
			control: 'text',
			description: 'Additional class names to apply',
		},
	},
} satisfies Meta<typeof Text>;

// Create our story type
type Story = StoryFn<typeof Text>;

// Main template for all stories
const Template: Story = ( args ) => <Text { ...args } />;

// Default story
export const Default: Story = Template.bind( {} );
Default.args = {
	children: 'The quick brown fox jumps over the lazy dog',
	as: 'p',
	color: 'primary',
};

// Heading example
export const Heading: Story = Template.bind( {} );
Heading.args = {
	children: 'This is a heading',
	as: 'h1',
	size: 36,
	weight: 600,
	color: 'primary',
};

// Paragraph example
export const Paragraph: Story = Template.bind( {} );
Paragraph.args = {
	children:
		'This is a paragraph with some longer text to demonstrate how the component handles multi-line content. The Text component is designed to be flexible and work with various HTML elements.',
	as: 'p',
	size: 16,
	weight: 400,
	lineHeight: 24,
	color: 'help',
};
