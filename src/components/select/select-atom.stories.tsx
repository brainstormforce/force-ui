import type { Meta, StoryFn } from '@storybook/react';
import Select from './select';
import { expect, userEvent, within, screen } from '@storybook/test';
import { SelectOptionValue } from './select-types';
import { useState } from 'react';

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

const groupedOptions = [
	{
		label: 'Warm Colors',
		options: [
			{ id: '1', name: 'Red' },
			{ id: '2', name: 'Orange' },
			{ id: '3', name: 'Yellow' },
		],
	},
	{
		label: 'Cool Colors',
		options: [
			{ id: '4', name: 'Green' },
			{ id: '5', name: 'Cyan' },
			{ id: '6', name: 'Blue' },
		],
	},
	{
		label: 'Other Colors',
		options: [
			{ id: '7', name: 'Purple' },
			{ id: '8', name: 'Pink' },
		],
	},
];

const meta: Meta<typeof Select> = {
	title: 'Atoms/Select',
	component: Select,
	subcomponents: {
		'Select.Button': Select.Button,
		'Select.Portal': Select.Portal,
		'Select.OptionGroup': Select.OptionGroup,
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

// Single Select without portal
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
				render={ ( selected ) =>
					( selected as Record<string, string> )?.name
				}
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
SingleSelectWithoutPortal.parameters = {
	docs: {
		description: {
			story: `If you want to use the Select component inside a **Dialog**, **Drawer** or **Popover**, you can omit using the \`Select.Portal\` component. Using the portal is not required in this case and it might cause issues like the \`z-index\` problem and the dropdown menu not being visible.

If you really need to use the portal and if you face \`z-index\` issues, in that case you can update the \`z-index\` of the Select dropdown to a higher value.

#### When to use the \`Select.Portal\` component?

Portal helps to render a floating element into a given container element. By default, outside of the app root and into the body. This is necessary to ensure the floating element can appear outside any potential parent containers that cause clipping (such as overflow: hidden), while retaining its location in the React tree.

- When the dropdown is being cut off by parent elements. Ex. Parent container has \`overflow: hidden\` property.
- When you need to render the dropdown menu into a different part of the DOM except the parent container.
`,
		},
	},
};
SingleSelectWithoutPortal.args = {
	size: 'md',
	multiple: false,
	combobox: false,
	disabled: false,
};

// Single Select Story
export const SingleSelect: Story = ( { size, multiple, combobox, disabled } ) => {
	const [ selected, setSelected ] = useState<SelectOptionValue | null>( null );
	return (
		<div style={ { width: '300px' } }>
			<Select
				key={ multiple as unknown as string }
				size={ size }
				multiple={ multiple }
				combobox={ combobox }
				disabled={ disabled }
				onChange={ ( value ) => setSelected( value as SelectOptionValue ) }
				value={ selected as SelectOptionValue }
			>
				<Select.Button
					placeholder={
						multiple
							? 'Select multiple options'
							: 'Select an option'
					}
					label={
						multiple ? 'Select Multiple Colors' : 'Select a Color'
					}
					render={ ( currentSelected ) =>
						( currentSelected as Record<string, string> )?.name
					}
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
};

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
	const listBox = await screen.findByRole( 'listbox' );
	expect( listBox ).toHaveTextContent( 'Red' );

	// Click on the first option
	const allOptions = await screen.findAllByRole( 'option' );
	await userEvent.click( allOptions[ 0 ] );

	// Check if the button text is updated
	expect( selectButton ).toHaveTextContent( 'Red' );
};

// Multi-select Story
export const MultiSelect: Story = ( { size, multiple, combobox, disabled } ) => {
	const [ selected, setSelected ] = useState<SelectOptionValue[]>( [] );
	return (
		<div style={ { width: '300px' } }>
			<Select
				size={ size }
				multiple={ multiple }
				combobox={ combobox }
				disabled={ disabled }
				onChange={ ( value ) => setSelected( value as SelectOptionValue[] ) }
				value={ selected as SelectOptionValue[] }
			>
				<Select.Button
					placeholder={
						multiple
							? 'Select multiple options'
							: 'Select an option'
					}
					label={
						multiple ? 'Select Multiple Colors' : 'Select a Color'
					}
					render={ ( currentSelected ) =>
						( currentSelected as Record<string, string> )?.name
					}
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
};

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
	const listBox = await screen.findByRole( 'listbox' );
	expect( listBox ).toHaveTextContent( 'Red' );

	// Click on the first option
	const allOptions = await screen.findAllByRole( 'option' );
	await userEvent.click( allOptions[ 0 ] );

	// Check if the listbox contains the option 'Orange'
	await userEvent.click( selectButton );
	const allOptions2 = await screen.findAllByRole( 'option' );
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
			searchPlaceholder="Search..."
		>
			<Select.Button
				label="Select Color"
				placeholder="Select an option"
				render={ ( selected ) =>
					( selected as Record<string, string> )?.name
				}
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
	const listBox = await screen.findByRole( 'listbox' );
	const searchInput = await screen.findByPlaceholderText( 'Search...' );
	expect( listBox ).toContainElement( searchInput );
	expect( listBox ).toHaveTextContent( 'Red' );

	// Type 'Pink' in the search input
	await userEvent.type( searchInput, 'Pink' );
	expect( listBox ).toHaveTextContent( 'Pink' );

	// Click on the first option
	const allOptions = await screen.findAllByRole( 'option' );
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

const GroupedSelectTemplate: Story = ( {
	size,
	multiple,
	combobox,
	disabled,
} ) => {
	const [ selectedValue, setSelectedValue ] =
		useState<SelectOptionValue | null>( null );
	return (
		<div className="w-80">
			<Select
				key={ `${ size }-${ multiple }-${ combobox }-${ disabled }` }
				size={ size }
				multiple={ multiple }
				combobox={ combobox }
				disabled={ disabled }
				onChange={ ( value ) =>
					setSelectedValue( value as SelectOptionValue )
				}
				value={ selectedValue as SelectOptionValue }
			>
				<Select.Button
					placeholder={
						multiple
							? 'Select multiple options'
							: 'Select an option'
					}
					label={
						multiple ? 'Select Multiple Colors' : 'Select a Color'
					}
					render={ ( selected ) =>
						( selected as Record<string, string> )?.name
					}
				/>
				<Select.Portal>
					<Select.Options>
						{ groupedOptions.map( ( group ) => (
							<Select.OptionGroup
								key={ group.label }
								label={ group.label }
							>
								{ group.options.map( ( option ) => (
									<Select.Option
										key={ option.id }
										value={ option }
									>
										{ option.name }
									</Select.Option>
								) ) }
							</Select.OptionGroup>
						) ) }
					</Select.Options>
				</Select.Portal>
			</Select>
		</div>
	);
};

export const GroupedSelect = GroupedSelectTemplate.bind( {} );
GroupedSelect.args = {
	size: 'md',
	multiple: false,
	combobox: false,
	disabled: false,
};

export const GroupedSelectWithSearch = GroupedSelectTemplate.bind( {} );
GroupedSelectWithSearch.args = {
	size: 'md',
	multiple: false,
	combobox: true,
	disabled: false,
};

GroupedSelect.play = async ( { canvasElement } ) => {
	const canvas = within( canvasElement );
	const selectButton = await canvas.findByRole( 'combobox' );
	await userEvent.click( selectButton );

	const listBox = await screen.findByRole( 'listbox' );
	expect( listBox ).toHaveTextContent( 'Warm Colors' );
	expect( listBox ).toHaveTextContent( 'Cool Colors' );
	expect( listBox ).toHaveTextContent( 'Red' );

	const allOptions = await screen.findAllByRole( 'option' );
	await userEvent.click( allOptions[ 0 ] );

	expect( selectButton ).toHaveTextContent( 'Red' );
};
