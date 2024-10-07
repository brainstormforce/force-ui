import React, { useState } from 'react';
import {
	Avatar,
	Badge,
	Button,
	Container,
	Label,
	Menu,
	RadioButton,
	Sidebar,
	Tabs,
	Title,
	Topbar,
	EditorInput,
	Input,
	Select,
} from '@/components';
import {
	ArrowUpRight,
	Bell,
	ChartNoAxesColumnIncreasing,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
	CircleHelp,
	CloudUpload,
	CreditCard,
	Dot,
	EllipsisVertical,
	Facebook,
	House,
	InfoIcon,
	Layers,
	Megaphone,
	Monitor,
	MousePointer,
	PenTool,
	RefreshCcw,
	Settings,
	Share2,
	ShoppingBag,
	ShoppingCart,
	Smartphone,
	Store,
	Tag,
	Truck,
	Twitter,
	Type,
	User,
} from 'lucide-react';

export default {
	title: 'Templates/Admin Settings/Admin Settings 2',
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [
		(Story, parameters) => (
			<div className="box-border [&_*]:box-border w-full h-[100dvh]">
				<Story {...parameters} />
			</div>
		),
	],
	tags: ['autodocs'],
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
]

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

const Logo = (props) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12 24C18.6275 24 24 18.6273 24 11.9999C24 5.37255 18.6275 0 12 0C5.37259 0 0 5.37255 0 11.9999C0 18.6273 5.37259 24 12 24ZM12.0517 5.99996C11.0882 5.99996 9.75474 6.55101 9.0734 7.23073L7.2229 9.07688H16.4465L19.5307 5.99996H12.0517ZM14.9111 16.7692C14.2298 17.4489 12.8964 17.9999 11.9328 17.9999H4.45388L7.53804 14.923H16.7616L14.9111 16.7692ZM17.9089 10.6153H5.68418L5.10673 11.1923C3.73941 12.423 4.14495 13.3846 6.0598 13.3846H18.3176L18.8952 12.8076C20.2492 11.5841 19.8237 10.6153 17.9089 10.6153Z"
			fill="#01824C"
		/>
	</svg>
);

