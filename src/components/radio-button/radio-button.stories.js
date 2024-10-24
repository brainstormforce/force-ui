import React, { useState } from 'react';
import RadioButton from './radio-button.jsx';
import { Plus, Smile } from 'lucide-react';
import Badge from '../badge/badge.jsx';

export default {
	title: 'Atoms/RadioButton',
	component: RadioButton,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
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
			options: [ 'simple', 'tile' ],
			table: {
				defaultValue: { summary: 'simple' },
			},
		},
		size: {
			control: { type: 'select' },
			options: [ 'sm', 'md' ],
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
		gapClassName: {
			description: 'To customize the gap between Radio Buttons.',
			control: {
				type: 'text',
			},
			defaultValue: 'gap-2',
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
				'`RadioButton.Button` : Object containing heading and description for each RadioButton.',
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
		info: {
			description:
				'`RadioButton.Button` : Object containing heading and description for each RadioButton Info.',
			control: {
				type: 'object',
			},
			defaultValue: {
				heading: 'Info',
				description: 'Description',
			},
			table: {
				type: { summary: 'object' },
				defaultValue: {
					summary: `{ heading: 'Info', description: 'Description' }`,
				},
			},
		},
		borderOn: {
			description:
				'`RadioButton.Button` : Adds a border around the button.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		borderOnActive: {
			description:
				'`RadioButton.Button` : Adds a border around the button when the button is Checked/Selected.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'true' },
			},
		},
		minWidth: {
			description:
				'`RadioButton.Button` : Adds minimum width to the button.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		useSwitch: {
			description: '`RadioButton.Button` :Uses a switch for selection.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		icon: {
			description:
				'`RadioButton.Button` :Custom icon component to be displayed.',
			control: {
				type: 'text',
			},
			defaultValue: null,
		},
		inlineIcon: {
			description:
				'`RadioButton.Button` : Positions icon inline to the label.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		hideSelection: {
			description:
				'`RadioButton.Button` : Positions icon inline to the label.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		reversePosition: {
			description:
				'`RadioButton.Button` : Positions icon inline to the label.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		badgeItem: {
			description: '`RadioButton.Button` : Badge Item to be displayed.',
			control: {
				type: 'text',
			},
			defaultValue: null,
		},
		disabled: {
			description: '`RadioButton.Button` : Disables radio button.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		buttonWrapperClasses: {
			description:
				'`RadioButton.Button` : Custom classes to be applied to the button wrapper.',
			control: {
				type: 'text',
			},
			defaultValue: 'bg-white',
		},
	},
};

const Template = ( args ) => {
	const [ value, setValue ] = useState( args.value || args.defaultValue );

	return (
		<RadioButton.Group
			{ ...args }
			value={ value }
			columns={ ( args.columns ?? args.style === 'tile' ) ? 6 : 3 }
			onChange={ ( val ) => {
				setValue( val );
				args.onChange( val );
			} }
		>
			{ [ 1, 2, 3, 4, 5, 6 ].map( ( num ) =>
				args.style === 'tile' ? (
					<RadioButton.Button
						value={ `option${ num }` }
						key={ num }
						disabled={ args.disabled }
					>
						<Plus />
					</RadioButton.Button>
				) : (
					<RadioButton.Button
						key={ num }
						value={ `option${ num }` }
						label={
							args.label ?? {
								heading: `Option ${ num }`,
								description: `Description ${ num }`,
							}
						}
						borderOn={ args.borderOn }
						borderOnActive={ args.borderOnActive }
						minWidth={ args.minWidth }
						info={ args.info }
						disabled={ args.disabled }
						useSwitch={ args.useSwitch }
						icon={ args.icon ? <Smile /> : null }
						inlineIcon={ args.inlineIcon }
						hideSelection={ args.hideSelection }
						reversePosition={ args.reversePosition }
						badgeItem={
							args.badgeItem ? (
								<Badge
									type="rounded"
									label={ args.badgeItem }
									icon={ null }
									className="mr-2"
									size="sm"
									variant="green"
									closable={ false }
								/>
							) : null
						}
					/>
				)
			) }
		</RadioButton.Group>
	);
};

export const SimpleRadioMd = Template.bind( {} );
SimpleRadioMd.args = {};
SimpleRadioMd.storyName = 'Simple Radio Group - size md';

export const SimpleRadioMulti = Template.bind( {} );
SimpleRadioMulti.args = {
	borderOn: true,
	icon: true,
	multiSelection: true,
};
SimpleRadioMulti.storyName = 'Multi Selection';

export const TileRadio = Template.bind( {} );
TileRadio.args = {
	style: 'tile',
	columns: 6,
};
TileRadio.storyName = 'Tile Radio Group';

export const SimpleRadioSwitch = Template.bind( {} );
SimpleRadioSwitch.args = {
	borderOn: true,
	useSwitch: true,
	multiSelection: true,
};
SimpleRadioSwitch.storyName = 'Switch Selection';

export const SimpleRadioInline = Template.bind( {} );
SimpleRadioInline.args = {
	borderOn: true,
	icon: true,
	inlineIcon: true,
	label: { heading: 'Option' },
	multiSelection: true,
};
SimpleRadioInline.storyName = 'Inline Icon';

export const SimpleRadioWithInfo = Template.bind( {} );
SimpleRadioWithInfo.args = {
	borderOn: true,
	label: { heading: 'Option', description: 'Description' },
	info: { heading: 'Info', description: 'Description' },
};
SimpleRadioWithInfo.storyName = 'With Info';
