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
            <label htmlFor="switch-element" className='sr-only'>Switch Element</label>
            <Switch id="switch-element" { ...args } size={ size } value={ checked } onChange={ handleChange } />
        </>
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
