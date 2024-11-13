import React, { useCallback, useState } from 'react';
import {
	Avatar,
	Badge,
	Button,
	Container,
	Label,
	Menu,
	Sidebar,
	Tabs,
	Title,
	Topbar,
	Input,
	Select,
} from '@/components';
import {
	ArrowUpRight,
	Bell,
	ChartNoAxesColumnIncreasing,
	CircleHelp,
	CloudUpload,
	CreditCard,
	InfoIcon,
	Layers,
	MousePointer,
	PenTool,
	RefreshCcw,
	ShoppingBag,
	ShoppingCart,
	Sliders,
	Store,
	Tag,
	Truck,
	User,
} from 'lucide-react';
import { SureCartLogo as Logo } from '@/ui/icons';

export default {
	title: 'Templates/Admin Settings/Admin Settings - SureCart',
	parameters: {
		layout: 'fullscreen',
		a11y: {
			disable: true,
		}
	},
	decorators: [
		( Story, parameters ) => (
			<div className="box-border [&_*]:box-border w-full h-[100dvh]">
				<Story { ...parameters } />
			</div>
		),
	],
	tags: [ 'autodocs' ],
};

const TABS = [
	{
		label: 'Store Details',
		slug: 'store-details',
	},
	{
		label: 'Contact Information',
		slug: 'contact-information',
	},
];

const CURRENCY_OPTIONS = [
	{
		value: 'USD',
		label: 'United States Dollar ($)',
	},
	{
		value: 'CAD',
		label: 'Canadian Dollar (CA$)',
	},
	{
		value: 'EUR',
		label: 'Euro (€)',
	},
	{
		value: 'GBP',
		label: 'British Pound (£)',
	},
	{
		value: 'AUD',
		label: 'Australian Dollar (A$)',
	},
	{
		value: 'JPY',
		label: 'Japanese Yen (¥)',
	},
	{
		value: 'INR',
		label: 'Indian Rupee (₹)',
	},
	{
		value: 'CNY',
		label: 'Chinese Yuan (¥)',
	},
	{
		value: 'RUB',
		label: 'Russian Ruble (₽)',
	},
	{
		value: 'KRW',
		label: 'South Korean Won (₩)',
	},
	{
		value: 'TRY',
		label: 'Turkish Lira (₺)',
	},
];

const TIME_ZONE_OPTIONS = [
	{
		label: '(GMT+00:00) UTC',
		value: 'UTC',
	},
	{
		label: '(GMT+01:00) Central European Time',
		value: 'CET',
	},
	{
		label: '(GMT+02:00) Eastern European Time',
		value: 'EET',
	},
	{
		label: '(GMT+03:00) Moscow Standard Time',
		value: 'MSK',
	},
	{
		label: '(GMT+04:00) Gulf Standard Time',
		value: 'GST',
	},
	{
		label: '(GMT+05:00) Pakistan Standard Time',
		value: 'PKT',
	},
	{
		label: '(GMT+06:00) Bangladesh Standard Time',
		value: 'BST',
	},
];

const LANGUAGE_OPTIONS = [
	{
		label: 'English - United States',
		value: 'en-US',
	},
	{
		label: 'English - United Kingdom',
		value: 'en-GB',
	},
	{
		label: 'English - Canada',
		value: 'en-CA',
	},
];

