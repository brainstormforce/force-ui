import React, { useState } from 'react';
import Select from './select.jsx';
import Label from '../label/label.jsx';

export default {
	title: 'Molecules/Select',
	component: Select,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		size: {
			description: 'Defines the size variant of the select',
			control: { type: 'select' },
			options: [ 'sm', 'md', 'lg' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'md' },
			},
		},
		multiple: {
			description: 'If true, it will allow multiple selection.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
			},
		},
		combobox: {
			description: 'If true, it will show a search box.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
			},
		},
		id: {
			description: 'The `id` attribute of the select element.',
			table: {
				type: { summary: 'string' },
			},
		},
		onChange: {
			description: 'Callback function to handle the change event.',
			table: {
				type: { summary: 'function' },
			},
		},
		by: {
			description:
				'Used to identify the selected value when value type is an `object`. Default is `"id"`.',
			table: {
				type: { summary: 'string' },
			},
		},
		disabled: {
			description: 'If true, the select will be disabled.',
			table: {
				type: { summary: 'boolean' },
			},
		},
	},
};

const options = [
	'Select Item 1',
	'Select Item 2',
	'Select Item 3',
	'Select Item 4',
	'Select Item 5',
];

const Template = ( args ) => {
	const [ selected, setSelected ] = useState( args.multiple ? [] : '' );

	return (
		<div style={ { width: '260px' } }>
			<Select { ...args } onChange={ setSelected } selected={ selected }>
				<Select.Button label="Label" />
				<Select.Options dropdownPortalId="surerank-dashboard">
					{ options.map( ( option, index ) => (
						<Select.Option key={ index } value={ option }>
							{ option }
						</Select.Option>
					) ) }
				</Select.Options>
			</Select>
			<Label size="sm" variant="help">
				Hint text can be added here.
				<a href="https://example.com">Link</a>.
			</Label>
		</div>
	);
};

export const BasicSelect = ( args ) => Template( { ...args } );
BasicSelect.args = {
	size: 'md',
	multiple: false,
};

export const Combobox = ( args ) => Template( { ...args } );
Combobox.args = {
	size: 'md',
	combobox: true,
	multiple: false,
};

export const Multiselect = ( args ) => Template( { ...args } );
Multiselect.args = {
	size: 'md',
	multiple: true,
};

export const MultiselectCombobox = ( args ) => Template( { ...args } );
MultiselectCombobox.args = {
	size: 'md',
	multiple: true,
	combobox: true,
};
