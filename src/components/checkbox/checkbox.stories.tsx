import Checkbox from './checkbox.tsx';
import type { Meta, StoryFn } from '@storybook/react';

// Meta configuration for Checkbox
const meta: Meta<typeof Checkbox> = {
	title: 'Atoms/Checkbox',
	component: Checkbox,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		id: { control: 'text' },
		label: { control: 'object' },
		defaultChecked: { control: 'boolean' },
		checked: { control: 'boolean' },
		onChange: { action: 'changed' }, // Logs actions in Storybook
		indeterminate: { control: 'boolean' },
		disabled: { control: 'boolean' },
		size: { control: 'select', options: [ 'sm', 'md' ] },
	},
};

export default meta;

const Template: StoryFn<typeof Checkbox> = ( args ) => <Checkbox { ...args } />;

export const Small = Template.bind( {} );
Small.args = {
	size: 'sm',
	label: { heading: 'Checkbox Label', description: 'Checkbox Description' },
};

export const Medium = Template.bind( {} );
Medium.args = {
	size: 'md',
	label: { heading: 'Checkbox Label', description: 'Checkbox Description' },
};

export const Disabled = Template.bind( {} );
Disabled.args = {
	label: { heading: 'Checkbox Label', description: 'Checkbox Description' },
	disabled: true,
};
