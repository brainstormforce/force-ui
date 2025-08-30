import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import {
	Topbar,
	Button,
	Label,
	RadioButton,
	ProgressSteps,
	Badge,
	Title,
} from '@/components';
import { SureEmailLogo, Gmail, PepiPost, MailJet, ElasticEmail, SparkPost, Brevo, Mailgun, SendGrid, PostMark, Amazon, AnySMTP, Microsoft, ZohoMail } from '@/ui/icons';

export default {
	title: 'Templates/Onboarding/SureMail Connect',
	parameters: {
		layout: 'fullscreen',
	},
	tags: [ 'autodocs' ],
};

const Template = ( args ) => {
	return (
		<div
			{ ...args }
			className="bg-background-secondary min-h-screen w-full pb-10"
		>
			<Topbar className="bg-background-secondary">
				<Topbar.Left>
					<Topbar.Item>
						<SureEmailLogo />
					</Topbar.Item>
				</Topbar.Left>
				<Topbar.Middle>
					<Topbar.Item>
						<ProgressSteps currentStep={ 2 } variant="number" completedVariant="number">
							<ProgressSteps.Step />
							<ProgressSteps.Step />
							<ProgressSteps.Step />
							<ProgressSteps.Step />
							<ProgressSteps.Step />
						</ProgressSteps>
					</Topbar.Item>
				</Topbar.Middle>
				<Topbar.Right>
					<Topbar.Item>
						<Button
							icon={ <X className="size-4" /> }
							iconPosition="right"
							variant="ghost"
							size="xs"
						>
							Exit Guided Setup
						</Button>
					</Topbar.Item>
				</Topbar.Right>
			</Topbar>
			<form onSubmit={ ( event ) => event.preventDefault() }>
				<div className="md:w-[47rem] box-border mx-auto p-8 mt-10 border border-solid border-border-subtle bg-background-primary rounded-xl shadow-sm space-y-4">
					<div>
						<Title
							size="md"
							className="text-text-primary"
							tag="h4"
							title="Select Your Primary Email Sending Service"
						/>
						<Label className="text-text-secondary mt-1 text-sm max-w-[41rem] font-normal">
							Pick an email provider to ensure your WordPress emails are delivered securely and reliably.
						</Label>
					</div>

					<div className="bg-background-secondary p-1 rounded-lg max-h-[23rem] overflow-auto">
						<RadioButton.Group
							columns={ 2 }
							size="sm"
							gapClassname="gap-1"
						>
							<RadioButton.Button
								value={ `Gmail` }
								label={
									args.label ?? {
										heading: 'Gmail',
									}
								}
								inlineIcon={ true }
								borderOn
								icon={ <Gmail /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white border-0"
							/>
							<RadioButton.Button
								value={ `smtp` }
								label={
									args.label ?? {
										heading: 'Any SMTP Provider',
									}
								}
								inlineIcon={ true }
								borderOn
								icon={ <AnySMTP /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white border-0"
							/>
							<RadioButton.Button
								value={ `amazon` }
								label={
									args.label ?? {
										heading: 'Amazon SES',
									}
								}
								inlineIcon={ true }
								borderOn
								icon={ <Amazon /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white border-0"
							/>
							<RadioButton.Button
								value={ `postmark` }
								label={
									args.label ?? {
										heading: 'Postmark',
									}
								}
								inlineIcon={ true }
								borderOn
								icon={ <PostMark /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white border-0"
							/>
							<RadioButton.Button
								value={ `microsoft` }
								label={
									args.label ?? {
										heading: 'Microsoft Outlook',
									}
								}
								inlineIcon={ true }
								badgeItem={
									<Badge
										label="Soon"
										size="xxs"
										variant="green"
										type="pill"
									/>
								}
								borderOn
								icon={ <Microsoft /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white border-0"
							/>
							<RadioButton.Button
								value={ `zoho` }
								label={
									args.label ?? {
										heading: 'Zoho Mail',
									}
								}
								inlineIcon={ true }
								badgeItem={
									<Badge
										label="Soon"
										size="xxs"
										variant="green"
										type="pill"
									/>
								}
								borderOn
								icon={ <ZohoMail /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white border-0"
							/>
							<RadioButton.Button
								value={ `Email7` }
								label={
									args.label ?? {
										heading: 'SendGrid',
									}
								}
								inlineIcon={ true }
								borderOn
								icon={ <SendGrid /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white border-0"
							/>
							<RadioButton.Button
								value={ `Email8` }
								label={
									args.label ?? {
										heading: 'Mailgun',
									}
								}
								inlineIcon={ true }
								borderOn
								icon={ <Mailgun /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white border-0"
							/>
							<RadioButton.Button
								value={ `Email9` }
								label={
									args.label ?? {
										heading: 'Brevo (Sendinblue)',
									}
								}
								inlineIcon={ true }
								borderOn
								icon={ <Brevo /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white border-0"
							/>
							<RadioButton.Button
								value={ `Email11` }
								label={
									args.label ?? {
										heading: 'SparkPost',
									}
								}
								inlineIcon={ true }
								borderOn
								icon={ <SparkPost /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white border-0"
							/>
							<RadioButton.Button
								value={ `Email12` }
								label={
									args.label ?? {
										heading: 'Elastic Email',
									}
								}
								inlineIcon={ true }
								borderOn
								icon={ <ElasticEmail /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white border-0"
							/>
							<RadioButton.Button
								value={ `Starter64` }
								label={
									args.label ?? {
										heading: 'SMTP.com',
									}
								}
								inlineIcon={ true }
								borderOn
								icon={ <AnySMTP /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white border-0"
							/>
							<RadioButton.Button
								value={ `Email13` }
								label={
									args.label ?? {
										heading: 'Pepipost',
									}
								}
								inlineIcon={ true }
								borderOn
								icon={ <PepiPost /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white border-0"
							/>
							<RadioButton.Button
								value={ `Email14` }
								label={
									args.label ?? {
										heading: 'Mailjet',
									}
								}
								inlineIcon={ true }
								borderOn
								icon={ <MailJet /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white border-0"
							/>
						</RadioButton.Group>
					</div>
					<div className="flex justify-between items-center pt-2 gap-4">
						<Button
							variant="outline"
							className="flex items-center gap-2"
							icon={ <ChevronLeft /> }
						>
							Back
						</Button>
						<div className="flex justify-end items-center gap-3">
							<Button
								className="flex items-center gap-2"
								icon={ <ChevronRight /> }
								iconPosition="right"
							>
								Continue Setup
							</Button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export const SureMailConnect = Template.bind( {} );
SureMailConnect.args = {};

SureMailConnect.storyName = 'SureMailConnect';
