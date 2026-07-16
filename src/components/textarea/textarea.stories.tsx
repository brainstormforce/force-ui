import type { Meta, StoryFn } from '@storybook/react-vite';
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
		autoResize: {
			control: 'boolean',
		},
		minHeight: {
			control: 'text',
		},
		maxHeight: {
			control: 'text',
		},
	},
};

export default meta;

const Template: StoryFn<typeof TextArea> = ( args ) => {
	return (
		<>
			<TextArea id="textarea" { ...args } aria-label="Textarea" />
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

// Auto-resize TextArea Example
export const AutoResize = Template.bind( {} );
AutoResize.args = {
	size: 'md',
	disabled: false,
	error: false,
	autoResize: true,
	minHeight: 80,
	maxHeight: 200,
	defaultValue:
		'This textarea grows as you type. Try adding more lines of text to see the auto-resize in action.',
};

// Min/Max Height (no auto-resize) Example
export const WithMinMaxHeight = Template.bind( {} );
WithMinMaxHeight.args = {
	size: 'md',
	disabled: false,
	error: false,
	autoResize: false,
	minHeight: 120,
	maxHeight: 240,
	defaultValue:
		'Fixed height range — drag the corner grip to resize between minHeight and maxHeight.',
};
