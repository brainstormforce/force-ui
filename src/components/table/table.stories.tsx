import type { ComponentType } from 'react';
import Table from './table';
import { StoryFn, Meta } from '@storybook/react';
import { Pagination } from '@/components';

const meta = {
	title: 'Atoms/Table',
	component: Table,
	subcomponents: {
		'Table.Head': Table.Head,
		'Table.HeadCell': Table.HeadCell,
		'Table.Body': Table.Body,
		'Table.Row': Table.Row,
		'Table.Cell': Table.Cell,
		'Table.Footer': Table.Footer,
	} as Record<string, ComponentType<unknown>>,
	tags: [ 'autodocs' ],
} satisfies Meta<typeof Table>;
export default meta;

type Story = StoryFn<typeof Table>;

const data = [
	{
		name: 'John Doe',
		age: 30,
		email: 'KXk7g@example.com',
		phone: '1234567890',
	},
	{
		name: 'Jane Doe',
		age: 25,
		email: 'oXHsO@example.com',
		phone: '1234567890',
	},
	{
		name: 'Bob Smith',
		age: 40,
		email: 'oXHsO@example.com',
		phone: '1234567890',
	},
	{
		name: 'Alice Johnson',
		age: 35,
		email: 'oXHsO@example.com',
		phone: '1234567890',
	},
];

export const Default: Story = () => {
	return (
		<Table>
			<Table.Head>
				<Table.HeadCell>Name</Table.HeadCell>
				<Table.HeadCell>Age</Table.HeadCell>
				<Table.HeadCell>Email</Table.HeadCell>
				<Table.HeadCell>Phone</Table.HeadCell>
			</Table.Head>
			<Table.Body>
				{ data.map( ( item, index ) => (
					<Table.Row key={ index }>
						<Table.Cell>{ item.name }</Table.Cell>
						<Table.Cell>{ item.age }</Table.Cell>
						<Table.Cell>{ item.email }</Table.Cell>
						<Table.Cell>{ item.phone }</Table.Cell>
					</Table.Row>
				) ) }
			</Table.Body>
			<Table.Footer>
				<div className="flex items-center justify-between w-full">
					<span className="text-sm font-normal leading-5 text-text-secondary">Page 1 out of 10</span>
					<Pagination className="w-fit">
						<Pagination.Content>
							<Pagination.Previous />
							<Pagination.Item isActive>1</Pagination.Item>
							<Pagination.Item>2</Pagination.Item>
							<Pagination.Item>3</Pagination.Item>
							<Pagination.Ellipsis />
							<Pagination.Item>7</Pagination.Item>
							<Pagination.Item>8</Pagination.Item>
							<Pagination.Item>9</Pagination.Item>
							<Pagination.Next />
						</Pagination.Content>
					</Pagination>
				</div>
			</Table.Footer>
		</Table>
	);
};
