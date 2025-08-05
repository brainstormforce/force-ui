import {
	Topbar,
	Badge,
	Container,
	Title,
	Button,
	Switch,
	Text,
} from '@/components';
import {
	ArrowUpRight,
	CircleHelp,
	Megaphone,
	Plus,
	CirclePlay,
	Monitor,
	Rocket,
	Check,
	Headphones,
	BookOpen,
	Quote,
} from 'lucide-react';

export default {
	title: 'Templates/Dashboard/UAE Dashboard',
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [
		( Story, parameters ) => (
			<div className="@container">
				<div className="box-border [&_*]:box-border @[80rem]:w-full w-[1376px]">
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
		icon: Quote,
		title: 'Navigation Menu',
		enabled: true,
		isPro: false,
	},
	{
		id: '2',
		icon: Quote,
		title: 'Info Card',
		enabled: true,
		isPro: false,
	},
	{
		id: '3',
		icon: Quote,
		title: 'Post Info',
		enabled: true,
		isPro: false,
	},
	{
		id: '4',
		icon: Quote,
		title: 'Modal Popup',
		enabled: false,
		isPro: true,
	},
	{
		id: '5',
		icon: Quote,
		title: 'Info Box',
		enabled: false,
		isPro: true,
	},
	{
		id: '6',
		icon: Quote,
		title: 'Content Toggle',
		enabled: false,
		isPro: true,
	},
	{
		id: '7',
		icon: Quote,
		title: 'Post Widget',
		enabled: false,
		isPro: true,
	},
	{
		id: '8',
		icon: Quote,
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
	return (
		<div { ...args } className="min-h-screen bg-background-secondary">

			{ /* Main Content */ }
			<div className="w-full min-h-screen">
				{ /* Navigation Topbar */ }
				<Topbar
					gap="0"
					className="h-16 p-0 shadow-sm bg-white border-b"
				>
					<Topbar.Left className="p-4">
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
								<Badge
									label="14"
									size="xxs"
									variant="red"
									closable={ false }
									className="absolute -top-1 -right-1 !rounded-full"
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
						<Container.Item colSpan={ 8 } className="space-y-8">
							{ /* Welcome Banner */ }
							<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
								<div className="flex items-center gap-8">
									<div className="flex-1">
										<Title
											tag="h2"
											title="Welcome to Ultimate Addons for Elementor!"
											size="lg"
											className="text-text-primary mb-2"
										/>
										<Text className="text-text-secondary mb-6">
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
									<div className="w-76 h-40 bg-gray-100 rounded flex items-center justify-center relative overflow-hidden">
										<img
											src="./src/templates/uae-dashboard/assets/video-preview-43d1bf.png"
											alt="Getting Started Video"
											className="w-full h-full object-cover rounded"
										/>
										<Button
											variant="ghost"
											size="lg"
											icon={
												<CirclePlay className="w-8 h-8 text-purple-600" />
											}
											className="absolute inset-0 bg-white/90 hover:bg-white/95"
											aria-label="Play video"
										/>
									</div>
								</div>
							</div>

							{ /* Widgets & Features */ }
							<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
								<div className="flex items-center justify-between mb-4">
									<Title
										tag="h3"
										title="Widgets / Features"
										size="md"
										className="text-text-primary"
									/>
								</div>

								<div className="bg-gray-50 rounded-lg p-1">
									<Container
										containerType="grid"
										cols={ { sm: 2, md: 3, lg: 4 } }
										className="gap-1"
									>
										{ widgetData.map( ( widget ) => (
											<div
												key={ widget.id }
												className="bg-white rounded p-3 shadow-sm"
											>
												<div className="flex items-center justify-between mb-3">
													<widget.icon className="w-5 h-5 text-text-secondary" />
													<Switch
														value={ widget.enabled }
														disabled={ widget.isPro }
														size="sm"
													/>
												</div>
												<div className="flex items-center justify-between">
													<Text className="text-sm font-medium text-text-primary">
														{ widget.title }
													</Text>
													<Button
														variant="link"
														size="xs"
														icon={ <Monitor /> }
														aria-label="Preview"
													/>
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
							<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-3">
								<Title
									tag="h3"
									title="Super Charge Your Workflow"
									size="md"
									className="text-text-primary mb-4"
								/>

								<div className="bg-gray-50 rounded-lg p-1">
									<div className="bg-white rounded p-4 border">
										<div className="flex items-start gap-4">
											<img
												src="./src/templates/uae-dashboard/assets/surerank-logo.svg"
												alt="SureRank Logo"
												className="w-32 h-5 mt-1"
											/>
											<div className="flex-1">
												<Title
													tag="h4"
													title="Boost Your Traffic with Easy SEO Optimization!"
													size="sm"
													className="text-purple-900 mb-2"
												/>
												<Text className="text-text-secondary mb-4">
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
							</div>
						</Container.Item>

						{ /* Sidebar Column */ }
						<Container.Item colSpan={ 4 } className="space-y-6">
							{ /* Upgrade to Pro */ }
							<div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
								<div
									className="h-44 bg-gradient-to-br from-purple-100 to-gray-100 relative"
									style={ {
										backgroundImage: `url('./src/templates/uae-dashboard/assets/upgrade-bg.png')`,
										backgroundSize: 'cover',
										backgroundPosition: 'center',
									} }
								>
									<div className="absolute inset-0 bg-black/10" />
									<div className="relative h-full flex items-end p-6">
										<div className="text-white">
											<Text className="text-xs font-bold mb-2 text-text-secondary">
												BUILD YOUR DREAM
											</Text>
											<Button
												variant="outline"
												size="xs"
												className="border-purple-600 text-purple-700 bg-white/90"
											>
												View Projects
											</Button>
											<Text className="text-sm mt-2 text-text-secondary">
												Transforming Spaces with Purpose
											</Text>
										</div>
									</div>
								</div>

								<div className="p-4">
									<div className="flex items-center gap-2 mb-4">
										<Rocket className="w-4 h-4 text-purple-600" />
										<Text className="text-xs font-semibold text-purple-600">
											Unlock Ultimate Features
										</Text>
									</div>

									<Title
										tag="h3"
										title="Bring Your Vision to Life with UAE Pro"
										size="lg"
										className="text-purple-900 mb-2"
									/>

									<Text className="text-text-secondary mb-4">
										Streamline your workflow, skip the
										repetitive tasks, and build modern,
										high-performance websites.
									</Text>

									<div className="space-y-2 mb-6">
										{ proFeatures.map( ( feature, index ) => (
											<div
												key={ index }
												className="flex items-center gap-2"
											>
												<Check className="w-4 h-4 text-purple-600" />
												<Text className="text-sm text-purple-900">
													{ feature }
												</Text>
											</div>
										) ) }
									</div>

									<Button
										variant="primary"
										className="w-full bg-purple-600 hover:bg-purple-700"
									>
										Upgrade Now
									</Button>
								</div>
							</div>

							{ /* Quick Access */ }
							<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-3">
								<Title
									tag="h3"
									title="Quick Access"
									size="md"
									className="text-text-primary mb-4"
								/>

								<div className="space-y-2">
									<div className="flex items-center justify-between p-3 bg-gray-50 rounded border">
										<div className="flex items-center gap-3">
											<Headphones className="w-4 h-4 text-purple-900" />
											<Text className="text-sm font-medium text-purple-900">
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

									<div className="flex items-center justify-between p-3 bg-gray-50 rounded border">
										<div className="flex items-center gap-3">
											<BookOpen className="w-4 h-4 text-purple-900" />
											<Text className="text-sm font-medium text-purple-900">
												Knowledge Base
											</Text>
										</div>
									</div>

									<div className="flex items-center justify-center p-3 bg-gray-50 rounded">
										<div className="flex items-center gap-2">
											<CircleHelp className="w-4 h-4 text-text-secondary" />
											<Text className="text-sm text-text-primary">
												Help Centre
											</Text>
										</div>
									</div>

									<div className="flex items-center justify-center p-3 bg-gray-50 rounded">
										<Text className="text-sm text-text-primary">
											Request a Feature
										</Text>
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
