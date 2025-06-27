import { Container, Title, Text, Button, Badge } from '@/components';
import {
	Zap,
	Shield,
	Paintbrush,
	BarChart3,
	Globe,
	Users,
	Image,
	ShoppingCart,
	ExternalLink,
} from 'lucide-react';

interface Addon {
	id: string;
	name: string;
	description: string;
	icon: React.ReactNode;
	installed?: boolean;
}

export default {
	title: 'Templates/Addons Page',
	parameters: {
		layout: 'fullscreen',
		a11y: {
			config: {
				rules: [
					{
						id: 'color-contrast',
						enabled: true,
					},
					{
						id: 'keyboard-navigation',
						enabled: true,
					},
				],
			},
		},
	},
	decorators: [
		( Story: React.ComponentType ) => (
			<div
				id="story-root-tw"
				className="box-border [&_*]:box-border w-full overflow-x-hidden"
			>
				<Story />
			</div>
		),
	],
	tags: [ 'autodocs' ],
};

const addonsData: Addon[] = [
	{
		id: '1',
		name: 'SureCart',
		description:
			'The new way to sell on WordPress. Create beautiful checkout experiences.',
		installed: false,
		icon: <ShoppingCart className="size-8" />,
	},
	{
		id: '2',
		name: 'Ultimate Addons',
		description:
			'Supercharge your website with 40+ advanced blocks and templates.',
		installed: true,
		icon: <Zap className="size-8" />,
	},
	{
		id: '3',
		name: 'Spectra Pro',
		description:
			'Advanced Gutenberg blocks for creating stunning websites effortlessly.',
		installed: false,
		icon: <Paintbrush className="size-8" />,
	},
	{
		id: '4',
		name: 'Analytics Pro',
		description:
			'Comprehensive analytics and reporting for your WordPress site.',
		installed: false,
		icon: <BarChart3 className="size-8 text-support-info" />,
	},
	{
		id: '5',
		name: 'Security Shield',
		description:
			'Protect your website from threats with advanced security features.',
		installed: false,
		icon: <Shield className="size-8 text-support-error" />,
	},
	{
		id: '6',
		name: 'Global Reach',
		description:
			'Multi-language and translation support for global audiences.',
		installed: true,
		icon: <Globe className="size-8 text-support-info" />,
	},
	{
		id: '7',
		name: 'User Manager',
		description: 'Advanced user management and role customization tools.',
		installed: false,
		icon: <Users className="size-8 text-support-warning" />,
	},
	{
		id: '8',
		name: 'Media Library Pro',
		description:
			'Enhanced media management with advanced organization features.',
		installed: false,
		icon: <Image className="size-8 text-brand-primary-600" />,
	},
	{
		id: '9',
		name: 'Performance Optimizer',
		description:
			'Boost your website speed with advanced caching and optimization.',
		installed: true,
		icon: <Zap className="size-8 text-support-warning" />,
	},
];

const themesData: Addon[] = [
	{
		id: '10',
		name: 'Astra Theme',
		description:
			'Fast, lightweight, and customizable WordPress theme perfect for any website.',
		installed: false,
		icon: <Shield className="size-8 text-support-error" />,
	},
];

interface AddonCardProps {
	addon: Addon;
	onInstall?: ( addon: Addon ) => void;
	onConfigure?: ( addon: Addon ) => void;
}

