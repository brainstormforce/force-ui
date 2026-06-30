import type { Meta, StoryObj } from '@storybook/react-vite';
import { Sidebar, SidebarHeader, SidebarBody, SidebarFooter, SidebarItem } from '@/components';

// Powers the "Next.js Usage" docs <Canvas>. Hidden from the sidebar
// (`!dev`) and excluded from autodocs — it only demonstrates the named
// (App-Router) import pattern in an isolated preview with copyable code.
const meta: Meta = {
	title: 'Organisms/Sidebar/Next.js Example',
	component: Sidebar,
	tags: [ '!dev', '!autodocs' ],
	parameters: { layout: 'padded' },
};

export default meta;

export const ServerComponentPattern: StoryObj = {
	name: 'Named exports (App Router)',
	render: () => {
		return (
			<div style={ { height: 220 } }>
				<Sidebar>
					<SidebarHeader>Logo</SidebarHeader>
					<SidebarBody>
						<SidebarItem>Dashboard</SidebarItem>
						<SidebarItem>Settings</SidebarItem>
					</SidebarBody>
					<SidebarFooter>v1.7.13</SidebarFooter>
				</Sidebar>
			</div>
		);
	},
};
