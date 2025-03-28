import Sidebar from './sidebar';
import Button from '../button';
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
import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof Sidebar> = {
	title: 'Organisms/Sidebar',
	component: Sidebar,
	parameters: {
		layout: 'left',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		children: {
			control: false,
		},
	},
	subcomponents: {
		'Sidebar.Header': Sidebar.Header,
		'Sidebar.Body': Sidebar.Body,
		'Sidebar.Footer': Sidebar.Footer,
		'Sidebar.Item': Sidebar.Item,
	} as Record<string, React.ComponentType<unknown>>,
} satisfies Meta<typeof Sidebar>;

export default meta;

const Template: StoryFn<typeof Sidebar> = ( args ) => {
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
			key={ args.collapsed && ! args.collapsible ? 'collapsed' : 'expanded' }
			onCollapseChange={ ( isCollapsed ) => {
				setSidebarCollapsed( isCollapsed );
			} }
		>
			<Sidebar.Header>
				<Sidebar.Item
					className={ sidebarCollapsed ? 'flex justify-center' : '' }
				>
					<img
						width={ sidebarCollapsed ? 'auto' : '180px' }
						height={ sidebarCollapsed ? '24px' : 'auto' }
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
					<div className="flex flex-col gap-6">
						{ menuData.map( ( section, sectionIndex ) => (
							<div key={ sectionIndex }>
								<p className="text-text-tertiary p-1 m-0">
									{ ! sidebarCollapsed && section.heading }
								</p>
								<div className="gap-0.5">
									{ section.items.map( ( item, itemIndex ) => (
										<div
											key={ itemIndex }
											className={ `p-1 flex items-center gap-1 cursor-pointer rounded-md hover:bg-slate-100 text-text-secondary ${ sidebarCollapsed ? 'justify-center' : '' }` }
										>
											<span className="[&>svg]:size-5 [&>svg]:m-1.5 [&>*:not(svg)]:m-1 h-8">
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

export const SimpleSidebar = Template.bind( {} );
SimpleSidebar.args = {
	collapsible: true,
};
