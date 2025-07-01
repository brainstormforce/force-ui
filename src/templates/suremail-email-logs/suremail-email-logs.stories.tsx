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
	Avatar,
	Input,
} from '@/components';
import {
	Filter,
	Eye,
	AlertCircle,
	CheckCircle,
	Clock,
	X,
	MousePointer,
	Calendar,
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
		to: 'john.doe@company.com',
		from: 'noreply@yoursite.com',
		subject: 'Welcome to our platform',
		status: 'delivered',
		timestamp: '2024-06-27 09:15:23',
		provider: 'SendGrid',
		opens: 2,
		clicks: 1,
	},
	{
		id: 2,
		to: 'jane.smith@business.org',
		from: 'support@yoursite.com',
		subject: 'Password reset request',
		status: 'pending',
		timestamp: '2024-06-27 08:45:12',
		provider: 'Mailgun',
		opens: 0,
		clicks: 0,
	},
	{
		id: 3,
		to: 'bob.wilson@startup.io',
		from: 'marketing@yoursite.com',
		subject: 'Special offer just for you',
		status: 'failed',
		timestamp: '2024-06-27 07:30:45',
		provider: 'AWS SES',
		opens: 0,
		clicks: 0,
	},
	{
		id: 4,
		to: 'alice.brown@agency.net',
		from: 'orders@yoursite.com',
		subject: 'Your order has been confirmed',
		status: 'delivered',
		timestamp: '2024-06-26 15:22:18',
		provider: 'SendGrid',
		opens: 3,
		clicks: 2,
	},
	{
		id: 5,
		to: 'charlie.davis@enterprise.com',
		from: 'billing@yoursite.com',
		subject: 'Invoice for your subscription',
		status: 'delivered',
		timestamp: '2024-06-26 14:15:30',
		provider: 'Mailgun',
		opens: 1,
		clicks: 0,
	},
];

const statusOptions = [
	{ id: 'all', name: 'State' },
	{ id: 'delivered', name: 'Delivered' },
	{ id: 'pending', name: 'Pending' },
	{ id: 'failed', name: 'Failed' },
];

const providerOptions = [
	{ id: 'all', name: 'All Providers' },
	{ id: 'sendgrid', name: 'SendGrid' },
	{ id: 'mailgun', name: 'Mailgun' },
	{ id: 'awsses', name: 'AWS SES' },
];

const getStatusBadge = ( status: string ) => {
	switch ( status ) {
		case 'delivered':
			return (
				<Badge
					label="Delivered"
					size="xs"
					variant="green"
					type="pill"
					icon={ <CheckCircle className="size-3" /> }
				/>
			);
		case 'pending':
			return (
				<Badge
					label="Pending"
					size="xs"
					variant="yellow"
					type="pill"
					icon={ <Clock className="size-3" /> }
				/>
			);
		case 'failed':
			return (
				<Badge
					label="Failed"
					size="xs"
					variant="red"
					type="pill"
					icon={ <AlertCircle className="size-3" /> }
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
			{ /* Header with Filters and Search */ }
			<Container className="border-b border-border-subtle">
				<Container.Item className="px-8 py-8">
					<div className="flex items-center justify-between gap-8">
						{ /* Header Section */ }
						<div>
							<Title size="lg" className="text-text-primary mb-2" title="Email Logs" />
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

								{ /* Provider Filter */ }
								<div
									className="relative flex gap-1"
								>
									<Input
										type="text"
										size="sm"
										suffix={
											<Calendar className="text-icon-secondary" />
										}
										placeholder={ 'mm/dd/yyyy' }
										className="min-w-[200px]"
										readOnly
										aria-label={
											'Select Date Range'
										}
									/>
								</div>
							</div>
						</div>
					</div>
				</Container.Item>
			</Container>

			{ /* Table */ }
			<Container className="px-8 py-6">
				<Container.Item>
					<div className="rounded-lg border border-border-subtle overflow-hidden">
						<Table checkboxSelection>
							<Table.Head
								selected={ selectedRows.length > 0 }
								onChangeSelection={ handleSelectAll }
								indeterminate={
									selectedRows.length > 0 && selectedRows.length < emailLogs.length
								}
							>
								<Table.HeadCell>Recipient</Table.HeadCell>
								<Table.HeadCell>Subject</Table.HeadCell>
								<Table.HeadCell>Status</Table.HeadCell>
								<Table.HeadCell>Provider</Table.HeadCell>
								<Table.HeadCell>Date & Time</Table.HeadCell>
								<Table.HeadCell>Activity</Table.HeadCell>
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
											<div className="flex items-center gap-3">
												<Avatar size="sm" src="" alt={ log.to } />
												<div className="min-w-0">
													<Text size={ 14 } className="font-medium text-text-primary">
														{ log.to }
													</Text>
													<Text size={ 12 } className="text-text-tertiary">
														{ log.from }
													</Text>
												</div>
											</div>
										</Table.Cell>
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
												{ log.provider }
											</Text>
										</Table.Cell>
										<Table.Cell>
											<Text size={ 14 } className="text-text-secondary">
												{ log.timestamp }
											</Text>
										</Table.Cell>
										<Table.Cell>
											<div className="flex items-center gap-3">
												<div className="flex items-center gap-1">
													<Eye className="size-3 text-text-tertiary" />
													<Text size={ 12 } className="text-text-secondary">
														{ log.opens }
													</Text>
												</div>
												<div className="flex items-center gap-1">
													<MousePointer className="size-3 text-text-tertiary" />
													<Text size={ 12 } className="text-text-secondary">
														{ log.clicks }
													</Text>
												</div>
											</div>
										</Table.Cell>
										<Table.Cell>
											<div className="flex items-center justify-end">
												<Tooltip content="View Details" arrow placement="top">
													<Button
														variant="ghost"
														icon={ <Eye /> }
														size="xs"
														className="text-icon-secondary hover:text-icon-primary"
														aria-label="View Details"
													/>
												</Tooltip>
											</div>
										</Table.Cell>
									</Table.Row>
								) ) }
							</Table.Body>
							<Table.Footer>
								<div className="flex items-center justify-between w-full px-4 py-3">
									<Text size={ 14 } className="text-text-secondary">
										Showing { emailLogs.length } of { emailLogs.length } emails
									</Text>
									<Pagination className="w-fit">
										<Pagination.Content>
											<Pagination.Previous />
											<Pagination.Item isActive>1</Pagination.Item>
											<Pagination.Item>2</Pagination.Item>
											<Pagination.Item>3</Pagination.Item>
											<Pagination.Ellipsis />
											<Pagination.Item>8</Pagination.Item>
											<Pagination.Item>9</Pagination.Item>
											<Pagination.Next />
										</Pagination.Content>
									</Pagination>
								</div>
							</Table.Footer>
						</Table>
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
