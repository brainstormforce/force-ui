import { X, LoaderCircle } from 'lucide-react';
import {
	ProgressSteps,
	Topbar,
	Button,
	RadioButton,
	Label,
	Title,
	ProgressBar,
	Text,
} from '@/components';
import { SureRankLogoFull } from '@/ui/icons';

export default {
	title: 'Templates/SureRank Onboarding/Import Progress',
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
			<Topbar className="bg-background-secondary p-0">
				<Topbar.Left className="p-4">
					<Topbar.Item>
						<SureRankLogoFull />
					</Topbar.Item>
				</Topbar.Left>
				<Topbar.Middle>
					<Topbar.Item>
						<ProgressSteps currentStep={ 2 } variant="number" size="md">
							<ProgressSteps.Step />
							<ProgressSteps.Step />
							<ProgressSteps.Step />
							<ProgressSteps.Step />
							<ProgressSteps.Step />
						</ProgressSteps>
					</Topbar.Item>
				</Topbar.Middle>
				<Topbar.Right className="p-4">
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
			<div className="max-w-xl box-border mx-auto p-6 mt-10 border border-solid border-border-subtle bg-background-primary rounded-xl shadow-sm space-y-2">
				<div className="p-2 space-y-2">
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
				<div className="p-2 space-y-3">
					<RadioButton.Group vertical={ true }>
						<RadioButton.Button
							value="rankMath"
							label={ {
								heading: `Rankmath`,
							} }
							borderOn={ true }
							checked={ true }
						/>
					</RadioButton.Group>
				</div>
				<div className="p-2 space-y-3">
					<div className="px-2">
						<Text weight="semibold" size="base" className="text-text-primary">
							Importing SEO Settings into SureRank
						</Text>
					</div>
					<div className="px-2 space-y-2">
						<ProgressBar progress={ 50 } className="h-2" />
						<div className="flex justify-between items-center">
							<Text className="text-field-helper text-xs font-normal">
								Importing SEO page titles......
							</Text>
							<Text className="text-field-input text-xs font-normal">
								50%
							</Text>
						</div>
					</div>
				</div>
				<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle p-2" />
				<div className="flex justify-end items-center gap-3 p-2">
					<Button variant="ghost" className="text-text-tertiary opacity-70" disabled>
						Skip
					</Button>
					<Button
						variant="primary"
						className="flex items-center gap-2"
						icon={ <LoaderCircle className="animate-spin" /> }
						iconPosition="right"
					>
						Importing
					</Button>
				</div>
			</div>
		</div>
	);
};

export const OnboardingSureRankImportProgress = Template.bind( {} );
OnboardingSureRankImportProgress.args = {};

OnboardingSureRankImportProgress.storyName = 'OnboardingSureRankImportProgress';
