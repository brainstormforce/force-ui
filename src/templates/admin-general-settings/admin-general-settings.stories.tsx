import { useState } from 'react';
import {
	Button,
	Container,
	Select,
	Switch,
	Title,
	Text,
} from '@/components';
import { Info } from 'lucide-react';

interface OptionType {
	id: string;
	name: string;
	value: string;
}

interface TemplateArgs {
	className?: string;
}

export default {
	title: 'Templates/Admin Settings/Admin General Settings',
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [
		( Story: React.ComponentType ) => (
			<div className="box-border [&_*]:box-border w-full h-[100dvh]">
				<Story />
			</div>
		),
	],
	tags: [ 'autodocs' ],
};

const DELETE_LOG_OPTIONS = [
	{
		id: '30',
		name: 'Delete after 30 days',
		value: '30',
	},
	{
		id: '60',
		name: 'Delete after 60 days',
		value: '60',
	},
	{
		id: '90',
		name: 'Delete after 90 days',
		value: '90',
	},
	{
		id: 'never',
		name: 'Never delete',
		value: 'never',
	},
];

const CONNECTION_OPTIONS = [
	{
		id: 'smtp-1',
		name: 'SMTP - helloadmin@gmail.com',
		value: 'smtp-1',
	},
	{
		id: 'smtp-2',
		name: 'SMTP - support@example.com',
		value: 'smtp-2',
	},
	{
		id: 'sendgrid',
		name: 'SendGrid - api@sendgrid.com',
		value: 'sendgrid',
	},
];

const Template = ( args: TemplateArgs = {} ) => {
	const [ logEmails, setLogEmails ] = useState( true );
	const [ deleteLogsValue, setDeleteLogsValue ] = useState( DELETE_LOG_OPTIONS[ 1 ] );
	const [ defaultConnection, setDefaultConnection ] = useState( CONNECTION_OPTIONS[ 0 ] );
	const [ emailSimulation, setEmailSimulation ] = useState( false );
	const [ spamDetection, setSpamDetection ] = useState( false );
	const [ emailSummary, setEmailSummary ] = useState( false );
	const [ usageTracking, setUsageTracking ] = useState( false );

	const handleDeleteLogsChange = ( value: unknown ) => {
		setDeleteLogsValue( value as OptionType );
	};

	const handleDefaultConnectionChange = ( value: unknown ) => {
		setDefaultConnection( value as OptionType );
	};

	return (
		<div { ...args } className="bg-background-secondary min-h-screen w-full">
			<Container
				containerType="flex"
				direction="column"
				gap="2xl"
				className="py-8 px-8 max-w-[696px] mx-auto"
			>
				{ /* Header */ }
				<Container.Item>
					<div className="flex justify-between items-center">
						<div className="flex items-center gap-2">
							<Title
								size="md"
								tag="h1"
								className="text-text-primary font-semibold"
								title="General Settings"
							/>
						</div>
						<Button size="md" variant="primary">
							Save
						</Button>
					</div>
				</Container.Item>

				{ /* Settings Card */ }
				<Container.Item>
					<div className="bg-background-primary rounded-xl p-6 shadow-sm border border-border-subtle">
						<div className="space-y-6">
							{ /* Log Emails Toggle */ }
							<Switch
								id="log-emails"
								value={ logEmails }
								onChange={ setLogEmails }
								size="sm"
								label={ {
									heading: 'Log Emails',
									description: 'Log all emails for reporting',
								} }
							/>
							{ /* Delete Logs Select */ }
							<div className="space-y-1.5">
								<div className="flex items-center gap-1">
									<label className="text-sm font-medium text-field-label">Delete Logs</label>
									<Info className="w-4 h-4 text-icon-secondary" />
								</div>
								<Select
									size="md"
									value={ deleteLogsValue }
									onChange={ handleDeleteLogsChange }
									by="id"
								>
									<Select.Button
										render={ ( selected ) => ( selected as unknown as OptionType )?.name || 'Select option' }
									/>
									<Select.Portal>
										<Select.Options>
											{ DELETE_LOG_OPTIONS.map( ( option ) => (
												<Select.Option key={ option.id } value={ option }>
													{ option.name }
												</Select.Option>
											) ) }
										</Select.Options>
									</Select.Portal>
								</Select>
								<Text size={ 14 } className="text-text-secondary">
									Hint text can be added here. Link
								</Text>
							</div>

							{ /* Default Connection Select */ }
							<div className="space-y-1.5">
								<Select
									size="md"
									value={ defaultConnection }
									onChange={ handleDefaultConnectionChange }
									by="id"
								>
									<Select.Button
										label="Default Connection"
										render={ ( selected ) => ( selected as unknown as OptionType )?.name || 'Select connection' }
									/>
									<Select.Portal>
										<Select.Options>
											{ CONNECTION_OPTIONS.map( ( option ) => (
												<Select.Option key={ option.id } value={ option }>
													{ option.name }
												</Select.Option>
											) ) }
										</Select.Options>
									</Select.Portal>
								</Select>
								<Text size={ 14 } className="text-text-secondary">
									Hint text can be added here. Link
								</Text>
							</div>

							{ /* Email Simulation Toggle */ }
							<Switch
								id="email-simulation"
								value={ emailSimulation }
								onChange={ setEmailSimulation }
								size="sm"
								label={ {
									heading: 'Email Simulation',
									description: 'Disable sending all emails. If you enable this, no email will be sent.',
								} }
							/>

							{ /* Spam Detection Toggle */ }
							<Switch
								id="spam-detection"
								value={ spamDetection }
								onChange={ setSpamDetection }
								size="sm"
								label={ {
									heading: 'Spam Detection',
									description: 'Stand out you mails form the rest and make sure they don\'t reach to spam',
								} }
							/>

							{ /* Enable Email Summary Toggle */ }
							<Switch
								id="email-summary"
								value={ emailSummary }
								onChange={ setEmailSummary }
								size="sm"
								label={ {
									heading: 'Enable Email Summary',
									description: 'Generate a brief preview to improve email clarity and deliverability.',
								} }
							/>

							{ /* Enable Usage Tracking Toggle */ }
							<Switch
								id="usage-tracking"
								value={ usageTracking }
								onChange={ setUsageTracking }
								size="sm"
								label={ {
									heading: 'Enable Usage Tracking',
									description: 'Allow SureMail to track non-sensitive usage tracking data. Learn More',
								} }
							/>
						</div>
					</div>
				</Container.Item>
			</Container>
		</div>
	);
};

export const Default = Template;
