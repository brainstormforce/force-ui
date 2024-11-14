import { X } from 'lucide-react';
import { ProgressSteps, Topbar, Button, Label } from '@/components';
import { SureEmailIcon } from '@/ui/icons';

export default {
	title: 'Templates/Onboarding/Connect',
	parameters: {
		layout: 'fullscreen',
		a11y: {
			disable: true,
		},
	},
	tags: [ 'autodocs' ],
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
						<SureEmailIcon />
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
						<X className="size-4" />
					</Topbar.Item>
				</Topbar.Right>
			</Topbar>
			<div className="grid md:grid-cols-2 md:w-[45rem] box-border mx-auto p-8 gap-10 mt-10 border border-solid border-border-subtle bg-background-primary rounded-xl shadow-sm">
				<div>
					<Label
						size="md"
						className="text-3xl font-semibold text-text-primary"
					>
						Connect Your Site with SureRank
					</Label>
					<Label className="text-text-secondary text-sm mt-2 font-normal">
						When you connect your free account with SureRank you
						will get keyword suggestions from Google when entering
						the keywords. Not only that, you will access to our AI
						assistant work as a SEO expert and help you get your
						site ranked.
					</Label>
					<Button className="mt-6">Connect Now</Button>
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

export const OnboardingConnect = Template.bind( {} );
OnboardingConnect.args = {};

OnboardingConnect.storyName = 'OnboardingConnect';
