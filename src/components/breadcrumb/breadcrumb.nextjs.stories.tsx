import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components';

// Powers the "Next.js Usage" docs <Canvas>. Hidden from the sidebar
// (`!dev`) and excluded from autodocs — it only demonstrates the named
// (App-Router) import pattern in an isolated preview with copyable code.
const meta: Meta = {
	title: 'Atoms/Breadcrumb/Next.js Example',
	component: Breadcrumb,
	tags: [ '!dev', '!autodocs' ],
	parameters: { layout: 'centered' },
};

export default meta;

export const ServerComponentPattern: StoryObj = {
	name: 'Named exports (App Router)',
	render: () => {
		return (
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
					<BreadcrumbSeparator type="slash" />
					<BreadcrumbItem><BreadcrumbPage>Current</BreadcrumbPage></BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
		);
	},
};
