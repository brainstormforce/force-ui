import React from 'react';
import { expect, userEvent, within } from '@storybook/test';
import Select from './select';

Select.displayName = 'Select';
Select.Button.displayName = 'Select.Button';
Select.Options.displayName = 'Select.Options';
Select.Option.displayName = 'Select.Option';
const options = [
	{ id: '1', name: 'Red' },
	{ id: '2', name: 'Orange' },
	{ id: '3', name: 'Yellow' },
	{ id: '4', name: 'Green' },
	{ id: '5', name: 'Cyan' },
	{ id: '6', name: 'Blue' },
	{ id: '7', name: 'Purple' },
	{ id: '8', name: 'Pink' },
];

export default {
	title: 'Atoms/Select',
	component: Select,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'atoms', 'autodocs' ],
	argTypes: {
		size: {
			control: { type: 'radio' },
			options: [ 'sm', 'md', 'lg' ],
			description: 'Defines the size of the Select component.',
			defaultValue: 'md',
		},
		multiple: {
			control: { type: 'boolean' },
			description: 'If true, multiple options can be selected.',
			defaultValue: false,
		},
		combobox: {
			control: { type: 'boolean' },
			description: 'If true, it will enable search functionality.',
			defaultValue: false,
		},
		disabled: {
			control: { type: 'boolean' },
			description: 'If true, disables the Select component.',
			defaultValue: false,
		},
		onChange: {
			action: 'onChange',
			description: 'Callback function when the selection changes.',
		},
		value: {
			control: { type: 'text' },
			description: 'Controlled value for the select component.',
			defaultValue: undefined,
		},
		defaultValue: {
			control: { type: 'text' },
			description:
				'Default value for the select (for uncontrolled component).',
			defaultValue: undefined,
		},
		placeholder: {
			control: { type: 'text' },
			description: 'Placeholder text when no option is selected.',
			defaultValue: 'Select an option',
		},
		label: {
			control: { type: 'text' },
			description: 'Label for the Select component.',
			defaultValue: 'Select Color',
		},
	},
};

// Single Select Story
export const SingleSelect = ( args ) => (
	<div style={ { width: '300px' } }>
		<Select { ...args }>
			<Select.Button label={ args.label } />
			<Select.Options dropdownPortalId='storybook-root'>
				{ options.map( ( option ) => (
					<Select.Option key={ option.id } value={ option }>
						{ option.name }
					</Select.Option>
				) ) }
			</Select.Options>
		</Select>
	</div>
);

SingleSelect.args = {
	size: 'md',
	multiple: false,
	combobox: false,
	disabled: false,
	defaultValue: undefined,
	placeholder: 'Select an option',
	label: 'Select Color',
};
SingleSelect.play = async ( { canvasElement } ) => {
	const canvas = within( canvasElement );
	// Click on the select button
	const selectButton = await canvas.findByRole( 'combobox' );
	await userEvent.click( selectButton );
	
	// Check if the listbox contains the option 'Red'
	const listBox = await canvas.findByRole( 'listbox' );
	expect(listBox).toHaveTextContent('Red');

	// Click on the first option
	const allOptions = await canvas.findAllByRole( 'option' );
	await userEvent.click( allOptions[ 0 ] );

	// Check if the button text is updated
	expect( selectButton ).toHaveTextContent( 'Red' );
}

// Multi-select Story
export const MultiSelect = ( args ) => (
	<div style={ { width: '300px' } }>
		<Select { ...args } multiple>
			<Select.Button label={ args.label } />
			<Select.Options dropdownPortalId="storybook-root">
				{ options.map( ( option ) => (
					<Select.Option key={ option.id } value={ option }>
						{ option.name }
					</Select.Option>
				) ) }
			</Select.Options>
		</Select>
	</div>
);

MultiSelect.args = {
	size: 'md',
	multiple: true,
	combobox: false,
	disabled: false,
	defaultValue: undefined,
	placeholder: 'Select multiple options',
	label: 'Select Multiple Colors',
};
MultiSelect.play = async ( { canvasElement, ...rest } ) => {
	console.log( rest, canvasElement );
	const canvas = within( canvasElement );
	// Click on the select button
	const selectButton = await canvas.findByRole( 'combobox' );
	await userEvent.click( selectButton );
	
	// Check if the listbox contains the option 'Red'
	const listBox = await canvas.findByRole( 'listbox' );
	expect(listBox).toHaveTextContent('Red');

	// Click on the first option
	const allOptions = await canvas.findAllByRole( 'option' );
	await userEvent.click( allOptions[ 0 ] );
	
	// Check if the listbox contains the option 'Orange'
	await userEvent.click( selectButton );
	const allOptions2 = await canvas.findAllByRole( 'option' );
	await userEvent.click( allOptions2[ 1 ] );

	// Check if the button text is updated
	expect( selectButton ).toHaveTextContent( /Red.*Orange/ );
}

export const SelectWithSearch = ( args ) => (
	<div style={ { width: '300px' } }>
		<Select { ...args } combobox>
			<Select.Button label={ args.label } />
			<Select.Options
				searchBy="name"
				dropdownPortalId="storybook-root"
				searchPlaceholder={ args.placeholder }
			>
				{ options.map( ( option ) => (
					<Select.Option key={ option.id } value={ option }>
						{ option.name }
					</Select.Option>
				) ) }
			</Select.Options>
		</Select>
	</div>
);

SelectWithSearch.args = {
	size: 'md',
	multiple: false,
	combobox: true,
	disabled: false,
	defaultValue: undefined,
	placeholder: 'Search...',
	label: 'Search Color',
};
SelectWithSearch.play = async ( { canvasElement } ) => {
	const canvas = within( canvasElement );
	// Click on the select button
	const selectButton = await canvas.findByRole( 'combobox' );
	await userEvent.click( selectButton );
	
	// Check if the listbox contains the option 'Red' and search input
	const listBox = await canvas.findByRole( 'listbox' );
	const searchInput = await canvas.findByPlaceholderText( 'Search...' );
	expect(listBox).toContainElement( searchInput );
	expect(listBox).toHaveTextContent('Red');
	
	// Type 'Pink' in the search input
	await userEvent.type( searchInput, 'Pink' );
	expect(listBox).toHaveTextContent('Pink');

	// Click on the first option
	const allOptions = await canvas.findAllByRole( 'option' );
	await userEvent.click( allOptions[ 0 ] );

	// Check if the button text is updated
	expect( selectButton ).toHaveTextContent( 'Pink' );
}
