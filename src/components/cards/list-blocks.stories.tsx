// RadioButtonGroup.stories.jsx
import RadioButton from '../radio-button';
import Container from '../container';
import Label from '../label';
import Badge from '../badge';

import { Headset, MessageSquare, HelpCircle, Star } from 'lucide-react';

export default {
	title: 'Organisms/Cards/List Blocks',
	component: RadioButton.Group,
	parameters: {
		layout: 'fullscreen',
	},
	tags: [ 'autodocs' ],
	decorators: [
		( Story: React.FC ) => (
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
				size="xxs"
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
			<Container.Item className="flex flex-col md:w-full lg:w-full bg-field-primary-background gap-1 p-1 rounded-lg">
				{ containerRowButtons.map( ( button ) => (
					<div
						key={ button.id }
						className='p-2 gap-1 className="items-cente bg-background-primary rounded-md shadow-soft-shadow-inner'
					>
						<Container
							key={ button.id }
							containerType="flex"
							direction="row"
							className="gap-1 p-1"
							align="center"
						>
							<Container.Item>{ button.icon }</Container.Item>
							<Container.Item>
								<a
									href="#"
									className="no-underline hover:underline hover:text-field-label"
								>
									<Label className="py-0 px-1 font-normal cursor-pointer">
										{ button.label }
									</Label>
								</a>
							</Container.Item>
							<Container.Item>{ button.bagde }</Container.Item>
						</Container>
					</div>
				) ) }
			</Container.Item>
		</Container>
	);
};

export const ListBlocks = Template3.bind( {} );
