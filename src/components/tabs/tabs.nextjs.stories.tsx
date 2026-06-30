import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Tabs, TabsGroup, TabsTab, TabsPanel } from '@/components';

// Powers the "Next.js Usage" docs <Canvas>. Hidden from the sidebar
// (`!dev`) and excluded from autodocs — it only demonstrates the named
// (App-Router) import pattern in an isolated preview with copyable code.
const meta: Meta = {
	title: 'Atoms/Tabs/Next.js Example',
	component: Tabs,
	tags: [ '!dev', '!autodocs' ],
	parameters: { layout: 'padded' },
};

export default meta;

export const ServerComponentPattern: StoryObj = {
	name: 'Named exports (App Router)',
	render: () => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [ active, setActive ] = useState( 'a' );
		return (
			<Tabs activeItem={ active }>
				<TabsGroup activeItem={ active } onChange={ ( { value } ) => setActive( value.slug ) }>
					<TabsTab slug="a" text="Tab A" />
					<TabsTab slug="b" text="Tab B" />
				</TabsGroup>
				<TabsPanel slug="a">Panel A</TabsPanel>
				<TabsPanel slug="b">Panel B</TabsPanel>
			</Tabs>
		);
	},
};
