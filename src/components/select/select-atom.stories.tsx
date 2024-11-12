import type { Meta, StoryFn } from '@storybook/react';
import Select from './select';
import { expect, userEvent, within } from '@storybook/test';

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

const meta: Meta<typeof Select> = {
	title: 'Atoms/Select',
	component: Select,
	subcomponents: {
		'Select.Button': Select.Button,
		'Select.Portal': Select.Portal,
		'Select.Options': Select.Options,
		'Select.Option': Select.Option,
	} as Record<string, React.ComponentType<unknown>>,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'atoms', 'autodocs' ],
	argTypes: {
		size: { control: 'select' },
		children: { control: false },
	},
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryFn<typeof Select>;

// Single Select Story
export const SingleSelect: Story = ( { size, multiple, combobox, disabled } ) => (
	<div style={ { width: '300px' } }>
		<Select
			key={ multiple as unknown as string }
			size={ size }
			multiple={ multiple }
			combobox={ combobox }
			disabled={ disabled }
			onChange={ ( value ) => value }
		>
			<Select.Button
				placeholder={
					multiple ? 'Select multiple options' : 'Select an option'
				}
				label={ multiple ? 'Select Multiple Colors' : 'Select a Color' }
			/>
			<Select.Portal>
				<Select.Options>
					{ options.map( ( option ) => (
						<Select.Option key={ option.id } value={ option }>
							{ option.name }
						</Select.Option>
					) ) }
				</Select.Options>
			</Select.Portal>
		</Select>
	</div>
);

SingleSelect.args = {
	size: 'md',
	multiple: false,
	combobox: false,
	disabled: false,
};
SingleSelect.play = async ( { canvasElement } ) => {
	const canvas = within( canvasElement );
	// Click on the select button
	const selectButton = await canvas.findByRole( 'combobox' );
	await userEvent.click( selectButton );

	// Check if the listbox contains the option 'Red'
	const listBox = await canvas.findByRole( 'listbox' );
	expect( listBox ).toHaveTextContent( 'Red' );

	// Click on the first option
	const allOptions = await canvas.findAllByRole( 'option' );
	await userEvent.click( allOptions[ 0 ] );

	// Check if the button text is updated
	expect( selectButton ).toHaveTextContent( 'Red' );
};

const SelectWithoutPortalTemplate: Story = ( {
	size,
	multiple,
	combobox,
	disabled,
} ) => (
	<div className="w-full h-[200px]">
		<Select
			size={ size }
			multiple={ multiple }
			combobox={ combobox }
			disabled={ disabled }
			onChange={ ( value ) => value }
		>
			<Select.Button
				placeholder={
					multiple ? 'Select multiple options' : 'Select an option'
				}
				label={ multiple ? 'Select Multiple Colors' : 'Select a Color' }
			/>
			<Select.Options>
				{ options.map( ( option ) => (
					<Select.Option key={ option.id } value={ option }>
						{ option.name }
					</Select.Option>
				) ) }
			</Select.Options>
		</Select>
	</div>
);

export const SingleSelectWithoutPortal = SelectWithoutPortalTemplate.bind( {} );
SingleSelectWithoutPortal.args = {
	size: 'md',
	multiple: false,
	combobox: false,
	disabled: false,
};

// Multi-select Story
export const MultiSelect: Story = ( { size, multiple, combobox, disabled } ) => (
	<div style={ { width: '300px' } }>
		<Select
			size={ size }
			multiple={ multiple }
			combobox={ combobox }
			disabled={ disabled }
			onChange={ ( value ) => value }
		>
			<Select.Button
				placeholder={
					multiple ? 'Select multiple options' : 'Select an option'
				}
				label={ multiple ? 'Select Multiple Colors' : 'Select a Color' }
			/>
			<Select.Portal>
				<Select.Options>
					{ options.map( ( option ) => (
						<Select.Option key={ option.id } value={ option }>
							{ option.name }
						</Select.Option>
					) ) }
				</Select.Options>
			</Select.Portal>
		</Select>
	</div>
);

MultiSelect.args = {
	size: 'md',
	multiple: true,
	combobox: false,
	disabled: false,
};

MultiSelect.play = async ( { canvasElement } ) => {
	const canvas = within( canvasElement );
	// Click on the select button
	const selectButton = await canvas.findByRole( 'combobox' );
	await userEvent.click( selectButton );

	// Check if the listbox contains the option 'Red'
	const listBox = await canvas.findByRole( 'listbox' );
	expect( listBox ).toHaveTextContent( 'Red' );

	// Click on the first option
	const allOptions = await canvas.findAllByRole( 'option' );
	await userEvent.click( allOptions[ 0 ] );

	// Check if the listbox contains the option 'Orange'
	await userEvent.click( selectButton );
	const allOptions2 = await canvas.findAllByRole( 'option' );
	await userEvent.click( allOptions2[ 1 ] );

	// Check if the button text is updated
	expect( selectButton ).toHaveTextContent( /Red.*Orange/ );
};

export const MultiSelectWithoutPortal = SelectWithoutPortalTemplate.bind( {} );
MultiSelectWithoutPortal.args = {
	size: 'md',
	multiple: true,
	combobox: false,
	disabled: false,
};

export const SelectWithSearch: Story = ( {
	size,
	multiple,
	combobox,
	disabled,
} ) => (
	<div style={ { width: '300px' } }>
		<Select
			size={ size }
			multiple={ multiple }
			combobox={ combobox }
			disabled={ disabled }
			onChange={ ( value ) => value }
		>
			<Select.Button
				label="Select Color"
				placeholder="Select an option"
			/>
			<Select.Portal>
				<Select.Options searchBy="name" searchPlaceholder="Search...">
					{ options.map( ( option ) => (
						<Select.Option key={ option.id } value={ option }>
							{ option.name }
						</Select.Option>
					) ) }
				</Select.Options>
			</Select.Portal>
		</Select>
	</div>
);

SelectWithSearch.args = {
	size: 'md',
	multiple: false,
	combobox: true,
	disabled: false,
};

SelectWithSearch.play = async ( { canvasElement } ) => {
	const canvas = within( canvasElement );
	// Click on the select button
	const selectButton = await canvas.findByRole( 'combobox' );
	await userEvent.click( selectButton );

	// Check if the listbox contains the option 'Red' and search input
	const listBox = await canvas.findByRole( 'listbox' );
	const searchInput = await canvas.findByPlaceholderText( 'Search...' );
	expect( listBox ).toContainElement( searchInput );
	expect( listBox ).toHaveTextContent( 'Red' );

	// Type 'Pink' in the search input
	await userEvent.type( searchInput, 'Pink' );
	expect( listBox ).toHaveTextContent( 'Pink' );

	// Click on the first option
	const allOptions = await canvas.findAllByRole( 'option' );
	await userEvent.click( allOptions[ 0 ] );

	// Check if the button text is updated
	expect( selectButton ).toHaveTextContent( 'Pink' );
};

export const SelectWithSearchWithoutPortal = SelectWithoutPortalTemplate.bind(
	{}
);
SelectWithSearchWithoutPortal.args = {
	size: 'md',
	multiple: false,
	combobox: true,
	disabled: false,
};
