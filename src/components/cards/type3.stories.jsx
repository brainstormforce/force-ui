// RadioButtonGroup.stories.jsx
import React from 'react';
import RadioButton from '../radio-button-group/radio-button-group';
import Container from '../container';
import Label from '../label';
import Badge from '../badge';

import { Headset, MessageSquare, HelpCircle, Star } from 'lucide-react';

export default {
	title: 'Organisms/Cards/Type 3',
	component: RadioButton.Group,
	parameters: {
		layout: 'fullscreen',
	},
	tags: [ 'autodocs' ],
	decorators: [
		( Story ) => (
			<div style={ { width: '1100px', padding: '10px' } }>
				<Story />
			</div>
		),
	],
};

const containerRowButtons = [
	{
		id: '1',
		value: 'vipsupport',
		icon: <Headset />,
		label: 'VIP Support',
		hideSelection: true,
		useSwitch: false,
		bagde: (
			<Badge
				label={ 'PRO' }
				icon={ null }
				variant="inverse"
				closable={ false }
			/>
		),
	},
	{
		id: '2',
		value: 'helpcenter',
		icon: <HelpCircle />,
		label: 'Help Center',
		hideSelection: true,
		useSwitch: false,
	},
	{
		id: '3',
		value: 'community',
		icon: <MessageSquare />,
		label: 'Join the Community',
		hideSelection: true,
		useSwitch: false,
	},
	{
		id: '4',
		value: 'rateus',
		icon: <Star />,
		label: 'Rate Us',
		hideSelection: true,
		useSwitch: false,
	},
];

const Template3 = () => {
	return (
		<Container
			containerType="flex"
			direction="column"
			className="w-96 border border-solid rounded-xl border-border-subtle p-4"
			gap="xs"
		>
			<Container.Item className="md:w-full lg:w-full p-1">
				<Label className="font-semibold">Quick Access</Label>
			</Container.Item>
			<Container.Item className="md:w-full lg:w-full bg-field-primary-background p-1">
				{ /* Mapping the containerRowButtons array */ }
				<RadioButton.Group
					as="div"
					defaultValue={ `option-${ containerRowButtons[ 0 ].id }` }
					onChange={ ( value ) => {
						return value;
					} }
					vertical={ true }
					className="w-full gap-1"
				>
					{ containerRowButtons.map( ( option ) => (
						<RadioButton.Button
							key={ `option-${ option.id }` }
							borderOn={ true }
							value={ option.value }
							inlineIcon={ true }
							icon={ option.icon }
							hideSelection={ option.hideSelection }
							toggleLabel={ option.toggleLabel }
							label={ {
								heading: option.label,
							} }
							useSwitch={ option.useSwitch }
							className="px-2"
							badgeItem={ option.bagde }
							buttonWrapperClasses="bg-white"
						/>
					) ) }
				</RadioButton.Group>
			</Container.Item>
		</Container>
	);
};

export const Type3 = Template3.bind( {} );
