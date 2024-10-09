import { ChevronRight, X } from 'lucide-react';
import ProgressSteps from '../../components/progress-steps';
import Topbar from '../../components/topbar';
import Button from '../../components/button';
import RadioButton from '../../components/radio-button';
import Label from '../../components/label';
import { Icons } from '@/globals/icons/icons';

export default {
	title: 'Templates/Onboarding/Import',
	parameters: {
		layout: 'fullscreen',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		children: {
			description: 'Content to render inside the OnboardingImport.',
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
						<ProgressSteps currentStep={ 2 }>
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
			<div className="w-8/12 p-6 mx-auto gap-10 border-border-subtle bg-background-primary rounded-md mt-10">
				<div>
					<Label size="md" className="font-semibold">
						Import Data From Your Current Plugins
					</Label>
					<Label className="w-10/12 text-text-secondary mt-1">
						We have deducted few SEO plugins installed on your
						website. Select the plugin from which you want to import
					</Label>
				</div>
				<div className="py-6">
					<RadioButton.Group vertical={ true }>
						<RadioButton.Button
							value="seoPress"
							label={ {
								heading: `SEOPress`,
							} }
							borderOn={ true }
						/>
						<RadioButton.Button
							value="aioSeo"
							label={ {
								heading: `AIO SEO`,
							} }
							borderOn={ true }
						/>
						<RadioButton.Button
							value="youstSeo"
							label={ {
								heading: `Yoast SEO`,
							} }
							borderOn={ true }
						/>
					</RadioButton.Group>
				</div>
				<div className="flex justify-end items-center gap-6 mt-6">
					<span>Skip</span>
					<Button className="flex items-center gap-2">
						Next <ChevronRight />
					</Button>
				</div>
			</div>
		</div>
	);
};

export const OnboardingImport = Template.bind( {} );
OnboardingImport.args = {};

OnboardingImport.storyName = 'OnboardingImport';
