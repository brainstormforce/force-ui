import { X } from 'lucide-react';
import ProgressSteps from '../../components/progress-steps';
import Topbar from '../../components/topbar';
import Button from '../../components/button';
import Label from '../../components/label';
import { Icons } from '@/globals/icons/icons';

export default {
	title: 'Templates/Onboarding/Connect',
	parameters: {
		layout: 'fullscreen',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		children: {
			description: 'Content to render inside the OnboardingConnect.',
			control: { type: 'none' },
		},
	},
};

const Template = ( args ) => {
	return (
		<div
			{ ...args }
			className="bg-background-secondary h-screen w-full pb-10"
		>
			<Topbar className="bg-background-secondary">
				<Topbar.Left>
					<Topbar.Item>
						<Icons.SureRankLogo />
					</Topbar.Item>
				</Topbar.Left>
				<Topbar.Middle>
					<Topbar.Item>
						<ProgressSteps>
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
						Connect Your Site with SureRank
					</Label>
					<Label className="w-10/12 text-text-secondary mt-2 text-sm">
						When you connect your free account with SureRank you
						will get keyword suggestions from Google when entering
						the keywords. Not only that, you will access to our AI
						assistant work as a SEO expert and help you get your
						site ranked.
					</Label>
					<Button className="mt-6 px-4">Connect Now</Button>
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

export const OnboardingConnect = Template.bind( {} );
OnboardingConnect.args = {};

OnboardingConnect.storyName = 'OnboardingConnect';
