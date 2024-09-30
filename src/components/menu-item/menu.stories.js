import Menu from './menu-item.jsx';
import { Store, PenTool, ShoppingBag, ShoppingCart, Truck, CreditCard, MousePointer, ChartNoAxesColumnIncreasing, Layers, CloudUpload, Bell } from 'lucide-react';

Menu.displayName = 'Menu';
Menu.List.displayName = 'Menu.List';
Menu.Item.displayName = 'Menu.Item';
export default {
	title: 'Molecules/Menu',
	component: Menu,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		size: {
			name: 'Size',
			description: 'Specifies the size of the Menu Item components inside Menu',
			control: { type: 'select' },
			options: [ 'sm', 'md' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'md' },
			},
		},
		menuItemActive: {
			name: 'Menu.Item: Active',
			description: 'Controls if the Menu Item is active. (This will apply to "Store Settings" item only for demo)',
			control: { type: 'boolean' },
		},
		menuItemDisabled: {
			name: 'Menu.Item: Disabled',
			description: 'Disables the Menu Item. (This will apply to "Store Settings" item only for demo)',
			control: { type: 'boolean' },
		},
		menuItemContent: {
			name: 'Menu.Item: Content',
			description: 'Content inside the Menu Item',
			control: { type: 'text' },
		},
	},
};

const Template = ( args ) => (
	<Menu size={ args.size }>
		<Menu.List heading="Store" open={ true } arrow={ true }>
			<Menu.Item active={ args.menuItemActive } disabled={ args.menuItemDisabled }>
				<Store />
				<div>{ args.menuItemContent || 'Store Settings' }</div>
			</Menu.Item>
			<Menu.Item disabled>
				<PenTool />
				<div>Design & Branding</div>
			</Menu.Item>
		</Menu.List>
		<Menu.List heading="Orders & Sales" open={ true } arrow={ true }>
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
		<Menu.List heading="Customers" open={ true } arrow={ true }>
			<Menu.Item>
				<MousePointer />
				<div>Affiliates</div>
			</Menu.Item>
			<Menu.Item>
				<ChartNoAxesColumnIncreasing />
				<div>Subscriptions Saver</div>
			</Menu.Item>
		</Menu.List>
		<Menu.List heading="Others" open={ true } arrow={ true }>
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
};
