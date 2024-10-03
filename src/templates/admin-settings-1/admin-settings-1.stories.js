import React, { useState } from 'react';
import { Avatar, Badge, Button, Container, Sidebar, Tabs, Title, Topbar } from '@/components';
import { ArrowUpRight, ChartNoAxesColumnIncreasing, ChevronRight, ChevronsLeft, ChevronsRight, CircleHelp, CreditCard, Dot, Megaphone, MousePointer, PenTool, RefreshCcw, ShoppingBag, ShoppingCart, Store, Tag, Truck, User } from 'lucide-react';


export default {
	title: 'Templates/Admin Settings 1',
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [
		(Story, parameters) => (
			<div className="box-border [&_*]:box-border w-full">
				<Story {...parameters} />
			</div>
		),
	],
	tags: [ 'autodocs' ],
};

const TABS = [
	{
		label: 'General',
		slug: 'general',
	},
	{
		label: 'Social',
		slug: 'social',
	},
	{
		label: 'Advanced',
		slug: 'advanced',
	},
]

const SEPARATORS = [
	{ id: '-', label: '-' },
	{ id: '—', label: '—' },
	{ id: '»', label: <ChevronsRight /> },
	{ id: '›', label: <ChevronRight /> },
	{ id: '|', label: '|' },
	{ id: '•', label: <Dot /> },
	{ id: '«', label: <ChevronsLeft /> },
];

