import React from 'react';
import {
	Topbar,
	Container,
	Text,
	Button,
	Badge,
} from '@/components';
import {
	ArrowUpRight,
	CircleHelp,
	Megaphone,
	Plus,
	ExternalLink,
	Calendar,
	Zap,
	Check,
	Ticket,
	HelpCircle,
	MessageSquare,
	Star,
	Play,
	X,
} from 'lucide-react';

export default {
	title: 'Templates/Dashboard/SureForms Dashboard',
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

const SureFormsLogo = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M24 0H0V24H24V0Z" fill="#D54407" />
		<path d="M6.8501 5.14209H17.1358V8.57068H8.56439L6.8501 10.285V8.57068V5.14209Z" fill="white" />
		<path d="M6.8501 10.2866H15.4215V13.7152H8.56439L6.8501 15.4294V13.7152V10.2866Z" fill="white" />
		<path d="M6.8501 15.4272H11.9929V18.8558H6.8501V15.4272Z" fill="white" />
	</svg>

);

const quickAccessItems = [
	{
		id: '1',
		icon: <Ticket className="size-4" />,
		label: 'Open Support Ticket',
		href: '#',
	},
	{
		id: '2',
		icon: <HelpCircle className="size-4" />,
		label: 'Help Center',
		href: '#',
	},
	{
		id: '3',
		icon: <MessageSquare className="size-4" />,
		label: 'Join the Community',
		href: '#',
	},
	{
		id: '4',
		icon: <Star className="size-4" />,
		label: 'Rate Us',
		href: '#',
	},
];

const proFeatures = [
	'File Upload',
	'Date & Time Pickers',
	'Page Break',
	'Conditional Logic',
	'Rating Fields',
	'And much more&hellip;',
];

