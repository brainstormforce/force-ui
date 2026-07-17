import type { Meta, StoryObj } from '@storybook/react-vite';
import { Topbar, TopbarLeft, TopbarMiddle, TopbarRight, TopbarItem } from '@/components';

// Powers the "Next.js Usage" docs <Canvas>. Hidden from the sidebar
// (`!dev`) and excluded from autodocs — it only demonstrates the named
// (App-Router) import pattern in an isolated preview with copyable code.
const meta: Meta = {
	title: 'Organisms/Topbar/Next.js Example',
	component: Topbar,
	tags: [ '!dev', '!autodocs' ],
	parameters: { layout: 'fullscreen' },
};

export default meta;

export const ServerComponentPattern: StoryObj = {
	name: 'Named exports (App Router)',
	render: () => {
		return (
			<Topbar>
				<TopbarLeft><TopbarItem>Left</TopbarItem></TopbarLeft>
				<TopbarMiddle><TopbarItem>Middle</TopbarItem></TopbarMiddle>
				<TopbarRight><TopbarItem>Right</TopbarItem></TopbarRight>
			</Topbar>
		);
	},
};
