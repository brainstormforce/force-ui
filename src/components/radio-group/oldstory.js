import RadioGroup from './radio-group.jsx'; // Adjust the path to your Radio component
import { fn } from '@storybook/test';

// Radio component story configuration
export default {
	title: 'Atoms/RadioGroup',
	component: RadioGroup.Group, // Since you're using a Group/Button structure
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		style: {
			name: 'Style',
			description: 'Defines the style of the radio group.',
			control: 'select',
			options: ['simple', 'tile'],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'simple' },
			},
		},
		columns: {
			name: 'Columns',
			description: 'Number of columns in the radio group.',
			control: 'number',
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: 4 },
			},
		},
		vertical: {
			name: 'Vertical',
			description: 'If true, displays radio buttons vertically.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: false },
			},
		},
		multiSelection: {
			name: 'Multi Selection',
			description: 'Enables multiple selections.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: false },
			},
		},
		disabled: {
			name: 'Disabled',
			description: 'Disables all radio buttons.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: false },
			},
		},
	},
};

// Story variations

export const Simple = {
	args: {
		style: 'simple',
		columns: 4,
		children: (
			<>
				<RadioGroup.Button value="option1" label={{ heading: 'Option 1' }} />
				<RadioGroup.Button value="option2" label={{ heading: 'Option 2' }} />
				<RadioGroup.Button value="option3" label={{ heading: 'Option 3' }} />
				<RadioGroup.Button value="option4" label={{ heading: 'Option 4' }} />
			</>
		),
	},
};

export const TileStyle = {
	args: {
		style: 'tile',
		columns: 2,
		children: (
			<>
				<RadioGroup.Button value="tile1" label={{ heading: 'Tile 1' }} />
				<RadioGroup.Button value="tile2" label={{ heading: 'Tile 2' }} />
				<RadioGroup.Button value="tile3" label={{ heading: 'Tile 3' }} />
				<RadioGroup.Button value="tile4" label={{ heading: 'Tile 4' }} />
			</>
		),
	},
};

export const Vertical = {
	args: {
		style: 'simple',
		vertical: true,
		children: (
			<>
				<RadioGroup.Button value="vertical1" label={{ heading: 'Vertical 1' }} />
				<RadioGroup.Button value="vertical2" label={{ heading: 'Vertical 2' }} />
			</>
		),
	},
};

export const DisabledGroup = {
	args: {
		style: 'simple',
		disabled: true,
		children: (
			<>
				<RadioGroup.Button value="disabled1" label={{ heading: 'Disabled 1' }} />
				<RadioGroup.Button value="disabled2" label={{ heading: 'Disabled 2' }} />
			</>
		),
	},
};

export const MultiSelection = {
	args: {
		style: 'simple',
		multiSelection: true,
		children: (
			<>
				<RadioGroup.Button value="multi1" label={{ heading: 'Multi 1' }} />
				<RadioGroup.Button value="multi2" label={{ heading: 'Multi 2' }} />
				<RadioGroup.Button value="multi3" label={{ heading: 'Multi 3' }} />
			</>
		),
	},
};
