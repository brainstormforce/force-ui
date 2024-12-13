import { useState, type ComponentType } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Table from './table';
import { Button, Container, Pagination, Tooltip } from '@/components';
import { Edit, Trash } from 'lucide-react';

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

const Template: Story = ( { checkboxSelection } ) => {
	const [ selected, setSelected ] = useState<string[]>( [] );

	const handleCheckboxChange = (
		checked: boolean,
		value: ( typeof data )[number]
	) => {
		if ( checked ) {
			setSelected( [ ...selected, value.name ] );
		} else {
			setSelected( selected.filter( ( item: string ) => item !== value.name ) );
		}
	};

	const toggleSelectAll = ( checked: boolean ) => {
		if ( checked ) {
			setSelected( data.map( ( item ) => item.name ) );
		} else {
			setSelected( [] );
		}
	};

	return (
		<Table checkboxSelection={ checkboxSelection }>
			<Table.Head
				selected={ selected.length > 0 }
				onChangeSelection={ toggleSelectAll }
				indeterminate={
					selected.length > 0 && selected.length < data.length
				}
			>
				<Table.HeadCell>Name</Table.HeadCell>
				<Table.HeadCell>Age</Table.HeadCell>
				<Table.HeadCell>Email</Table.HeadCell>
				<Table.HeadCell>Phone</Table.HeadCell>
				<Table.HeadCell className="w-14">
					<span className="sr-only">Actions</span>
				</Table.HeadCell>
			</Table.Head>
			<Table.Body>
				{ data.map( ( item, index ) => (
					<Table.Row
						key={ index }
						value={ item }
						selected={ selected.includes( item.name ) }
						onChangeSelection={ handleCheckboxChange }
					>
						<Table.Cell>{ item.name }</Table.Cell>
						<Table.Cell>{ item.age }</Table.Cell>
						<Table.Cell>{ item.email }</Table.Cell>
						<Table.Cell>{ item.phone }</Table.Cell>
						<Table.Cell>
							<Container align="center" justify="end" className="gap-2">
								<Tooltip content="Delete" arrow placement="top">
									<Button
										variant="ghost"
										icon={ <Trash /> }
										size="xs"
										className="text-icon-secondary hover:text-icon-primary"
										aria-label="Delete"
									/>
								</Tooltip>
								<Tooltip content="Edit" arrow placement="top">
									<Button
										variant="ghost"
										icon={ <Edit /> }
										size="xs"
										className="text-icon-secondary hover:text-icon-primary"
										aria-label="Edit"
									/>
								</Tooltip>
							</Container>
						</Table.Cell>
					</Table.Row>
				) ) }
			</Table.Body>
			<Table.Footer>
				<div className="flex items-center justify-between w-full">
					<span className="text-sm font-normal leading-5 text-text-secondary">
						Page 1 out of 9
					</span>
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

export const Default = Template.bind( {} );
Default.args = {
	checkboxSelection: false,
};

export const WithCheckboxSelection = Template.bind( {} );
WithCheckboxSelection.args = {
	checkboxSelection: true,
};
WithCheckboxSelection.parameters = {
	docs: {
		source: {
			code: `
import { useState } from 'react';
import { Table, Button, Pagination, Tooltip } from '@bsf/force-ui';
import { Edit, Trash } from 'lucide-react';

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

const App = () => {
	const [ selected, setSelected ] = useState( [] );

	const handleCheckboxChange = ( checked, value ) => {
		if ( checked ) {
			setSelected( [ ...selected, value.name ] );
		} else {
			setSelected( selected.filter( ( item ) => item !== value.name ) );
		}
	};

	const toggleSelectAll = ( checked ) => {
		if ( checked ) {
			setSelected( data.map( ( item ) => item.name ) );
		} else {
			setSelected( [] );
		}
	};

	return (
		<Table
			checkboxSelection={ true }
		>
			<Table.Head
				selected={ selected.length > 0 }
				onChangeSelection={ toggleSelectAll }
				indeterminate={ selected.length > 0 && selected.length < data.length }
			>
				<Table.HeadCell>Name</Table.HeadCell>
				<Table.HeadCell>Age</Table.HeadCell>
				<Table.HeadCell>Email</Table.HeadCell>
				<Table.HeadCell>Phone</Table.HeadCell>
				<Table.HeadCell>
					<span className="sr-only">Actions</span>
				</Table.HeadCell>
			</Table.Head>
			<Table.Body>
				{ data.map( ( item, index ) => (
					<Table.Row
						key={ index }
						value={ item }
						selected={ selected.includes( item.name ) }
						onChangeSelection={ handleCheckboxChange }
					>
						<Table.Cell>{ item.name }</Table.Cell>
						<Table.Cell>{ item.age }</Table.Cell>
						<Table.Cell>{ item.email }</Table.Cell>
						<Table.Cell>{ item.phone }</Table.Cell>
						<Table.Cell>
							<div className="flex items-center gap-2">
								<Tooltip content="Delete" arrow placement="top">
									<Button variant="ghost" icon={ <Trash /> } size="xs" className="text-icon-secondary hover:text-icon-primary" aria-label="Delete" />
								</Tooltip>
								<Tooltip content="Edit" arrow placement="top">
									<Button variant="ghost" icon={ <Edit /> } size="xs" className="text-icon-secondary hover:text-icon-primary" aria-label="Edit" />
								</Tooltip>
							</div>
						</Table.Cell>
					</Table.Row>
				) ) }
			</Table.Body>
			<Table.Footer>
				<div className="flex items-center justify-between w-full">
					<span className="text-sm font-normal leading-5 text-text-secondary">
						Page 1 out of 9
					</span>
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
}
			`,
		},
	},
};
