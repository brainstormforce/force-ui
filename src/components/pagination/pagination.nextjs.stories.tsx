import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationNext, PaginationEllipsis } from '@/components';

// Powers the "Next.js Usage" docs <Canvas>. Hidden from the sidebar
// (`!dev`) and excluded from autodocs — it only demonstrates the named
// (App-Router) import pattern in an isolated preview with copyable code.
const meta: Meta = {
	title: 'Molecules/Pagination/Next.js Example',
	component: Pagination,
	tags: [ '!dev', '!autodocs' ],
	parameters: { layout: 'padded' },
};

export default meta;

export const ServerComponentPattern: StoryObj = {
	name: 'Named exports (App Router)',
	render: () => {
		return (
			<Pagination>
				<PaginationContent>
					<PaginationPrevious />
					<PaginationItem>1</PaginationItem>
					<PaginationEllipsis />
					<PaginationNext />
				</PaginationContent>
			</Pagination>
		);
	},
};
