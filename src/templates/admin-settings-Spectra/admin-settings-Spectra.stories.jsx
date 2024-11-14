import React from 'react';
import {
	Avatar,
	Badge,
	Button,
	Container,
	Label,
	Menu,
	Sidebar,
	Title,
	Topbar,
	Input,
	RadioButton,
	Switch,
} from '@/components';
import {
	ArrowUpRight,
	Blocks,
	CircleHelp,
	Eye,
	GitCompare,
	LayoutTemplate,
	Megaphone,
	PackageCheck,
	Settings,
	Type,
	User,
	X,
	Zap,
} from 'lucide-react';
import { SpectraLogo as Logo } from '@/ui/icons';

export default {
	title: 'Templates/Admin Settings/Admin Settings - Spectra',
	parameters: {
		layout: 'fullscreen',
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

const Template = ( args ) => {
	return (
		<Container
			{ ...args }
			containerType="flex"
			direction="column"
			gap={ 0 }
			className="h-full"
		>
			{ /* Info-bar Start */ }
			<div className="py-2 flex items-center justify-center relative bg-brand-background-hover-100">
				<div className="space-x-1 text-text-primary text-xs">
					<span className="font-semibold">
						Unlock Spectra&apos;s Full Potential!
					</span>
					<span className="font-normal">
						Get exclusive features and unbeatable performance.
					</span>
					<a
						href="#"
						target="_self"
						className="content-center text-inherit font-normal underline"
					>
						Upgrade now
					</a>
				</div>
				<button className="inline-flex items-center justify-center absolute right-2 top-2 p-0 bg-transparent shadow-none border-0 outline-none focus:outline-none cursor-pointer">
					<X className="size-4" />
					<span className='sr-only'>Close</span>
				</button>
			</div>
			{ /* Info-bar End */ }
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
								className="content-center no-underline h-full py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none text-text-secondary text-sm font-medium cursor-pointer"
							>
								Blocks
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
								AI Features
							</a>
							<a
								href="#"
								target="_self"
								className="content-center no-underline h-full py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none text-text-secondary text-sm font-medium cursor-pointer"
							>
								Free vs Pro
							</a>
							<a
								href="#"
								target="_self"
								className="content-center no-underline h-full inline-flex items-center py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none cursor-pointer text-sm font-semibold text-brand-800"
							>
								<span>Upgrade Pro Features</span>
								<ArrowUpRight
									className="size-5"
									strokeWidth="1.5"
								/>
							</a>
						</Topbar.Item>
					</Topbar.Middle>
					<Topbar.Right gap="md" className="p-5">
						<Topbar.Item>
							<Badge label="Free" size="xs" variant="neutral" />
						</Topbar.Item>
						<Topbar.Item>
							<CircleHelp
								className="size-4 m-1"
								strokeWidth="1.5"
							/>
						</Topbar.Item>
						<Topbar.Item className="relative after:content-[''] after:inline-block after:size-1.5 after:bg-badge-background-important after:rounded-full after:absolute after:-top-0.5 after:left-5">
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
			<Container.Item className="grid grid-cols-[16rem_1fr] bg-background-secondary flex-auto max-h-[calc(100%_-_6rem)]">
				<div className="h-full w-full ">
					<Sidebar
						borderOn
						collapsible={ false }
						screenHeight={ false }
						className="!h-full w-64"
					>
						<Sidebar.Body>
							<Sidebar.Item>
								<Menu size="md" className="w-full p-0 gap-4">
									<Menu.List open>
										<Menu.Item>
											<User />
											<div>My Account</div>
										</Menu.Item>
									</Menu.List>
									<Menu.List heading="Editor" open>
										<Menu.Item active>
											<Settings />
											<div>Editor Options</div>
										</Menu.Item>
										<Menu.Item>
											<LayoutTemplate />
											<div>Editor Enhancements</div>
										</Menu.Item>
									</Menu.List>
									<Menu.List heading="Utilities" open>
										<Menu.Item>
											<PackageCheck />
											<div>Asset Generation</div>
										</Menu.Item>
										<Menu.Item>
											<GitCompare />
											<div>Version Control</div>
										</Menu.Item>
										<Menu.Item>
											<Zap />
											<div>Performance</div>
										</Menu.Item>
									</Menu.List>
									<Menu.List heading="Preferences" open>
										<Menu.Item>
											<Type />
											<div>Theme Fonts</div>
										</Menu.Item>
										<Menu.Item>
											<Eye />
											<div>Site Visibility</div>
										</Menu.Item>
										<Menu.Item>
											<Blocks />
											<div>Integrations</div>
										</Menu.Item>
									</Menu.List>
								</Menu>
							</Sidebar.Item>
						</Sidebar.Body>
					</Sidebar>
				</div>
				{ /* Content Section */ }
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
								title="Editor Options"
								size="md"
								className="[&_h2]:text-text-primary [&_h2]:leading-[1.875rem]"
							/>
							<Container.Item className="inline-flex items-center gap-3">
								<Button className="px-3.5">Save</Button>
							</Container.Item>
						</Container>
						{ /* Settings */ }
						<Container
							direction="column"
							gap="sm"
							className="bg-background-primary rounded-xl shadow p-6"
						>
							{ /* Setting Section */ }
							<Container className="mb-0.5" align="center">
								<Container.Item className="w-full max-w-120 space-y-1">
									<Label htmlFor="default-width" size="md" className="font-semibold">
										Default Content Width
									</Label>
									<Label
										tag="p"
										size="sm"
										variant="help"
										className="m-0"
									>
										This setting will apply to Container
										Block&apos;s default Content Width.
									</Label>
									<Label
										tag="p"
										size="sm"
										variant="help"
										className="m-0 italic"
									>
										The current Content width is applied
										from Full Site Editor&apos;s Global
										Styles.
									</Label>
								</Container.Item>
								<Input
									id='default-width'
									defaultValue={ 1280 }
									suffix={
										<span className="text-badge-color-gray rounded border border-solid border-border-subtle p-0.5 text-center text-xs font-medium bg-badge-background-gray">
											PX
										</span>
									}
									type="number"
								/>
							</Container>

							<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />

							{ /* Setting Section */ }
							<Container className="mb-0.5" align="center">
								<Container.Item className="w-full max-w-120 space-y-1">
									<Label htmlFor="container-padding" size="md" className="font-semibold">
										Container Padding
									</Label>
									<Label
										tag="p"
										size="sm"
										variant="help"
										className="m-0"
									>
										This setting will apply default padding
										in the Container Block.
									</Label>
								</Container.Item>
								<Input
									id='container-padding'
									defaultValue={ 10 }
									suffix={
										<span className="text-badge-color-gray rounded border border-solid border-border-subtle p-0.5 text-center text-xs font-medium bg-badge-background-gray">
											PX
										</span>
									}
									type="number"
								/>
							</Container>

							<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />

							{ /* Setting Section */ }
							<Container className="mb-0.5" align="center">
								<Container.Item className="w-full max-w-120 space-y-1">
									<Label htmlFor="container-element-gap" size="md" className="font-semibold">
										Container Elements Gap
									</Label>
									<Label
										tag="p"
										size="sm"
										variant="help"
										className="m-0"
									>
										This setting will apply default Row &
										Column Gaps in the Container Block.
									</Label>
								</Container.Item>
								<Input
									id='container-element-gap'
									defaultValue={ 20 }
									suffix={
										<span className="text-badge-color-gray rounded border border-solid border-border-subtle p-0.5 text-center text-xs font-medium bg-badge-background-gray">
											PX
										</span>
									}
									type="number"
								/>
							</Container>

							<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />

							{ /* Setting Section */ }
							<Container className="mb-0.5" align="center">
								<Container.Item className="w-full max-w-95 space-y-1">
									<div className="space-x-1 flex items-center">
										<Label
											className="font-semibold"
											size="md"
										>
											Dynamic Content
										</Label>
										<span className="inline-block py-0.5 px-1 text-text-inverse bg-background-inverse border border-solid border-border-inverse text-xs font-medium rounded-full">
											PRO
										</span>
									</div>
									<Label
										tag="p"
										size="sm"
										variant="help"
										className="m-0"
									>
										Choose how you want to display dynamic
										content settings.
									</Label>
								</Container.Item>
								<Container.Item className="ml-auto">
									<RadioButton.Group
										className="[&_button]:text-xs [&_button]:font-semibold"
										size="sm"
										columns={ 2 }
										style="tile"
										disableGroup
									>
										<RadioButton.Button value="val1">
											Popup
										</RadioButton.Button>
										<RadioButton.Button value="val2">
											Sidebar
										</RadioButton.Button>
									</RadioButton.Group>
								</Container.Item>
							</Container>

							<div className="w-full flex items-center justify-between border border-solid border-brand-200 bg-brand-background-50 py-2 pl-2.5 pr-2 rounded-lg">
								<p className="m-0 text-sm text-text-primary font-normal">
									<span className="font-semibold">
										Personalized content
									</span>{ ' ' }
									delivers relevant content for higher
									engagement.
								</p>
								<a
									href="#"
									target="_self"
									className="content-center inline-flex items-center p-0 m-0 bg-transparent outline-none focus:outline-none border-0 shadow-none space-x-1 text-xs font-semibold text-link-primary no-underline"
								>
									Upgrade now{ ' ' }
									<ArrowUpRight className="size-3.5" />
								</a>
							</div>

							<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />

							{ /* Setting Section */ }
							<Container className="mb-0.5" align="center">
								<Container.Item className="w-full max-w-120 space-y-1">
									<Label htmlFor="inherit" size="md" className="font-semibold">
										Inherit Theme Button
									</Label>
									<Label
										tag="p"
										size="sm"
										variant="help"
										className="m-0"
									>
										Enable this option to make all buttons
										in Spectra blocks across your website
										inherit their styles from the theme.
									</Label>
								</Container.Item>
								<Container.Item className="ml-auto">
									<Switch id='inherit' size="lg" defaultValue={ false } />
								</Container.Item>
							</Container>

							<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />

							{ /* Setting Section */ }
							<Container className="mb-0.5" align="center">
								<Container.Item className="w-full max-w-120 space-y-1">
									<Label htmlFor="custom-css" size="md" className="font-semibold">
										Custom CSS
									</Label>
									<Label
										tag="p"
										size="sm"
										variant="help"
										className="m-0"
									>
										Enable the &quot;Custom CSS&quot; option
										if you want to add your own CSS code on
										post/page to customize the page as per
										your expectations.
									</Label>
								</Container.Item>
								<Container.Item className="ml-auto">
									<Switch id='custom-css' size="lg" defaultValue={ true } />
								</Container.Item>
							</Container>

							<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />

							{ /* Setting Section */ }
							<Container className="mb-0.5" align="center">
								<Container.Item className="w-full max-w-120 space-y-1">
									<Label htmlFor="copy-paste-styles" size="md" className="font-semibold">
										Copy Paste Styles
									</Label>
									<Label
										tag="p"
										size="sm"
										variant="help"
										className="m-0"
									>
										Enable the &quot;Copy Paste Styles&quot;
										option to have the ability to copy &
										paste Spectra & Core Gutenberg Blocks
										Styles.
									</Label>
								</Container.Item>
								<Container.Item className="ml-auto">
									<Switch id="copy-paste-styles" size="lg" defaultValue={ true } />
								</Container.Item>
							</Container>

							<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />

							{ /* Setting Section */ }
							<Container className="mb-0.5" align="center">
								<Container.Item className="w-full max-w-120 space-y-1">
									<Label htmlFor="block-recovery" size="md" className="font-semibold">
										Automatic Block Recovery
									</Label>
									<Label
										tag="p"
										size="sm"
										variant="help"
										className="m-0"
									>
										Enable this to automatically recover any
										erroneous blocks that may occur on your
										web pages. This will save you time spent
										on clicking all those &quot;Attempt
										Block Recovery&quot; Buttons.
									</Label>
								</Container.Item>
								<Container.Item className="ml-auto">
									<Switch id="block-recovery" size="lg" defaultValue={ true } />
								</Container.Item>
							</Container>

							<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />

							{ /* Setting Section */ }
							<Container className="mb-0.5" align="center">
								<Container.Item className="w-full max-w-120 space-y-1">
									<Label htmlFor="font-awesome-support" size="md" className="font-semibold">
										Load Font Awesome 5 Support
									</Label>
									<Label
										tag="p"
										size="sm"
										variant="help"
										className="m-0"
									>
										Enable this to make sure all previously
										used Font Awesome 5 icons are displayed
										correctly while using the Font Awesome 6
										library.
									</Label>
								</Container.Item>
								<Container.Item className="ml-auto">
									<Switch id="font-awesome-support" size="lg" defaultValue={ true } />
								</Container.Item>
							</Container>
						</Container>
					</Container>
				</form>
			</Container.Item>
		</Container>
	);
};

export const Default = Template.bind();
