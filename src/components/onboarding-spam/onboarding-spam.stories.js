import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import ProgressSteps from '../progress-steps';
import Topbar from '../topbar';
import OnboardingSpam from './onboarding-spam';
import Button from '../button';
import Label from '../label';
import Input from '../input';
import { Icons } from '@/globals/icons/icons';
import RadioButton from '../radio-button-group';

export default {
	title: 'Templates/OnboardingSpam',
	component: OnboardingSpam,
	parameters: {
		layout: 'fullscreen',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		children: {
			description: 'Content to render inside the OnboardingSpam.',
			control: { type: 'none' },
		},
	},
};

const Template = ( args ) => {
	return (
		<OnboardingSpam
			{ ...args }
			className="bg-background-secondary min-h-screen w-full pb-10"
		>
			<Topbar className="bg-background-secondary">
				<Topbar.Left>
					<Topbar.Item>
						<Icons.SureEmailsLogo />
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
							icon={ <X /> }
							iconPosition="right"
							variant="ghost"
						>
							Exit Guided Setup
						</Button>
					</Topbar.Item>
				</Topbar.Right>
			</Topbar>
			<form onSubmit={ ( event ) => event.preventDefault() }>
				<div className="w-8/12 p-6 mx-auto gap-10 border-border-subtle bg-background-primary rounded-md mt-10">
					<div>
						<Label size="md" className="font-semibold">
							Say Goodbye to Spam Folders
						</Label>
						<Label className="w-10/12 text-text-secondary mt-1">
							Enter your email address to receive a step-by-step
							guide that will help you ensure your emails always
							make it to the inbox.
						</Label>
					</div>
					<div className="grid gap-6 mt-6">
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
							<RadioButton.Group columns={ 1 }>
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
					<div className="flex justify-between items-center gap-6 mt-10">
						<Button
							variant="outline"
							className="flex items-center gap-2"
						>
							<ChevronLeft />
							Back
						</Button>
						<div className="flex justify-end items-center gap-6">
							<span className="text-sm">Skip</span>
							<Button className="flex items-center gap-2">
								Continue Setup <ChevronRight />
							</Button>
						</div>
					</div>
				</div>
			</form>
		</OnboardingSpam>
	);
};

export const DefaultOnboardingSpam = Template.bind( {} );
DefaultOnboardingSpam.args = {};

DefaultOnboardingSpam.storyName = 'OnboardingSpam';
