import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { SureEmailLogo } from '@/ui/icons';
import {
	Input,
	RadioButton,
	Label,
	Button,
	Topbar,
	ProgressSteps,
	Title,
} from '@/components';

export default {
	title: 'Templates/Onboarding/Spam',
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
						<SureEmailLogo />{ ' ' }
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
				<div className="md:w-[47rem] box-border mx-auto p-8 mt-10 border border-solid border-border-subtle bg-background-primary rounded-xl shadow-sm">
					<div>
						<Title
							size="md"
							tag="h4"
							className="text-text-primary"
							title="Say Goodbye to Spam Folders"
						/>
						<Label className="text-text-secondary mt-1 text-sm max-w-[35rem] font-normal">
							Enter your email address to receive a step-by-step
							guide that will help you ensure your emails always
							make it to the inbox.
						</Label>
					</div>
					<div className="grid gap-2 mt-8">
						<div>
							<Input
								type="email"
								id="Email"
								name="Email"
								size="md"
								placeholder="Enter host details"
								label="Email Address"
							/>
						</div>
						<div>
							<RadioButton.Group size="md" columns={ 1 }>
								<RadioButton.Button
									value={ `help` }
									label={
										args.label ?? {
											heading: `Help make SureEmails better`,
											description: `By sharing a bit of anonymous data about your website, plugins, themes, and settings, you help us understand what's popular. This means we can fine-tune our testing and build a product that’s perfectly suited to your needs. Your privacy is our priority. Check out our privacy policy and see what information you share.`,
										}
									}
									useSwitch={ true }
									reversePosition={ true }
								/>
							</RadioButton.Group>
						</div>
					</div>
					<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />
					<div className="flex justify-between items-center gap-3 mt-8">
						<Button
							variant="outline"
							className="flex items-center gap-2"
							icon={ <ChevronLeft /> }
						>
							Back
						</Button>

						<div className="flex justify-end items-center gap-3">
							<Button
								variant="ghost"
								className="text-text-tertiary"
							>
								Skip
							</Button>
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

export const DefaultOnboardingSpam = Template.bind( {} );
DefaultOnboardingSpam.args = {};

DefaultOnboardingSpam.storyName = 'OnboardingSpam';
