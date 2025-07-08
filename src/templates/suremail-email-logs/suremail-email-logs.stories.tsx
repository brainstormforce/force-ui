import React, { useState } from 'react';
import {
	Table,
	Container,
	Title,
	Text,
	Button,
	Badge,
	SearchBox,
	Select,
	Pagination,
	Tooltip,
	Input,
} from '@/components';
import {
	Filter,
	Eye,
	X,
	Calendar,
	RefreshCw,
	Trash,
} from 'lucide-react';

export default {
	title: 'Templates/SureMail/Email Logs',
	parameters: {
		layout: 'fullscreen',
		a11y: {
			config: {
				rules: [
					{
						id: 'color-contrast',
						enabled: false,
					},
				],
			},
		},
	},
	decorators: [
		( Story: React.ComponentType, parameters: Record<string, unknown> ) => (
			<div className="@container">
				<div className="box-border [&_*]:box-border @[80rem]:w-full w-[1376px]">
					<Story { ...parameters } />
				</div>
			</div>
		),
	],
	tags: [ 'autodocs' ],
};

// Mock data for email logs
const emailLogs = [
	{
		id: 1,
		to: 'alma.lawson@example.com',
		from: 'noreply@yoursite.com',
		subject: 'Organized layout of data presented in rows and columns.',
		status: 'delivered',
		timestamp: 'Jul 3, 2023 10:30 am',
		provider: 'AWS',
		opens: 2,
		clicks: 1,
	},
	{
		id: 2,
		to: 'tim.jennings@example.com',
		from: 'support@yoursite.com',
		subject: 'Organized layout of data presented in rows and columns.',
		status: 'delivered',
		timestamp: 'Jul 3, 2023 10:30 am',
		provider: 'Brevo',
		opens: 0,
		clicks: 0,
	},
	{
		id: 3,
		to: 'tim.jennings@example.com',
		from: 'marketing@yoursite.com',
		subject: 'Organized layout of data presented in rows and columns.',
		status: 'delivered',
		timestamp: 'Jun 23, 2023 10:30 am',
		provider: 'SMTP.com',
		opens: 0,
		clicks: 0,
	},
	{
		id: 4,
		to: 'tim.jennings@example.com',
		from: 'orders@yoursite.com',
		subject: 'Organized layout of data presented in rows and columns.',
		status: 'delivered',
		timestamp: 'Aug 3, 2023 10:30 am',
		provider: 'SendGrid',
		opens: 3,
		clicks: 2,
	},
	{
		id: 5,
		to: 'tim.jennings@example.com',
		from: 'billing@yoursite.com',
		subject: 'Organized layout of data presented in rows and columns.',
		status: 'delivered',
		timestamp: 'Jul 3, 2023 10:30 am',
		provider: 'AWS',
		opens: 1,
		clicks: 0,
	},
	{
		id: 6,
		to: 'kenzi.lawson@example.com',
		from: 'billing@yoursite.com',
		subject: 'Organized layout of data presented in rows and columns.',
		status: 'failed',
		timestamp: 'Jul 3, 2023 10:30 am',
		provider: 'Mailgun',
		opens: 1,
		clicks: 0,
	},
	{
		id: 7,
		to: 'michelle.rivera@example.com',
		from: 'billing@yoursite.com',
		subject: 'Organized layout of data presented in rows and columns.',
		status: 'delivered',
		timestamp: 'Oct 3, 2024 10:30 am',
		provider: 'Microsoft Outlook/Office 365',
		opens: 1,
		clicks: 0,
	},
	{
		id: 8,
		to: 'jackson.graham@example.com',
		from: 'billing@yoursite.com',
		subject: 'Organized layout of data presented in rows and columns.',
		status: 'pending',
		timestamp: 'Jul 3, 2023 10:30 am',
		provider: 'AWS',
		opens: 1,
		clicks: 0,
	},
	{
		id: 9,
		to: 'jackson.graham@example.com',
		from: 'billing@yoursite.com',
		subject: 'Organized layout of data presented in rows and columns.',
		status: 'pending',
		timestamp: 'Jul 3, 2023 10:30 am',
		provider: 'AWS',
		opens: 1,
		clicks: 0,
	},
	{
		id: 10,
		to: 'jessica.hanson@example.com',
		from: 'billing@yoursite.com',
		subject: 'Organized layout of data presented in rows and columns.',
		status: 'delivered',
		timestamp: 'Jul 3, 2023 10:30 am',
		provider: 'AWS',
		opens: 1,
		clicks: 0,
	},
];

