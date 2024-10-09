import { ChevronRight, ExternalLink, X } from 'lucide-react';
import ProgressSteps from '../../components/progress-steps';
import Topbar from '../../components/topbar';
import Button from '../../components/button';
import Label from '../../components/label';
import { Icons } from '@/globals/icons/icons';

export default {
	title: 'Templates/Onboarding/Done',
	parameters: {
		layout: 'fullscreen',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		children: {
			description: 'Content to render inside the OnboardingDone.',
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
					<Topbar.Item>
						<Icons.SureRankLogo />
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
						<X />
					</Topbar.Item>
				</Topbar.Right>
			</Topbar>
			<div className="flex justify-between items-center w-8/12 p-6 mx-auto gap-10 border-border-subtle bg-background-primary rounded-md mt-10">
				<div>
					<Label size="md" className="text-3xl font-semibold">
						Congratulations!
					</Label>
					<Label className="w-10/12 text-text-secondary mt-1 text-sm">
						You&#39;ve taken the first step to SEO success. Now,
						let&#39;s optimize your website for search engines.
						Start by:
					</Label>
					<ul className="divide-y divide-gray-200 list-none pl-0 space-y-2">
						<li className="flex items-center space-x-2 text-field-label text-sm">
							<ChevronRight name="inbox" className="w-5 h-5" />
							<span>Analyzing your keywords</span>
						</li>
						<li className="flex items-center space-x-2 text-field-label text-sm">
							<ChevronRight name="folder" className="w-5 h-5" />
							<span>Optimizing your content</span>
						</li>
						<li className="flex items-center space-x-2 text-field-label text-sm">
							<ChevronRight name="calendar" className="w-5 h-5" />
							<span>Improving your site&#39;s structure</span>
						</li>
					</ul>
					<div className="flex items-center mt-4">
						<Button className="mt-4 px-4 w-max">
							Go to Dashboard
						</Button>
						<Button
							variant="link"
							className="mt-4 px-4 flex items-center gap-2"
						>
							Documentation <ExternalLink />
						</Button>
					</div>
				</div>
				<div className="max-w-80">
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
