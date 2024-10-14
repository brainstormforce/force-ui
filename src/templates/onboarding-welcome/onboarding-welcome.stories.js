import { Check, X } from 'lucide-react';
import { Topbar, Button, Label, ProgressSteps } from '@/components';
import { SureEmailLogo } from '@/icons';

export default {
	title: 'Templates/Onboarding/Welcome',
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
						<ProgressSteps currentStep={ 1 } variant="number">
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
			<div className="md:w-[35rem] box-border mx-auto p-8 mt-10 border border-solid border-border-subtle bg-background-primary rounded-md shadow-sm space-y-6">
				<div>
					<Label size="md" className="text-3xl font-semibold text-text-primary">
						Welcome to SureEmails
					</Label>
					<Label className="text-text-primary mt-2 text-base">
						Your Email Delivery Made Simple!
					</Label>
				</div>
				<div>
					<img
						src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/06/BMD-4781.png"
						alt="Email Setup"
						className="w-full"
					/>
				</div>
				<div>
					<ul className="divide-y divide-gray-200 list-none pl-0 space-y-2">
						<li className="flex items-start space-x-2 text-field-label text-sm">
							<Check className="size-4 text-icon-primary" />
							<span>
								Reduce the chances of your emails getting lost
								in spam.
							</span>
						</li>
						<li className="flex items-start space-x-2 text-field-label text-sm">
							<Check className="size-4 text-icon-primary" />
							<span>
								Quick and easy setup, no technical skills needed
							</span>
						</li>
						<li className="flex items-start space-x-2 text-field-label text-sm">
							<Check className="size-4 text-icon-primary" />
							<span>Track, log, and resend emails with ease</span>
						</li>
						<li className="flex items-start space-x-2 text-field-label text-sm">
							<Check className="size-4 text-icon-primary" />
							<span>Connect to multiple email providers</span>
						</li>
						<li className="flex items-start space-x-2 text-field-label text-sm">
							<Check className="size-4 text-icon-primary" />
							<span>Auto-retry failed emails</span>
						</li>
					</ul>
					<hr className="mt-6 w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />
				</div>
				<Button className="px-4 w-max">
					Get Started with Onboarding
				</Button>
			</div>
		</div>
	);
};

export const OnboardingWelcome = Template.bind( {} );
OnboardingWelcome.args = {};

OnboardingWelcome.storyName = 'OnboardingWelcome';
