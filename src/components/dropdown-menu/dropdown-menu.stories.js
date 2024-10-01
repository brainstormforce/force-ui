import DropdownMenu from './dropdown-menu.jsx';
import Avatar from '../avatar/avatar.jsx';
import Menu from '../menu-item/menu-item.jsx';
import Button from '../button/button.jsx';
import { House } from 'lucide-react';

export default {
	title: 'Molecules/DropdownMenu',
	component: DropdownMenu,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		placement: {
			description:
				'Defines the position of the dropdown relative to the trigger element.',
			control: { type: 'select' },
			options: [
				'top',
				'top-start',
				'top-end',
				'bottom',
				'bottom-start',
				'bottom-end',
			],
			table: {
				type: { summary: 'string' },
			},
		},
		offset: {
			description:
				'The distance between the trigger element and the dropdown content.',
			control: { type: 'number' },
			table: {
				type: { summary: 'number' },
			},
		},
		boundary: {
			description:
				'The element that the dropdown is positioned relative to. When provided, the dropdown will be positioned within the boundary of the element.',
			table: {
				type: { summary: 'HTMLElement' },
			},
		},
		dropdownPortalRoot: {
			description:
				"Root element where the dropdown will be rendered. It's helpful when the dropdown is rendered outside the parent container and scopped Tailwind CSS styles.",
			table: {
				type: { summary: 'HTMLElement | null' },
			},
		},
		dropdownPortalId: {
			description:
				"Root element where the dropdown will be rendered. It's helpful when the dropdown is rendered outside the parent container and scopped Tailwind CSS styles.",
			table: {
				type: { summary: 'HTMLElement | null' },
			},
		},
	},
};

export const ButtonTrigger = ( args ) => (
	<DropdownMenu { ...args } placement={ args.placement }>
		<DropdownMenu.Trigger>
			<Button>Dropdown</Button>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content>
			<Menu className="w-60">
				<Menu.List>
					<Menu.Item>Menu Item 1</Menu.Item>
					<Menu.Item>Menu Item 2</Menu.Item>
					<Menu.Item>Menu Item 3</Menu.Item>
					<Menu.Item>Menu Item 4</Menu.Item>
					<Menu.Item>Menu Item 5</Menu.Item>
				</Menu.List>
			</Menu>
		</DropdownMenu.Content>
	</DropdownMenu>
);

export const AvatarTrigger = ( args ) => (
	<DropdownMenu { ...args } placement="bottom-start">
		<DropdownMenu.Trigger>
			<Avatar>John</Avatar>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content className="w-60">
			<Menu className="w-60">
				<Menu.List>
					<Menu.Item>Menu Item 1</Menu.Item>
					<Menu.Item>Menu Item 2</Menu.Item>
					<Menu.Item>Menu Item 3</Menu.Item>
					<Menu.Separator />
					<Menu.Item>Menu Item 4</Menu.Item>
					<Menu.Item>Menu Item 5</Menu.Item>
				</Menu.List>
			</Menu>
		</DropdownMenu.Content>
	</DropdownMenu>
);

export const IconTrigger = ( args ) => (
	<DropdownMenu { ...args } placement="bottom-end">
		<DropdownMenu.Trigger>
			<House />
		</DropdownMenu.Trigger>
		<DropdownMenu.Content className="w-60">
			<Menu className="w-60">
				<Menu.List>
					<Menu.Item>Menu Item 1</Menu.Item>
					<Menu.Item>Menu Item 2</Menu.Item>
					<Menu.Item>Menu Item 3</Menu.Item>
					<Menu.Item>Menu Item 4</Menu.Item>
					<Menu.Item>Menu Item 5</Menu.Item>
				</Menu.List>
			</Menu>
		</DropdownMenu.Content>
	</DropdownMenu>
);
