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
		style: { control: 'select' },
		size: { control: 'select' },
		children: { control: false },
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
			} }
			{ ...args }
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

export const SimpleRadioTile = RadioTemplate.bind( {} );
SimpleRadioTile.args = {
	style: 'tile',
};

export const SimpleRadioVertical = RadioTemplate.bind( {} );
SimpleRadioVertical.args = {
	vertical: true,
};

const RadioWithBorderTemplate: StoryFn<RadioButtonGroupProps> = ( args ) => {
	const [ value, setValue ] = useState( args.value || args.defaultValue );

	return (
		<RadioButton.Group
			value={ value }
			columns={ args.columns ?? ( args.style === 'tile' ? 6 : 3 ) }
			onChange={ ( val ) => {
				setValue( val as string );
			} }
			{ ...args }
		>
			{ [ 1, 2, 3, 4, 5, 6 ].map( ( num ) =>
				args.style === 'tile' ? (
					<RadioButton.Button
						key={ num }
						value={ `option${ num }` }
						disabled={ args.disabled }
						borderOn={ true }
					>
						<Plus />
					</RadioButton.Button>
				) : (
					<RadioButton.Button
						key={ num }
						value={ `option${ num }` }
						label={ {
							heading: `Option ${ num }`,
						} }
						badgeItem={
							<Badge
								type="rounded"
								size="sm"
								variant="green"
								className="mr-2"
							/>
						}
						disabled={ args.disabled }
						borderOn={ true }
					/>
				)
			) }
		</RadioButton.Group>
	);
};

export const RadioWithBorderMediumSize = RadioWithBorderTemplate.bind( {} );
RadioWithBorderMediumSize.args = {
	size: 'md',
};

export const RadioWithBorderSmallSize = RadioWithBorderTemplate.bind( {} );
RadioWithBorderSmallSize.args = {
	size: 'sm',
};
