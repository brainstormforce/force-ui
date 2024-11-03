import type { Meta, StoryFn } from '@storybook/react';
import Select from './select';
import type { ComponentProps } from '@/utilities/ts-helper';

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

interface AdditionalArgs {
	size: 'sm' | 'md' | 'lg';
	multiple: boolean;
	combobox: boolean;
	disabled: boolean;
	placeholder: string;
	searchPlaceholder: string;
	label: string;
}

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
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryFn<ComponentProps<typeof Select> & AdditionalArgs>;

// Single Select Story
export const SingleSelect: Story = ( {
	size,
	multiple,
	combobox,
	disabled,
	placeholder,
	label,
} ) => (
	<div style={ { width: '300px' } }>
		<Select
			key={ multiple as unknown as string }
			size={ size }
			multiple={ multiple }
			combobox={ combobox }
			disabled={ disabled }
			onChange={ ( value ) => value }
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

const SelectWithoutPortalTemplate: Story = ( {
	size,
	multiple,
	combobox,
	disabled,
	placeholder,
	label,
} ) => (
	<div className="w-full h-[200px]">
		<Select
			size={ size }
			multiple={ multiple }
			combobox={ combobox }
			disabled={ disabled }
			onChange={ ( value ) => value }
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
export const MultiSelect: Story = ( {
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
			onChange={ ( value ) => value }
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

export const SelectWithSearch: Story = ( {
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
			onChange={ ( value ) => value }
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
