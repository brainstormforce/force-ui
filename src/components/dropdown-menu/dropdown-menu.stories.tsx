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
		'DropdownMenu.ContentWrapper': DropdownMenu.ContentWrapper,
		'DropdownMenu.List': DropdownMenu.List,
		'DropdownMenu.Item': DropdownMenu.Item,
		'DropdownMenu.Separator': DropdownMenu.Separator,
		'DropdownMenu.Portal': DropdownMenu.Portal,
	} as Record<string, React.ComponentType<unknown>>,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		children: {
			control: false,
		},
	},
	decorators: [
		( Story ) => (
			<div className="h-56">
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryFn<typeof DropdownMenu>;

export const DropdownWithOutPortal: Story = ( args ) => (
	<DropdownMenu { ...args }>
		<DropdownMenu.Trigger>
			<Button>Dropdown</Button>
		</DropdownMenu.Trigger>
		<DropdownMenu.ContentWrapper>
			<DropdownMenu.Content className="w-60">
				<DropdownMenu.List>
					<DropdownMenu.Item>Menu Item 1</DropdownMenu.Item>
					<DropdownMenu.Item>Menu Item 2</DropdownMenu.Item>
					<DropdownMenu.Item>Menu Item 3</DropdownMenu.Item>
					<DropdownMenu.Item>Menu Item 4</DropdownMenu.Item>
					<DropdownMenu.Item>Menu Item 5</DropdownMenu.Item>
				</DropdownMenu.List>
			</DropdownMenu.Content>
		</DropdownMenu.ContentWrapper>
	</DropdownMenu>
);
DropdownWithOutPortal.parameters = {
	docs: {
		description: {
			story: `If you want to use the dropdown menu inside a **Dialog**, **Drawer** or **Popover**, you can omit using the \`DropdownMenu.Portal\` component. Using the portal is not required in this case and it might cause issues like the \`z-index\` problem and the dropdown menu not being visible. 

If you really need to use the portal and if you face \`z-index\` issues, in that case you can update the \`z-index\` of the dropdown menu to a higher value.

#### When to use the \`DropdownMenu.Portal\` component?

Portal helps to render a floating element into a given container element. By default, outside of the app root and into the body. This is necessary to ensure the floating element can appear outside any potential parent containers that cause clipping (such as overflow: hidden), while retaining its location in the React tree.

- When the dropdown is being cut off by parent elements. Ex. Parent container has \`overflow: hidden\` property.
- When you need to render the dropdown menu into a different part of the DOM except the parent container.
`,
		},
	},
};

export const ButtonTrigger: Story = ( args ) => (
	<DropdownMenu { ...args }>
		<DropdownMenu.Trigger>
			<Button>Dropdown</Button>
		</DropdownMenu.Trigger>
		<DropdownMenu.Portal>
			<DropdownMenu.ContentWrapper>
				<DropdownMenu.Content className="w-60">
					<DropdownMenu.List>
						<DropdownMenu.Item>Menu Item 1</DropdownMenu.Item>
						<DropdownMenu.Item>Menu Item 2</DropdownMenu.Item>
						<DropdownMenu.Item>Menu Item 3</DropdownMenu.Item>
						<DropdownMenu.Item>Menu Item 4</DropdownMenu.Item>
						<DropdownMenu.Item>Menu Item 5</DropdownMenu.Item>
					</DropdownMenu.List>
				</DropdownMenu.Content>
			</DropdownMenu.ContentWrapper>
		</DropdownMenu.Portal>
	</DropdownMenu>
);

export const AvatarTrigger: Story = ( args ) => (
	<DropdownMenu { ...args } placement="bottom-start">
		<DropdownMenu.Trigger>
			<Avatar>John</Avatar>
			<span className="sr-only">Open Menu</span>
		</DropdownMenu.Trigger>
		<DropdownMenu.Portal>
			<DropdownMenu.ContentWrapper>
				<DropdownMenu.Content className="w-60">
					<DropdownMenu.List>
						<DropdownMenu.Item>Menu Item 1</DropdownMenu.Item>
						<DropdownMenu.Item>Menu Item 2</DropdownMenu.Item>
						<DropdownMenu.Item>Menu Item 3</DropdownMenu.Item>
						<DropdownMenu.Item>Menu Item 4</DropdownMenu.Item>
						<DropdownMenu.Item>Menu Item 5</DropdownMenu.Item>
					</DropdownMenu.List>
				</DropdownMenu.Content>
			</DropdownMenu.ContentWrapper>
		</DropdownMenu.Portal>
	</DropdownMenu>
);

const IconTriggerTemplate: Story = ( args ) => (
	<DropdownMenu { ...args } placement="bottom-end">
		<DropdownMenu.Trigger>
			<House />
			<span className="sr-only">Open Menu</span>
		</DropdownMenu.Trigger>
		<DropdownMenu.Portal>
			<DropdownMenu.ContentWrapper>
				<DropdownMenu.Content className="w-60">
					<DropdownMenu.List>
						<DropdownMenu.Item>Menu Item 1</DropdownMenu.Item>
						<DropdownMenu.Item>Menu Item 2</DropdownMenu.Item>
						<DropdownMenu.Item>Menu Item 3</DropdownMenu.Item>
						<DropdownMenu.Item>Menu Item 4</DropdownMenu.Item>
						<DropdownMenu.Item>Menu Item 5</DropdownMenu.Item>
					</DropdownMenu.List>
				</DropdownMenu.Content>
			</DropdownMenu.ContentWrapper>
		</DropdownMenu.Portal>
	</DropdownMenu>
);
export const IconTrigger = IconTriggerTemplate.bind( {} );

