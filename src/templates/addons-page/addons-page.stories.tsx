import {
	Container,
	Title,
	Text,
	Button,
	Badge,
	Topbar,
} from '@/components';
import { ExternalLink, HelpCircle, Megaphone } from 'lucide-react';
import {
	SureRank,
	SureFormsLogo,
	SpectraLogo,
	SureDashLogo,
	CartFlowsLogo,
	SureCartLogo,
	OttokitLogo,
	StartersTemplatesLogo,
	PrestoPlayerLogo,
	SureFeedbackLogo,
	AstraThemeLogo,
} from '@/ui/icons';

interface Addon {
	id: string;
	name: string;
	description: string;
	icon: React.ReactNode;
	installed?: boolean;
}

export default {
	title: 'Templates/Addons/Addons Page',
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
		name: 'SureForms',
		description:
			'The new way to sell on WordPress. Create beautiful checkout experiences.',
		installed: false,
		icon: <SureFormsLogo className="size-8" />,
	},
	{
		id: '2',
		name: 'Spectra',
		description:
			'Supercharge your website with 40+ advanced blocks and templates.',
		installed: true,
		icon: <SpectraLogo className="size-8" />,
	},
	{
		id: '3',
		name: 'SureDash',
		description:
			'Advanced Gutenberg blocks for creating stunning websites effortlessly.',
		installed: false,
		icon: <SureDashLogo className="size-8" />,
	},
	{
		id: '4',
		name: 'Cartflows',
		description:
			'Comprehensive analytics and reporting for your WordPress site.',
		installed: false,
		icon: <CartFlowsLogo className="size-8" />,
	},
	{
		id: '5',
		name: 'SureCart',
		description:
			'Protect your website from threats with advanced security features.',
		installed: false,
		icon: <SureCartLogo className="size-8" />,
	},
	{
		id: '6',
		name: 'Ottokit',
		description:
			'Multi-language and translation support for global audiences.',
		installed: true,
		icon: <OttokitLogo className="size-8 text-support-info" />,
	},
	{
		id: '7',
		name: 'StarterTemplate',
		description: 'Advanced user management and role customization tools.',
		installed: false,
		icon: <StartersTemplatesLogo className="size-8" />,
	},
	{
		id: '8',
		name: 'Presto Player',
		description:
			'Enhanced media management with advanced organization features.',
		installed: false,
		icon: <PrestoPlayerLogo className="size-8 text-brand-primary-600" />,
	},
	{
		id: '9',
		name: 'SureFeedback',
		description:
			'Boost your website speed with advanced caching and optimization.',
		installed: true,
		icon: <SureFeedbackLogo className="size-8 text-support-warning" />,
	},
];

