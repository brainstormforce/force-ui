// RadioButtonGroup.stories.jsx
import React from 'react';
import RadioButton from '../radio-button-group/radio-button-group';
import Container from '../container';
import Button from '../button';
import Label from '../label';
import Badge from '../badge';
import { ArrowUpRight } from 'lucide-react';
import {
	AstraThemeLogo,
	PrestoPlayerLogo,
	StartersTemplatesLogo,
	SureCartLogo,
} from '@/icons';

export default {
	title: 'Organisms/Cards/Plugin Blocks',
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

const astraRadioButtonGroupData = [
	{
		id: '1',
		badgeText: 'Free',
		buttonText: 'Install',
		svg: <AstraThemeLogo />,
		title: 'Astra Theme',
		description: 'Free WordPress Page Builder Plugin.',
	},
	{
		id: '2',
		badgeText: 'Free',
		buttonText: 'Activate',
		svg: <StartersTemplatesLogo />,
		title: 'Starters Templates',
		description: 'Build your dream website in minutes with AI.',
	},
	{
		id: '3',
		badgeText: 'Free',
		buttonText: 'Install',
		svg: <SureCartLogo />,
		title: 'SureCart',
		description: 'The new way to sell on WordPress.',
	},
	{
		id: '4',
		badgeText: 'Free',
		buttonText: 'Install',
		svg: <PrestoPlayerLogo />,
		title: 'Presto Player',
		description: 'Automate your WordPress setup.',
	},
];

// Template for Type 2
const Template2 = () => {
	return (
		<Container
			containerType="flex"
			gap="xs"
			direction="column"
			className="w-120 border border-solid rounded-md border-border-subtle p-4"
		>
			<Container.Item className="md:w-full lg:w-full">
				<Container className="p-1" justify="between" gap="xs">
					<Container.Item>
						<Label className="font-semibold">
							Extend Your Website
						</Label>
					</Container.Item>
					<Container.Item
						containerType="flex"
						direction="row"
						className="items-center"
						gap="xs"
					>
						<Button className="p-0" variant="ghost">
							<ArrowUpRight />
						</Button>
					</Container.Item>
				</Container>
			</Container.Item>
			<Container.Item className="md:w-full lg:w-full bg-field-primary-background rounded-lg">
				<Container containerType="grid" cols={ 2 } className="gap-1 p-1">
					{ astraRadioButtonGroupData.map( ( card ) => (
						<Container.Item
							key={ card.id }
							className="md:w-full lg:w-full flex"
						>
							<Container
								containerType="flex"
								direction="column"
								className="flex-1 gap-1 shadow-soft-shadow-inner p-2 rounded-md bg-background-primary"
							>
								<Container.Item>
									<Container className="gap-1 items-center">
										<Container.Item
											className="&>svg]:size-5"
											grow={ 1 }
											order="none"
											shrink={ 1 }
										>
											{ card.svg }
										</Container.Item>
										<Container.Item>
											<Badge
												label={ card.badgeText }
												icon={ null }
												variant="green"
												closable={ false }
												className="py-0"
											/>
										</Container.Item>
										<Container.Item>
											<Button
												variant="link"
												className="p-0 text-link-primary"
												size="sm"
											>
												{ card.buttonText }
											</Button>
										</Container.Item>
									</Container>
								</Container.Item>
								<Container.Item className="gap-0.5 p-1">
									<Label className="text-sm font-medium">
										{ card.title }
									</Label>
									<Label variant="help" className="text-sm">
										{ card.description }
									</Label>
								</Container.Item>
							</Container>
						</Container.Item>
					) ) }
				</Container>
			</Container.Item>
		</Container>
	);
};

export const PluginBlocks = Template2.bind( {} );
