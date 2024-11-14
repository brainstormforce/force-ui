import { ChevronRight, X } from 'lucide-react';
import {
	ProgressSteps,
	Topbar,
	Button,
	RadioButton,
	Label,
	Title,
} from '@/components';
import { SureEmailIcon } from '@/ui/icons';

export default {
	title: 'Templates/Onboarding/Import',
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
						<X className="size-4" />
					</Topbar.Item>
				</Topbar.Right>
			</Topbar>
			<div className="md:w-[45rem] box-border mx-auto p-8 mt-10 border border-solid border-border-subtle bg-background-primary rounded-xl shadow-sm">
				<div>
					<Title
						size="md"
						className="text-text-primary"
						tag="h4"
						title="Import Data From Your Current Plugins"
					/>
					<Label className="text-text-secondary mt-1 text-sm max-w-[35rem] font-normal">
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
				<div className="flex justify-end items-center gap-3 mt-6">
					<Button variant="ghost" className="text-text-tertiary">
						Skip
					</Button>
					<Button
						className="flex items-center gap-2"
						icon={ <ChevronRight /> }
						iconPosition="right"
					>
						Next
					</Button>
				</div>
			</div>
		</div>
	);
};

export const OnboardingImport = Template.bind( {} );
OnboardingImport.args = {};

OnboardingImport.storyName = 'OnboardingImport';
