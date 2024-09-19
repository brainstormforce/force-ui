import Menu from './menu-item.jsx';
import { Store } from 'lucide-react'; 

export default {
  title: 'Molecules/Menu Item',
  component: Menu.Item, 
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    active: {
      description: 'Determines if the Menu Item is in an active state',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      description: 'Disables the Menu Item if set to true',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Callback when Menu Item is clicked',
      table: {
        type: { summary: 'function' },
      },
    },
    children: {
      description: 'Content inside the Menu Item',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
};

export const MenuItem = (args) => (
    <Menu>
        <Menu.Item {...args}>
            <Store />
            <div>Store Settings</div>
        </Menu.Item>
    </Menu>
);

MenuItem.args = {
  active: false,
  disabled: false,
};
