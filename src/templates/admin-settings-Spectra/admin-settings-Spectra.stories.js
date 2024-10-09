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

const Logo = ( props ) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{ ...props }
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37257 18.6274 0 12 0C5.37257 0 0 5.37257 0 12C0 18.6274 5.37257 24 12 24ZM15.6902 15.516C16.384 15.0774 16.8 14.3435 16.8 13.5581C16.8 12.4668 16.0032 11.5178 14.8731 11.2631L11.4871 10.4226C11.1679 10.3507 11.0914 9.95709 11.3629 9.78387L14.0009 8.10127C15.2289 7.31805 15.5481 5.74841 14.714 4.59538C14.6098 4.45125 14.4008 4.41377 14.2473 4.51169L8.28802 8.53145C7.60745 8.96554 7.2 9.68798 7.2 10.4605C7.2 11.5388 7.98723 12.4764 9.10385 12.7281L12.545 13.581C12.865 13.6531 12.9408 14.048 12.6679 14.2205L10.0105 15.9005C8.77913 16.6789 8.45294 18.2473 9.28193 19.4035C9.38558 19.5481 9.59434 19.5864 9.74829 19.489L15.6902 15.516Z"
			fill="#6005FF"
		/>
	</svg>
);

const Template = () => {
	return (
		<Container
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
					<span className="font-normal underline">Upgrade now</span>
				</div>
				<button className="inline-flex items-center justify-center absolute right-2 top-2 p-0 bg-transparent shadow-none border-0 outline-none focus:outline-none cursor-pointer">
					<X className="size-4" />
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
							<button className="h-full py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none text-text-tertiary text-sm font-medium cursor-pointer">
								Dashboard
							</button>
							<button className="h-full py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none text-text-tertiary text-sm font-medium cursor-pointer">
								Blocks
							</button>
							{ /* Active Nav Item */ }
							<button className="relative h-full py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none text-text-primary text-sm font-medium cursor-pointer">
								<span>Settings</span>
								<span className="absolute bottom-0 left-0 w-full h-px bg-brand-800"></span>
							</button>
							<button className="h-full py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none text-text-tertiary text-sm font-medium cursor-pointer">
								AI Features
							</button>
							<button className="h-full py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none text-text-tertiary text-sm font-medium cursor-pointer">
								Free vs Pro
							</button>
							<button className="h-full inline-flex items-center py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none cursor-pointer text-sm font-semibold text-brand-800">
								<span>Upgrade Pro Features</span>
								<ArrowUpRight
									className="size-5"
									strokeWidth="1.5"
								/>
							</button>
						</Topbar.Item>
					</Topbar.Middle>
					<Topbar.Right gap="md" className="p-5">
						<Topbar.Item>
							<Badge label="Free" size="xs" variant="neutral" />
						</Topbar.Item>
						<Topbar.Item className="gap-2">
							<CircleHelp strokeWidth="1.5" />
						</Topbar.Item>
						<Topbar.Item className="relative after:content-[''] after:inline-block after:size-1.5 after:bg-badge-background-important after:rounded-full after:absolute after:-top-0.5 after:left-5">
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
			{ /* Sidebar & the content section */ }
			<Container.Item className="grid grid-cols-[16rem_1fr] bg-background-secondary flex-auto max-h-[calc(100%_-_6rem)]">
				<div className="h-full w-full">
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
								<Button>Save</Button>
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
									<Label size="md">
										Default Content Width
									</Label>
									<p className="m-0 block text-sm leading-4 font-normal text-field-helper">
										This setting will apply to Container
										Block&apos;s default Content Width.
									</p>
									<p className="m-0 block text-sm leading-4 font-normal text-field-helper italic">
										The current Content width is applied
										from Full Site Editor&apos;s Global
										Styles.
									</p>
								</Container.Item>
								<Input
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
									<Label size="md">Container Padding</Label>
									<p className="m-0 block text-sm leading-4 font-normal text-field-helper">
										This setting will apply default padding
										in the Container Block.
									</p>
								</Container.Item>
								<Input
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
									<Label size="md">
										Container Elements Gap
									</Label>
									<p className="m-0 block text-sm leading-4 font-normal text-field-helper">
										This setting will apply default Row &
										Column Gaps in the Container Block.
									</p>
								</Container.Item>
								<Input
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
								<Container.Item className="w-full max-w-120 space-y-1">
									<Label className="inline-block" size="md">
										Container Elements Gap
									</Label>
									<p className="m-0 block text-sm leading-4 font-normal text-field-helper">
										This setting will apply default Row &
										Column Gaps in the Container Block.
									</p>
								</Container.Item>
								<Input
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
											className="inline-block"
											size="md"
										>
											Dynamic Content
										</Label>
										<span className="inline-block py-0.5 px-1 text-text-inverse bg-background-inverse border border-solid border-border-inverse text-xs font-medium rounded-full">
											PRO
										</span>
									</div>
									<p className="m-0 block text-sm leading-4 font-normal text-field-helper">
										Choose how you want to display dynamic
										content settings.
									</p>
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
								<button className="inline-flex items-center p-0 m-0 bg-transparent outline-none focus:outline-none border-0 shadow-none space-x-1 text-xs font-semibold text-link-primary">
									Upgrade now{ ' ' }
									<ArrowUpRight className="size-3.5" />
								</button>
							</div>

							<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />

							{ /* Setting Section */ }
							<Container className="mb-0.5" align="center">
								<Container.Item className="w-full max-w-120 space-y-1">
									<Label size="md">
										Inherit Theme Button
									</Label>
									<p className="m-0 block text-sm leading-4 font-normal text-field-helper">
										Enable this option to make all buttons
										in Spectra blocks across your website
										inherit their styles from the theme.
									</p>
								</Container.Item>
								<Container.Item className="ml-auto">
									<Switch size="lg" defaultValue={ false } />
								</Container.Item>
							</Container>

							<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />

							{ /* Setting Section */ }
							<Container className="mb-0.5" align="center">
								<Container.Item className="w-full max-w-120 space-y-1">
									<Label size="md">Custom CSS</Label>
									<p className="m-0 block text-sm leading-4 font-normal text-field-helper">
										Enable the &quot;Custom CSS&quot; option
										if you want to add your own CSS code on
										post/page to customize the page as per
										your expectations.
									</p>
								</Container.Item>
								<Container.Item className="ml-auto">
									<Switch size="lg" defaultValue={ true } />
								</Container.Item>
							</Container>

							<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />

							{ /* Setting Section */ }
							<Container className="mb-0.5" align="center">
								<Container.Item className="w-full max-w-120 space-y-1">
									<Label size="md">Copy Paste Styles</Label>
									<p className="m-0 block text-sm leading-4 font-normal text-field-helper">
										Enable the &quot;Copy Paste Styles&quot;
										option to have the ability to copy &
										paste Spectra & Core Gutenberg Blocks
										Styles.
									</p>
								</Container.Item>
								<Container.Item className="ml-auto">
									<Switch size="lg" defaultValue={ true } />
								</Container.Item>
							</Container>

							<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />

							{ /* Setting Section */ }
							<Container className="mb-0.5" align="center">
								<Container.Item className="w-full max-w-120 space-y-1">
									<Label size="md">
										Automatic Block Recovery
									</Label>
									<p className="m-0 block text-sm leading-4 font-normal text-field-helper">
										Enable this to automatically recover any
										erroneous blocks that may occur on your
										web pages. This will save you time spent
										on clicking all those &quot;Attempt
										Block Recovery&quot; Buttons.
									</p>
								</Container.Item>
								<Container.Item className="ml-auto">
									<Switch size="lg" defaultValue={ true } />
								</Container.Item>
							</Container>

							<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />

							{ /* Setting Section */ }
							<Container className="mb-0.5" align="center">
								<Container.Item className="w-full max-w-120 space-y-1">
									<Label size="md">
										Load Font Awesome 5 Support
									</Label>
									<p className="m-0 block text-sm leading-4 font-normal text-field-helper">
										Enable this to make sure all previously
										used Font Awesome 5 icons are displayed
										correctly while using the Font Awesome 6
										library.
									</p>
								</Container.Item>
								<Container.Item className="ml-auto">
									<Switch size="lg" defaultValue={ true } />
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
