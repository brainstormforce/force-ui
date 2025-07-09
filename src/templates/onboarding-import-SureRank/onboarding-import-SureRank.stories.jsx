import { ChevronRight, X } from 'lucide-react';
import {
	ProgressSteps,
	Topbar,
	Button,
	RadioButton,
	Label,
	Title,
} from '@/components';
import { SureRankLogoFull } from '@/ui/icons';

export default {
	title: 'Templates/Onboarding/SureRank Import',
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
						<ProgressSteps currentStep={ 2 } variant="number">
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
			<div className="md:w-[45rem] box-border mx-auto p-8 mt-10 border border-solid border-border-subtle bg-background-primary rounded-xl shadow-sm">
				<div>
					<Title
						size="md"
						className="text-text-primary"
						tag="h4"
						title="Bring Your SEO Settings into SureRank"
					/>
					<Label className="text-text-secondary mt-1 text-sm max-w-[35rem] font-normal">
						We found other SEO plugins installed on your website. Choose the ones you would like to import data from into SureRank.
					</Label>
				</div>
				<div className="py-6">
					<RadioButton.Group vertical={ true }>
						<RadioButton.Button
							value="rankMath"
							label={ {
								heading: `Rankmath`,
							} }
							borderOn={ true }
							checked={ true }
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
						Import
					</Button>
				</div>
			</div>
		</div>
	);
};

export const OnboardingSureRankImport = Template.bind( {} );
OnboardingSureRankImport.args = {};

OnboardingSureRankImport.storyName = 'OnboardingSureRankImport';
