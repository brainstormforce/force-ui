import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container, ContainerItem } from '@/components';

// Powers the "Next.js Usage" docs <Canvas>. Hidden from the sidebar
// (`!dev`) and excluded from autodocs — it only demonstrates the named
// (App-Router) import pattern in an isolated preview with copyable code.
const meta: Meta = {
	title: 'Atoms/Container/Next.js Example',
	component: Container,
	tags: [ '!dev', '!autodocs' ],
	parameters: { layout: 'centered' },
};

export default meta;

export const ServerComponentPattern: StoryObj = {
	name: 'Named exports (App Router)',
	render: () => {
		return (
			<Container>
				<ContainerItem>Item A</ContainerItem>
				<ContainerItem>Item B</ContainerItem>
			</Container>
		);
	},
};
