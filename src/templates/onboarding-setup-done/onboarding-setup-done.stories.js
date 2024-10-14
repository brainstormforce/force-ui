import { Check, ExternalLink, X } from 'lucide-react';
import { Topbar, Button, Label, ProgressSteps, Title } from '@/components';
import { SureEmailLogo, EmailSetup } from '@/icons';

export default {
	title: 'Templates/Onboarding/Setup Done',
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
						<ProgressSteps currentStep={ 5 } variant="number">
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
			<div className="md:w-[35rem] box-border mx-auto p-8 mt-10 border border-solid border-border-subtle bg-background-primary rounded-md shadow-sm space-y-4">
				<div className="flex justify-between gap-4">
					<div>
						<Title
							size="md"
							tag="h4"
							className="text-text-primary"
							title="You're Good to Go! 🚀"
						/>
						<Label className="text-text-secondary mt-1 text-sm">
							You&#39;ve successfully set up SureEmails, and your
							site is ready to send emails without a hitch! Now
							you can focus on your business and let us handle the
							rest.
						</Label>
					</div>
					<div className="max-w-32">
						<EmailSetup />{ ' ' }
					</div>
				</div>
				<div>
					<Label className="text-text-primary font-semibold text-sm">
						Here&#39;s What SureEmails Will Do for You Now:
					</Label>
					<ul className="divide-y divide-gray-200 list-none pl-0 space-y-2 my-2">
						<li className="flex items-start space-x-2 text-field-label text-sm font-medium">
							<Check className="size-4 text-brand-primary-600" />
							<span>
								Emails that land in inboxes: Reduce the chances
								of getting lost in spam!
							</span>
						</li>
						<li className="flex items-start space-x-2 text-field-label text-sm font-medium">
							<Check className="size-4 text-brand-primary-600" />
							<span>
								Easy tracking: See every email you send in one
								place
							</span>
						</li>
						<li className="flex items-start space-x-2 text-field-label text-sm font-medium">
							<Check className="size-4 text-brand-primary-600" />
							<span>
								Peace of mind: If sending fails, SureEmails will
								automatically retry
							</span>
						</li>
					</ul>
					<hr className="my-6 w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />
				</div>
				<div className="flex items-center gap-3">
					<Button className="px-4 w-max">Go to Dashboard</Button>
					<Button
						variant="link"
						className="px-4 flex items-center gap-2"
					>
						Documentation <ExternalLink />
					</Button>
				</div>
			</div>
		</div>
	);
};

export const OnboardingSetupDone = Template.bind( {} );
OnboardingSetupDone.args = {};

OnboardingSetupDone.storyName = 'OnboardingSetupDone';