export const SureFormsDashboard = ( args ) => {
	return (
		<div { ...args } className="min-h-screen bg-background-secondary">
			{ /* Upgrade Alert Banner */ }
			<div className="flex items-center justify-center gap-2 p-2 w-full bg-brand-background-hover-100 border-b border-border-subtle">
				<div className="mx-auto w-full text-center space-x-1 px-1">
					<Text size={ 12 } weight={ 600 } color="primary" className="leading-tight inline">
						Ready to go beyond free plan?
					</Text>
					<Text size={ 12 } weight={ 400 } color="primary" className="leading-tight inline">
						<Text as="a" href="#" target="_self" color="link">Upgrade now</Text> and unlock the full power of SureForms!
					</Text>
				</div>
				<div className="ml-auto flex items-center">
					<Button
						variant="ghost"
						size="xs"
						icon={ <X className="size-4" strokeWidth={ 1.25 } /> }
						aria-label="Close alert"
						className="hover:bg-background-primary/10 text-text-primary"
					/>
				</div>
			</div>

			{ /* Main Navigation */ }
			<Topbar
				gap="0"
				className="h-14 p-0 shadow-sm bg-background-primary border-b border-border-subtle min-h-14"
			>
				<Topbar.Left className="p-4">
					<SureFormsLogo />
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
							All Forms
						</a>
						<a
							href="#"
							className="h-full flex items-center px-1 text-sm font-medium text-text-secondary hover:text-text-primary no-underline hover:no-underline"
						>
							Entries
						</a>
						<a
							href="#"
							className="h-full flex items-center px-1 text-sm font-medium text-text-secondary hover:text-text-primary no-underline hover:no-underline"
						>
							Settings
						</a>
						<Text
							as="a"
							href="#"
							size={ 14 }
							weight={ 600 }
							color="link"
							className="h-full flex items-center px-1 gap-1 no-underline hover:no-underline"
						>
							Upgrade SureForms
							<ArrowUpRight className="size-4" />
						</Text>
					</Topbar.Item>
				</Topbar.Middle>

				<Topbar.Right className="p-4">
					<Topbar.Item className="gap-4">
						<Badge
							label="V 0.0.2"
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
						<Button
							variant="ghost"
							size="xs"
							icon={ <Megaphone /> }
							aria-label="Notifications"
						/>
					</Topbar.Item>
				</Topbar.Right>
			</Topbar>

			{ /* Main Content */ }
			<div className="p-8 space-y-8">
				<Container
					containerType="grid"
					cols={ 12 }
					gap="2xl"
					className="mx-auto"
				>
					{ /* Left Column - Main Content */ }
					<Container.Item colSpan={ { sm: 12, md: 12, lg: 8 } } className="space-y-8">
						{ /* Welcome Banner */ }
						<div className="bg-background-primary rounded-xl shadow-sm border-0.5 border-solid border-border-subtle p-6">
							<Container
								containerType="grid"
								align="center"
								cols={ 12 }
								gap="2xl"
							>
								<Container.Item colSpan={ 8 } className="space-y-6">
									<div className="space-y-2">
										<Text
											as="h3"
											size={ 24 }
											weight={ 600 }
											color="primary"
											className="mb-2"
										>
											Welcome to SureForms!
										</Text>
										<Text
											as="p"
											size={ 14 }
											weight={ 400 }
											color="secondary"
										>
											SureForms is a WordPress plugin that
											enables users to create beautiful
											looking forms through a drag-and-drop
											interface, without needing to code. It
											integrates with the WordPress block
											editor.
										</Text>
									</div>
									<div className="flex gap-3">
										<Button
											variant="primary"
											iconPosition="right"
											icon={ <Plus /> }
										>
											Create New Form
										</Button>
										<Button
											variant="outline"
											iconPosition="right"
											icon={ <ExternalLink /> }
										>
											Read full guide
										</Button>
									</div>
								</Container.Item>

								<Container.Item colSpan={ 2 } colStart={ 10 }>
									<div className="relative w-full md:w-72 h-auto md:h-40 bg-field-primary-background rounded-lg aspect-video overflow-hidden border border-border-subtle flex items-center justify-center">
										<Button
											variant="ghost"
											size="lg"
											icon={
												<Play className="size-8 fill-brand-primary-600 text-brand-primary-600" />
											}
											className="bg-background-primary/50 rounded-full size-10 hover:bg-background-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 focus:[box-shadow:none]"
											aria-label="Play video"
										/>
									</div>
								</Container.Item>
							</Container>
						</div>

						{ /* Forms Overview */ }
						<div className="bg-background-primary rounded-xl shadow-sm border-0.5 border-solid border-border-subtle p-4">
							<div className="flex items-center justify-between mb-4 px-1">
								<Text
									as="h4"
									size={ 14 }
									weight={ 600 }
									color="primary"
									className="mb-2"
								>
									Forms Overview
								</Text>
								<div className="flex items-center gap-3">
									<div className="w-48 border border-field-border rounded px-3 py-2 bg-field-secondary-background">
										<Text size={ 14 } color="secondary">
											Select Form
										</Text>
									</div>
									<div className="w-48 border border-field-border rounded px-3 py-2 bg-field-secondary-background flex items-center justify-between">
										<Text size={ 14 } color="secondary">
											mm/dd/yyyy
										</Text>
										<Calendar className="size-4 text-icon-secondary" />
									</div>
								</div>
							</div>

							{ /* Chart Area */ }
							<div className="bg-field-primary-background rounded-lg p-6 mb-4">
								<div className="h-58 flex items-end justify-center space-x-16 mb-6">
									{ /* Simple chart representation */ }
									<div className="flex flex-col items-center space-y-2">
										<div className="h-24 w-1 bg-brand-primary-600 rounded-full"></div>
										<div className="h-8 w-1 bg-support-info rounded-full"></div>
									</div>
									<div className="flex flex-col items-center space-y-2">
										<div className="h-32 w-1 bg-brand-primary-600 rounded-full"></div>
										<div className="h-12 w-1 bg-support-info rounded-full"></div>
									</div>
									<div className="flex flex-col items-center space-y-2">
										<div className="h-20 w-1 bg-brand-primary-600 rounded-full"></div>
										<div className="h-6 w-1 bg-support-info rounded-full"></div>
									</div>
								</div>

								<div className="flex items-center justify-end gap-6">
									<div className="flex items-center gap-2">
										<div className="w-2 h-2 bg-brand-primary-600 rounded"></div>
										<Text size={ 12 } color="secondary">
											Views
										</Text>
									</div>
									<div className="flex items-center gap-2">
										<div className="w-2 h-2 bg-support-info rounded"></div>
										<Text size={ 12 } color="secondary">
											Entries
										</Text>
									</div>
								</div>
							</div>
							<Text size={ 14 } weight={ 500 } color="secondary">
								All Forms
							</Text>
						</div>

						{ /* Upgrade to Pro */ }
						<div className="bg-background-primary rounded-xl shadow-sm border-0.5 border-solid border-border-subtle p-6">
							<Container
								containerType="grid"
								cols={ 8 }
								gap="2xl"
							>
								<Container.Item colSpan={ 5 } className="space-y-6">
									<div className="flex items-center gap-2 text-brand-primary-600">
										<Zap className="size-4" />
										<Text size={ 12 } weight={ 600 } color="brand600">
											Upgrade to Pro
										</Text>
									</div>

									<div className="space-y-2">
										<Text
											as="h4"
											size={ 18 }
											weight={ 600 }
											color="primary"
											className="mb-1"
										>
											Upgrade to Unlock SureForms Premium Features!
										</Text>
										<Text color="secondary">
											Access smarter fields, powerful tools,
											and advanced features that help you
											build better forms, faster than ever.
										</Text>
									</div>

									<div className="grid grid-cols-2 gap-2 mb-6">
										{ proFeatures.map( ( feature, index ) => (
											<div
												key={ index }
												className="flex items-center gap-3"
											>
												<Check className="size-3.5 text-icon-interactive flex-shrink-0" />
												<Text size={ 14 } weight={ 500 } color="primary">
													{ feature }
												</Text>
											</div>
										) ) }
									</div>

									<Button variant="secondary" className="w-fit">
										Upgrade Now
									</Button>
								</Container.Item>

								<Container.Item colSpan={ 3 }>
									<img
										src="/src/templates/sureforms-dashboard/assets/upgrade-illustration.svg"
										alt="Upgrade illustration"
										className="w-full h-auto"
									/>
								</Container.Item>
							</Container>
						</div>
					</Container.Item>

					{ /* Right Column - Sidebar */ }
					<Container.Item colSpan={ { sm: 12, md: 12, lg: 4 } } className="space-y-6">
						{ /* Extend Your Website - SureRank */ }
						<div className="bg-background-primary rounded-xl shadow-sm border-0.5 border-solid border-border-subtle p-3">
							<div className="flex items-center justify-between mb-2 px-1">
								<Text
									as="h4"
									size={ 14 }
									weight={ 600 }
									color="primary"
								>
									Extend Your Website
								</Text>
							</div>

							<div className="bg-field-primary-background rounded-lg p-1">
								<div className="bg-background-primary border border-border-subtle rounded-md p-3 shadow-sm">
									<div className="flex items-start justify-between mb-3">
										<img
											src="/src/templates/sureforms-dashboard/assets/surerank-logo.svg"
											alt="SureRank"
											className="h-5"
										/>
									</div>

									<div className="space-y-2 mb-4">
										<Text
											as="h4"
											size={ 16 }
											weight={ 600 }
											color="primary"
											className="mb-2"
										>
											Boost Your Traffic with Easy SEO Optimization!
										</Text>
										<Text size={ 14 } color="secondary">
											Rank higher effortlessly with
											SureRank&apos;s clean, easy-to-use
											interface and smart SEO tools. From
											meta tags to content tips,
											everything&apos;s simple, clear, and
											built to grow your traffic.
										</Text>
									</div>

									<Button
										variant="outline"
										size="sm"
										className="w-fit"
									>
										Install &amp; Activate
									</Button>
								</div>
							</div>
						</div>

						{ /* Quick Access */ }
						<div className="bg-background-primary rounded-xl shadow-sm border-0.5 border-solid border-border-subtle p-3">
							<div className="mb-2 px-1">
								<Text
									as="h4"
									size={ 14 }
									weight={ 600 }
									color="primary"
								>
									Quick Access
								</Text>
							</div>

							<div className="space-y-1 p-1 bg-field-primary-background rounded-lg">
								{ quickAccessItems.map( ( item ) => (
									<div
										key={ item.id }
										className="bg-background-primary rounded shadow-sm p-3"
									>
										<div className="flex items-center gap-3">
											{ item.icon }
											<Text
												as="a"
												href={ item.href }
												size={ 14 }
												weight={ 500 }
												color="primary"
												className="no-underline hover:no-underline hover:text-text-primary"
											>
												{ item.label }
											</Text>
										</div>
									</div>
								) ) }
							</div>
						</div>
					</Container.Item>
				</Container>
			</div>
		</div>
	);
};
