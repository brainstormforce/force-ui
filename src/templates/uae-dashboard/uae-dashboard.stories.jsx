import {
	Topbar,
	Badge,
	Container,
	Button,
	Switch,
	Text,
	Tooltip,
} from '@/components';
import {
	ArrowUpRight,
	CircleHelp,
	Megaphone,
	Plus,
	Monitor,
	Rocket,
	Check,
	Headphones,
	BookOpen,
	MessageSquare,
	MessageSquareCode,
	Play,
} from 'lucide-react';
import { useState } from 'react';

export default {
	title: 'Templates/Dashboard/UAE Dashboard',
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [
		( Story, parameters ) => (
			<div className="@container">
				<div className="box-border [&_*]:box-border w-full">
					<Story { ...parameters } />
				</div>
			</div>
		),
	],
	tags: [ 'autodocs' ],
};

const widgetData = [
	{
		id: '1',
		icon: MessageSquareCode,
		title: 'Navigation Menu',
		enabled: true,
		isPro: false,
	},
	{
		id: '2',
		icon: MessageSquareCode,
		title: 'Info Card',
		enabled: true,
		isPro: false,
	},
	{
		id: '3',
		icon: MessageSquareCode,
		title: 'Post Info',
		enabled: true,
		isPro: false,
	},
	{
		id: '4',
		icon: MessageSquareCode,
		title: 'Modal Popup',
		enabled: false,
		isPro: true,
	},
	{
		id: '5',
		icon: MessageSquareCode,
		title: 'Info Box',
		enabled: false,
		isPro: true,
	},
	{
		id: '6',
		icon: MessageSquareCode,
		title: 'Content Toggle',
		enabled: false,
		isPro: true,
	},
	{
		id: '7',
		icon: MessageSquareCode,
		title: 'Post Widget',
		enabled: false,
		isPro: true,
	},
	{
		id: '8',
		icon: MessageSquareCode,
		title: 'Marketing Button',
		enabled: false,
		isPro: true,
	},
];

const proFeatures = [
	'Cross-Site Copy Paste',
	'Advanced Display Conditions',
	'Form Stylers',
	'Prebuilt 200+ Section blocks',
	'Modal Popups',
	'WooCommerce Widgets',
];

