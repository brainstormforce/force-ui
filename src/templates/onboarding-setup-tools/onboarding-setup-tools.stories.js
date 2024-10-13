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
import { SureEmailLogo, PrestoPlayerLogo } from '@/icons';

export default {
	title: 'Templates/Onboarding/Setup Tools',
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
				<div className="md:w-[47rem] box-border mx-auto p-8 mt-10 border border-solid border-border-subtle bg-background-primary rounded-md space-y-4">
					<div>
						<Title
							size="md"
							tag="h4"
							title="Add More Power to Your Website"
						/>
						<Label className="text-text-secondary mt-1 text-sm max-w-[41rem]">
							These tools can help you build your website faster
							and easier. Try them out and see how they can help
							your website grow.
						</Label>
					</div>

					<div className="bg-background-secondary p-1 rounded-lg max-h-80 overflow-auto">
						<RadioButton.Group
							columns={ 2 }
							multiSelection={ true }
							gapClassname="gap-1"
							size="sm"
						>
							<RadioButton.Button
								value={ `Astra` }
								label={
									args.label ?? {
										heading: `Astra Theme`,
										description: `Fast, customizable & beautiful WordPress theme.`,
									}
								}
								useSwitch={ true }
								badgeItem={
									<Badge
										label="Free"
										size="xs"
										variant="green"
										type="pill"
									/>
								}
								borderOn
								icon={ <PrestoPlayerLogo /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white"
							/>
							<RadioButton.Button
								value={ `Starter` }
								label={
									args.label ?? {
										heading: `Starter Templates`,
										description: `Build your dream website in minutes with AI.`,
									}
								}
								useSwitch={ true }
								badgeItem={
									<Badge
										label="Free"
										size="xs"
										variant="green"
										type="pill"
									/>
								}
								borderOn
								icon={ <PrestoPlayerLogo /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white"
							/>
							<RadioButton.Button
								value={ `SureCart` }
								label={
									args.label ?? {
										heading: `SureCart`,
										description: `The new way to sell on WordPress.`,
									}
								}
								useSwitch={ true }
								badgeItem={
									<Badge
										label="Free"
										size="xs"
										variant="green"
										type="pill"
									/>
								}
								borderOn
								icon={ <PrestoPlayerLogo /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white"
							/>
							<RadioButton.Button
								value={ `Presto` }
								label={
									args.label ?? {
										heading: `Presto Player`,
										description: `Automate your WordPress setup.`,
									}
								}
								useSwitch={ true }
								badgeItem={
									<Badge
										label="Free"
										size="xs"
										variant="green"
										type="pill"
									/>
								}
								borderOn
								icon={ <PrestoPlayerLogo /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white"
							/>
							<RadioButton.Button
								value={ `Astra2` }
								label={
									args.label ?? {
										heading: `Astra Theme`,
										description: `Fast, customizable & beautiful WordPress theme.`,
									}
								}
								useSwitch={ true }
								badgeItem={
									<Badge
										label="Free"
										size="xs"
										variant="green"
										type="pill"
									/>
								}
								borderOn
								icon={ <PrestoPlayerLogo /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white"
							/>
							<RadioButton.Button
								value={ `Starter2` }
								label={
									args.label ?? {
										heading: `Starter Templates`,
										description: `Build your dream website in minutes with AI.`,
									}
								}
								useSwitch={ true }
								badgeItem={
									<Badge
										label="Free"
										size="xs"
										variant="green"
										type="pill"
									/>
								}
								borderOn
								icon={ <PrestoPlayerLogo /> }
								onChange={ () => {} }
								buttonWrapperClasses="bg-white"
							/>
						</RadioButton.Group>
					</div>
					<div className="flex justify-between items-center pt-2 gap-4">
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

export const DefaultOnboardingTools = Template.bind( {} );
DefaultOnboardingTools.args = {};

DefaultOnboardingTools.storyName = 'OnboardingTools';
