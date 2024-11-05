import Menu from './menu-item';
import {
	Store,
	PenTool,
	ShoppingBag,
	ShoppingCart,
	Truck,
	CreditCard,
	MousePointer,
	ChartNoAxesColumnIncreasing,
	Layers,
	CloudUpload,
	Bell,
} from 'lucide-react';
import { Meta, StoryFn } from '@storybook/react';

const meta: Meta<typeof Menu> = {
	title: 'Molecules/Menu',
	component: Menu,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	subcomponents: {
		'Menu.List': Menu.List,
		'Menu.Item': Menu.Item,
		'Menu.Separator': Menu.Separator,
	} as Record<string, React.ComponentType<unknown>>,
	argTypes: {
		size: {
			control: { type: 'select' },
		},
		children: {
			control: false,
		},
	},
};

export default meta;

const Template: StoryFn = ( args ) => (
	<Menu size={ args.size } className="gap-6 min-w-64">
		<Menu.List
			heading="Store"
			open={ true }
			arrow={ true }
			showArrowOnHover={ args.showArrowOnHover }
		>
			<Menu.Item
				active={ args.menuItemActive }
				disabled={ args.menuItemDisabled }
			>
				<Store />
				<div>{ args.menuItemContent || 'Store Settings' }</div>
			</Menu.Item>
			<Menu.Item disabled>
				<PenTool />
				<div>Design & Branding</div>
			</Menu.Item>
		</Menu.List>
		<Menu.List
			heading="Orders & Sales"
			open={ true }
			arrow={ true }
			showArrowOnHover={ args.showArrowOnHover }
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
		<Menu.List
			heading="Customers"
			open={ true }
			arrow={ true }
			showArrowOnHover={ args.showArrowOnHover }
		>
			<Menu.Item>
				<MousePointer />
				<div>Affiliates</div>
			</Menu.Item>
			<Menu.Item>
				<ChartNoAxesColumnIncreasing />
				<div>Subscriptions Saver</div>
			</Menu.Item>
		</Menu.List>
		<Menu.List
			heading="Others"
			open={ true }
			arrow={ true }
			showArrowOnHover={ args.showArrowOnHover }
		>
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
);

export const CombinedMenu = Template.bind( {} );

CombinedMenu.args = {
	size: 'md',
	menuItemActive: false,
	menuItemDisabled: false,
	menuItemContent: 'Store Settings',
	showArrowOnHover: true,
};
