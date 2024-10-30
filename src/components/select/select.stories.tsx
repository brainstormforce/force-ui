import type { Meta, StoryFn } from '@storybook/react';
import { useEffect, useState } from 'react';
import Select from './select';
import Label from '../label';

const meta: Meta<typeof Select> = {
	title: 'Molecules/Select',
	component: Select,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	// argTypes: {
	// 	size: {
	// 		name: 'Size',
	// 		description: 'Defines the size variant of the select',
	// 		control: { type: 'select' },
	// 		options: [ 'sm', 'md', 'lg' ],
	// 		table: {
	// 			type: { summary: 'string' },
	// 			defaultValue: { summary: 'md' },
	// 		},
	// 	},
	// 	multiple: {
	// 		name: 'Multiple',
	// 		description: 'If true, it will allow multiple selection.',
	// 		control: 'boolean',
	// 		table: {
	// 			type: { summary: 'boolean' },
	// 		},
	// 	},
	// 	combobox: {
	// 		name: 'Combobox',
	// 		description: 'If true, it will show a search box.',
	// 		control: 'boolean',
	// 		table: {
	// 			type: { summary: 'boolean' },
	// 		},
	// 	},
	// 	id: {
	// 		name: 'ID',
	// 		description: 'The `id` attribute of the select element.',
	// 		table: {
	// 			type: { summary: 'string' },
	// 		},
	// 	},
	// 	onChange: {
	// 		name: 'On Change Event',
	// 		description: 'Callback function to handle the change event.',
	// 		table: {
	// 			type: { summary: 'function' },
	// 		},
	// 	},
	// 	by: {
	// 		name: 'By',
	// 		description:
	// 			'Used to identify the selected value when value type is an `object`. Default is `"id"`.',
	// 		table: {
	// 			type: { summary: 'string' },
	// 		},
	// 	},
	// 	disabled: {
	// 		name: 'Disabled',
	// 		description: 'If true, the select will be disabled.',
	// 		table: {
	// 			type: { summary: 'boolean' },
	// 		},
	// 	},
	// },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryFn<typeof Select>;

const options = [
	'Select Item 1',
	'Select Item 2',
	'Select Item 3',
	'Select Item 4',
	'Select Item 5',
];

const Template: Story = ( args ) => {
	const [ selected, setSelected ] = useState<
		string | string[] | Record<string, unknown>
	>( args.multiple ? [] : '' );

	useEffect( () => {
		if ( args?.multiple ) {
			setSelected( [] );
			return;
		}
		setSelected( '' );
	}, [ args ] );

	return (
		<div style={ { width: '260px' } }>
			<Select
				key={ args?.multiple ? 1 : 0 }
				{ ...args }
				onChange={ setSelected }
				value={ selected }
			>
				<Select.Button label="Label" />
				<Select.Portal>
					<Select.Options>
						{ options.map( ( option, index ) => (
							<Select.Option key={ index } value={ option }>
								{ option }
							</Select.Option>
						) ) }
					</Select.Options>
				</Select.Portal>
			</Select>
			<Label size="sm" variant="help">
				Hint text can be added here.
				<a href="https://example.com">Link</a>.
			</Label>
		</div>
	);
};

export const BasicSelect = Template.bind( {} );
BasicSelect.args = {
	size: 'md',
	multiple: false,
};

export const Combobox = Template.bind( {} );
Combobox.args = {
	size: 'md',
	combobox: true,
	multiple: false,
};

export const Multiselect = Template.bind( {} );
Multiselect.args = {
	size: 'md',
	multiple: true,
};

export const MultiselectCombobox = Template.bind( {} );
MultiselectCombobox.args = {
	size: 'md',
	multiple: true,
	combobox: true,
};
