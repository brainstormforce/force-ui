import React, { useState } from 'react';
import RadioGroup from './radio-group.jsx';
import { Plus, Minus, Check } from 'lucide-react';

export default {
	title: 'Atoms/RadioGroup',
	component: RadioGroup.Group,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		name: {
			description: 'The name prop used for form control.',
			table: {
				type: { summary: 'string' },
			},
		},
		style: {
			description: 'Defines the style of the RadioGroup group. Options are "simple" and "tile".',
			options: ['simple', 'tile'],
			table: {
				defaultValue: { summary: 'simple' },
			},
		},
		as: {
			description: 'Specifies the wrapper element for the radio button group. For the `simple` style, it defaults to `Fragment`, meaning no wrapper will be created. For the `tile` style, the default is `div`, wrapping the group in a `div` element.',
		},
		value: {
			description: 'The currently selected value in the RadioGroup group.',
			table: {
				type: { summary: 'string' },
			},
		},
		defaultValue: {
			description: 'The default value to be selected in the RadioGroup group.',
			table: {
				type: { summary: 'string' },
			},
		},
		by: {
			description: 'Used to compare the checked value. Typically "id".',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'id' },
			},
		},
		disabled: {
			description: 'Disables all buttons in the group when set to true.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		vertical: {
			description: 'Arrange radio buttons vertically.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		columns: {
			description: 'Sets the number of columns for arranging the radio buttons.',
			control: 'number',
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: 4 },
			},
		},
		multiSelection: {
			description: 'Allows selecting more than one option.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		onChange: {
			description: 'Event handler function to listen to the change.',
			action: 'changed',
			table: {
				type: { summary: 'function' },
			},
		},
		'RadioGroup.Button value': {
			description: 'The value for the individual RadioGroup.Button component.',
			table: {
				type: { summary: 'string' },
			},
		},
		'RadioGroup.Button size': {
			description: 'Size of the RadioGroup.Button. Options for simple style are "xs", "sm", "md". Options for tile style are "sm", "md". ',
			control: {
				type: 'select',
				options: ['xs', 'sm', 'md'],
			},
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'md' },
			},
		},
		'RadioGroup.Button label': {
			description: 'The label object containing heading and description for the button.',
			control: 'object',
			table: {
				type: { summary: 'object | ReactComponent' },
			},
		},
		'RadioGroup.Button disabled': {
			description: 'Disables the individual RadioGroup.Button if set to true.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		'RadioGroup.Button children': {
			description: 'Content such as icons or text inside the RadioGroup.Button.',
		},
		'RadioGroup.Button borderOn': {
			description: 'Adds a border around the button.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
	},
};

const Template = (args) => {
	const [value, setValue] = useState(args.value || args.defaultValue);

	return (
		<RadioGroup.Group
			{...args}
			value={value}
			onChange={(val) => {
				setValue(val);
				args.onChange(val);
			}}
		>
			{args.children}
		</RadioGroup.Group>
	);
};

export const SimpleRadiomd = (args) => Template({ ...args });
SimpleRadiomd.args = {
	style: 'simple',
	defaultValue: 'option1',
	children: (
		<>
			<RadioGroup.Button
				value="option1"
				label={{
					heading: 'Option 1',
					description: 'Description for option 1',
				}}
			/>
			<RadioGroup.Button
				value="option2"
				label={{
					heading: 'Option 2',
					description: 'Description for option 2',
				}}
			/>
			<RadioGroup.Button
				value="option3"
				label={{
					heading: 'Option 3',
					description: 'Description for option 3',
				}}
			/>
			<RadioGroup.Button
				value="option4"
				label={{
					heading: 'Option 4',
					description: 'Description for option 4',
				}}
			/>
		</>
	),
};

SimpleRadiomd.storyName = 'Simple Radio Size - md';

export const SimpleRadiosm = (args) => Template({ ...args });
SimpleRadiosm.args = {
	style: 'simple',
	defaultValue: 'option1',
	children: (
		<>
			<RadioGroup.Button
				size="sm"
				value="option1"
				label={{
					heading: 'Option 1',
					description: 'Description for option 1',
				}}
			/>
			<RadioGroup.Button
				size="sm"
				value="option2"
				label={{
					heading: 'Option 2',
					description: 'Description for option 2',
				}}
			/>
			<RadioGroup.Button
				size="sm"
				value="option3"
				label={{
					heading: 'Option 3',
					description: 'Description for option 3',
				}}
			/>
			<RadioGroup.Button
				size="sm"
				value="option4"
				label={{
					heading: 'Option 4',
					description: 'Description for option 4',
				}}
			/>
		</>
	),
};

SimpleRadiosm.storyName = 'Simple Radio Size - sm';

