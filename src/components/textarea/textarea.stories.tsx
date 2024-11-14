import { Meta, StoryFn } from '@storybook/react';
import TextArea, { TextAreaProps } from './textarea';

const meta: Meta<TextAreaProps> = {
	title: 'Atoms/TextArea',
	component: TextArea,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		size: {
			control: 'select',
		},
	},
};

export default meta;

const Template: StoryFn<typeof TextArea> = ( args ) => {
	return (
		<>
			<label htmlFor="textarea" className="sr-only">
				Textarea
			</label>
			<TextArea id="textarea" { ...args } />
		</>
	);
};

// Basic TextArea Example
export const Basic = Template.bind( {} );
Basic.args = {
	size: 'sm',
	disabled: false,
	error: false,
	defaultValue: 'Basic TextArea',
};

// Disabled TextArea Example
export const Disabled = Template.bind( {} );
Disabled.args = {
	size: 'md',
	disabled: true,
	error: false,
	defaultValue: 'Disabled TextArea',
};

// TextArea with Error State Example
export const ErrorState = Template.bind( {} );
ErrorState.args = {
	size: 'md',
	disabled: false,
	error: true,
	defaultValue: 'TextArea with Error',
};

// Large TextArea Example
export const Large = Template.bind( {} );
Large.args = {
	size: 'lg',
	disabled: false,
	error: false,
	defaultValue: 'Large TextArea',
};
