import React, { useState } from 'react';
import RadioButton from './radio-button.jsx';
import { Plus, Minus, Check } from 'lucide-react';

export default {
	title: 'Atoms/RadioButton',
	component: RadioButton.Group,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		style: {
			description: 'Defines the style of the RadioButton group. Options are "simple" and "tile".',
			options: [ 'simple', 'tile' ],
			table: {
				defaultValue: { summary: 'simple' },
			},
		},
		as: {
			description: 'Specifies the wrapper element for the radio button group. For the `simple` style, it defaults to `Fragment`, meaning no wrapper will be created. For the `tile` style, the default is `div`, wrapping the group in a `div` element.',
		},
		value: {
			description: 'The currently selected value in the RadioButton group.',
			table: {
				type: { summary: 'string' },
			},
		},
		defaultValue: {
			description: 'The default value to be selected in the RadioButton group.',
		},
		disabled: {
			description: 'Disables all buttons in the group when set to true.',
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
		'RadioButton.Button value': {
			description: 'The value for the individual RadioButton.Button component.',
			table: {
				type: { summary: 'string' },
			},
		},
		'RadioButton.Button size': {
			description: 'Size of the RadioButton.Button. Options for simple style are "xs", "sm", "md". Options for tile style are "sm", "md". ',
			control: {
				type: 'select',
				options: [ 'xs', 'sm', 'md' ],
			},
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'md' },
			},
		},
		'RadioButton.Button label': {
			description: 'The label object containing heading and description for the button.',
			control: 'object',
			table: {
				type: { summary: 'object | ReactComponent' },
			},
		},
		'RadioButton.Button disabled': {
			description: 'Disables the individual RadioButton.Button if set to true.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		'RadioButton.Button children': {
			description: 'Content such as icons or text inside the RadioButton.Button.',
		},
	},
};

const Template = ( args ) => {
	const [ value, setValue ] = useState( args.value || args.defaultValue );

	return (
		<RadioButton.Group
			{ ...args }
			value={ value }
			onChange={ ( val ) => {
				setValue( val );
				args.onChange( val );
			} }
		>
			{ args.children }
		</RadioButton.Group>
	);
};

export const SimpleRadiomd = ( args ) => Template( { ...args } );
SimpleRadiomd.args = {
	style: 'simple',
	defaultValue: 'option1',
	children: (
		<>
			<RadioButton.Button
				value="option1"
				label={ {
					heading: 'Option 1',
					description: 'Description for option 1',
				} }
			/>
			<RadioButton.Button
				value="option2"
				label={ {
					heading: 'Option 2',
					description: 'Description for option 2',
				} }
			/>
			<RadioButton.Button
				value="option3"
				label={ {
					heading: 'Option 3',
					description: 'Description for option 3',
				} }
			/>
		</>
	),
};

SimpleRadiomd.storyName = 'Simple Radio Size - md';

export const SimpleRadiosm = ( args ) => Template( { ...args } );
SimpleRadiosm.args = {
	style: 'simple',
	defaultValue: 'option1',
	children: (
		<>
			<RadioButton.Button
				size="sm"
				value="option1"
				label={ {
					heading: 'Option 1',
					description: 'Description for option 1',
				} }
			/>
			<RadioButton.Button
				size="sm"
				value="option2"
				label={ {
					heading: 'Option 2',
					description: 'Description for option 2',
				} }
			/>
			<RadioButton.Button
				size="sm"
				value="option3"
				label={ {
					heading: 'Option 3',
					description: 'Description for option 3',
				} }
			/>
		</>
	),
};

SimpleRadiosm.storyName = 'Simple Radio Size - sm';

export const TileRadiomd = ( args ) => Template( { ...args } );
TileRadiomd.args = {
	style: 'tile',
	defaultValue: 'item1',
	children: (
		<>
			<RadioButton.Button
				value="item1"
			>
				<span>Item 1</span>
			</RadioButton.Button>
			<RadioButton.Button
				value="item2"
			>
				<span>Item 2</span>
			</RadioButton.Button>
			<RadioButton.Button
				value="item3"
			>
				<span>Item 3</span>
			</RadioButton.Button>
		</>
	),
};

TileRadiomd.storyName = 'Tile Radio Size - md';

export const TileRadiosm = ( args ) => Template( { ...args } );
TileRadiosm.args = {
	style: 'tile',
	defaultValue: 'item1',
	children: (
		<>
			<RadioButton.Button
				size="sm"
				value="item1"
			>
				<span>Item 1</span>
			</RadioButton.Button>
			<RadioButton.Button
				size="sm"
				value="item2"
			>
				<span>Item 2</span>
			</RadioButton.Button>
			<RadioButton.Button
				size="sm"
				value="item3"
			>
				<span>Item 3</span>
			</RadioButton.Button>
		</>
	),
};

TileRadiosm.storyName = 'Tile Radio Size - sm';

export const TileRadioxs = ( args ) => Template( { ...args } );
TileRadioxs.args = {
	style: 'tile',
	defaultValue: 'item1',
	children: (
		<>
			<RadioButton.Button
				size="xs"
				value="item1"
			>
				<span>Item 1</span>
			</RadioButton.Button>
			<RadioButton.Button
				size="xs"
				value="item2"
			>
				<span>Item 2</span>
			</RadioButton.Button>
			<RadioButton.Button
				size="xs"
				value="item3"
			>
				<span>Item 3</span>
			</RadioButton.Button>
		</>
	),
};

TileRadioxs.storyName = 'Tile Radio Size - xs';

export const TileRadioWithIcons = ( args ) => Template( { ...args } );
TileRadioWithIcons.args = {
	style: 'tile',
	defaultValue: 'option1',
	children: (
		<>
			<RadioButton.Button
				value="option1"
			>
				<Plus />
			</RadioButton.Button>
			<RadioButton.Button
				value="option2"
			>
				<Minus />
			</RadioButton.Button>
			<RadioButton.Button
				value="option3"
			>
				<Check />
			</RadioButton.Button>
		</>
	),
};

export const DisabledSingleButton = ( args ) => Template( { ...args } );
DisabledSingleButton.args = {
	style: 'simple',
	defaultValue: 'option1',
	children: (
		<>
			<RadioButton.Button
				value="option1"
				label={ {
					heading: 'Disabled Option 1',
					description: 'Description for disabled option 1',
				} }
			/>
			<RadioButton.Button
				value="option2"
				label={ {
					heading: 'Disabled Option 2',
					description: 'Description for disabled option 2',
				} }
			/>
			<RadioButton.Button
				value="option3"
				label={ {
					heading: 'Disabled Option 3',
					description: 'Description for disabled option 3',
				} }
				disabled
			/>
		</>
	),
};

export const DisabledAllButtons = ( args ) => Template( { ...args } );
DisabledAllButtons.args = {
	style: 'simple',
	defaultValue: 'option1',
	disabled: true,
	children: (
		<>
			<RadioButton.Button
				value="option1"
				label={ {
					heading: 'Disabled Option 1',
					description: 'Description for disabled option 1',
				} }
			/>
			<RadioButton.Button
				value="option2"
				label={ {
					heading: 'Disabled Option 2',
					description: 'Description for disabled option 2',
				} }
			/>
			<RadioButton.Button
				value="option3"
				label={ {
					heading: 'Disabled Option 3',
					description: 'Description for disabled option 3',
				} }
			/>
		</>
	),
};
