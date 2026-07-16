import Input from './input';
import { Phone } from 'lucide-react';
import type { Meta, StoryFn } from '@storybook/react-vite';

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
		// FilePicker-only props: visible only when type="file".
		clearable: {
			control: 'boolean',
			if: { arg: 'type', eq: 'file' },
		},
		accept: {
			control: 'text',
			if: { arg: 'type', eq: 'file' },
		},
		multiple: {
			control: 'boolean',
			if: { arg: 'type', eq: 'file' },
		},
		defaultValue: {
			if: { arg: 'type', neq: 'file' },
		},
		// Not supported by the FilePicker branch.
		prefix: {
			if: { arg: 'type', neq: 'file' },
		},
		suffix: {
			if: { arg: 'type', neq: 'file' },
		},
		placeholder: {
			if: { arg: 'type', neq: 'file' },
		},
	},
};

export default meta;

const Template: StoryFn<typeof Input> = ( args ) => {
	return (
		<>
			<Input id="input-element" { ...args } aria-label="Text Input" />
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

// Required Input with Label
export const Required = Template.bind( {} );
Required.args = {
	type: 'text',
	size: 'sm',
	required: true,
	label: 'Required Input',
	defaultValue: 'Required Input',
};
