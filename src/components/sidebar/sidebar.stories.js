import Sidebar from './sidebar';
import Button from '../button';
import { useState } from 'react';
import {
	Store,
	PenTool,
	ShoppingBag,
	ShoppingCart,
	Tag,
	Truck,
	CreditCard,
	MousePointer,
	RefreshCcw,
	ChartNoAxesColumnIncreasing,
} from 'lucide-react';

export default {
	title: 'Organisms/Sidebar',
	component: Sidebar,
	parameters: {
		layout: 'left',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		children: {
			description:
				'Content to render inside the Sidebar. This typically includes `Sidebar.Header`, `Sidebar.Body`, and `Sidebar.Footer` components.',
			control: { type: 'none' },
		},
		className: {
			description:
				'Optional custom CSS classes to apply to the Sidebar container for styling.',
			control: { type: 'text' },
			table: {
				type: { summary: 'string' },
			},
		},
		borderOn: {
			description:
				'Controls whether a border should appear on the right of the Sidebar.',
			control: { type: 'boolean' },
			defaultValue: true,
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: true },
			},
		},
		collapsible: {
			description:
				'Determines if the Sidebar can be collapsed or not. If `true`, a collapse button is shown.',
			control: { type: 'boolean' },
			defaultValue: true,
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: true },
			},
		},
		screenHeight: {
			description:
				'Determines whether the Sidebar should occupy the full screen height.',
			control: { type: 'boolean' },
			defaultValue: true,
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: true },
			},
		},
		onCollapseChange: {
			description:
				'Callback function triggered when the Sidebar collapse state changes. Use this to handle logic based on collapse/expand states.',
			action: 'onCollapseChange',
		},
	},
};

const Template = ( args ) => {
	const menuData = [
		{
			heading: 'Store',
			items: [
				{ icon: <Store size={ 20 } />, label: 'Store Settings' },
				{
					icon: <PenTool size={ 20 } />,
					label: 'Design & Branding',
					disabled: true,
				},
			],
		},
		{
			heading: 'Orders & Sales',
			items: [
				{ icon: <ShoppingBag size={ 20 } />, label: 'Orders & Receipts' },
				{
					icon: <ShoppingCart size={ 20 } />,
					label: 'Abandoned Checkout',
					active: true,
				},
				{ icon: <Tag size={ 20 } />, label: 'Taxes' },
				{ icon: <Truck size={ 20 } />, label: 'Shipping' },
				{ icon: <CreditCard size={ 20 } />, label: 'Payment Processors' },
			],
		},
		{
			heading: 'Customers',
			items: [
				{ icon: <MousePointer size={ 20 } />, label: 'Affiliates' },
				{ icon: <RefreshCcw size={ 20 } />, label: 'Subscriptions' },
				{
					icon: <ChartNoAxesColumnIncreasing size={ 20 } />,
					label: 'Subscriptions Saver',
				},
			],
		},
	];
	const [ sidebarCollapsed, setSidebarCollapsed ] = useState( false );
	return (
		<Sidebar
			{ ...args }
			onCollapseChange={ ( isCollapsed ) => {
				setSidebarCollapsed( isCollapsed );
			} }
		>
			<Sidebar.Header>
				<Sidebar.Item
					className={ sidebarCollapsed && 'flex justify-center' }
				>
					<img
						width={ sidebarCollapsed ? '40px' : '180px' }
						alt="Logo"
						src={
							sidebarCollapsed
								? 'https://avatars.githubusercontent.com/u/4979824?s=200&v=4'
								: 'https://wordpress.org/five-for-the-future/files/2019/09/bsf-logo-.png'
						}
					/>
				</Sidebar.Item>
			</Sidebar.Header>
			<Sidebar.Body>
				<Sidebar.Item>
					<div className="flex flex-col gap-2">
						{ menuData.map( ( section, sectionIndex ) => (
							<div key={ sectionIndex }>
								<p className="text-slate-500">
									{ ! sidebarCollapsed && section.heading }
								</p>
								<div>
									{ section.items.map( ( item, itemIndex ) => (
										<div
											key={ itemIndex }
											className={ `px-2 py-1 flex items-center gap-2 cursor-pointer rounded-md hover:bg-slate-100 ${ sidebarCollapsed && 'justify-center' }` }
										>
											<span className="mt-[4px]">
												{ item.icon }
											</span>
											{ ! sidebarCollapsed && (
												<span className="text-base">
													{ item.label }
												</span>
											) }
										</div>
									) ) }
								</div>
							</div>
						) ) }
					</div>
				</Sidebar.Item>
			</Sidebar.Body>
			<Sidebar.Footer>
				<Sidebar.Item>
					<Button className="w-full">
						{ sidebarCollapsed ? 'Pro' : 'Pro Version' }
					</Button>
				</Sidebar.Item>
			</Sidebar.Footer>
		</Sidebar>
	);
};

export const DefaultSidebar = Template.bind( {} );
DefaultSidebar.args = {
	screenHeight: true,
	borderOn: true,
	collapsible: true,
};

DefaultSidebar.storyName = 'Sidebar';