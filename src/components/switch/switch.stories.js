import React, { useState, useEffect } from 'react';
import Switch from './switch.jsx';

export default {
	title: 'Atoms/Switch',
	component: Switch,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		size: {
			name: 'Size',
			description: 'Defines the size of the switch.',
			control: 'radio',
			options: [ 'sm', 'lg' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'lg' },
			},
		},
		disabled: {
			name: 'Sisabled',
			description: 'Defines if the switch is disabled.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		label: {
			name: 'Label',
			description: 'Defines the label and description of the switch. Can be an object or a React element.',
			table: {
				type: { summary: 'object | ReactNode' },
			},
		},
		name: {
			name: 'Name',
			description: 'Name attribute of the input element.',
			control: 'text',
			table: {
				type: { summary: 'string' },
			},
		},
		onChange: {
			name: 'On Change Event',
			description: 'Callback function fired when the switch state changes.',
			table: {
				type: { summary: 'function' },
			},
		},
		defaultValue: {
			name: 'Default Value',
			description: 'Default value for uncontrolled switch (true/false).',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		className: {
			name: 'Class Name',
			description: 'Defines the extra classes',
			control: 'text',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '' },
			},
		},
	},
};

const Template = ( { defaultValue, size, ...args } ) => {
	const [ checked, setChecked ] = useState( defaultValue );

	useEffect( () => {
		setChecked( defaultValue );
	}, [ defaultValue ] );

	const handleChange = ( newValue ) => {
		setChecked( newValue );
		if ( args.onChange ) {
			args.onChange( newValue );
		}
	};

	return (
		<Switch
			{ ...args }
			size={ size }
			value={ checked }
			onChange={ handleChange }
		/>
	);
};

export const Basic = ( args ) => Template( { ...args } );
Basic.args = {
	defaultValue: false,
	size: 'lg',
	disabled: false,
};

export const WithLabel = ( args ) => Template( { ...args } );
WithLabel.args = {
	defaultValue: true,
	size: 'lg',
	disabled: false,
	label: { heading: 'Switch Label', description: 'Switch Description' },
};

export const Disabled = ( args ) => Template( { ...args } );
Disabled.args = {
	size: 'lg',
	disabled: true,
	label: { heading: 'Disabled Switch', description: 'This switch is disabled.' },
};
