import { useState, useEffect } from 'react';
import Switch, { SwitchProps } from './switch';
import { Meta, StoryFn } from '@storybook/react';

const meta: Meta = {
	title: 'Atoms/Switch',
	component: Switch,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		size: {
			control: 'radio',
			options: [ 'sm', 'md', 'lg' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'lg' },
			},
		},
		disabled: {
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		label: {
			table: {
				type: { summary: 'object | ReactNode' },
			},
		},
		name: {
			control: 'text',
			table: {
				type: { summary: 'string' },
			},
		},
		onChange: {
			table: {
				type: { summary: 'function' },
			},
		},
		defaultValue: {
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		className: {
			control: 'text',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '' },
			},
		},
	},
};

export default meta;

const Template: StoryFn<SwitchProps> = ( { defaultValue, size, ...args } ) => {
	const [ checked, setChecked ] = useState( defaultValue );

	useEffect( () => {
		setChecked( defaultValue );
	}, [ defaultValue ] );

	const handleChange = ( newValue: boolean ) => {
		setChecked( newValue );
		if ( args.onChange ) {
			args.onChange( newValue );
		}
	};

	return (
		<Switch { ...args } size={ size } value={ checked } onChange={ handleChange } />
	);
};

export const Basic = Template.bind( {} );
Basic.args = {
	defaultValue: false,
	size: 'lg',
	disabled: false,
};

export const WithLabel = Template.bind( {} );
WithLabel.args = {
	defaultValue: true,
	size: 'lg',
	disabled: false,
	label: { heading: 'Switch Label', description: 'Switch Description' },
};

export const Disabled = Template.bind( {} );
Disabled.args = {
	size: 'lg',
	disabled: true,
	label: {
		heading: 'Disabled Switch',
		description: 'This switch is disabled.',
	},
};
