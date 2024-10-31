import React, { useState } from 'react';
import RadioButton, { RadioButtonGroupProps } from './radio-button';
import { Plus } from 'lucide-react';
import { Meta, StoryFn } from '@storybook/react';
import Badge from '../badge';

// Define `Meta` for RadioButton.Group (since that’s what receives most props)
const meta: Meta<typeof RadioButton.Group> = {
	title: 'Atoms/RadioButton',
	component: RadioButton.Group,
	subcomponents: {
		'RadioButton.Button': RadioButton.Button,
	} as Record<string, React.ComponentType<unknown>>,
	parameters: { layout: 'centered' },
	tags: [ 'autodocs' ],
	argTypes: {
		style: { control: 'radio', options: [ 'simple', 'tile' ] },
		size: { control: 'radio', options: [ 'sm', 'md' ] },
		disabled: { control: 'boolean' },
		multiSelection: { control: 'boolean' },
	},
};
export default meta;

const RadioTemplate: StoryFn<RadioButtonGroupProps> = ( args ) => {
	const [ value, setValue ] = useState( args.value || args.defaultValue );

	return (
		<RadioButton.Group
			value={ value }
			columns={ args.columns ?? ( args.style === 'tile' ? 6 : 3 ) }
			onChange={ ( val ) => {
				setValue( val as string );
				args.onChange?.( val as string );
			} }
		>
			{ [ 1, 2, 3, 4, 5, 6 ].map( ( num ) =>
				args.style === 'tile' ? (
					<RadioButton.Button
						key={ num }
						value={ `option${ num }` }
						disabled={ args.disabled }
					>
						<Plus />
					</RadioButton.Button>
				) : (
					<RadioButton.Button
						key={ num }
						value={ `option${ num }` }
						label={ {
							heading: `Option ${ num }`,
							description: `Description ${ num }`,
						} }
						badgeItem={
							<Badge
								type="rounded"
								size="sm"
								variant="green"
								className="mr-2"
							/>
						}
						info={ {
							heading: 'Info',
							description: 'This is a description of the option',
						} }
						disabled={ args.disabled }
					/>
				)
			) }
		</RadioButton.Group>
	);
};

// Each story directly bound with args
export const SimpleRadioMd = RadioTemplate.bind( {} );
SimpleRadioMd.args = {
	size: 'md',
};

export const SimpleRadioMulti = RadioTemplate.bind( {} );
SimpleRadioMulti.args = {
	multiSelection: true,
};

export const SimpleRadioSwitch = RadioTemplate.bind( {} );
SimpleRadioSwitch.args = {
	multiSelection: true,
};

export const SimpleRadioInline = RadioTemplate.bind( {} );
SimpleRadioInline.args = {
	multiSelection: true,
};

export const SimpleRadioWithInfo = RadioTemplate.bind( {} );
SimpleRadioWithInfo.args = {};
