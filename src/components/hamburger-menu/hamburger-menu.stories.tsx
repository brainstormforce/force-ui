import type { Meta, StoryFn } from '@storybook/react';
import HamburgerMenu from './hamburger-menu';
import { ArrowUpRight, CircleHelp, Mail, Home, Info, Megaphone, User } from 'lucide-react';
import { Topbar, Badge } from '@/components';
import { Avatar, Button } from '@/index';

const meta: Meta<typeof HamburgerMenu> = {
	title: 'Organisms/Hamburger Menu',
	component: HamburgerMenu,
	subcomponents: {
		'HamburgerMenu.Toggle': HamburgerMenu.Toggle,
		'HamburgerMenu.Options': HamburgerMenu.Options,
		'HamburgerMenu.Option': HamburgerMenu.Option,
	} as Record<string, React.ComponentType<unknown>>,
	parameters: {
		layout: 'fullscreen',
	},
	tags: [ 'autodocs' ],
	decorators: [
		( Story ) => (
			<div className="font-sans [&_*]:font-sans h-[600px] grid grid-cols-1">
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryFn<typeof HamburgerMenu>;

const options = [
	{ label: 'Home', path: '/', icon: Home },
	{ label: 'About', path: '/about', icon: Info },
	{ label: 'Contact', path: '/contact', icon: Mail },
];

const HamburgerMenuTemplate: Story = () => (
	<Topbar className="bg-gray-300 h-fit py-1">
		<Topbar.Left>
			<HamburgerMenu>
				<HamburgerMenu.Toggle className="size-6" />
				<HamburgerMenu.Options>
					{ options.map( ( option ) => (
						<HamburgerMenu.Option
							key={ option.path }
							href={ option.path }
							icon={ <option.icon /> }
						>
							{ option.label }
						</HamburgerMenu.Option>
					) ) }
				</HamburgerMenu.Options>
			</HamburgerMenu>
			<Topbar.Item>
				<svg
					width="25"
					height="24"
					viewBox="0 0 25 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12.5 24C19.1275 24 24.5 18.6273 24.5 11.9999C24.5 5.37255 19.1275 0 12.5 0C5.87259 0 0.5 5.37255 0.5 11.9999C0.5 18.6273 5.87259 24 12.5 24ZM12.5517 5.99996C11.5882 5.99996 10.2547 6.55101 9.5734 7.23073L7.7229 9.07688H16.9465L20.0307 5.99996H12.5517ZM15.4111 16.7692C14.7298 17.4489 13.3964 17.9999 12.4328 17.9999H4.95388L8.03804 14.923H17.2616L15.4111 16.7692ZM18.4089 10.6153H6.18418L5.60673 11.1923C4.23941 12.423 4.64495 13.3846 6.5598 13.3846H18.8176L19.3952 12.8076C20.7492 11.5841 20.3237 10.6153 18.4089 10.6153Z"
						fill="#0D7EE8"
					/>
				</svg>
			</Topbar.Item>
		</Topbar.Left>

		<Topbar.Middle
		>
			<Topbar.Item>
				<div className="flex gap-2">
					<div>Nav Item 1</div>
					<div>Nav Item 2</div>
					<div>Nav Item 3</div>
				</div>
			</Topbar.Item>
			<Topbar.Item>
				<Button
					variant="ghost"
					icon={ <ArrowUpRight /> }
					iconPosition="right"
				>
					Upgrade to Pro
				</Button>
			</Topbar.Item>
		</Topbar.Middle>

		<Topbar.Right>
			<Topbar.Item>
				<Badge
					label="V 0.0 2"
					size="xs"
					variant="neutral"
					closable={ false }
				/>
			</Topbar.Item>
			<Topbar.Item className="gap-2">
				<CircleHelp />
				<Megaphone />
			</Topbar.Item>
			<Topbar.Item>
				<Avatar size="sm" border="ring">
					<User />
				</Avatar>
			</Topbar.Item>
		</Topbar.Right>
	</Topbar>
);

export const Default = HamburgerMenuTemplate.bind( {} );
