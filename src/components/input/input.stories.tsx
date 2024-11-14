import Input from './input';
import { Phone } from 'lucide-react';
import { Meta, StoryFn } from '@storybook/react';

const meta: Meta<typeof Input> = {
	title: 'Atoms/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		type: {
			control: 'select',
		},
		size: {
			control: 'select',
		},
	},
};

export default meta;

const Template: StoryFn<typeof Input> = ( args ) => {
	return (
		<>
			<label htmlFor="input-element" className="sr-only">
				Input Element
			</label>
			<Input id="input-element" { ...args } />
		</>
	);
};

// Basic Input
export const Basic = Template.bind( {} );
Basic.args = {
	type: 'text',
	size: 'sm',
	disabled: false,
	error: false,
	defaultValue: 'Basic Input',
};

// Input with Error
export const ErrorState = Template.bind( {} );
ErrorState.args = {
	type: 'text',
	size: 'sm',
	disabled: false,
	error: true,
	defaultValue: 'Input with Error',
};

// // Disabled Input
export const Disabled = Template.bind( {} );
Disabled.args = {
	type: 'text',
	size: 'sm',
	disabled: true,
	error: false,
	defaultValue: 'Disabled Input',
};

// // File Input
export const FileInput = Template.bind( {} );
FileInput.args = {
	type: 'file',
	size: 'md',
	disabled: false,
	error: false,
};

// // Input with Prefix and Suffix
export const WithPrefixSuffix = Template.bind( {} );
WithPrefixSuffix.args = {
	type: 'text',
	size: 'md',
	disabled: false,
	error: false,
	prefix: <Phone />,
	suffix: '#',
	defaultValue: '',
};