const Template = () => {
	const [activeTab, setActiveTab] = useState(TABS[0].slug);

	const handleChangeTab = ({ event, value: { slug } }) => {
		event.preventDefault();
		event.stopPropagation();

		setActiveTab(slug);
	};

	const stringValueToFormatJSON = (
		stringContent,
		options,
		optionValueKey = 'value',
		mentionObjectStructure = {
			type: 'mention',
			version: 1,
			data: {},
			size: 'md',
			by: 'label',
		}
	) => {
		const initialValue = {
			root: {
				children: [
					{
						children: [],
						direction: null,
						format: '',
						indent: 0,
						type: 'paragraph',
						version: 1,
						textFormat: 0,
						textStyle: '',
					},
				],
				direction: null,
				format: '',
				indent: 0,
				type: 'root',
				version: 1,
			},
		};

		const value = { ...initialValue };
		const content = stringContent
			.trim()
			.split(/(\n|%[\w\-_]+%)/)
			.filter(Boolean);

		content.forEach((item) => {
			if (item === '\n') {
				value.root.children[0].children.push({
					type: 'linebreak',
					version: 1,
				});
			} else if (item.startsWith('%') && item.endsWith('%')) {
				const option = options.find(
					(mentionItem) => mentionItem[optionValueKey] === item.trim()
				);
				if (option) {
					value.root.children[0].children.push({
						...mentionObjectStructure,
						data: { ...option },
					});
				}
			} else {
				value.root.children[0].children.push({
					detail: 0,
					format: 0,
					mode: 'normal',
					style: '',
					text: item,
					type: 'text',
					version: 1,
				});
			}
		});

		return JSON.stringify(value);
	};

	return (
		<Container
			containerType="flex"
			direction="column"
			gap={0}
			className="h-full"
		>
			<Container.Item>
				{/* Navigation Bar */}
				<Topbar
					gap={0}
					className="w-auto min-h-[unset] h-16 shadow-sm p-0 relative z-[1]"
				>
					<Topbar.Left className="p-5">
						<Topbar.Item>
							<Logo />
						</Topbar.Item>
					</Topbar.Left>
					<Topbar.Middle align="left" className="h-full">
						<Topbar.Item className="h-full gap-4">
							<button className="h-full py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none text-text-tertiary text-sm font-medium cursor-pointer">
								Dashboard
							</button>
							<button className="inline-flex items-center gap-1 h-full py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none text-text-tertiary text-sm font-medium cursor-pointer">
								<span>Orders</span>
								<Badge
									label="99+"
									size="xs"
									type="pill"
									variant="green"
								/>
							</button>
							<button className="h-full py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none text-text-tertiary text-sm font-medium cursor-pointer">
								Products
							</button>
							{/* Active Nav Item */}
							<button className="relative h-full py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none text-text-primary text-sm font-medium cursor-pointer">
								<span>Settings</span>
								<span className="absolute bottom-0 left-0 w-full h-px bg-brand-800"></span>
							</button>
							<button className="h-full py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none text-text-tertiary text-sm font-medium cursor-pointer">
								Integrations
							</button>
							<button
								className="h-full inline-flex items-center py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none cursor-pointer text-sm font-semibold text-brand-800"
								iconPosition="right"
								variant="ghost"
							>
								<span>Upgrade to Pro</span>
								<ArrowUpRight
									className="size-5"
									strokeWidth="1.5"
								/>
							</button>
						</Topbar.Item>
					</Topbar.Middle>
					<Topbar.Right className="p-5">
						<Topbar.Item>
							<Badge
								label="V 0.0 2"
								size="xs"
								variant="neutral"
							/>
						</Topbar.Item>
						<Topbar.Item className="gap-2">
							<CircleHelp strokeWidth="1.5" />
							<Megaphone strokeWidth="1.5" />
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
			{/* Sidebar & the content section */}
			<Container.Item className="grid grid-cols-[16rem_1fr] bg-background-secondary flex-auto">
				<div className="h-full w-full">
					<Sidebar
						borderOn
						collapsible={false}
						screenHeight={false}
						className="!h-full w-64"
					>
						<Sidebar.Body>
							<Sidebar.Item>
								<Menu size="md" className="w-full p-0 gap-4">
									<Menu.List arrow heading="Store" open>
										<Menu.Item>
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
											<Truck />
											<div>Shipping</div>
										</Menu.Item>
										<Menu.Item>
											<CreditCard />
											<div>Payment Processors</div>
										</Menu.Item>
									</Menu.List>
									<Menu.Separator />
									<Menu.List arrow heading="Customers" open>
										<Menu.Item>
											<MousePointer />
											<div>Affiliates</div>
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
									</Menu.List>
								</Menu>
							</Sidebar.Item>
						</Sidebar.Body>
					</Sidebar>
				</div>
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
							<Button>Save</Button>
						</Container.Item>
					</Container>
					{/* Settings */}
					<Container
						direction="column"
						className="bg-background-primary rounded-xl shadow py-4 px-6"
					>
						{/* Tabs */}
						<Container.Item className="mb-0.5">
							<Tabs.Group
								activeItem={activeTab}
								defaultValue={activeTab}
								onChange={handleChangeTab}
								orientation="horizontal"
								size="md"
								variant="underline"
								width="auto"
							>
								{TABS.map(({ label, slug }) => (
									<Tabs.Tab
										key={label}
										slug={slug}
										text={label}
									/>
								))}
							</Tabs.Group>
						</Container.Item>
						{/* Tab Content */}
						<Container.Item className="flex flex-col items-start gap-6">
							{/* Description / Info */}
							<p className="text-sm font-normal text-text-secondary m-0">
								The name of your store will be visible to
								customers, so you should use a name that is
								recognizable and identifies your store to your
								customers.
							</p>

							<Container
								className="w-full"
								containerType="grid"
								cols={{ sm: 1, md: 1, lg: 2 }}
							>
								<Container.Item className="space-y-1.5">
									<Label required>Store name</Label>
									<Input size="md" onChange={() => {}} />
									<span className="block text-xs leading-4 font-normal text-field-helper">
										This is displayed in the UI and in
										notifications.
									</span>
								</Container.Item>
								<Container.Item className="space-y-1.5">
									<Label>Store URL</Label>
									<Input size="md" onChange={() => {}} />
									<span className="block text-xs leading-4 font-normal text-field-helper">
										This should be your live storefront URL.
									</span>
								</Container.Item>
							</Container>

							<div className="w-full space-y-1.5">
								<Label required>Store currency</Label>
								<Select
									defaultValue={CURRENCY_OPTIONS[0]}
									onChange={() => {}}
									placeholder="Select an option"
									size="md"
									combobox
								>
									<Select.Button displayBy="label" />
									<Select.Options className="font-sans [&_*]:font-sans">
										{CURRENCY_OPTIONS.map((optionItem) => (
											<Select.Option
												key={optionItem.value}
												value={optionItem}
											>
												{optionItem.label}
											</Select.Option>
										))}
									</Select.Options>
								</Select>
								<span className="block text-xs leading-4 font-normal text-field-helper">
									Hint text can be added here. Link
								</span>
							</div>

							<Container
								className="w-full"
								containerType="grid"
								cols={{ sm: 1, md: 1, lg: 2 }}
							>
								<Container.Item className="space-y-1.5">
									<Label required>Time zone</Label>
									<Select
										defaultValue={TIME_ZONE_OPTIONS[0]}
										onChange={() => {}}
										placeholder="Select an option"
										size="md"
										combobox
									>
										<Select.Button displayBy="label" />
										<Select.Options className="font-sans [&_*]:font-sans">
											{TIME_ZONE_OPTIONS.map(
												(optionItem) => (
													<Select.Option
														key={optionItem.value}
														value={optionItem}
													>
														{optionItem.label}
													</Select.Option>
												)
											)}
										</Select.Options>
									</Select>
									<div className="flex items-center gap-1 text-xs leading-4 font-normal text-field-helper">
										<InfoIcon className="size-3" />
										<span>
											Hint text can be added here. Link
										</span>
									</div>
								</Container.Item>
								<Container.Item className="space-y-1.5">
									<Label required>Store language</Label>
									<Select
										defaultValue={LANGUAGE_OPTIONS[0]}
										onChange={() => {}}
										placeholder="Select an option"
										size="md"
										combobox
									>
										<Select.Button displayBy="label" />
										<Select.Options className="font-sans [&_*]:font-sans">
											{LANGUAGE_OPTIONS.map(
												(optionItem) => (
													<Select.Option
														key={optionItem.value}
														value={optionItem}
													>
														{optionItem.label}
													</Select.Option>
												)
											)}
										</Select.Options>
									</Select>
									<div className="flex items-center gap-1 text-xs leading-4 font-normal text-field-helper">
										<InfoIcon className="size-3" />
										<span>
											Hint text can be added here. Link
										</span>
									</div>
								</Container.Item>
							</Container>

							<Container
								className="w-full"
								containerType="grid"
								cols={{ sm: 1, md: 1, lg: 2 }}
							>
								<Container.Item className="space-y-1.5">
									<Label>Terms page</Label>
									<Input size="md" onChange={() => {}} />
									<span className="block text-xs leading-4 font-normal text-field-helper">
										This is displayed in the UI and in
										notifications.
									</span>
								</Container.Item>
								<Container.Item className="space-y-1.5">
									<Label>Privacy policy page</Label>
									<Input size="md" onChange={() => {}} />
									<span className="block text-xs leading-4 font-normal text-field-helper">
										This should be your live storefront URL.
									</span>
								</Container.Item>
							</Container>
						</Container.Item>
					</Container>
				</Container>
			</Container.Item>
		</Container>
	);
};

export const Default = Template.bind();