export const TileRadiomd = (args) => Template({ ...args });
TileRadiomd.args = {
	style: 'tile',
	defaultValue: 'item1',
	children: (
		<>
			<RadioGroup.Button
				value="item1"
			>
				<span>Item 1</span>
			</RadioGroup.Button>
			<RadioGroup.Button
				value="item2"
			>
				<span>Item 2</span>
			</RadioGroup.Button>
			<RadioGroup.Button
				value="item3"
			>
				<span>Item 3</span>
			</RadioGroup.Button>
			<RadioGroup.Button
				value="item3"
			>
				<span>Item 3</span>
			</RadioGroup.Button>
			<RadioGroup.Button
				value="item4"
			>
				<span>Item 4</span>
			</RadioGroup.Button>
		</>
	),
};

TileRadiomd.storyName = 'Tile Radio Size - md';

export const TileRadiosm = (args) => Template({ ...args });
TileRadiosm.args = {
	style: 'tile',
	defaultValue: 'item1',
	children: (
		<>
			<RadioGroup.Button
				size="sm"
				value="item1"
			>
				<span>Item 1</span>
			</RadioGroup.Button>
			<RadioGroup.Button
				size="sm"
				value="item2"
			>
				<span>Item 2</span>
			</RadioGroup.Button>
			<RadioGroup.Button
				size="sm"
				value="item3"
			>
				<span>Item 3</span>
			</RadioGroup.Button>
			<RadioGroup.Button
				size="sm"
				value="item4"
			>
				<span>Item 4</span>
			</RadioGroup.Button>
		</>
	),
};

TileRadiosm.storyName = 'Tile Radio Size - sm';

export const TileRadioxs = (args) => Template({ ...args });
TileRadioxs.args = {
	style: 'tile',
	defaultValue: 'item1',
	children: (
		<>
			<RadioGroup.Button
				size="xs"
				value="item1"
			>
				<span>Item 1</span>
			</RadioGroup.Button>
			<RadioGroup.Button
				size="xs"
				value="item2"
			>
				<span>Item 2</span>
			</RadioGroup.Button>
			<RadioGroup.Button
				size="xs"
				value="item3"
			>
				<span>Item 3</span>
			</RadioGroup.Button>
			<RadioGroup.Button
				size="xs"
				value="item4"
			>
				<span>Item 4</span>
			</RadioGroup.Button>
		</>
	),
};

TileRadioxs.storyName = 'Tile Radio Size - xs';

export const TileRadioWithIcons = (args) => Template({ ...args });
TileRadioWithIcons.args = {
	style: 'tile',
	defaultValue: 'option1',
	children: (
		<>
			<RadioGroup.Button
				value="option1"
			>
				<Plus />
			</RadioGroup.Button>
			<RadioGroup.Button
				value="option2"
			>
				<Minus />
			</RadioGroup.Button>
			<RadioGroup.Button
				value="option3"
			>
				<Check />
			</RadioGroup.Button>
			<RadioGroup.Button
				value="option4"
			>
				<Check />
			</RadioGroup.Button>
		</>
	),
};

export const DisabledSingleButton = (args) => Template({ ...args });
DisabledSingleButton.args = {
	style: 'simple',
	defaultValue: 'option1',
	children: (
		<>
			<RadioGroup.Button
				value="option1"
				label={{
					heading: 'Disabled Option 1',
					description: 'Description for disabled option 1',
				}}
			/>
			<RadioGroup.Button
				value="option2"
				label={{
					heading: 'Disabled Option 2',
					description: 'Description for disabled option 2',
				}}
			/>
			<RadioGroup.Button
				value="option3"
				label={{
					heading: 'Disabled Option 3',
					description: 'Description for disabled option 3',
				}}
				disabled
			/>
			<RadioGroup.Button
				value="option4"
				label={{
					heading: 'Disabled Option 4',
					description: 'Description for disabled option 4',
				}}
			/>
		</>
	),
};

export const DisabledAllButtons = (args) => Template({ ...args });
DisabledAllButtons.args = {
	style: 'simple',
	defaultValue: 'option1',
	disabled: true,
	children: (
		<>
			<RadioGroup.Button
				value="option1"
				label={{
					heading: 'Disabled Option 1',
					description: 'Description for disabled option 1',
				}}
			/>
			<RadioGroup.Button
				value="option2"
				label={{
					heading: 'Disabled Option 2',
					description: 'Description for disabled option 2',
				}}
			/>
			<RadioGroup.Button
				value="option3"
				label={{
					heading: 'Disabled Option 3',
					description: 'Description for disabled option 3',
				}}
			/>
			<RadioGroup.Button
				value="option4"
				label={{
					heading: 'Disabled Option 4',
					description: 'Description for disabled option 4',
				}}
			/>
		</>
	),
};