const Template = ( args ) => {
	const [ activeTab, setActiveTab ] = useState( TABS[ 0 ].slug );

	const handleChangeTab = ( { event, value: { slug } } ) => {
		event.preventDefault();
		event.stopPropagation();

		setActiveTab( slug );
	};

	const renderTabContent = useCallback(
		( tabSlug, content ) => {
			if ( tabSlug === activeTab ) {
				return content;
			}

			return (
				<div className="w-full min-h-32 flex items-center justify-center">
					<p className="text-text-tertiary text-sm font-normal m-0">
						No content available
					</p>
				</div>
			);
		},
		[ activeTab ]
	);

	return (
		<Container
			{ ...args }
			containerType="flex"
			direction="column"
			gap={ 0 }
			className="h-full"
		>
			<Container.Item>
				{ /* Navigation Bar */ }
				<Topbar
					gap={ 0 }
					className="w-auto min-h-[unset] h-16 shadow-sm p-0 relative z-[1]"
				>
					<Topbar.Left className="p-5">
						<Topbar.Item>
							<Logo />
						</Topbar.Item>
					</Topbar.Left>
					<Topbar.Middle align="left" className="h-full">
						<Topbar.Item className="h-full gap-4">
							<a
								href="#"
								target="_self"
								className="content-center no-underline h-full py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none text-text-secondary text-sm font-medium cursor-pointer"
							>
								Dashboard
							</a>
							<a
								href="#"
								target="_self"
								className="content-center no-underline inline-flex items-center gap-1 h-full py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none text-text-secondary text-sm font-medium cursor-pointer"
							>
								<span>Orders</span>
								<Badge
									label="99+"
									size="xs"
									type="pill"
									variant="green"
								/>
							</a>
							<a
								href="#"
								target="_self"
								className="content-center no-underline h-full py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none text-text-secondary text-sm font-medium cursor-pointer"
							>
								Products
							</a>
							{ /* Active Nav Item */ }
							<a
								href="#"
								target="_self"
								className="content-center no-underline relative h-full py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none text-text-primary text-sm font-medium cursor-pointer"
							>
								<span>Settings</span>
								<span className="absolute bottom-0 left-0 w-full h-px bg-brand-800"></span>
							</a>
							<a
								href="#"
								target="_self"
								className="content-center no-underline h-full py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none text-text-secondary text-sm font-medium cursor-pointer"
							>
								Integrations
							</a>
							<a
								href="#"
								target="_self"
								className="content-center no-underline h-full inline-flex items-center py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none cursor-pointer text-sm font-semibold text-brand-800"
							>
								<span>Upgrade to Pro</span>
								<ArrowUpRight
									className="size-5"
									strokeWidth="1.5"
								/>
							</a>
						</Topbar.Item>
					</Topbar.Middle>
					<Topbar.Right className="p-5">
						<Topbar.Item>
							<Badge
								label="V 2.29.2"
								size="xs"
								variant="neutral"
							/>
						</Topbar.Item>
						<Topbar.Item>
							<CircleHelp
								className="size-4 m-1"
								strokeWidth="1.5"
							/>
						</Topbar.Item>
						<Topbar.Item>
							<Bell className="size-4 m-1" strokeWidth="1.5" />
						</Topbar.Item>
						<Topbar.Item>
							<Avatar
								size="sm"
								className="bg-brand-background-50 text-icon-primary"
							>
								<User strokeWidth="1.5" />
							</Avatar>
						</Topbar.Item>
					</Topbar.Right>
				</Topbar>
			</Container.Item>
			{ /* Sidebar & the content section */ }
			<Container.Item className="grid grid-cols-[16rem_1fr] bg-background-secondary flex-auto max-h-[calc(100%_-_4rem)]">
				<div className="h-full w-full overflow-y-auto">
					<Sidebar
						borderOn
						collapsible={ false }
						screenHeight={ false }
						className="!h-full w-64"
					>
						<Sidebar.Body>
							<Sidebar.Item>
								<Menu size="md" className="w-full p-0 gap-4">
									<Menu.List arrow heading="Store" open>
										<Menu.Item active>
											<Store />
											<div>Store Settings</div>
										</Menu.Item>
										<Menu.Item>
											<PenTool />
											<div>Design & Branding</div>
										</Menu.Item>
									</Menu.List>
									<Menu.List
										arrow
										heading="Orders & Sales"
										open
									>
										<Menu.Item>
											<ShoppingBag />
											<div>Orders & Receipts</div>
										</Menu.Item>
										<Menu.Item>
											<ShoppingCart />
											<div>Abandoned Checkout</div>
										</Menu.Item>
										<Menu.Item>
											<Tag />
											<div>Taxes</div>
										</Menu.Item>
										<Menu.Item>
											<Truck />
											<div>Shipping</div>
										</Menu.Item>
										<Menu.Item>
											<CreditCard />
											<div>Payment Processors</div>
										</Menu.Item>
									</Menu.List>
									<Menu.List arrow heading="Customers" open>
										<Menu.Item>
											<MousePointer />
											<div>Affiliates</div>
										</Menu.Item>
										<Menu.Item>
											<RefreshCcw />
											<div>Subscriptions</div>
										</Menu.Item>
										<Menu.Item>
											<ChartNoAxesColumnIncreasing />
											<div>Subscriptions Saver</div>
										</Menu.Item>
									</Menu.List>
									<Menu.List arrow heading="Others" open>
										<Menu.Item>
											<Layers />
											<div>Data Export</div>
										</Menu.Item>
										<Menu.Item>
											<CloudUpload />
											<div>Connection</div>
										</Menu.Item>
										<Menu.Item>
											<Bell />
											<div>Notification</div>
										</Menu.Item>
										<Menu.Item>
											<Sliders />
											<div>Advanced</div>
										</Menu.Item>
									</Menu.List>
								</Menu>
							</Sidebar.Item>
						</Sidebar.Body>
					</Sidebar>
				</div>
				{ /* Content section */ }
				<form
					onSubmit={ ( event ) => event.preventDefault() }
					className="w-full h-full overflow-y-auto bg-background-secondary"
				>
					<Container
						gap="xl"
						direction="column"
						className="p-8 w-full max-w-[43.5rem] mx-auto"
					>
						<Container justify="between" align="center">
							<Title
								title="Store Settings"
								size="md"
								className="[&_h2]:text-text-primary [&_h2]:leading-[1.875rem]"
							/>
							<Container.Item className="inline-flex items-center gap-3">
								<Button variant="outline">Cancel</Button>
								<Button className="px-3.5">Save</Button>
							</Container.Item>
						</Container>
						{ /* Settings */ }
						<Container
							direction="column"
							className="bg-background-primary rounded-xl shadow py-4 px-6"
						>
							{ /* Tabs */ }
							<Container.Item className="mb-0.5">
								<Tabs.Group
									activeItem={ activeTab }
									defaultValue={ activeTab }
									onChange={ handleChangeTab }
									orientation="horizontal"
									size="md"
									variant="underline"
									width="auto"
								>
									{ TABS.map( ( { label, slug } ) => (
										<Tabs.Tab
											key={ label }
											slug={ slug }
											text={ label }
										/>
									) ) }
								</Tabs.Group>
							</Container.Item>
							{ /* Tab Content */ }
							{ renderTabContent(
								TABS[ 0 ].slug,
								<>
									<Container.Item className="flex flex-col items-start gap-6">
										{ /* Description / Info */ }
										<p className="text-sm font-normal text-text-secondary m-0">
											The name of your store will be
											visible to customers, so you should
											use a name that is recognizable and
											identifies your store to your
											customers.
										</p>

										<Container
											className="w-full"
											containerType="grid"
											cols={ { sm: 1, md: 1, lg: 2 } }
										>
											<Container.Item className="space-y-1.5">
												<Label required>
													Store name
												</Label>
												<Input
													size="md"
													onChange={ () => {} }
												/>
												<Label
													tag="p"
													size="xs"
													variant="help"
													className="m-0"
												>
													This is displayed in the UI
													and in notifications.
												</Label>
											</Container.Item>
											<Container.Item className="space-y-1.5">
												<Label>Store URL</Label>
												<Input
													size="md"
													onChange={ () => {} }
												/>
												<Label
													tag="p"
													size="xs"
													variant="help"
													className="m-0"
												>
													This should be your live
													storefront URL.
												</Label>
											</Container.Item>
										</Container>

										<div className="w-full space-y-1.5">
											<Label required>
												Store currency
											</Label>
											<Select
												defaultValue={
													CURRENCY_OPTIONS[ 0 ]
												}
												onChange={ () => {} }
												placeholder="Select an option"
												size="md"
												combobox
											>
												<Select.Button displayBy="label" />
												<Select.Options
													searchBy="label"
													className="font-sans [&_*]:font-sans"
												>
													{ CURRENCY_OPTIONS.map(
														( optionItem ) => (
															<Select.Option
																key={
																	optionItem.value
																}
																value={
																	optionItem
																}
															>
																{
																	optionItem.label
																}
															</Select.Option>
														)
													) }
												</Select.Options>
											</Select>
											<Label
												tag="p"
												size="xs"
												variant="help"
												className="m-0"
											>
												Hint text can be added here.
												<a
													href="https://www.google.com"
													rel="noopener noreferrer"
												>
													Link
												</a>
											</Label>
										</div>

										<Container
											className="w-full"
											containerType="grid"
											cols={ { sm: 1, md: 1, lg: 2 } }
										>
											<Container.Item className="space-y-1.5">
												<Label required>
													Time zone
												</Label>
												<Select
													defaultValue={
														TIME_ZONE_OPTIONS[ 0 ]
													}
													onChange={ () => {} }
													placeholder="Select an option"
													size="md"
													combobox
													by="label"
												>
													<Select.Button displayBy="label" />
													<Select.Options
														searchBy="label"
														className="font-sans [&_*]:font-sans"
													>
														{ TIME_ZONE_OPTIONS.map(
															( optionItem ) => (
																<Select.Option
																	key={
																		optionItem.value
																	}
																	value={
																		optionItem
																	}
																>
																	{
																		optionItem.label
																	}
																</Select.Option>
															)
														) }
													</Select.Options>
												</Select>
												<Label
													tag="p"
													size="xs"
													variant="help"
													className="m-0"
												>
													<InfoIcon className="size-3" />
													Hint text can be added here.{ ' ' }
													<a
														href="https://www.google.com"
														rel="noopener noreferrer"
													>
														Link
													</a>
												</Label>
											</Container.Item>
											<Container.Item className="space-y-1.5">
												<Label required>
													Store language
												</Label>
												<Select
													defaultValue={
														LANGUAGE_OPTIONS[ 0 ]
													}
													onChange={ () => {} }
													placeholder="Select an option"
													size="md"
													combobox
													by="label"
												>
													<Select.Button displayBy="label" />
													<Select.Options
														searchBy="label"
														className="font-sans [&_*]:font-sans"
													>
														{ LANGUAGE_OPTIONS.map(
															( optionItem ) => (
																<Select.Option
																	key={
																		optionItem.value
																	}
																	value={
																		optionItem
																	}
																>
																	{
																		optionItem.label
																	}
																</Select.Option>
															)
														) }
													</Select.Options>
												</Select>
												<Label
													tag="p"
													size="xs"
													variant="help"
													className="m-0"
												>
													<InfoIcon className="size-3" />
													Hint text can be added here.{ ' ' }
													<a
														href="https://www.google.com"
														rel="noopener noreferrer"
													>
														Link
													</a>
												</Label>
											</Container.Item>
										</Container>

										<Container
											className="w-full"
											containerType="grid"
											cols={ { sm: 1, md: 1, lg: 2 } }
										>
											<Container.Item className="space-y-1.5">
												<Label>Terms page</Label>
												<Input
													size="md"
													onChange={ () => {} }
												/>
												<Label
													tag="p"
													size="xs"
													variant="help"
													className="m-0"
												>
													This is displayed in the UI
													and in notifications.
												</Label>
											</Container.Item>
											<Container.Item className="space-y-1.5">
												<Label>
													Privacy policy page
												</Label>
												<Input
													size="md"
													onChange={ () => {} }
												/>
												<Label
													tag="p"
													size="xs"
													variant="help"
													className="m-0"
												>
													This should be your live
													storefront URL.
												</Label>
											</Container.Item>
										</Container>
									</Container.Item>
								</>
							) }
						</Container>
					</Container>
				</form>
			</Container.Item>
		</Container>
	);
};

export const Default = Template.bind();
