import { Check, X } from 'lucide-react';
import { Topbar, Button, Label, ProgressSteps } from '@/components';
import { SureRankLogoFull } from '@/ui/icons';

export default {
	title: 'Templates/Onboarding/SureRank Welcome',
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
						<SureRankLogoFull />
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
							size="xs"
						>
							Exit Guided Setup
						</Button>
					</Topbar.Item>
				</Topbar.Right>
			</Topbar>
			<div className="md:w-[35rem] box-border mx-auto p-8 mt-10 border border-solid border-border-subtle bg-background-primary rounded-xl shadow-sm space-y-6">
				<div>
					<Label
						size="md"
						className="text-3xl font-semibold text-text-primary"
					>
						Welcome to SureRank!
					</Label>
					<Label className="text-text-primary mt-2 font-semibold text-base">
						Set up your site’s SEO easily—no expert needed!
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
						<li className="flex items-start space-x-2 text-field-label text-sm font-medium">
							<Check className="size-4 text-icon-primary" />
							<span>
								Get smart recommendations to improve your SEO
							</span>
						</li>
						<li className="flex items-start space-x-2 text-field-label text-sm font-medium">
							<Check className="size-4 text-icon-primary" />
							<span>
								Easily identify and fix SEO issues
							</span>
						</li>
						<li className="flex items-start space-x-2 text-field-label text-sm font-medium">
							<Check className="size-4 text-icon-primary" />
							<span>Analyze and optimize your content for higher rankings</span>
						</li>
						<li className="flex items-start space-x-2 text-field-label text-sm font-medium">
							<Check className="size-4 text-icon-primary" />
							<span>Track your site’s performance in search engines</span>
						</li>
						<li className="flex items-start space-x-2 text-field-label text-sm font-medium">
							<Check className="size-4 text-icon-primary" />
							<span>Boost search visibility with structured data</span>
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

OnboardingWelcome.storyName = 'OnboardingSureRank';
