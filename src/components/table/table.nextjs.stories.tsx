import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table, TableHead, TableHeadCell, TableBody, TableRow, TableCell } from '@/components';

// Powers the "Next.js Usage" docs <Canvas>. Hidden from the sidebar
// (`!dev`) and excluded from autodocs — it only demonstrates the named
// (App-Router) import pattern in an isolated preview with copyable code.
const meta: Meta = {
	title: 'Atoms/Table/Next.js Example',
	component: Table,
	tags: [ '!dev', '!autodocs' ],
	parameters: { layout: 'padded' },
};

export default meta;

export const ServerComponentPattern: StoryObj = {
	name: 'Named exports (App Router)',
	render: () => {
		return (
			<Table>
				<TableHead>
					<TableHeadCell>Name</TableHeadCell>
					<TableHeadCell>Role</TableHeadCell>
				</TableHead>
				<TableBody>
					<TableRow><TableCell>Ada</TableCell><TableCell>Engineer</TableCell></TableRow>
					<TableRow><TableCell>Linus</TableCell><TableCell>Maintainer</TableCell></TableRow>
				</TableBody>
			</Table>
		);
	},
};
