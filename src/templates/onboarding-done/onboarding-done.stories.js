import { ChevronRight, ExternalLink, X } from 'lucide-react';
import { ProgressSteps, Topbar, Button, Label } from '@/components';
import { SureEmailIcon } from '@/icons';

export default {
	title: 'Templates/Onboarding/Done',
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
						<SureEmailIcon />
					</Topbar.Item>
				</Topbar.Left>
				<Topbar.Middle>
					<Topbar.Item>
						<ProgressSteps currentStep={ 6 } type="inline">
							<ProgressSteps.Step labelText="Connect" />
							<ProgressSteps.Step labelText="Import" />
							<ProgressSteps.Step labelText="Profile" />
							<ProgressSteps.Step labelText="Social" />
						</ProgressSteps>
					</Topbar.Item>
				</Topbar.Middle>
				<Topbar.Right>
					<Topbar.Item>
						<X className="size-4" />
					</Topbar.Item>
				</Topbar.Right>
			</Topbar>
			<div className="grid md:grid-cols-2 md:w-[45rem] box-border mx-auto p-8 gap-10 mt-10 border border-solid border-border-subtle bg-background-primary rounded-xl shadow-sm ">
				<div>
					<Label
						size="md"
						className="text-3xl font-semibold text-text-primary"
					>
						Congratulations!
					</Label>
					<Label className="text-text-secondary mt-2 text-sm">
						You&#39;ve taken the first step to SEO success. Now,
						let&#39;s optimize your website for search engines.
						<br />
						Start by:
					</Label>
					<ul className="divide-y divide-gray-200 list-none pl-0 my-2 space-y-2">
						<li className="flex items-center space-x-2 text-field-label text-sm font-medium	">
							<ChevronRight className="size-4" />
							<span>Analyzing your keywords</span>
						</li>
						<li className="flex items-center space-x-2 text-field-label text-sm font-medium	">
							<ChevronRight className="size-4" />
							<span>Optimizing your content</span>
						</li>
						<li className="flex items-center space-x-2 text-field-label text-sm font-medium	">
							<ChevronRight className="size-4" />
							<span>Improving your site&#39;s structure</span>
						</li>
					</ul>
					<div className="flex items-center pt-4 gap-2">
						<Button className="w-max">Go to Dashboard</Button>
						<Button
							variant="link"
							className="px-4 flex items-center gap-2"
						>
							Documentation <ExternalLink />
						</Button>
					</div>
				</div>
				<div>
					<img
						className="w-full"
						src="https://static.vecteezy.com/system/resources/previews/019/019/725/non_2x/male-seo-developer-illustration-illustration-of-a-hand-holding-a-magnifying-glass-and-writing-seo-on-a-computer-screen-free-png.png"
						alt="placeholder"
					/>
				</div>
			</div>
		</div>
	);
};

export const OnboardingDone = Template.bind( {} );
OnboardingDone.args = {};

OnboardingDone.storyName = 'OnboardingDone';