export const UAEDashboard = ( args ) => {
	const [ switchState, setSwitchState ] = useState( widgetData.map( ( widget ) => ( { ...widget } ) ) );
	const handleSwitchChange = ( id ) => ( value ) => {
		setSwitchState( switchState.map( ( widget ) => ( widget.id === id ? { ...widget, enabled: value } : widget ) ) );
	};

	return (
		<div { ...args } className="min-h-screen bg-background-secondary">

			{ /* Main Content */ }
			<div className="w-full min-h-screen">
				{ /* Navigation Topbar */ }
				<Topbar
					gap="0"
					className="h-14 p-0 shadow-sm bg-background-primary border-b border-border-subtle min-h-14"
				>
					<Topbar.Left className="p-3">
						<Topbar.Item>
							<img
								src="./src/templates/uae-dashboard/assets/uae-logo-header.svg"
								alt="UAE Logo"
								className="w-7 h-7"
							/>
						</Topbar.Item>
					</Topbar.Left>
					<Topbar.Middle align="left" className="h-full">
						<Topbar.Item className="gap-8">
							<a
								href="#"
								className="h-full flex items-center px-1 text-sm font-medium text-text-primary border-x-0 border-t-0 border-b-1 border-solid border-border-interactive no-underline hover:no-underline"
							>
								Dashboard
							</a>
							<a
								href="#"
								className="h-full flex items-center px-1 text-sm font-medium text-text-secondary hover:text-text-primary no-underline hover:no-underline"
							>
								Header & Footer Builder
							</a>
							<a
								href="#"
								className="h-full flex items-center px-1 text-sm font-medium text-text-secondary hover:text-text-primary no-underline hover:no-underline"
							>
								Widgets
							</a>
							<a
								href="#"
								className="h-full flex items-center px-1 text-sm font-medium text-text-secondary hover:text-text-primary no-underline hover:no-underline"
							>
								Settings
							</a>
						</Topbar.Item>
					</Topbar.Middle>
					<Topbar.Right className="p-4">
						<Topbar.Item className="gap-4">
							<Badge
								label="Free"
								size="xs"
								variant="neutral"
								closable={ false }
							/>
							<Button
								variant="ghost"
								size="xs"
								icon={ <CircleHelp /> }
								aria-label="Help"
							/>
							<div className="relative">
								<Button
									variant="ghost"
									size="xs"
									icon={ <Megaphone /> }
									aria-label="Notifications"
								/>
								<div
									className="absolute top-0 right-0 size-1.5 rounded-full bg-brand-primary-600"
								/>
							</div>
						</Topbar.Item>
					</Topbar.Right>
				</Topbar>

				{ /* Content */ }
				<div className="p-8 space-y-8">
					<Container
						containerType="grid"
						cols={ 12 }
						gap="2xl"
						className="mx-auto"
					>
						{ /* Main Content Column */ }
						<Container.Item colSpan={ { sm: 12, md: 12, lg: 8 } } className="space-y-8">
							{ /* Welcome Banner */ }
							<div className="bg-background-primary rounded-xl shadow-sm border-0.5 border-solid border-border-subtle p-4">
								<div className="flex items-center gap-8">
									<div className="flex-1 space-y-4">
										<Text
											as="h3"
											size={ 24 }
											weight={ 600 }
											color="primary"
											className="mb-2"
										>
											Welcome to Ultimate Addons for Elementor!
										</Text>
										<Text
											as="p"
											size={ 14 }
											weight={ 400 }
											color="secondary"
											className="mb-6"
										>
											Effortlessly design modern websites
											with UAE using our powerful range of
											widgets & features. Get started by
											selecting an option based on your
											needs.
										</Text>
										<div className="flex gap-3">
											<Button variant="secondary">
												Create Header/Footer
											</Button>
											<Button
												variant="outline"
												icon={ <Plus /> }
											>
												Create New Page
											</Button>
										</div>
									</div>
									<div className="w-76 h-40 bg-field-primary-background rounded border border-border-subtle flex items-center justify-center relative overflow-hidden">
										<img
											src="./src/templates/uae-dashboard/assets/video-background.svg"
											alt="Getting Started Video"
											className="w-full h-full object-cover rounded"
										/>
										<Button
											variant="ghost"
											size="lg"
											icon={
												<Play className="size-8 fill-brand-primary-600 text-brand-primary-600" />
											}
											className="bg-background-primary/20 rounded-full size-10 hover:bg-background-primary/95 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 focus:[box-shadow:none]"
											aria-label="Play video"
										/>
									</div>
								</div>
							</div>

							{ /* Widgets & Features */ }
							<div className="bg-background-primary rounded-xl shadow-sm border-0.5 border-solid border-border-subtle p-4">
								<Text
									as="h4"
									size={ 14 }
									weight={ 600 }
									color="primary"
									className="mb-2 p-1"
								>
									Widgets / Features
								</Text>

								<div className="bg-field-primary-background rounded-lg border border-border-subtle-lg p-1">
									<Container
										containerType="grid"
										cols={ { sm: 2, md: 2, lg: 4 } }
										className="gap-1"
									>
										{ switchState.map( ( widget ) => (
											<div
												key={ widget.id }
												className="bg-background-primary rounded p-3 shadow-sm"
											>
												<div className="flex items-center justify-between mb-4">
													<widget.icon className="w-5 h-5 text-icon-primary" />
													{
														widget.isPro ? (
															<Tooltip
																content={ ( <>Available in UAE Pro. Click to <Text as="a" color="link" href="#" target="_self" className="no-underline hover:no-underline">learn more.</Text></> ) }
																interactive
																arrow
															>
																<Switch
																	value={ widget.enabled }
																	disabled={ widget.isPro }
																	size="sm"
																	onChange={ handleSwitchChange( widget.id ) }
																/>
															</Tooltip>
														) : (
															<Switch
																value={ widget.enabled }
																disabled={ widget.isPro }
																size="sm"
																onChange={ handleSwitchChange( widget.id ) }
															/>
														)
													}
												</div>
												<div className="flex items-center justify-between">
													<Text size={ 14 } weight={ 500 } color="primary">
														{ widget.title }
													</Text>
													<Tooltip
														content="View Demo"
														interactive
														arrow
													>
														<Button
															variant="ghost"
															size="xs"
															className="[&>svg]:text-icon-secondary [&>svg]:size-3.5"
															icon={ <Monitor /> }
															aria-label="Preview"
														/>
													</Tooltip>
												</div>
											</div>
										) ) }
									</Container>
								</div>

								<div className="flex justify-center mt-4">
									<Button
										variant="ghost"
										size="xs"
										icon={ <ArrowUpRight /> }
									>
										View More Widgets
									</Button>
								</div>
							</div>

							{ /* Super Charge Your Workflow */ }
							<div className="bg-background-primary rounded-xl shadow-sm border-0.5 border-solid border-border-subtle p-3">
								<Text
									as="h4"
									size={ 14 }
									weight={ 600 }
									color="primary"
									className="mb-2 p-1"
								>
									Super Charge Your Workflow
								</Text>

								<div className="bg-field-primary-background rounded-lg border border-border-subtle-lg p-1">
									<div className="bg-background-primary rounded p-4 border border-border-subtle">
										<div className="flex flex-col items-start gap-4">
											<img
												src="./src/templates/uae-dashboard/assets/surerank-logo.svg"
												alt="SureRank Logo"
												className="w-32 h-7"
											/>
											<div className="flex-1">
												<Text
													as="h4"
													size={ 16 }
													weight={ 600 }
													color="primary"
													className="mb-2"
												>
													Boost Your Traffic with Easy SEO Optimization!
												</Text>
												<Text
													as="p"
													size={ 14 }
													weight={ 400 }
													color="secondary"
												>
													Rank higher with effortless
													SEO optimization. SureRank
													offers a simple,
													clutter-free interface with
													lightweight code, minimal
													setup, clear meta and schema
													settings, and smart content
													optimization that actually
													makes sense, helping you
													grow your traffic easily.
												</Text>
											</div>
											<Button
												variant="outline"
												size="sm"
											>
												Install & Activate
											</Button>
										</div>
									</div>
								</div>
							</div>
						</Container.Item>

						{ /* Sidebar Column */ }
						<Container.Item colSpan={ { sm: 12, md: 12, lg: 4 } } className="space-y-6">
							{ /* Upgrade to Pro */ }
							<div className="bg-background-primary rounded-xl shadow-sm border-0.5 border-solid border-border-subtle overflow-hidden">
								<img
									src="./src/templates/uae-dashboard/assets/upgrade-banner.svg"
									alt="Upgrade to Pro"
									className="w-full relative object-contain px-3 pt-2"
								/>

								<div className="p-5 space-y-6">
									<div className="space-y-1">
										<div className="flex items-center gap-2 mb-1">
											<Rocket className="size-4 text-brand-primary-600" />
											<Text size={ 12 } weight={ 600 } color="brand600">
												Unlock Ultimate Features
											</Text>
										</div>

										<Text
											as="h4"
											size={ 18 }
											weight={ 600 }
											color="primary"
											className="mb-1"
										>
											Bring Your Vision to Life with UAE Pro
										</Text>

										<Text className="mb-6" color="secondary">
											Streamline your workflow, skip the
											repetitive tasks, and build modern,
											high-performance websites.
										</Text>
									</div>

									<div className="grid grid-cols-2 gap-2 mb-6">
										{ proFeatures.map( ( feature, index ) => (
											<div
												key={ index }
												className="flex items-center gap-1"
											>
												<Check className="size-4 text-icon-interactive" />
												<Text size={ 14 } weight={ 500 } color="primary">
													{ feature }
												</Text>
											</div>
										) ) }
									</div>

									<Button
										variant="primary"
										className="w-full bg-button-primary hover:bg-button-primary-hover"
									>
										Upgrade Now
									</Button>
								</div>
							</div>

							{ /* Quick Access */ }
							<div className="bg-background-primary rounded-xl space-y-2 shadow-sm border-0.5 border-solid border-border-subtle p-3">
								<Text
									as="h4"
									size={ 14 }
									weight={ 600 }
									color="primary"
									className="p-1"
								>
									Quick Access
								</Text>

								<div className="space-y-1 p-1 bg-field-primary-background rounded-lg">
									<div className="flex items-center justify-between p-3 bg-background-primary rounded shadow-sm">
										<div className="flex items-center gap-3">
											<Headphones className="size-4 text-icon-primary" />
											<Text size={ 14 } weight={ 500 } color="primary">
												VIP Priority Support
											</Text>
										</div>
										<Badge
											label="PRO"
											size="xxs"
											variant="inverse"
											closable={ false }
										/>
									</div>

									<div className="flex items-center justify-between p-3 bg-background-primary rounded shadow-sm">
										<div className="flex items-center gap-3">
											<BookOpen className="size-4 text-icon-primary" />
											<Text size={ 14 } weight={ 500 } color="primary">
												Knowledge Base
											</Text>
										</div>
									</div>

									<div className="flex items-center justify-start p-3 bg-background-primary rounded shadow-sm">
										<div className="flex items-center gap-2">
											<CircleHelp className="size-4 text-icon-primary" />
											<Text size={ 14 } weight={ 500 } color="primary">
												Help Centre
											</Text>
										</div>
									</div>

									<div className="flex items-center justify-start p-3 bg-background-primary rounded shadow-sm">
										<div className="flex items-center gap-2">
											<MessageSquare className="size-4 text-icon-primary" />
											<Text size={ 14 } weight={ 500 } color="primary">
												Request a Feature
											</Text>
										</div>
									</div>
								</div>
							</div>
						</Container.Item>
					</Container>
				</div>
			</div>
		</div>
	);
};