const statusOptions = [
	{ id: 'all', name: 'State' },
	{ id: 'delivered', name: 'Successful' },
	{ id: 'pending', name: 'In Progress' },
	{ id: 'failed', name: 'Failed' },
];

const getStatusBadge = ( status: string ) => {
	switch ( status ) {
		case 'delivered':
			return (
				<Badge
					label="Successful"
					size="xs"
					variant="green"
					type="pill"
				/>
			);
		case 'pending':
			return (
				<Badge
					label="In Progress"
					size="xs"
					variant="yellow"
					type="pill"
				/>
			);
		case 'failed':
			return (
				<Badge
					label="Failed"
					size="xs"
					variant="red"
					type="pill"
				/>
			);
		default:
			return (
				<Badge
					label={ status }
					size="xs"
					variant="neutral"
					type="pill"
				/>
			);
	}
};

const Template = () => {
	const [ selectedRows, setSelectedRows ] = useState<number[]>( [] );
	const [ statusFilter, setStatusFilter ] = useState( statusOptions[ 0 ] );
	const [ searchOpen, setSearchOpen ] = useState( false );

	const handleRowSelection = ( checked: boolean, log: typeof emailLogs[ 0 ] ) => {
		if ( checked ) {
			setSelectedRows( [ ...selectedRows, log.id ] );
		} else {
			setSelectedRows( selectedRows.filter( ( id ) => id !== log.id ) );
		}
	};

	const handleSelectAll = ( checked: boolean ) => {
		if ( checked ) {
			setSelectedRows( emailLogs.map( ( log ) => log.id ) );
		} else {
			setSelectedRows( [] );
		}
	};

	const handleStatusFilterChange = ( value: unknown ) => {
		setStatusFilter( value as { id: string; name: string } );
	};

	return (
		<div className="bg-background-primary min-h-screen">
			{ /* Main container with consistent padding */ }
			<Container className="p-4">
				<Container.Item>
					{ /* Card container to match Figma layout */ }
					<div className="rounded-xl border border-border-subtle overflow-hidden bg-background-primary">
						{ /* Header with Filters and Search */ }
						<div className="border-b border-border-subtle py-4">
							<div className="flex items-center justify-between w-full gap-8">
								{ /* Header Section */ }
								<div>
									<Title size="lg" className="text-text-primary" title="Email Logs" />
								</div>

								{ /* Filters and Search Section */ }
								<div className="flex items-center gap-4">
									{ /* Search */ }
									<div className="w-80">
										<SearchBox
											open={ searchOpen }
											setOpen={ setSearchOpen }
											size="md"
										>
											<SearchBox.Input
												placeholder="Search emails..."
											/>
										</SearchBox>
									</div>

									{ /* Filters */ }
									<div className="flex items-center gap-3">
										{ /* Status Filter */ }
										<Select
											value={ statusFilter }
											onChange={ handleStatusFilterChange }
											by="id"
											size="md"
										>
											<Select.Button
												label=""
												aria-label="Select Status"
												render={ ( selected ) => (
													<div className="flex items-center gap-2">
														<Filter className="size-4 text-icon-secondary" />
														<Text size={ 14 } className="text-text-primary">
															{ ( selected as { name: string } )?.name || 'Status' }
														</Text>
													</div>
												) }
											/>
											<Select.Options>
												{ statusOptions.map( ( option ) => (
													<Select.Option key={ option.id } value={ option }>
														{ option.name }
													</Select.Option>
												) ) }
											</Select.Options>
										</Select>

										{ /* Date Filter */ }
										<div className="relative flex gap-1">
											<Input
												type="text"
												size="sm"
												suffix={
													<Calendar className="text-icon-secondary" />
												}
												placeholder={ 'mm/dd/yyyy' }
												className="min-w-[200px]"
												readOnly
												aria-label={ 'Select Date Range' }
											/>
										</div>
									</div>
								</div>
							</div>
						</div>

						{ /* Table */ }
						<div className="overflow-hidden">
							<Table checkboxSelection>
								<Table.Head
									selected={ selectedRows.length > 0 }
									onChangeSelection={ handleSelectAll }
									indeterminate={
										selectedRows.length > 0 && selectedRows.length < emailLogs.length
									}
								>
									<Table.HeadCell>Subject</Table.HeadCell>
									<Table.HeadCell>Status</Table.HeadCell>
									<Table.HeadCell>Email To</Table.HeadCell>
									<Table.HeadCell>Connection</Table.HeadCell>
									<Table.HeadCell>Date & Time</Table.HeadCell>
									<Table.HeadCell className="w-16">
										<span className="sr-only">Actions</span>
									</Table.HeadCell>
								</Table.Head>
								<Table.Body>
									{ emailLogs.map( ( log ) => (
										<Table.Row
											key={ log.id }
											value={ log }
											selected={ selectedRows.includes( log.id ) }
											onChangeSelection={ handleRowSelection }
										>
											<Table.Cell>
												<Text size={ 14 } className="text-text-primary" title={ log.subject }>
													{ log.subject }
												</Text>
											</Table.Cell>
											<Table.Cell>
												{ getStatusBadge( log.status ) }
											</Table.Cell>
											<Table.Cell>
												<Text size={ 14 } className="text-text-secondary">
													{ log.to }
												</Text>
											</Table.Cell>
											<Table.Cell>
												<Text size={ 14 } className="text-text-secondary">
													{ log.provider }
												</Text>
											</Table.Cell>
											<Table.Cell>
												<Text size={ 14 } className="text-text-secondary">
													{ log.timestamp }
												</Text>
											</Table.Cell>
											<Table.Cell>
												<div className="flex items-center justify-end">
													<Tooltip content="Resend Email" arrow placement="top">
														<Button
															variant="ghost"
															icon={ <RefreshCw className="size-3" /> }
															size="xs"
															className="text-icon-secondary hover:text-icon-primary"
															aria-label="Resend Email"
														/>
													</Tooltip>
													<Tooltip content="View Details" arrow placement="top">
														<Button
															variant="ghost"
															icon={ <Eye className="size-3" /> }
															size="xs"
															className="text-icon-secondary hover:text-icon-primary"
															aria-label="View Details"
														/>
													</Tooltip>
													<Tooltip content="Delete" arrow placement="top">
														<Button
															variant="ghost"
															icon={ <Trash className="size-3" /> }
															size="xs"
															className="text-icon-secondary hover:text-icon-primary"
															aria-label="Delete"
														/>
													</Tooltip>
												</div>
											</Table.Cell>
										</Table.Row>
									) ) }
								</Table.Body>
								<Table.Footer>
									<div className="flex items-center justify-between w-full">
										<div className="flex items-center gap-2 flex-shrink-0">
											<Text size={ 14 } className="text-text-secondary whitespace-nowrap">
												Page 1 out of 10
											</Text>
											<Select
												value={ { id: '10', name: '10' } }
												onChange={ () => {} }
												by="id"
												size="sm"
											>
												<Select.Button
													label=""
													aria-label="Select Rows Per Page"
													render={ ( selected ) => (
														<Text size={ 14 } className="text-text-primary">
															{ ( selected as { name: string } )?.name || '10' }
														</Text>
													) }
												/>
												<Select.Options>
													<Select.Option value={ { id: '5', name: '5' } }>5</Select.Option>
													<Select.Option value={ { id: '10', name: '10' } }>10</Select.Option>
													<Select.Option value={ { id: '25', name: '25' } }>25</Select.Option>
													<Select.Option value={ { id: '50', name: '50' } }>50</Select.Option>
												</Select.Options>
											</Select>
										</div>
										<Pagination className="w-fit flex-shrink-0">
											<Pagination.Content>
												<Pagination.Previous />
												<Pagination.Item>1</Pagination.Item>
												<Pagination.Item isActive>2</Pagination.Item>
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
						</div>
					</div>
				</Container.Item>
			</Container>

			{ /* Bulk Actions Bar (shown when rows are selected) */ }
			{ selectedRows.length > 0 && (
				<div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
					<div className="bg-background-primary border border-border-subtle rounded-lg shadow-lg px-4 py-3 flex items-center gap-4">
						<Text size={ 14 } className="text-text-primary font-medium">
							{ selectedRows.length } email{ selectedRows.length > 1 ? 's' : '' } selected
						</Text>
						<div className="flex items-center gap-2">
							<Button variant="outline" size="sm">
								Resend
							</Button>
							<Button
								variant="ghost"
								icon={ <X className="size-4" /> }
								size="sm"
								className="text-icon-secondary hover:text-icon-primary"
								onClick={ () => setSelectedRows( [] ) }
								aria-label="Clear selection"
							/>
						</div>
					</div>
				</div>
			) }
		</div>
	);
};

export const SureMailEmailLogs = Template.bind( {} );
