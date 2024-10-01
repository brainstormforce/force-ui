import React from 'react';
import Select from './select';

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
	tags: ['atoms', 'autodocs'],
	argTypes: {
		size: {
			control: { type: 'radio' },
			options: ['sm', 'md', 'lg'],
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
export const SingleSelect = (args) => (
	<div style={{ width: '300px' }}>
		<Select {...args}>
			<Select.Button label={args.label} />
			<Select.Options dropdownPortalId="wpcontent">
				{options.map((option) => (
					<Select.Option key={option.id} value={option}>
						{option.name}
					</Select.Option>
				))}
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

// Multi-select Story
export const MultiSelect = (args) => (
	<div style={{ width: '300px' }}>
		<Select {...args} multiple>
			<Select.Button label={args.label} />
			<Select.Options dropdownPortalId="wpcontent">
				{options.map((option) => (
					<Select.Option key={option.id} value={option}>
						{option.name}
					</Select.Option>
				))}
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

export const SelectWithSearch = (args) => (
	<div style={{ width: '300px' }}>
		<Select {...args} combobox>
			<Select.Button label={args.label} />
			<Select.Options
				searchBy="name"
				dropdownPortalId="wpcontent"
				searchPlaceholder={args.placeholder}
			>
				{options.map((option) => (
					<Select.Option key={option.id} value={option}>
						{option.name}
					</Select.Option>
				))}
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