const AddonCard = ( { addon, onInstall, onConfigure }: AddonCardProps ) => (
	<Container
		containerType="flex"
		direction="column"
		className="bg-background-primary border border-solid border-border-subtle rounded-lg shadow-xs h-full"
	>
		<Container.Item className="p-4 flex-1 flex flex-col gap-2">
			<Container
				containerType="flex"
				align="start"
				justify="between"
				gap="sm"
			>
				<Container.Item>
					<Container
						containerType="flex"
						direction="column"
						align="start"
						gap="sm"
					>
						<Container.Item>
							<div className="size-8" aria-hidden="true">
								{ addon.icon }
							</div>
						</Container.Item>
						<Container.Item>
							<Text as="p" color="primary">
								{ addon.name }
							</Text>
						</Container.Item>
					</Container>
				</Container.Item>
				<Container.Item>
					<Badge label="Free" type="pill" variant="green" size="xs" />
				</Container.Item>
			</Container>

			<Container.Item className="flex-1">
				<Text
					as="p"
					size={ 14 }
					color="tertiary"
					className="line-clamp-3 leading-relaxed font-normal"
				>
					{ addon.description }
				</Text>
			</Container.Item>

			<Container.Item>
				<Container
					containerType="flex"
					align="center"
					justify="between"
					gap="sm"
				>
					<Container.Item>
						{ addon.installed ? (
							<Button
								variant="outline"
								size="sm"
								onClick={ () => onConfigure?.( addon ) }
								aria-label={ `Configure ${ addon.name }` }
							>
								Configure
							</Button>
						) : (
							<Button
								variant="outline"
								size="sm"
								onClick={ () => onInstall?.( addon ) }
								aria-label={ `Install and activate ${ addon.name }` }
							>
								Install & Activate
							</Button>
						) }
					</Container.Item>
					<Container.Item>
						<Container containerType="flex" align="center" gap="xs">
							<Container.Item>
								<Text
									as="a"
									size={ 12 }
									color="link"
									className="cursor-pointer no-underline focus:outline-none focus:ring-2 focus:ring-focus focus:ring-offset-2 rounded"
									href="#"
									aria-label={ `Learn more about ${ addon.name }` }
								>
									Learn More
								</Text>
							</Container.Item>
							<Container.Item>
								<ExternalLink
									className="size-2.5 text-link-primary"
									aria-hidden="true"
								/>
							</Container.Item>
						</Container>
					</Container.Item>
				</Container>
			</Container.Item>
		</Container.Item>
	</Container>
);

export const AddonsPage = ( args: Record<string, unknown> ) => {
	return (
		<div className={ args.className as string }>
			{ /* Main Content - No Topbar, simpler layout */ }
			<Container className="max-w-6xl mx-auto p-6">
				<Container containerType="flex" direction="column" gap="lg">
					{ /* Header Section */ }
					<Container.Item>
						<Title
							tag="h4"
							title="Add-ons"
							size="md"
							className="text-text-primary"
						/>
					</Container.Item>

					{ /* Recommended Plugins Section */ }
					<Container.Item>
						<Container
							containerType="flex"
							direction="column"
							gap="md"
						>
							<Container.Item>
								<Title
									tag="h5"
									title="Recommended Plugins"
									size="sm"
									className="text-text-primary"
								/>
							</Container.Item>
							<Container.Item>
								<Container
									containerType="grid"
									className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
								>
									{ addonsData.map( ( addon ) => (
										<Container.Item key={ addon.id }>
											<AddonCard
												addon={ addon }
												onInstall={ () => {
													// Handle install action
												} }
												onConfigure={ () => {
													// Handle configure action
												} }
											/>
										</Container.Item>
									) ) }
								</Container>
							</Container.Item>
						</Container>
					</Container.Item>

					{ /* Recommended Themes Section */ }
					<Container.Item>
						<Container
							containerType="flex"
							direction="column"
							gap="md"
						>
							<Container.Item>
								<Title
									tag="h5"
									title="Recommended Themes"
									size="sm"
									className="text-text-primary"
								/>
							</Container.Item>
							<Container.Item>
								<Container
									containerType="grid"
									className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
								>
									{ themesData.map( ( theme ) => (
										<Container.Item key={ theme.id }>
											<AddonCard
												addon={ theme }
												onInstall={ () => {
													// Handle install action
												} }
												onConfigure={ () => {
													// Handle configure action
												} }
											/>
										</Container.Item>
									) ) }
								</Container>
							</Container.Item>
						</Container>
					</Container.Item>
				</Container>
			</Container>
		</div>
	);
};

AddonsPage.args = {};
