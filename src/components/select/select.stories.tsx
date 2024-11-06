import type { Meta, StoryFn } from '@storybook/react';
import { useEffect, useState } from 'react';
import Select from './select';
import Label from '../label';

const meta: Meta<typeof Select> = {
	title: 'Molecules/Select',
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
	tags: [ 'autodocs' ],
	argTypes: {
		children: { control: false },
		size: {
			control: { type: 'select' },
		},
	},
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
	const [ selected, setSelected ] = useState<string | []>();

	const handleSelect = ( value: unknown ) => {
		setSelected( value as unknown as string | [] );
	};

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
				onChange={ handleSelect }
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
			<Label className='mt-1.5' size="sm" variant="help" tag='span'>
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
