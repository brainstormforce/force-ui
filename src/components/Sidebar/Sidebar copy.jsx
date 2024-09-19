 
// 1.
<Sidebar
	size="sm"
	logo={<Logo />}
	submenuCollapsible={true}
	menuData={menuData}
	hideIcons={false}
	useDarkerVersion={true}
/>;

// 2.
<Sidebar>
	{children}
	<Collapse Button/> // This will be a button to collapse/expand the sidebar
</Sidebar>;


// I will introduce one collapsible prop into Menu list
	// So that i can pass the Sidebar collapse status to MenuList component
	// Implement Tooltip when collapsed
// How about Logo on collapse?
// Do we need to return anything from Sidebar component?
// How about cache the Sidebar collapse status?

<Menu size="sm">
	<h4 className="text-center">Size - small</h4>
	<Menu.List heading="Store" open={true} arrow={true}>
		<Menu.Item>
			<Store />
			<div>Store Settings</div>
		</Menu.Item>
		<Menu.Item>
			<PenTool />
			<div>Design & Branding</div>
		</Menu.Item>
	</Menu.List>
	<Menu.List heading="Orders & Sales" open={true} arrow={true}>
		<Menu.Item>
			<ShoppingBag />
			<div>Orders & Receipts</div>
		</Menu.Item>
		<Menu.Item>
			<ShoppingCart />
			<div>Abandoned Checkout</div>
		</Menu.Item>
		<Menu.Item>
			<Tag />
			<div>Taxes</div>
		</Menu.Item>
		<Menu.Item disabled>
			<Truck />
			<div>Shipping</div>
		</Menu.Item>
		<Menu.Item>
			<CreditCard />
			<div>Payment Processors</div>
		</Menu.Item>
	</Menu.List>
	<Menu.Separator />
	<Menu.List heading="Customers" open={true} arrow={true}>
		<Menu.Item active={true}>
			<MousePointer />
			<div>Affiliates</div>
		</Menu.Item>
		<Menu.Item>
			<RefreshCcw />
			<div>Subscriptions</div>
		</Menu.Item>
		<Menu.Item>
			<ChartNoAxesColumnIncreasing />
			<div>Subscriptions Saver</div>
		</Menu.Item>
	</Menu.List>
</Menu>;
