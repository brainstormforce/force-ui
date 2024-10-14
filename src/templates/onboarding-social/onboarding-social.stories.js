import { ChevronLeft, ChevronRight, Plus, X } from 'lucide-react';
import { SureEmailIcon } from '@/icons';
import {
	Input,
	Label,
	Button,
	Topbar,
	ProgressSteps,
	Title,
} from '@/components';

export default {
	title: 'Templates/Onboarding/Social',
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
						<ProgressSteps currentStep={ 4 }>
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
			<form>
				<div className="md:w-[45rem] box-border mx-auto p-8 mt-10 border border-solid border-border-subtle bg-background-primary rounded-md shadow-sm">
					<div>
						<Title
							size="md"
							tag="h4"
							className="text-text-primary"
							title="Social Profiles"
						/>
						<Label className="text-text-secondary mt-1 text-sm max-w-[35rem]">
							Please enter all your possible social media
							profiles. These links can appear in the knowledge
							panel of the search results for your website.
						</Label>
					</div>
					<div className="grid grid-cols-1 gap-6 mt-8">
						<div>
							<Input
								id="fb"
								name="fb"
								size="md"
								placeholder="https://facebook.com/my-page-url"
								label="Facebook Page URL"
							/>
						</div>
						<div>
							<Input
								id="x"
								name="x"
								size="md"
								placeholder="@my_account"
								label="X (formerly Twitter) Usernames"
							/>
						</div>
						<div>
							<Input
								id="pinterest"
								name="pinterest"
								size="md"
								placeholder="https://pinterest.com/my-page-url"
								label="Pinterest URL"
							/>
						</div>
						<div>
							<Input
								id="insta"
								name="insta"
								size="md"
								placeholder="https://instagram.com/my-page-url"
								label="Instagram URL"
							/>
						</div>
						<div>
							<Input
								id="youtube"
								name="youtube"
								size="md"
								placeholder="https://youtube.com/my-page-url"
								label="YouTube URL"
							/>
						</div>
						<div>
							<Input
								id="LinkedIn"
								name="LinkedIn"
								size="md"
								placeholder="https://linkedin.com/my-page-url"
								label="LinkedIn URL"
							/>
						</div>
						<div>
							<Input
								id="tiktok"
								name="tiktok"
								size="md"
								placeholder="Tiktok Profile"
								label="TikTok"
							/>
						</div>

						<div className="flex justify-center">
							<Button
								icon={ <Plus /> }
								iconPosition="right"
								variant="ghost"
							>
								Add another profile
							</Button>
						</div>
					</div>
					<div className="flex justify-between items-center gap-6 mt-6">
						<Button
							variant="outline"
							className="flex items-center gap-2"
						>
							<ChevronLeft />
							Back
						</Button>
						<div className="flex justify-end items-center gap-3">
							<Button
								variant="ghost"
								className="text-text-tertiary"
							>
								Skip
							</Button>
							<Button className="flex items-center gap-2">
								Next <ChevronRight />
							</Button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export const DefaultOnboardingSocial = Template.bind( {} );
DefaultOnboardingSocial.args = {};

DefaultOnboardingSocial.storyName = 'OnboardingSocial';
