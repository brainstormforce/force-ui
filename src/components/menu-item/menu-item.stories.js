import Menu from './menu-item.jsx';
import { CreditCard,
	Store, PenTool, ShoppingBag, ShoppingCart, Truck, MousePointer, ChartNoAxesColumnIncreasing, Layers, CloudUpload, Bell } from 'lucide-react';

export default {
	title: 'Molecules/Menu Item',
	component: Menu,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		size: {
			description: 'Specifies the size of the MenuItem component',
			control: { type: 'select' },
			options: [ 'sm', 'md' ],
		},
		active: {
			description: 'Determines if the MenuItem is in an active state',
			control: { type: 'boolean' },
		},
		disabled: {
			description: 'Disables the MenuItem if set to true',
			control: { type: 'boolean' },
		},
		onClick: {
			action: 'clicked',
			description: 'Callback when MenuItem is clicked',
		},
		children: {
			description: 'Content inside the MenuItem',
			control: { type: 'text' },
		},
	},
};

export const MenuItemSidebar = {
	render: ( args ) => (
		<Menu size={ args.size }>
			<Menu.List heading="Store" open={ true } arrow={ true }>
				<Menu.Item>
					<Store />
					<div>Store Settings</div>
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
				<Menu.Item active={ true }>
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
	),
};
