import type { Meta, StoryFn } from '@storybook/react';
import DropdownMenu from './dropdown-menu';
import Avatar from '../avatar';
import Button from '../button';
import { House } from 'lucide-react';

const meta: Meta<typeof DropdownMenu> = {
	title: 'Molecules/DropdownMenu',
	component: DropdownMenu,
	subcomponents: {
		'DropdownMenu.Trigger': DropdownMenu.Trigger,
		'DropdownMenu.Content': DropdownMenu.Content,
		'DropdownMenu.List': DropdownMenu.List,
		'DropdownMenu.Item': DropdownMenu.Item,
		'DropdownMenu.Separator': DropdownMenu.Separator,
	} as Record<string, React.ComponentType<unknown>>,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		placement: {
			control: { type: 'select' },
		},
	},
};

export default meta;

type Story = StoryFn<typeof DropdownMenu>;

export const ButtonTrigger: Story = ( args ) => (
	<DropdownMenu { ...args } placement={ args.placement }>
		<DropdownMenu.Trigger>
			<Button>Dropdown</Button>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content className="w-60">
			<DropdownMenu.List>
				<DropdownMenu.Item>Menu Item 1</DropdownMenu.Item>
				<DropdownMenu.Item>Menu Item 2</DropdownMenu.Item>
				<DropdownMenu.Item>Menu Item 3</DropdownMenu.Item>
				<DropdownMenu.Item>Menu Item 4</DropdownMenu.Item>
				<DropdownMenu.Item>Menu Item 5</DropdownMenu.Item>
			</DropdownMenu.List>
		</DropdownMenu.Content>
	</DropdownMenu>
);

export const AvatarTrigger: Story = ( args ) => (
	<DropdownMenu { ...args } placement="bottom-start">
		<DropdownMenu.Trigger>
			<Avatar>John</Avatar>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content className="w-60">
			<DropdownMenu.List>
				<DropdownMenu.Item>Menu Item 1</DropdownMenu.Item>
				<DropdownMenu.Item>Menu Item 2</DropdownMenu.Item>
				<DropdownMenu.Item>Menu Item 3</DropdownMenu.Item>
				<DropdownMenu.Item>Menu Item 4</DropdownMenu.Item>
				<DropdownMenu.Item>Menu Item 5</DropdownMenu.Item>
			</DropdownMenu.List>
		</DropdownMenu.Content>
	</DropdownMenu>
);

export const IconTrigger: Story = ( args ) => (
	<DropdownMenu { ...args } placement="bottom-end">
		<DropdownMenu.Trigger>
			<House />
		</DropdownMenu.Trigger>
		<DropdownMenu.Content className="w-60">
			<DropdownMenu.List>
				<DropdownMenu.Item>Menu Item 1</DropdownMenu.Item>
				<DropdownMenu.Item>Menu Item 2</DropdownMenu.Item>
				<DropdownMenu.Item>Menu Item 3</DropdownMenu.Item>
				<DropdownMenu.Item>Menu Item 4</DropdownMenu.Item>
				<DropdownMenu.Item>Menu Item 5</DropdownMenu.Item>
			</DropdownMenu.List>
		</DropdownMenu.Content>
	</DropdownMenu>
);
