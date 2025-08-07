import {
	Topbar,
	Badge,
	Container,
	Button,
	Switch,
	Text,
	Tooltip,
	Input,
	RadioButton,
} from '@/components';
import {
	CircleHelp,
	Megaphone,
	Monitor,
	User,
	Search,
	ListFilter,
	Headphones,
	BookOpen,
	MessageSquare,
	Rocket,
	Check,
	MessageSquareCode,
} from 'lucide-react';
import { useState } from 'react';

export default {
	title: 'Templates/Dashboard/UAE Widgets',
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
		title: 'Blockquote',
		enabled: true,
		isPro: false,
	},
	{
		id: '2',
		title: 'Blockquote',
		enabled: true,
		isPro: false,
	},
	{
		id: '3',
		title: 'Blockquote',
		enabled: true,
		isPro: false,
	},
	{
		id: '4',
		title: 'Blockquote',
		enabled: true,
		isPro: false,
	},
	{
		id: '5',
		title: 'Blockquote',
		enabled: true,
		isPro: false,
	},
	{
		id: '6',
		title: 'Blockquote',
		enabled: true,
		isPro: false,
	},
	{
		id: '7',
		title: 'Blockquote',
		enabled: true,
		isPro: false,
	},
	{
		id: '8',
		title: 'Blockquote',
		enabled: true,
		isPro: false,
	},
	{
		id: '9',
		title: 'Blockquote',
		enabled: true,
		isPro: false,
	},
	{
		id: '10',
		title: 'Blockquote',
		enabled: false,
		isPro: true,
	},
	{
		id: '11',
		title: 'Blockquote',
		enabled: false,
		isPro: true,
	},
	{
		id: '12',
		title: 'Blockquote',
		enabled: false,
		isPro: true,
	},
	{
		id: '13',
		title: 'Blockquote',
		enabled: false,
		isPro: true,
	},
	{
		id: '14',
		title: 'Blockquote',
		enabled: false,
		isPro: true,
	},
	{
		id: '15',
		title: 'Blockquote',
		enabled: false,
		isPro: true,
	},
	{
		id: '16',
		title: 'Blockquote',
		enabled: false,
		isPro: true,
	},
	{
		id: '17',
		title: 'Blockquote',
		enabled: false,
		isPro: true,
	},
	{
		id: '18',
		title: 'Blockquote',
		enabled: false,
		isPro: true,
	},
	{
		id: '19',
		title: 'Blockquote',
		enabled: false,
		isPro: true,
	},
	{
		id: '20',
		title: 'Blockquote',
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

export const UAEWidgets = ( args ) => {
	const [ switchState, setSwitchState ] = useState( widgetData.map( ( widget ) => ( { ...widget } ) ) );
	const [ searchQuery, setSearchQuery ] = useState( '' );

	const handleSwitchChange = ( id ) => ( value ) => {
		setSwitchState( switchState.map( ( widget ) => ( widget.id === id ? { ...widget, enabled: value } : widget ) ) );
	};

	const handleActivateAll = () => {
		setSwitchState( switchState.map( ( widget ) => ( { ...widget, enabled: ! widget.isPro } ) ) );
	};

	const handleDeactivateAll = () => {
		setSwitchState( switchState.map( ( widget ) => ( { ...widget, enabled: false } ) ) );
	};

	const filteredWidgets = switchState.filter( ( widget ) =>
		widget.title.toLowerCase().includes( searchQuery.toLowerCase() )
	);

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
						<Topbar.Item className="gap-3">
							<a
								href="#"
								className="h-full flex items-center px-1 text-sm font-medium text-text-secondary hover:text-text-primary no-underline hover:no-underline"
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
								className="h-full flex items-center px-1 text-sm font-medium text-text-primary border-x-0 border-t-0 border-b-1 border-solid border-border-interactive no-underline hover:no-underline"
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
							<div className="w-6 h-6 rounded-full bg-field-primary-background border border-border-subtle flex items-center justify-center">
								<User className="w-4 h-4 text-icon-primary" />
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
							{ /* Widgets Section */ }
							<div className="bg-background-primary rounded-xl shadow-sm border-0.5 border-solid border-border-subtle p-4">
								{ /* Header */ }
								<div className="flex items-center justify-between mb-6 p-1">
									<Text
										as="h2"
										size={ 20 }
										weight={ 600 }
										color="primary"
									>
										Widgets
									</Text>
									<div className="flex items-center gap-3">
										<Input
											placeholder="Search..."
											value={ searchQuery }
											onChange={ ( e ) => setSearchQuery( e.target.value ) }
											prefix={ <Search /> }
											type="search"
											autoComplete="off"
										/>
										<RadioButton.Group
											style="tile"
											columns={ 2 }
											onChange={ ( value ) => {
												if ( value === 'activate' ) {
													handleActivateAll();
												} else {
													handleDeactivateAll();
												}
											} }
											size="md"
										>
											<RadioButton.Button
												value="activate"
											>
												<Text size={ 12 } weight={ 500 } color="primary">
													Activate all
												</Text>
											</RadioButton.Button>
											<RadioButton.Button
												value="deactivate"
											>
												<Text size={ 12 } weight={ 500 } color="primary">
													Deactivate all
												</Text>
											</RadioButton.Button>
										</RadioButton.Group>
										<Button
											variant="outline"
											size="sm"
											icon={ <ListFilter /> }
											aria-label="Filter"
										/>
									</div>
								</div>

								{ /* Widgets Grid */ }
								<div className="bg-field-primary-background rounded-lg border border-border-subtle p-1">
									<Container
										containerType="grid"
										cols={ { sm: 1, md: 2, lg: 4 } }
										className="gap-1"
									>
										{ filteredWidgets.map( ( widget ) => (
											<div
												key={ widget.id }
												className="flex flex-col justify-start bg-background-primary rounded p-3 shadow-sm"
											>
												<div className="flex items-center justify-between mb-4">
													<div className="flex items-center justify-center">
														<MessageSquareCode className="size-5 text-icon-primary" strokeWidth={ 1.5 } />
													</div>
													{
														widget.isPro ? (
															<Tooltip
																content={ ( <>Available in UAE Pro. Click to <Text as="a" color="link" href="#" target="_self" className="no-underline hover:no-underline">learn more.</Text></> ) }
																interactive
																arrow
															>
																<div>
																	<Switch
																		id={ `switch-${ widget.id }` }
																		value={ widget.enabled }
																		disabled={ widget.isPro }
																		size="sm"
																		onChange={ handleSwitchChange( widget.id ) }
																	/>
																	<label htmlFor={ `switch-${ widget.id }` } className="sr-only" />
																</div>
															</Tooltip>
														) : (
															<div>
																<Switch
																	id={ `switch-${ widget.id }` }
																	value={ widget.enabled }
																	disabled={ widget.isPro }
																	size="sm"
																	onChange={ handleSwitchChange( widget.id ) }
																/>
																<label htmlFor={ `switch-${ widget.id }` } className="sr-only" />
															</div>
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
							</div>
						</Container.Item>

						{ /* Sidebar Column */ }
						<Container.Item colSpan={ { sm: 12, md: 12, lg: 4 } } className="space-y-6">
							{ /* Upgrade to Pro */ }
							<div className="bg-background-primary rounded-xl shadow-sm border-0.5 border-solid border-border-subtle overflow-hidden">
								<div className="p-3">
									<img
										src="./src/templates/uae-widgets/assets/upgrade-banner.svg"
										alt="Upgrade to Pro"
										className="w-full h-auto object-contain"
									/>
								</div>

								<div className="p-5 space-y-6">
									<div className="space-y-1">
										<div className="flex items-center gap-2 mb-1">
											<Rocket className="size-4 text-brand-primary-600" />
											<Text size={ 12 } weight={ 600 } className="text-brand-primary-600">
												Unlock Ultimate Features
											</Text>
										</div>

										<Text
											as="h3"
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
												<Check className="size-4 text-icon-interactive shrink-0" />
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
