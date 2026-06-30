import type { Meta, StoryObj } from '@storybook/react-vite';
import { Menu, MenuList, MenuItem, MenuSeparator } from '@/components';

// Powers the "Next.js Usage" docs <Canvas>. Hidden from the sidebar
// (`!dev`) and excluded from autodocs — it only demonstrates the named
// (App-Router) import pattern in an isolated preview with copyable code.
const meta: Meta = {
	title: 'Molecules/Menu/Next.js Example',
	component: Menu,
	tags: [ '!dev', '!autodocs' ],
	parameters: { layout: 'padded' },
};

export default meta;

export const ServerComponentPattern: StoryObj = {
	name: 'Named exports (App Router)',
	render: () => {
		return (
			<Menu>
				<MenuList heading="Group">
					<MenuItem>Item</MenuItem>
					<MenuSeparator />
				</MenuList>
			</Menu>
		);
	},
};
