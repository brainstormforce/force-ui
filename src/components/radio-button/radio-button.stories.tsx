import React, { useState } from 'react';
import RadioButton, { RadioButtonGroupProps } from './radio-button';
import { AppWindow, ChartNoAxesGantt, House, Infinity, Instagram, LogIn, Map, Newspaper, PanelLeftClose, PictureInPicture, Plus, Share2, UserPlus } from 'lucide-react';
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

const defaultRadioButtonGroupData = [
	{
		id: '1',
		value: 'analytics',
		icon: <LogIn />,
		label: 'Login Form',
		description: 'Demo',
		toggleLabel: 'Enable',
		hideSelection: true,
		useSwitch: false,
		bagde: (
			<Badge
				label={ 'PRO' }
				size="xxs"
				icon={ null }
				variant="inverse"
				closable={ false }
				className="py-0"
			/>
		),
	},
	{
		id: '2',
		value: 'notifications',
		icon: <UserPlus />,
		label: 'Registration Form',
		description: 'Demo',
		toggleLabel: 'Disable',
		hideSelection: true,
		useSwitch: false,
		bagde: (
			<Badge
				label={ 'PRO' }
				size="xxs"
				icon={ null }
				variant="inverse"
				closable={ false }
				className="py-0"
			/>
		),
	},
	{
		id: '3',
		value: 'settings',
		icon: <Instagram />,
		label: 'Instagram Feed',
		description: 'Demo',
		toggleLabel: 'Settings',
		hideSelection: true,
		useSwitch: false,
		bagde: (
			<Badge
				label={ 'PRO' }
				size="xxs"
				icon={ null }
				variant="inverse"
				closable={ false }
				className="py-0"
			/>
		),
	},
	{
		id: '4',
		value: 'security',
		icon: <Infinity />,
		label: 'Loop Builder',
		description: 'Demo',
		toggleLabel: 'Security',
		hideSelection: true,
		useSwitch: false,
		bagde: (
			<Badge
				label={ 'PRO' }
				size="xxs"
				icon={ null }
				variant="inverse"
				closable={ false }
				className="py-0"
			/>
		),
	},
	{
		id: '5',
		value: 'marketing',
		icon: <AppWindow />,
		label: 'Marketing Button',
		description: 'Demo',
		toggleLabel: 'Billing',
		hideSelection: false,
		useSwitch: true,
	},
	{
		id: '6',
		value: 'modal',
		icon: <PictureInPicture />,
		label: 'Modal',
		description: 'Demo',
		toggleLabel: 'modal',
		hideSelection: false,
		useSwitch: true,
	},
	{
		id: '7',
		value: 'socialshare',
		icon: <Share2 />,
		label: 'Social Share',
		description: 'Demo',
		toggleLabel: 'socialshare',
		hideSelection: false,
		useSwitch: true,
	},
	{
		id: '8',
		value: 'Blockquote',
		icon: <Newspaper />,
		label: 'Blockquote',
		description: 'Demo',
		toggleLabel: 'blockquote',
		hideSelection: false,
		useSwitch: true,
	},
	{
		id: '9',
		value: 'contenttimeline',
		icon: <ChartNoAxesGantt />,
		label: 'Content Timeline',
		description: 'Demo',
		toggleLabel: 'contenttimeline',
		hideSelection: false,
		useSwitch: true,
	},
	{
		id: '10',
		value: 'googlemaps',
		icon: <Map />,
		label: 'Google Maps',
		description: 'Demo',
		toggleLabel: 'googlemaps',
		hideSelection: false,
		useSwitch: true,
		bagde: (
			<Badge
				label={ 'New' }
				size="xxs"
				icon={ null }
				variant="green"
				closable={ false }
				className="py-0 mr-2"
			/>
		),
	},
	{
		id: '11',
		value: 'lottieanimation',
		icon: <House />,
		label: 'Lottie Animation',
		description: 'Demo',
		toggleLabel: 'lottieanimation',
		hideSelection: false,
		useSwitch: true,
	},
	{
		id: '12',
		value: 'animations',
		icon: <PanelLeftClose />,
		label: 'Animations',
		description: 'Documentation',
		toggleLabel: 'animations',
		hideSelection: false,
		useSwitch: true,
		bagde: (
			<Badge
				label={ 'Extension' }
				size="xxs"
				icon={ null }
				variant="yellow"
				closable={ false }
				className="py-0 mr-2"
			/>
		),
	},
];

const RadioButtonTileTemplate: StoryFn<RadioButtonGroupProps> = () => {
	return (
		<RadioButton.Group
			as="div"
			size="sm"
			defaultValue={ `option-${ defaultRadioButtonGroupData[ 0 ].id }` }
			multiSelection={ true }
			onChange={ ( value ) => {
				return value;
			} }
			className="w-full gap-1"
		>
			{ defaultRadioButtonGroupData.map(
				( option ) => (
					<RadioButton.Button
						key={ `option-${ option.id }` }
						borderOn={ true }
						borderOnActive={ false }
						value={ option.value }
						icon={ option.icon }
						hideSelection={
							option.hideSelection
						}
						label={ {
							heading: option.label,
							description: option.description,
						} }
						useSwitch={ option.useSwitch }
						badgeItem={ option.bagde }
						buttonWrapperClasses="bg-background-primary border-0"
					/>
				)
			) }
		</RadioButton.Group>
	);
};

export const RadioButtonTile = RadioButtonTileTemplate.bind( {} );
