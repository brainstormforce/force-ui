import React, { useCallback, useState } from 'react';
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
	Tooltip,
} from '@/components';
import {
	ArrowUpRight,
	Bell,
	ChartNoAxesColumnIncreasing,
	CircleHelp,
	CloudUpload,
	EllipsisVertical,
	Facebook,
	House,
	Layers,
	Megaphone,
	Monitor,
	MousePointer,
	Settings,
	Share2,
	Smartphone,
	Twitter,
	Type,
	User,
} from 'lucide-react';
import { SureRankLogo as Logo } from '@/icons';

export default {
	title: 'Templates/Admin Settings/Admin Settings - SureRank',
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [
		( Story, parameters ) => (
			<div
				id="story-root-tw"
				className="box-border [&_*]:box-border w-full h-[100dvh]"
			>
				<Story { ...parameters } />
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
];

const INPUT_SUGGESTIONS = [
	{ value: '%page-title%', label: 'Page Title' },
	{ value: '%site-title%', label: 'Site Title' },
	{ value: '%separator%', label: 'Separator' },
];

const Template = () => {
	const [ activeTab, setActiveTab ] = useState( TABS[ 0 ].slug );

	const handleChangeTab = ( { event, value: { slug } } ) => {
		event.preventDefault();
		event.stopPropagation();

		setActiveTab( slug );
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
			.split( /(\n|%[\w\-_]+%)/ )
			.filter( Boolean );

		content.forEach( ( item ) => {
			if ( item === '\n' ) {
				value.root.children[ 0 ].children.push( {
					type: 'linebreak',
					version: 1,
				} );
			} else if ( item.startsWith( '%' ) && item.endsWith( '%' ) ) {
				const option = options.find(
					( mentionItem ) => mentionItem[ optionValueKey ] === item.trim()
				);
				if ( option ) {
					value.root.children[ 0 ].children.push( {
						...mentionObjectStructure,
						data: { ...option },
					} );
				}
			} else {
				value.root.children[ 0 ].children.push( {
					detail: 0,
					format: 0,
					mode: 'normal',
					style: '',
					text: item,
					type: 'text',
					version: 1,
				} );
			}
		} );

		return JSON.stringify( value );
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
								className="content-center no-underline h-full py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none text-text-tertiary text-sm font-medium cursor-pointer"
							>
								Dashboard
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
								className="content-center no-underline h-full py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none text-text-tertiary text-sm font-medium cursor-pointer"
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
								label="V 0.0.2"
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
							<Megaphone
								className="size-4 m-1"
								strokeWidth="1.5"
							/>
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
									<Menu.List arrow heading="General" open>
										<Menu.Item>
											<Type />
											<div>Titles and Descriptions</div>
										</Menu.Item>
										<Menu.Item active>
											<House />
											<div>Home Page</div>
										</Menu.Item>
									</Menu.List>
									<Menu.List heading="Social" open arrow>
										<Menu.Item>
											<Settings />
											<div>General</div>
										</Menu.Item>
										<Menu.Item>
											<Facebook />
											<div>Facebook</div>
										</Menu.Item>
										<Menu.Item>
											<Twitter />
											<div>X (Twitter)</div>
										</Menu.Item>
										<Menu.Item>
											<Share2 />
											<div>Social Account</div>
										</Menu.Item>
									</Menu.List>
									<Menu.List arrow heading="Advanced">
										<Menu.Item>
											<MousePointer />
											<div>Affiliates</div>
										</Menu.Item>
										<Menu.Item>
											<ChartNoAxesColumnIncreasing />
											<div>Subscriptions Saver</div>
										</Menu.Item>
									</Menu.List>
									<Menu.List arrow heading="Tools">
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
				{ /* Content section */ }
				<form
					onSubmit={ ( event ) => event.preventDefault() }
					className="w-full h-full overflow-y-auto"
				>
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
							<Button className="px-3.5">Save</Button>
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
								'general',
								<>
									<Container.Item className="flex flex-col items-start gap-2">
										<div className="flex flex-col items-start gap-2.5">
											{ /* Search Engine Preview Start */ }
											<Container
												align="center"
												justify="between"
												className="w-full"
											>
												<Container.Item>
													<Label>
														<span>
															Search Engine
															Preview
														</span>
														<Tooltip
															label={ {
																heading: '',
																description: "This is just a preview of how your page will look in search engine results",
															} }
															tooltipPortalId="story-root-tw"
															content="."
															arrow
															placement="top"
														>
															<CircleHelp
																className="size-4"
																strokeWidth="1.5"
															/>
														</Tooltip>
													</Label>
												</Container.Item>
												<Container.Item>
													<RadioButton.Group
														size="xs"
														style="tile"
														columns="2"
														defaultValue="desktop"
													>
														<RadioButton.Button value="desktop">
															<Monitor className="size-4" />
														</RadioButton.Button>
														<RadioButton.Button value="mobile">
															<Smartphone className="size-4" />
														</RadioButton.Button>
													</RadioButton.Group>
												</Container.Item>
											</Container>
											{ /* Preview */ }
											<div className="p-2 rounded-lg bg-background-secondary">
												<div className="rounded-md border border-solid border-border-subtle bg-background-primary p-4 space-y-1.5 shadow-sm">
													{ /* Site logo, title, and URL */ }
													<div className="grid grid-cols-[1.75rem_1fr] items-center gap-3">
														{ /* Site logo */ }
														<Logo className="size-7" />
														<div className="flex flex-col gap-0.5">
															<span className="text-text-primary font-semibold">
																SureRank
															</span>
															<div className="flex items-center justify-start gap-2">
																<span className="text-text-secondary">
																	{ /* Site URL */ }
																	https://www.surerank.com/
																</span>
																<EllipsisVertical className="size-3.5 text-icon-secondary" />
															</div>
														</div>
													</div>
													{ /* Page title and description */ }
													<div className="space-y-1">
														<p className="text-xl leading-8 font-normal text-[#190EA4] m-0">
															{ /* Page title */ }
															SureRank
														</p>
														<p className="text-sm leading-5 font-medium text-text-secondary m-0">
															{ /* Page description */ }
															Level up your web
															design skills with
															our blog. Learn from
															experts, discover
															the latest trends,
															and build beautiful
															websites.
														</p>
													</div>
												</div>
											</div>
											{ /* Search Engine Preview End */ }
										</div>
									</Container.Item>
									<Container
										direction="column"
										className="w-full gap-1.5"
									>
										<Container.Item className="w-full flex items-center gap-1">
											<Label className="inline-block">
												<span>Page Title</span>
											</Label>
											<span className="inline-block text-xs font-normal text-field-helper">
												0/60
											</span>
										</Container.Item>
										<Container.Item className="w-full">
											<EditorInput
												defaultValue={ stringValueToFormatJSON(
													'%page-title% %separator% %site-title%',
													INPUT_SUGGESTIONS
												) }
												by="label"
												placeholder="Press # to view variable suggestions"
												options={ INPUT_SUGGESTIONS }
												trigger="#"
												size="md"
											/>
										</Container.Item>
										<Label
											tag="p"
											size="sm"
											variant="help"
											className="m-0"
										>
											Type # to view variable suggestions
										</Label>
									</Container>
									<Container
										direction="column"
										className="w-full gap-1.5"
									>
										<Container.Item className="w-full flex items-center gap-1">
											<Label className="inline-block">
												<span>Page Description</span>
											</Label>
											<span className="inline-block text-xs font-normal text-field-helper">
												0/60
											</span>
										</Container.Item>
										<EditorInput
											by="label"
											className="!min-h-32 [&+div]:items-start [&+div]:pt-1"
											placeholder=""
											options={ INPUT_SUGGESTIONS }
											trigger="#"
											size="md"
										/>
										<Label
											tag="p"
											size="sm"
											variant="help"
											className="m-0"
										>
											Type # to view variable suggestions
										</Label>
									</Container>
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
