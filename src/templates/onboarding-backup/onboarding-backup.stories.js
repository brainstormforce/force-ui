import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import {
	Topbar,
	Button,
	Label,
	RadioButton,
	ProgressSteps,
	Badge,
} from '@/components';
// import { Icons } from '@/globals/icons/icons';

export default {
	title: 'Templates/Onboarding/Backup Email',
	parameters: {
		layout: 'fullscreen',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		children: {
			description: 'Content to render inside the OnboardingTools.',
			control: { type: 'none' },
		},
	},
};

const Template = ( args ) => {
	return (
		<div
			{ ...args }
			className="bg-background-secondary min-h-screen w-full pb-10"
		>
			<Topbar className="bg-background-secondary">
				<Topbar.Left>
					<Topbar.Item>{ /* <Icons.SureEmailsLogo /> */ }</Topbar.Item>
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
						>
							Exit Guided Setup
						</Button>
					</Topbar.Item>
				</Topbar.Right>
			</Topbar>
			<form onSubmit={ ( event ) => event.preventDefault() }>
				<div className="w-[43rem] p-8 mx-auto space-y-4 mt-10 border-border-subtle bg-background-primary border border-solid rounded-md">
					<div className="max-w-[40rem]">
						<Label size="md" className="font-semibold">
							Want to Add a Backup Email Service?
						</Label>
						<Label className="text-text-secondary mt-1 text-sm">
							This is an optional step, but it can be really
							helpful. By adding a backup email service, your
							emails will still be sent if your main service stops
							working.
						</Label>
					</div>

					<div className="bg-background-secondary p-1 rounded-lg max-h-80 overflow-auto">
						<RadioButton.Group columns={ 2 } gapClassname="gap-1">
							<RadioButton.Button
								value={ `Astra` }
								label={
									args.label ?? {
										heading: `Astra Theme`,
									}
								}
								inlineIcon={ true }
								badgeItem={
									<Badge
										label="Primary"
										size="sm"
										variant="green"
										type="pill"
									/>
								}
								borderOn
								// icon={ <Icons.AstraIcon /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white"
							/>
							<RadioButton.Button
								value={ `Starter` }
								label={
									args.label ?? {
										heading: `Starter Templates`,
									}
								}
								inlineIcon={ true }
								borderOn
								// icon={ <Icons.StartersTemplatesSvg /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white"
							/>
							<RadioButton.Button
								value={ `SureCart` }
								label={
									args.label ?? {
										heading: `SureCart`,
									}
								}
								inlineIcon={ true }
								badgeItem={
									<Badge
										label="Soon"
										size="sm"
										variant="green"
										type="pill"
									/>
								}
								borderOn
								// icon={ <Icons.SureCartSvg /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white"
							/>
							<RadioButton.Button
								value={ `Presto` }
								label={
									args.label ?? {
										heading: `Presto Player`,
									}
								}
								inlineIcon={ true }
								borderOn
								// icon={ <Icons.PrestoPlayerSvg /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white"
							/>
							<RadioButton.Button
								value={ `Astra2` }
								label={
									args.label ?? {
										heading: `Astra Theme`,
									}
								}
								inlineIcon={ true }
								borderOn
								// icon={ <Icons.AstraIcon /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white"
							/>
							<RadioButton.Button
								value={ `Starter2` }
								label={
									args.label ?? {
										heading: `Starter Templates`,
									}
								}
								inlineIcon={ true }
								badgeItem={
									<Badge
										label="Free"
										size="sm"
										variant="green"
										type="pill"
									/>
								}
								borderOn
								// icon={ <Icons.StartersTemplatesSvg /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white"
							/>
							<RadioButton.Button
								value={ `Starter3` }
								label={
									args.label ?? {
										heading: `Starter Templates`,
									}
								}
								inlineIcon={ true }
								borderOn
								// icon={ <Icons.StartersTemplatesSvg /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white"
							/>
							<RadioButton.Button
								value={ `Starter4` }
								label={
									args.label ?? {
										heading: `Starter Templates`,
									}
								}
								inlineIcon={ true }
								badgeItem={
									<Badge
										label="Soon"
										size="sm"
										variant="green"
										type="pill"
									/>
								}
								borderOn
								// icon={ <Icons.StartersTemplatesSvg /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white"
							/>
							<RadioButton.Button
								value={ `Starter5` }
								label={
									args.label ?? {
										heading: `Starter Templates`,
									}
								}
								inlineIcon={ true }
								borderOn
								// icon={ <Icons.StartersTemplatesSvg /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white"
							/>
							<RadioButton.Button
								value={ `Starter6` }
								label={
									args.label ?? {
										heading: `Starter Templates`,
									}
								}
								inlineIcon={ true }
								borderOn
								// icon={ <Icons.StartersTemplatesSvg /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white"
							/>
						</RadioButton.Group>
					</div>
					<div className="flex justify-between items-center pt-2 gap-6">
						<Button
							variant="outline"
							className="flex items-center gap-2"
						>
							<ChevronLeft />
							Back
						</Button>
						<div className="flex justify-end items-center gap-3">
							<Button variant="ghost"> Skip</Button>
							<Button className="flex items-center gap-2">
								Continue Setup <ChevronRight />
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
