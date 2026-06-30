import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Drawer, DrawerPanel, DrawerHeader, DrawerTitle, DrawerBody, DrawerFooter, DrawerCloseButton, DrawerBackdrop, Button } from '@/components';

// Powers the "Next.js Usage" docs <Canvas>. Hidden from the sidebar
// (`!dev`) and excluded from autodocs — it only demonstrates the named
// (App-Router) import pattern in an isolated preview with copyable code.
const meta: Meta = {
	title: 'Organisms/Drawer/Next.js Example',
	component: Drawer,
	tags: [ '!dev', '!autodocs' ],
	parameters: { layout: 'padded' },
};

export default meta;

export const ServerComponentPattern: StoryObj = {
	name: 'Named exports (App Router)',
	render: () => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [ open, setOpen ] = useState( false );
		return (
			<Drawer open={ open } setOpen={ setOpen } position="right" trigger={ <Button>Open Drawer</Button> }>
				<DrawerPanel>
					<DrawerHeader>
						<DrawerTitle>Drawer Title</DrawerTitle>
						<DrawerCloseButton />
					</DrawerHeader>
					<DrawerBody>Drawer body content.</DrawerBody>
					<DrawerFooter>
						<Button onClick={ () => setOpen( false ) }>Close</Button>
					</DrawerFooter>
				</DrawerPanel>
				<DrawerBackdrop />
			</Drawer>
		);
	},
};
