import React from 'react';
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
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'md' },
			},
		},
		multiple: {
			control: { type: 'boolean' },
			description: 'If true, multiple options can be selected.',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		combobox: {
			control: { type: 'boolean' },
			description: 'If true, it will enable search functionality.',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		disabled: {
			control: { type: 'boolean' },
			description: 'If true, disables the Select component.',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		onChange: {
			action: 'onChange',
			description: 'Callback function when the selection changes.',
			table: {
				type: { summary: 'function' },
			},
		},
		value: {
			control: { type: 'text' },
			description: 'Controlled value for the select component.',
			table: {
				type: { summary: 'string' },
			},
		},
		defaultValue: {
			control: { type: 'text' },
			description:
				'Default value for the select (for uncontrolled component).',
			table: {
				type: { summary: 'string' },
			},
		},
		placeholder: {
			control: { type: 'text' },
			description: 'Placeholder text when no option is selected.',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'Select an option' },
			},
		},
		label: {
			control: { type: 'text' },
			description: 'Label for the Select component.',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '' },
			},
		},
	},
};

// Single Select Story
export const SingleSelect = ( {
	size,
	multiple,
	combobox,
	disabled,
	placeholder,
	label,
} ) => (
	<div style={ { width: '300px' } }>
		<Select
			key={ multiple }
			size={ size }
			multiple={ multiple }
			combobox={ combobox }
			disabled={ disabled }
		>
			<Select.Button label={ label } placeholder={ placeholder } />
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
	placeholder: 'Select an option',
	label: 'Select Color',
};

const SelectWithoutPortalTemplate = ( {
	size,
	multiple,
	combobox,
	disabled,
	placeholder,
	label,
} ) => (
	<div className="w-full h-[200px]">
		<Select
			key={ multiple }
			size={ size }
			multiple={ multiple }
			combobox={ combobox }
			disabled={ disabled }
		>
			<Select.Button label={ label } placeholder={ placeholder } />
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
	placeholder: 'Select an option',
	label: 'Select Color',
};

// Multi-select Story
export const MultiSelect = ( {
	size,
	multiple,
	combobox,
	disabled,
	placeholder,
	label,
} ) => (
	<div style={ { width: '300px' } }>
		<Select
			size={ size }
			multiple={ multiple }
			combobox={ combobox }
			disabled={ disabled }
		>
			<Select.Button placeholder={ placeholder } label={ label } />
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
	placeholder: 'Select multiple options',
	label: 'Select Multiple Colors',
};

export const MultiSelectWithoutPortal = SelectWithoutPortalTemplate.bind( {} );
MultiSelectWithoutPortal.args = {
	size: 'md',
	multiple: true,
	combobox: false,
	disabled: false,
	placeholder: 'Select multiple options',
	label: 'Select Multiple Colors',
};

export const SelectWithSearch = ( {
	size,
	multiple,
	combobox,
	disabled,
	placeholder,
	searchPlaceholder,
	label,
} ) => (
	<div style={ { width: '300px' } }>
		<Select
			size={ size }
			multiple={ multiple }
			combobox={ combobox }
			disabled={ disabled }
		>
			<Select.Button label={ label } placeholder={ placeholder } />
			<Select.Portal>
				<Select.Options
					searchBy="name"
					searchPlaceholder={ searchPlaceholder }
				>
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
	searchPlaceholder: 'Search...',
	placeholder: 'Select an option',
	label: 'Search Color',
};

export const SelectWithSearchWithoutPortal = SelectWithoutPortalTemplate.bind(
	{}
);
SelectWithSearchWithoutPortal.args = {
	size: 'md',
	multiple: false,
	combobox: true,
	disabled: false,
	searchPlaceholder: 'Search...',
	placeholder: 'Select an option',
	label: 'Search Color',
};
