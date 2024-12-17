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
			control: 'select',
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
		<>
			<Switch
				id="switch-element"
				{ ...args }
				size={ size }
				value={ checked }
				onChange={ handleChange }
				aria-label="Switch Element"
			/>
		</>
	);
};

export const Basic = Template.bind( {} );
Basic.args = {
	defaultValue: false,
	size: 'sm',
	disabled: false,
};

export const WithLabel = Template.bind( {} );
WithLabel.args = {
	defaultValue: true,
	size: 'sm',
	disabled: false,
	label: { heading: 'Switch Label', description: 'Switch Description' },
};

export const Disabled = Template.bind( {} );
Disabled.args = {
	size: 'sm',
	disabled: true,
	label: {
		heading: 'Disabled Switch',
		description: 'This switch is disabled.',
	},
};
