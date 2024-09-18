import { render } from 'react-dom';
import Menu from './menu-item.jsx';
import { Store, User, CreditCard } from 'lucide-react';

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
      options: ['sm', 'md'],
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
}

export const MenuItemSidebar = {
    render: (args) => (
        <Menu size={args.size}>
            <Menu.List heading="Store" open={true} arrow={true} style={{ paddingInlineStart: '0px', listStyle: 'none', margin: '0' }}>
                <Menu.Item style={{ color: 'red'}}>
                    <Store />
                    <div>Store Settings</div>
                </Menu.Item>
                <Menu.Item active={true}>
                    <User />
                    <div>Profile</div>
                </Menu.Item>
                <Menu.Item>
                    <CreditCard />
                    <div>Payment Processors</div>
                </Menu.Item>
            </Menu.List>
        </Menu>
    )
}