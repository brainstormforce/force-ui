import type { Meta, StoryObj } from '@storybook/react-vite';
import { HamburgerMenu, HamburgerMenuToggle, HamburgerMenuOptions, HamburgerMenuOption } from '@/components';

// Powers the "Next.js Usage" docs <Canvas>. Hidden from the sidebar
// (`!dev`) and excluded from autodocs — it only demonstrates the named
// (App-Router) import pattern in an isolated preview with copyable code.
const meta: Meta = {
	title: 'Organisms/Hamburger Menu/Next.js Example',
	component: HamburgerMenu,
	tags: [ '!dev', '!autodocs' ],
	parameters: { layout: 'padded' },
};

export default meta;

export const ServerComponentPattern: StoryObj = {
	name: 'Named exports (App Router)',
	render: () => {
		return (
			<HamburgerMenu>
				<HamburgerMenuToggle />
				<HamburgerMenuOptions>
					<HamburgerMenuOption>Option 1</HamburgerMenuOption>
					<HamburgerMenuOption>Option 2</HamburgerMenuOption>
				</HamburgerMenuOptions>
			</HamburgerMenu>
		);
	},
};