const Template = () => {
	const [ activeTab, setActiveTab ] = useState( TABS[0].slug );

	const handleChangeTab = ( { event, value: { slug } } ) => {
		event.preventDefault();
		event.stopPropagation();

		setActiveTab( slug );
	}

	return (
		<Container containerType="flex" direction="column" gap={0}>
			<Container.Item>
				{/* Navigation Bar */}
				<Topbar
					gap={0}
					className="w-auto min-h-[unset] h-16 shadow-sm p-0"
				>
					<Topbar.Left className="p-5">
						<Topbar.Item>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12 24C18.6275 24 24 18.6273 24 11.9999C24 5.37255 18.6275 0 12 0C5.37259 0 0 5.37255 0 11.9999C0 18.6273 5.37259 24 12 24ZM12.0517 5.99996C11.0882 5.99996 9.75474 6.55101 9.0734 7.23073L7.2229 9.07688H16.4465L19.5307 5.99996H12.0517ZM14.9111 16.7692C14.2298 17.4489 12.8964 17.9999 11.9328 17.9999H4.45388L7.53804 14.923H16.7616L14.9111 16.7692ZM17.9089 10.6153H5.68418L5.10673 11.1923C3.73941 12.423 4.14495 13.3846 6.0598 13.3846H18.3176L18.8952 12.8076C20.2492 11.5841 19.8237 10.6153 17.9089 10.6153Z"
									fill="#6B21A8"
								/>
							</svg>
						</Topbar.Item>
					</Topbar.Left>
					<Topbar.Middle align="left" className="h-full">
						<Topbar.Item className="h-full gap-4">
							<button className="h-full py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none text-text-tertiary text-sm font-medium cursor-pointer">
								Dashboard
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
			<Container.Item className="grid grid-cols-[16rem_1fr] bg-background-secondary">
				<div className="h-full w-full">
					<Sidebar borderOn collapsible={false} screenHeight={false}>
						<Sidebar.Header>
							<Sidebar.Item>
								<img
									alt="Logo"
									src="https://wordpress.org/five-for-the-future/files/2019/09/bsf-logo-.png"
									width="180px"
								/>
							</Sidebar.Item>
						</Sidebar.Header>
						<Sidebar.Body>
							<Sidebar.Item>
								<div className="flex flex-col gap-2">
									<div>
										<p className="text-slate-500">Store</p>
										<div>
											<div className="px-2 py-1 flex items-center gap-2 cursor-pointer rounded-md hover:bg-slate-100 false">
												<span className="mt-[4px]">
													<Store size={20} />
												</span>
												<span className="text-base">
													Store Settings
												</span>
											</div>
											<div className="px-2 py-1 flex items-center gap-2 cursor-pointer rounded-md hover:bg-slate-100 false">
												<span className="mt-[4px]">
													<PenTool size={20} />
												</span>
												<span className="text-base">
													Design & Branding
												</span>
											</div>
										</div>
									</div>
									<div>
										<p className="text-slate-500">
											Orders & Sales
										</p>
										<div>
											<div className="px-2 py-1 flex items-center gap-2 cursor-pointer rounded-md hover:bg-slate-100 false">
												<span className="mt-[4px]">
													<ShoppingBag size={20} />
												</span>
												<span className="text-base">
													Orders & Receipts
												</span>
											</div>
											<div className="px-2 py-1 flex items-center gap-2 cursor-pointer rounded-md hover:bg-slate-100 false">
												<span className="mt-[4px]">
													<ShoppingCart size={20} />
												</span>
												<span className="text-base">
													Abandoned Checkout
												</span>
											</div>
											<div className="px-2 py-1 flex items-center gap-2 cursor-pointer rounded-md hover:bg-slate-100 false">
												<span className="mt-[4px]">
													<Tag size={20} />
												</span>
												<span className="text-base">
													Taxes
												</span>
											</div>
											<div className="px-2 py-1 flex items-center gap-2 cursor-pointer rounded-md hover:bg-slate-100 false">
												<span className="mt-[4px]">
													<Truck size={20} />
												</span>
												<span className="text-base">
													Shipping
												</span>
											</div>
											<div className="px-2 py-1 flex items-center gap-2 cursor-pointer rounded-md hover:bg-slate-100 false">
												<span className="mt-[4px]">
													<CreditCard size={20} />
												</span>
												<span className="text-base">
													Payment Processors
												</span>
											</div>
										</div>
									</div>
									<div>
										<p className="text-slate-500">
											Customers
										</p>
										<div>
											<div className="px-2 py-1 flex items-center gap-2 cursor-pointer rounded-md hover:bg-slate-100 false">
												<span className="mt-[4px]">
													<MousePointer size={20} />
												</span>
												<span className="text-base">
													Affiliates
												</span>
											</div>
											<div className="px-2 py-1 flex items-center gap-2 cursor-pointer rounded-md hover:bg-slate-100 false">
												<span className="mt-[4px]">
													<RefreshCcw size={20} />
												</span>
												<span className="text-base">
													Subscriptions
												</span>
											</div>
											<div className="px-2 py-1 flex items-center gap-2 cursor-pointer rounded-md hover:bg-slate-100 false">
												<span className="mt-[4px]">
													<ChartNoAxesColumnIncreasing
														size={20}
													/>
												</span>
												<span className="text-base">
													Subscriptions Saver
												</span>
											</div>
										</div>
									</div>
								</div>
							</Sidebar.Item>
						</Sidebar.Body>
						<Sidebar.Footer>
							<Sidebar.Item>
								<Button className="w-full">Pro Version</Button>
							</Sidebar.Item>
						</Sidebar.Footer>
					</Sidebar>
				</div>
				<Container
					gap="xl"
					direction="column"
					className="p-8 w-full max-w-[43.5rem] mx-auto"
				>
					<Container justify="between" align="center">
						<Title
							title="Home Page"
							size="md"
							className="[&_h2]:text-text-primary [&_h2]:leading-[1.875rem]"
						/>
						<Button>Save</Button>
					</Container>
					{/* Settings */}
					<Container
						direction="column"
						className="bg-background-primary rounded-xl shadow py-4 px-6"
					>
						{/* Tabs */}
						<Container.Item>
							<Tabs.Group
								activeItem={activeTab}
								defaultValue={activeTab}
								onChange={handleChangeTab}
								orientation="horizontal"
								size="md"
								variant="underline"
								width="auto"
							>
								{
									TABS.map(({ label, slug }) => (
										<Tabs.Tab key={label} slug={slug} text={label} />
									))
								}
							</Tabs.Group>
						</Container.Item>
						{/* Tab Content */}
						<Container.Item>
							
						</Container.Item>
					</Container>
				</Container>
			</Container.Item>
		</Container>
	);
};

export const Default = Template.bind();
