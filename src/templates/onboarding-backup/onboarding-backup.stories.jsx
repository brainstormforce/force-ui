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
import { SureEmailLogo, SureEmailIcon } from '@/ui/icons';

export default {
	title: 'Templates/Onboarding/Backup Email',
	parameters: {
		layout: 'fullscreen',
		a11y: {
			disable: true,
		}
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
						<ProgressSteps currentStep={ 4 } variant="number">
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
							title="Want to Add a Backup Email Service?"
						/>
						<Label className="text-text-secondary mt-1 text-sm max-w-[41rem] font-normal">
							This is an optional step, but it can be really
							helpful. By adding a backup email service, your
							emails will still be sent if your main service stops
							working.
						</Label>
					</div>

					<div className="bg-background-secondary p-1 rounded-lg max-h-[23rem] overflow-auto">
						<RadioButton.Group
							columns={ 2 }
							size="sm"
							gapClassname="gap-1"
						>
							<RadioButton.Button
								value={ `Email1` }
								label={
									args.label ?? {
										heading: 'Email Service',
									}
								}
								inlineIcon={ true }
								badgeItem={
									<Badge
										label="Primary"
										size="xxs"
										variant="green"
										type="pill"
									/>
								}
								borderOn
								icon={ <SureEmailIcon /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white border-0"
							/>
							<RadioButton.Button
								value={ `Email2` }
								label={
									args.label ?? {
										heading: 'Email Service',
									}
								}
								inlineIcon={ true }
								borderOn
								icon={ <SureEmailIcon /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white border-0"
							/>
							<RadioButton.Button
								value={ `Email3` }
								label={
									args.label ?? {
										heading: 'Email Service',
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
								icon={ <SureEmailIcon /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white border-0"
							/>
							<RadioButton.Button
								value={ `Email4` }
								label={
									args.label ?? {
										heading: 'Email Service',
									}
								}
								inlineIcon={ true }
								borderOn
								icon={ <SureEmailIcon /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white border-0"
							/>
							<RadioButton.Button
								value={ `Email5` }
								label={
									args.label ?? {
										heading: 'Email Service',
									}
								}
								inlineIcon={ true }
								borderOn
								icon={ <SureEmailIcon /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white border-0"
							/>
							<RadioButton.Button
								value={ `Email6` }
								label={
									args.label ?? {
										heading: 'Email Service',
									}
								}
								inlineIcon={ true }
								badgeItem={
									<Badge
										label="Free"
										size="xxs"
										variant="green"
										type="pill"
									/>
								}
								borderOn
								icon={ <SureEmailIcon /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white border-0"
							/>
							<RadioButton.Button
								value={ `Email7` }
								label={
									args.label ?? {
										heading: 'Email Service',
									}
								}
								inlineIcon={ true }
								borderOn
								icon={ <SureEmailIcon /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white border-0"
							/>
							<RadioButton.Button
								value={ `Email8` }
								label={
									args.label ?? {
										heading: 'Email Service',
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
								icon={ <SureEmailIcon /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white border-0"
							/>
							<RadioButton.Button
								value={ `Email9` }
								label={
									args.label ?? {
										heading: 'Email Service',
									}
								}
								inlineIcon={ true }
								borderOn
								icon={ <SureEmailIcon /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white border-0"
							/>
							<RadioButton.Button
								value={ `Email11` }
								label={
									args.label ?? {
										heading: 'Email Service',
									}
								}
								inlineIcon={ true }
								borderOn
								icon={ <SureEmailIcon /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white border-0"
							/>
							<RadioButton.Button
								value={ `Email12` }
								label={
									args.label ?? {
										heading: 'Email Service',
									}
								}
								inlineIcon={ true }
								borderOn
								icon={ <SureEmailIcon /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white border-0"
							/>
							<RadioButton.Button
								value={ `Starter64` }
								label={
									args.label ?? {
										heading: 'Email Service',
									}
								}
								inlineIcon={ true }
								borderOn
								icon={ <SureEmailIcon /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white border-0"
							/>
							<RadioButton.Button
								value={ `Email13` }
								label={
									args.label ?? {
										heading: 'Email Service',
									}
								}
								inlineIcon={ true }
								borderOn
								icon={ <SureEmailIcon /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white border-0"
							/>
							<RadioButton.Button
								value={ `Email14` }
								label={
									args.label ?? {
										heading: 'Email Service',
									}
								}
								inlineIcon={ true }
								borderOn
								icon={ <SureEmailIcon /> }
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
							<Button variant="ghost"> Skip</Button>
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

export const DefaultOnboardingBackup = Template.bind( {} );
DefaultOnboardingBackup.args = {};

DefaultOnboardingBackup.storyName = 'OnboardingBackup';
