import {
	Topbar,
	Avatar,
	Container,
	Title,
	Label,
	Button,
	Badge,
	RadioButton,
} from '@/components';
import {
	ArrowUpRight,
	CircleHelp,
	Bell,
	CirclePlay,
	Ellipsis,
	Upload,
	Paintbrush,
	PanelTop,
	PanelBottom,
	PaintBucket,
	Type,
	SquareMousePointer,
	PenTool,
	LayoutTemplate,
	Menu,
	Palette,
	Baseline,
	Ruler,
	Newspaper,
	PanelTopDashed,
	PanelsTopLeft,
} from 'lucide-react';
import { AstraThemeLogo as Logo } from '@/ui/icons';

export default {
	title: 'Templates/Dashboard/Astra Dashboard',
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

const defaultRadioButtonGroupData = [
	{
		id: '1',
		value: 'analytics',
		icon: <Upload />,
		label: 'Site Identity',
		toggleLabel: 'Enable',
		hideSelection: true,
		useSwitch: false,
	},
	{
		id: '2',
		value: 'notifications',
		icon: <Paintbrush />,
		label: 'Style Guide',
		toggleLabel: 'Disable',
		hideSelection: true,
		useSwitch: false,
		badge: (
			<Badge
				label={ 'New' }
				size="xxs"
				icon={ null }
				variant="blue"
				closable={ false }
				className="py-0"
			/>
		),
	},
	{
		id: '3',
		value: 'settings',
		icon: <PanelTop />,
		label: 'Header Builder',
		toggleLabel: 'Settings',
		hideSelection: true,
		useSwitch: false,
	},
	{
		id: '4',
		value: 'security',
		icon: <PanelBottom />,
		label: 'Footer Builder',
		toggleLabel: 'Security',
		hideSelection: true,
		useSwitch: false,
	},
	{
		id: '5',
		value: 'marketing',
		icon: <PaintBucket />,
		label: 'Colors',
		toggleLabel: 'Billing',
		hideSelection: true,
		useSwitch: false,
	},
	{
		id: '6',
		value: 'modal',
		icon: <Type />,
		label: 'Typography',
		toggleLabel: 'modal',
		hideSelection: true,
		useSwitch: false,
	},
	{
		id: '7',
		value: 'socialshare',
		icon: <SquareMousePointer />,
		label: 'Button',
		toggleLabel: 'socialshare',
		hideSelection: true,
		useSwitch: false,
	},
	{
		id: '8',
		value: 'Blockquote',
		icon: <PenTool />,
		label: 'Blog',
		toggleLabel: 'blockquote',
		hideSelection: true,
		useSwitch: false,
	},
	{
		id: '9',
		value: 'contenttimeline',
		icon: <LayoutTemplate />,
		label: 'Layout',
		toggleLabel: 'contenttimeline',
		hideSelection: true,
		useSwitch: false,
	},
	{
		id: '10',
		value: 'googlemaps',
		icon: <Menu />,
		label: 'Menus',
		toggleLabel: 'googlemaps',
		hideSelection: true,
		useSwitch: false,
	},
	{
		id: '11',
		value: 'lottieanimation',
		icon: <Palette />,
		label: 'Background',
		toggleLabel: 'lottieanimation',
		hideSelection: true,
		useSwitch: false,
		badge: (
			<Badge
				label={ 'PRO' }
				size="xxs"
				icon={ null }
				variant="neutral"
				closable={ false }
				className="py-0 mr-2"
			/>
		),
		disabled: true,
	},
	{
		id: '12',
		value: 'animations',
		icon: <Baseline />,
		label: 'Advanced Typography',
		toggleLabel: 'animations',
		hideSelection: true,
		useSwitch: false,
		badge: (
			<Badge
				label={ 'PRO' }
				size="xxs"
				icon={ null }
				variant="neutral"
				closable={ false }
				className="py-0 mr-2"
			/>
		),
		disabled: true,
	},
	{
		id: '13',
		value: 'animations',
		icon: <Ruler />,
		label: 'Spacing',
		toggleLabel: 'animations',
		hideSelection: true,
		useSwitch: false,
		badge: (
			<Badge
				label={ 'PRO' }
				size="xxs"
				icon={ null }
				variant="neutral"
				closable={ false }
				className="py-0 mr-2"
			/>
		),
		disabled: true,
	},
	{
		id: '14',
		value: 'animations',
		icon: <Newspaper />,
		label: 'Blog Pro',
		toggleLabel: 'animations',
		hideSelection: true,
		useSwitch: false,
		badge: (
			<Badge
				label={ 'PRO' }
				size="xxs"
				icon={ null }
				variant="neutral"
				closable={ false }
				className="py-0 mr-2"
			/>
		),
		disabled: true,
	},
	{
		id: '15',
		value: 'animations',
		icon: <PanelTopDashed />,
		label: 'Sticky Header',
		toggleLabel: 'animations',
		hideSelection: true,
		useSwitch: false,
		badge: (
			<Badge
				label={ 'PRO' }
				size="xxs"
				icon={ null }
				variant="neutral"
				closable={ false }
				className="py-0 mr-2"
			/>
		),
		disabled: true,
	},
	{
		id: '16',
		value: 'animations',
		icon: <PanelsTopLeft />,
		label: 'Site Layouts',
		toggleLabel: 'animations',
		hideSelection: true,
		useSwitch: false,
		badge: (
			<Badge
				label={ 'PRO' }
				size="xxs"
				icon={ null }
				variant="neutral"
				closable={ false }
				className="py-0 mr-2"
			/>
		),
		disabled: true,
	},
];

const astraRadioButtonGroupData = [
	{
		id: '1',
		svg: <Logo className="size-5" />,
		title: 'Astra Theme',
		description: 'Free WordPress Page Builder Plugin.',
	},
	{
		id: '2',
		svg: <Logo className="size-5" />,
		title: 'Starters Templates',
		description: 'Build your dream website in minutes with AI.',
	},
	{
		id: '3',
		svg: <Logo className="size-5" />,
		title: 'SureCart',
		description: 'The new way to sell on WordPress.',
	},
	{
		id: '4',
		svg: <Logo className="size-5" />,
		title: 'SureTriggers',
		description: 'Automate your WordPress setup.',
	},
];

export const AstraDashboard = ( args ) => {
	return (
		<div { ...args }>
			{ /* Navigation Topbar */ }
			<Topbar gap={ 0 } className="h-16 p-0 shadow-sm">
				<Topbar.Left className="p-5">
					<Topbar.Item>
						<Logo className="size-6" />
					</Topbar.Item>
				</Topbar.Left>
				<Topbar.Middle align="left" className="h-full">
					<Topbar.Item className="gap-3">
						<a
							href="#"
							target="_self"
							className="content-center no-underline relative h-full py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none text-text-primary text-sm font-medium cursor-pointer"
						>
							<span>Dashboard</span>
							<span className="absolute bottom-0 left-0 w-full h-px bg-brand-primary-600"></span>
						</a>
						<a
							href="#"
							target="_self"
							className="content-center no-underline h-full py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none text-text-tertiary text-sm font-medium cursor-pointer"
						>
							Settings
						</a>
						<a
							href="#"
							target="_self"
							className="content-center no-underline h-full py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none text-text-tertiary text-sm font-medium cursor-pointer"
						>
							Starter Templates
						</a>
						<a
							href="#"
							target="_self"
							className="content-center no-underline h-full inline-flex items-center py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none cursor-pointer text-sm font-semibold text-brand-primary-600"
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
							closable={ false }
						/>
					</Topbar.Item>
					<Topbar.Item className="gap-2">
						<CircleHelp strokeWidth={ 1.5 } className="size-4 m-1" />
						<Bell strokeWidth={ 1.5 } className="size-4 m-1" />
					</Topbar.Item>
					<Topbar.Item>
						<Avatar
							size="sm"
							border="none"
							url="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
						/>
					</Topbar.Item>
				</Topbar.Right>
			</Topbar>

			{ /* Content */ }
			<div className="bg-background-secondary">
				<Container
					containerType="grid"
					cols={ 12 }
					gap="2xl"
					className="p-8 max-w-[82rem] mx-auto"
				>
					<Container.Item colSpan={ 8 } className="flex flex-col gap-8">
						{ /* Welcome Astra card */ }
						<Container
							containerType="grid"
							cols={ 8 }
							gap="2xl"
							className="bg-background-primary p-6 shadow-sm rounded-xl"
						>
							<Container.Item
								colSpan={ 5 }
								className="flex flex-col gap-6"
							>
								<div>
									<Title
										tag="h3"
										title="Welcome to Astra"
										size="lg"
										className="text-text-primary mb-1"
									/>
									<p className="text-sm text-text-secondary m-0">
										Astra is fast, fully customizable &
										beautiful WordPress theme suitable for
										blog, personal portfolio, business
										website and WooCommerce storefront. It
										is very lightweight and offers
										unparalleled speed.
									</p>
								</div>
								<div className="flex gap-3">
									<Button>Start Customizing</Button>
									<Button
										variant="ghost"
										icon={ <CirclePlay /> }
									>
										Watch a Quick Guide
									</Button>
								</div>
							</Container.Item>
							<Container.Item colSpan={ 3 }>
								<img
									src="https://placehold.co/272x154"
									alt="Astra video"
									className="w-full h-full object-cover rounded"
								/>
							</Container.Item>
						</Container>
						{ /* Quick Settings card */ }
						<Container
							containerType="flex"
							direction="column"
							className="md:w-full lg:w-full bg-background-primary border-[0.5px] border-solid border-border-subtle rounded-xl p-4"
							gap="xs"
						>
							<Container.Item className="md:w-full p-1 lg:w-full">
								<Container
									justify="between"
									align="center"
									gap="xs"
								>
									<Container.Item>
										<Label
											size="md"
											className="font-semibold"
										>
											Quick Settings
										</Label>
									</Container.Item>
									<Container.Item className="items-center flex gap-2">
										<Button
											variant="ghost"
											className="leading-none text-icon-secondary"
											icon={ <Ellipsis /> }
											aria-label="Options"
										></Button>
										<Button
											variant="ghost"
											className="leading-none text-icon-secondary"
											icon={ <ArrowUpRight /> }
											aria-label="View More"
										></Button>
									</Container.Item>
								</Container>
							</Container.Item>
							<Container.Item className="md:w-full lg:w-full p-2 rounded-lg bg-background-secondary">
								<RadioButton.Group
									as="div"
									defaultValue={ `option-${ defaultRadioButtonGroupData[ 0 ].id }` }
									multiSelection={ true }
									onChange={ ( value ) => {
										return value;
									} }
									className="w-full"
								>
									{ defaultRadioButtonGroupData.map(
										( option ) => (
											<RadioButton.Button
												key={ `option-${ option.id }` }
												borderOn={ false }
												value={ option.value }
												icon={ option.icon }
												hideSelection={
													option.hideSelection
												}
												toggleLabel={ option.toggleLabel }
												label={ {
													heading: option.label,
												} }
												useSwitch={ option.useSwitch }
												className="px-2"
												badgeItem={ option.badge }
												disabled={ option.disabled }
												buttonWrapperClasses="bg-background-primary rounded-md shadow-sm border-0"
											/>
										)
									) }
								</RadioButton.Group>
							</Container.Item>
							<Container.Item className="flex items-center justify-center gap-2 text-text-primary text-sm bg-background-secondary rounded-lg p-3">
								<Logo className="size-5" />
								<span className="font-semibold">
									Do More with Astra Pro
								</span>
								<span className="font-normal text-text-secondary">
									Get access to powerful features without the
									high costs.
								</span>
								<a
									href="#"
									target="_self"
									className="content-center no-underline h-full inline-flex items-center py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none cursor-pointer text-sm font-semibold text-brand-primary-600"
								>
									<span>Upgrade to Pro</span>
									<ArrowUpRight
										className="size-5"
										strokeWidth="1.5"
									/>
								</a>
							</Container.Item>
						</Container>
					</Container.Item>

					<Container.Item colSpan={ 4 } className="flex flex-col gap-8">
						{ /* Inegrations card */ }
						<Container
							containerType="flex"
							gap="xs"
							direction="column"
							className="border-[0.5px] border-solid border-border-subtle rounded-xl p-4 bg-background-primary"
						>
							<Container.Item className="md:w-full lg:w-full">
								<Container
									className="p-1"
									justify="between"
									align="center"
									gap="xs"
								>
									<Container.Item>
										<Label className="font-semibold">
											Integrations
										</Label>
									</Container.Item>
									<Container.Item
										containerType="flex"
										direction="row"
										className="items-center"
										gap="xs"
									>
										<Button
											className="text-text-secondary"
											variant="ghost"
											icon={ <ArrowUpRight /> }
											aria-label="View More"
										></Button>
									</Container.Item>
								</Container>
							</Container.Item>
							<Container.Item className="md:w-full lg:w-full bg-field-primary-background rounded-lg">
								<Container className="grid grid-cols-2 p-1 gap-1">
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
															className="peer-[]:&>svg]:size-5"
															grow={ 1 }
															order="none"
															shrink={ 1 }
														>
															{ card.svg }
														</Container.Item>
													</Container>
												</Container.Item>
												<Container.Item className="gap-0.5 p-1">
													<Label className="text-sm font-semibold">
														{ card.title }
													</Label>
													<Label
														variant="help"
														className="text-sm"
													>
														{ card.description }
													</Label>
												</Container.Item>
											</Container>
										</Container.Item>
									) ) }
								</Container>
							</Container.Item>
						</Container>
						{ /* Vip Support card */ }
						<Container
							containerType="grid"
							gap="xs"
							className="p-5 bg-background-primary border-[0.5px] border-solid border-border-subtle shadow-sm rounded-xl"
						>
							<Container.Item>
								<Container gap="xs" align="center">
									<div className="text-base font-semibold text-text-primary">
										VIP Support
									</div>
									<Badge
										label={ 'PRO' }
										size="xxs"
										icon={ null }
										variant="inverse"
										closable={ false }
										className="py-0"
									/>
								</Container>
							</Container.Item>
							<Container.Item>
								<Container>
									<div className="text-sm text-text-secondary mb-2">
										Faster and exclusive support service
										designed for VIP assistance and
										benefits.
									</div>
								</Container>
							</Container.Item>
							<Container.Item>
								<Button variant="link">Know more</Button>
							</Container.Item>
						</Container>
						{ /* Join the Community card */ }
						<Container
							containerType="grid"
							gap="xs"
							className="p-5 bg-background-primary border-[0.5px] border-solid border-border-subtle shadow-sm rounded-xl"
						>
							<Container.Item>
								<Container gap="xs" align="center">
									<div className="text-base font-semibold text-text-primary">
										Join the Community
									</div>
								</Container>
							</Container.Item>
							<Container.Item>
								<Container>
									<div className="text-sm text-text-secondary mb-2">
										Got a question about the plugin, want to
										share your awesome project? Join our
										wonderful community!
									</div>
								</Container>
							</Container.Item>
							<Container.Item>
								<Button variant="link">Join now</Button>
							</Container.Item>
						</Container>
					</Container.Item>
				</Container>
			</div>
		</div>
	);
};
