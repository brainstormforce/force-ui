import React, { useState } from 'react';
import { RadioButtonGroup, RadioButton } from './radio-button-group.jsx';
import { Plus, Smile } from 'lucide-react';
import Badge from '../badge/badge.jsx';

export default {
	title: 'Atoms/RadioButtonGroup',
	component: RadioButtonGroup,
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
			description:
				'Defines the style of the RadioGroup group. Options are "simple" and "tile".',
			control: { type: 'select' },
			options: ['simple', 'tile'],
			table: {
				defaultValue: { summary: 'simple' },
			},
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md'],
			description: 'Defines the size of the Select component.',
			defaultValue: 'md',
		},
		as: {
			description:
				'Specifies the wrapper element for the radio button group.',
			control: {
				type: 'text',
			},
			table: {
				type: { summary: 'string | React.ElementType' },
				defaultValue: { summary: 'div' },
			},
		},
		value: {
			description:
				'The currently selected value in the RadioGroup group.',
			table: {
				type: { summary: 'string' },
			},
		},
		defaultValue: {
			description:
				'The default value to be selected in the RadioGroup group.',
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
		disableGroup: {
			description: 'Disables all buttons in the group when set to true.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		vertical: {
			description: 'Arranges radio buttons vertically.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		columns: {
			description:
				'Sets the number of columns for arranging the radio buttons.',
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
		label: {
			description:
				'`RadioButton` : Object containing heading and description for each RadioButton.',
			control: {
				type: 'object',
			},
			defaultValue: {
				heading: 'Option',
				description: 'Description',
			},
			table: {
				type: { summary: 'object' },
				defaultValue: {
					summary: `{ heading: 'Option', description: 'Description' }`,
				},
			},
		},
		borderOn: {
			description: '`RadioButton` : Adds a border around the button.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		useSwitch: {
			description: '`RadioButton` :Uses a switch for selection.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		icon: {
			description:
				'`RadioButton` :Custom icon component to be displayed.',
			control: {
				type: 'text',
			},
			defaultValue: null,
		},
		inlineIcon: {
			description: '`RadioButton` : Positions icon inline to the label.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		hideSelection: {
			description: '`RadioButton` : Positions icon inline to the label.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		reversePosition: {
			description: '`RadioButton` : Positions icon inline to the label.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		badgeItem: {
			description: '`RadioButton` : Badge Item to be displayed.',
			control: {
				type: 'text',
			},
			defaultValue: null,
		},
		disabled: {
			description: '`RadioButton` : Disables radio button.',
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
		<RadioButtonGroup
			{...args}
			value={value}
			columns={(args.columns ?? args.style === 'tile') ? 6 : 3}
			onChange={(val) => {
				setValue(val);
				args.onChange(val);
			}}
		>
			{[1, 2, 3, 4, 5, 6].map((num) =>
				args.style === 'tile' ? (
					<RadioButton
						value={`option${num}`}
						key={num}
						disabled={args.disabled}
					>
						<Plus />
					</RadioButton>
				) : (
					<RadioButton
						key={num}
						value={`option${num}`}
						label={
							args.label ?? {
								heading: `Option ${num}`,
								description: `Description ${num}`,
							}
						}
						borderOn={args.borderOn}
						disabled={args.disabled}
						useSwitch={args.useSwitch}
						icon={args.icon ? <Smile /> : null}
						inlineIcon={args.inlineIcon}
						hideSelection={args.hideSelection}
						reversePosition={args.reversePosition}
						badgeItem={
							args.badgeItem ? (
								<Badge
									type="rounded"
									label={args.badgeItem}
									icon={null}
									className="mr-2"
									size="sm"
									variant="green"
									closable={false}
								/>
							) : null
						}
					/>
				)
			)}
		</RadioButtonGroup>
	);
};

export const SimpleRadioMd = (args) => <Template {...args} />;
SimpleRadioMd.args = {};
SimpleRadioMd.storyName = 'Simple Radio Group - size md';

export const SimpleRadioMulti = (args) => <Template {...args} />;
SimpleRadioMulti.args = {
	borderOn: true,
	icon: true,
	multiSelection: true,
};
SimpleRadioMulti.storyName = 'Multi Selection';

// Example 2: Tile Radio Group with more options
export const TileRadio = (args) => <Template {...args} style="tile" />;
TileRadio.args = {
	style: 'tile',
	columns: 6,
};
TileRadio.storyName = 'Tile Radio Group';

export const SimpleRadioSwitch = (args) => <Template {...args} />;
SimpleRadioSwitch.args = {
	borderOn: true,
	useSwitch: true,
	multiSelection: true,
};
SimpleRadioSwitch.storyName = 'Switch Selection';

export const SimpleRadioInline = (args) => <Template {...args} />;
SimpleRadioInline.args = {
	borderOn: true,
	icon: true,
	inlineIcon: true,
	label: { heading: 'Option' },
	multiSelection: true,
};
SimpleRadioInline.storyName = 'Inline Icon';