const themesData: Addon[] = [
	{
		id: '10',
		name: 'Astra Theme',
		description:
			'Fast, lightweight, and customizable WordPress theme perfect for any website.',
		installed: false,
		icon: <AstraThemeLogo className="size-8 text-support-error" />,
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
		className="bg-background-primary border border-solid border-border-subtle rounded-md shadow-xs h-full"
	>
		<Container.Item className="p-4 flex-1 flex flex-col gap-2">
			<Container
				containerType="flex"
				align="start"
				justify="between"
				className="p-1"
			>
				<Container.Item>
					<div className="size-8" aria-hidden="true">
						{ addon.icon }
					</div>
				</Container.Item>
				<Container.Item>
					<Badge label="Free" type="pill" variant="green" size="xs" />
				</Container.Item>
			</Container>
			<Container
				containerType="flex"
				direction="column"
				className="p-1 flex-1 gap-2"
			>
				<Container.Item className="">
					<Text as="p" color="primary">
						{ addon.name }
					</Text>
				</Container.Item>
				<Container.Item className="flex-1">
					<Text
						as="p"
						size={ 14 }
						color="tertiary"
						className="line-clamp-3 leading-relaxed font-normal text-text-tertiary"
					>
						{ addon.description }
					</Text>
				</Container.Item>

				<Container.Item className="mt-auto py-0.5">
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
									className="bg-badge-background-green"
								>
									Activated
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
							<Container
								containerType="flex"
								align="center"
								className="gap-1"
							>
								<Container.Item>
									<Button
										className="cursor-pointer no-underline hover:no-underline rounded text-xs font-semibold"
										icon={
											<ExternalLink
												className="size-4 text-link-primary"
												aria-hidden="true"
											/>
										}
										iconPosition="right"
										size="sm"
										variant="link"
										aria-label={ `Learn more about ${ addon.name }` }
									>
										Learn More
									</Button>
								</Container.Item>
							</Container>
						</Container.Item>
					</Container>
				</Container.Item>
			</Container>
		</Container.Item>
	</Container>
);

export const AddonsPage = ( args: Record<string, unknown> ) => {
	return (
		<div { ...args } className="bg-background-secondary min-h-screen w-full">
			{ /* Top Navigation Bar */ }
			<Topbar className="h-16 p-0 shadow-sm gap-0">
				<Topbar.Left className="p-5">
					<Topbar.Item>
						<SureRank className="size-6" />
					</Topbar.Item>
				</Topbar.Left>
				<Topbar.Middle align="left" className="h-full">
					<Topbar.Item className="gap-3">
						<a
							className="content-center no-underline h-full py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none text-text-tertiary text-sm font-medium cursor-pointer"
							href="#"
							target="_self"
						>
							Dashboard
						</a>
						<a
							className="content-center no-underline h-full py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none text-text-tertiary text-sm font-medium cursor-pointer"
							href="#"
							target="_self"
						>
							Settings
						</a>
						<a
							className="content-center no-underline h-full py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none text-text-tertiary text-sm font-medium cursor-pointer"
							href="#"
							target="_self"
						>
							Connections
						</a>
						<a
							className="content-center no-underline h-full py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none text-text-tertiary text-sm font-medium cursor-pointer"
							href="#"
							target="_self"
						>
							Email Logs
						</a>
						<a
							className="content-center no-underline h-full py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none text-text-tertiary text-sm font-medium cursor-pointer"
							href="#"
							target="_self"
						>
							Notifications
						</a>
						<a
							className="content-center no-underline relative h-full py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none text-text-primary text-sm font-medium cursor-pointer"
							href="#"
							target="_self"
						>
							<span>Add-ons</span>
							<span className="absolute bottom-0 left-0 w-full h-px bg-brand-primary-600" />
						</a>
					</Topbar.Item>
				</Topbar.Middle>
				<Topbar.Right className="p-5">
					<Topbar.Item>
						<Badge label="V 0.0.2" size="xs" variant="neutral" />
					</Topbar.Item>
					<Topbar.Item className="gap-2">
						<HelpCircle className="size-4 m-1" strokeWidth={ 1.5 } />
						<Megaphone className="size-4 m-1" strokeWidth={ 1.5 } />
					</Topbar.Item>
				</Topbar.Right>
			</Topbar>

			{ /* Main Content */ }
			<Container className="max-w-6xl mx-auto p-8 bg-background-secondary">
				<Container
					containerType="flex"
					direction="column"
					className="gap-6"
				>
					{ /* Header Section */ }
					<Container.Item>
						<Title
							tag="h4"
							title="Add-ons"
							size="md"
							className="text-text-primary"
						/>
					</Container.Item>

					<Container
						className="p-6 gap-4 bg-background-primary rounded-xl shadow-sm"
						direction="column"
					>
						{ /* Recommended Plugins Section */ }
						<Container.Item>
							<Container
								containerType="flex"
								direction="column"
								className="gap-3"
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
										className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-0.5 bg-background-primary"
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
										className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-0.5 bg-background-primary"
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
			</Container>
		</div>
	);
};

AddonsPage.args = {};
