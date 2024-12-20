// RadioButtonGroup.stories.jsx
import RadioButton from '../radio-button';
import Container from '../container';
import Button from '../button';
import Label from '../label';
import Badge from '../badge';

import {
	ArrowUpRight,
	Ellipsis,
	House,
	Bell,
	Settings,
	Shield,
	Share2,
	Map,
	AppWindow,
	PictureInPicture,
	Newspaper,
	ChartNoAxesGantt,
	PanelLeftClose,
} from 'lucide-react';

export default {
	title: 'Organisms/Cards/Widget Blocks',
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

// Data for Type 1
const defaultRadioButtonGroupData = [
	{
		id: '1',
		value: 'analytics',
		icon: <House />,
		label: 'Analytics',
		description: 'View detailed analytics reports and insights.',
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
		icon: <Bell />,
		label: 'Notifications',
		description: 'Manage your notification preferences and settings.',
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
		icon: <Settings />,
		label: 'Settings',
		description: 'Configure your account and system settings.',
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
		icon: <Shield />,
		label: 'Security',
		description: 'Update your security settings and passwords.',
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
				className="py-0"
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
		description: 'Demo',
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
				className="py-0"
			/>
		),
	},
];
interface Template1Props {
	containerType?: string;
	direction?: string;
	className?: string;
	gap?: string;
}
// Template for Type 1
const Template1 = ( args: Template1Props ) => {
	const radioButtonGroupData = defaultRadioButtonGroupData;

	return (
		<Container
			{ ...args }
			containerType="flex"
			direction="column"
			className="md:w-full lg:w-full border border-solid rounded-s-xl border-border-subtle p-4"
			gap="xs"
		>
			<Container.Item className="md:w-full p-1 lg:w-full">
				<Container justify="between" gap="xs" align="center">
					<Container.Item className="">
						<Label className="font-semibold">Blocks</Label>
					</Container.Item>
					<Container.Item className="items-center flex">
						<Label>
							<Button
								icon={ <ArrowUpRight /> }
								iconPosition="right"
								variant="ghost"
							>
								View All
							</Button>
						</Label>
						<Button variant="ghost" className="p-0 leading-none	">
							{ ' ' }
							<Ellipsis />
							<span className="sr-only">Option</span>
						</Button>
					</Container.Item>
				</Container>
			</Container.Item>
			<Container.Item className="md:w-full lg:w-full p-1 bg-field-primary-background rounded-lg">
				<RadioButton.Group
					as="div"
					size="sm"
					defaultValue={ `option-${ radioButtonGroupData[ 0 ].id }` }
					multiSelection={ true }
					onChange={ ( value ) => {
						return value;
					} }
					className="w-full gap-1"
				>
					{ radioButtonGroupData.map( ( option ) => (
						<RadioButton.Button
							key={ `option-${ option.id }` }
							borderOn={ true }
							borderOnActive={ false }
							value={ option.value }
							icon={ option.icon }
							hideSelection={ option.hideSelection }
							label={ {
								heading: option.label,
								description: option.description,
							} }
							useSwitch={ option.useSwitch }
							badgeItem={ option.bagde }
							buttonWrapperClasses="bg-background-primary border-0"
						/>
					) ) }
				</RadioButton.Group>
			</Container.Item>
		</Container>
	);
};

// Export Type1 Story
export const WidgetBlocks = Template1.bind( {} );
