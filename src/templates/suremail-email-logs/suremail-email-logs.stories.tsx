import React, { useState } from 'react';
import {
	Table,
	Title,
	Text,
	Button,
	Badge,
	SearchBox,
	Select,
	Pagination,
	Tooltip,
	Input,
	Topbar,
	DatePicker,
} from '@/components';
import {
	Filter,
	Eye,
	Calendar,
	RefreshCw,
	Trash,
	CircleHelp,
	Bell,
	User,
} from 'lucide-react';
import { SureMailIcon } from '@/ui/icons';

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
	const [ isDatePickerOpen, setIsDatePickerOpen ] = useState( false );

	const handleDateCancel = () => {
		setIsDatePickerOpen( false );
	};

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
		<div className="bg-background-secondary min-h-screen w-full">
			{ /* Navigation Topbar */ }
			<Topbar className="bg-background-primary shadow-sm px-6">
				<Topbar.Left className="flex-shrink-0">
					<Topbar.Item>
						<SureMailIcon />
					</Topbar.Item>
				</Topbar.Left>
				<Topbar.Middle align="left" className="flex-1 overflow-hidden">
					<Topbar.Item className="flex items-center gap-4 min-w-0">
						<Text
							className="text-text-secondary text-sm font-medium hover:text-text-primary px-2 py-1 whitespace-nowrap"
						>
							Dashboard
						</Text>
						<Text
							className="text-text-primary text-sm font-medium relative px-2 py-1 after:absolute after:bottom-[50px] after:left-0 after:right-0 after:h-0.5 after:bg-brand-primary-600 after:content-[''] whitespace-nowrap"
						>
							Settings
						</Text>
						<Text
							className="text-text-secondary text-sm font-medium hover:text-text-primary px-2 py-1 whitespace-nowrap"
						>
							Connections
						</Text>
						<Text
							className="text-text-secondary text-sm font-medium hover:text-text-primary px-2 py-1 whitespace-nowrap"
						>
							Email Logs
						</Text>
						<Text
							className="text-text-secondary text-sm font-medium hover:text-text-primary px-2 py-1 whitespace-nowrap"
						>
							Notifications
						</Text>
						<Text
							className="text-text-secondary text-sm font-medium hover:text-text-primary px-2 py-1 whitespace-nowrap"
						>
							Addons
						</Text>
					</Topbar.Item>
				</Topbar.Middle>
				<Topbar.Right className="flex-shrink-0">
					<Topbar.Item className="flex items-center gap-2">
						<Badge
							label="Free"
							size="xs"
							variant="neutral"
						/>
						<Button variant="ghost" size="sm" icon={ <CircleHelp className="size-4" strokeWidth="1.5" /> } aria-label="View Details" />
						<Button variant="ghost" size="sm" icon={ <Bell className="size-4" strokeWidth="1.5" /> } aria-label="View Details" />
						<Button
							variant="ghost"
							size="sm"
							icon={ <User strokeWidth="1.5" /> }
							className="bg-brand-background-50 text-icon-primary"
							aria-label="View Details"
						/>
					</Topbar.Item>
				</Topbar.Right>
			</Topbar>

			{ /* Main content area */ }
			<div className="px-6 py-4">
				{ /* Email Logs Card */ }
				<div className="rounded-xl border border-border-subtle overflow-hidden bg-background-secondary shadow-sm">
					{ /* Stats and Filters Section */ }
					<div className="border-b border-border-subtle p-4 bg-background-primary">
						<div className="flex items-center justify-between w-full gap-6">
							{ /* Email Logs Title */ }
							<div>
								<Title size="lg" className="text-text-primary mb-1" title="Email Logs" />
							</div>

							{ /* Search and Filters */ }
							<div className="flex items-center gap-3">
								{ /* Search */ }
								<div className="w-80">
									<SearchBox
										open={ searchOpen }
										setOpen={ setSearchOpen }
										size="md"
										variant="secondary"
									>
										<SearchBox.Input
											placeholder="Search emails..."
										/>
									</SearchBox>
								</div>

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
								<div
									className="relative flex gap-1"
								>
									<Input
										type="text"
										size="sm"
										suffix={
											<Calendar className="text-icon-secondary" />
										}
										onClick={ () =>
											setIsDatePickerOpen( ( prev ) => ! prev )
										}
										placeholder={ 'mm/dd/yyyy' }
										className="min-w-[200px]"
										readOnly
									/>
									{ isDatePickerOpen && (
										<div className="absolute z-10 mt-2 rounded-lg shadow-lg right-0 bg-background-primary">
											<DatePicker
												applyButtonText={ 'Apply' }
												cancelButtonText={ 'Cancel' }
												selectionType="range"
												showOutsideDays={ false }
												variant="presets"
												onApply={ handleDateCancel }
												onCancel={ handleDateCancel }
											/>
										</div>
									) }
								</div>
							</div>
						</div>
					</div>

					{ /* Table */ }
					<div className="overflow-hidden bg-background-primary p-4">
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
														icon={ <RefreshCw className="size-4" /> }
														size="sm"
														className="text-icon-secondary hover:text-icon-primary"
														aria-label="Resend Email"
													/>
												</Tooltip>
												<Tooltip content="View Details" arrow placement="top">
													<Button
														variant="ghost"
														icon={ <Eye className="size-4" /> }
														size="sm"
														className="text-icon-secondary hover:text-icon-primary"
														aria-label="View Details"
													/>
												</Tooltip>
												<Tooltip content="Delete" arrow placement="top">
													<Button
														variant="ghost"
														icon={ <Trash className="size-4" /> }
														size="sm"
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
								<div className="flex items-center justify-between w-full p-4">
									<div className="flex items-center gap-3 flex-shrink-0">
										<Text size={ 14 } className="text-text-secondary whitespace-nowrap">
											Showing 1 to 10 of { emailLogs.length } results
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
													<div className="flex items-center gap-2">
														<Text size={ 14 } className="text-text-primary">
															{ ( selected as { name: string } )?.name || '10' }
														</Text>
														<Text size={ 14 } className="text-text-secondary">
															per page
														</Text>
													</div>
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
			</div>
		</div>
	);
};

export const SureMailEmailLogs = Template.bind( {} );
