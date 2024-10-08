import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import ProgressSteps from '../progress-steps';
import Topbar from '../topbar';
import OnboardingProfile from './onboarding-profile';
import Button from '../button';
import Label from '../label';
import Input from '../input';
import Select from '../select';

export default {
	title: 'Templates/OnboardingProfile',
	component: OnboardingProfile,
	parameters: {
		layout: 'fullscreen',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		children: {
			description: 'Content to render inside the OnboardingProfile.',
			control: { type: 'none' },
		},
	},
};

const Template = ( args ) => {
	return (
		<OnboardingProfile
			{ ...args }
			className="bg-background-secondary min-h-screen w-full pb-10"
		>
			<Topbar className="bg-background-secondary">
				<Topbar.Left>
					<Topbar.Item>
						<svg
							fill="none"
							height="24"
							viewBox="0 0 25 24"
							width="25"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								clipRule="evenodd"
								d="M12.5 24C19.1275 24 24.5 18.6273 24.5 11.9999C24.5 5.37255 19.1275 0 12.5 0C5.87259 0 0.5 5.37255 0.5 11.9999C0.5 18.6273 5.87259 24 12.5 24ZM12.5517 5.99996C11.5882 5.99996 10.2547 6.55101 9.5734 7.23073L7.7229 9.07688H16.9465L20.0307 5.99996H12.5517ZM15.4111 16.7692C14.7298 17.4489 13.3964 17.9999 12.4328 17.9999H4.95388L8.03804 14.923H17.2616L15.4111 16.7692ZM18.4089 10.6153H6.18418L5.60673 11.1923C4.23941 12.423 4.64495 13.3846 6.5598 13.3846H18.8176L19.3952 12.8076C20.7492 11.5841 20.3237 10.6153 18.4089 10.6153Z"
								fill="#0D7EE8"
								fillRule="evenodd"
							/>
						</svg>
					</Topbar.Item>
				</Topbar.Left>
				<Topbar.Middle>
					<Topbar.Item>
						<ProgressSteps currentStep={ 3 }>
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
			<form onSubmit={ ( event ) => event.preventDefault() }>
				<div className="w-8/12 p-6 mx-auto gap-10 border-border-subtle bg-background-primary rounded-md mt-10">
					<div>
						<Label size="md" className="font-semibold">
							Your Website Basic Details
						</Label>
						<Label className="w-10/12 text-text-secondary mt-1">
							Let&#39;s get started with the basic details of this
							website.
						</Label>
					</div>
					<div className="grid grid-cols-2 gap-6 mt-6">
						<div>
							<Select
								onChange={ () => {} }
								placeholder="Select an option"
								size="md"
							>
								<Select.Button label="This Website Represents" />
								<Select.Options dropdownPortalId="Website">
									<Select.Option
										value={ {
											id: '1',
											name: 'Personal',
										} }
									>
										Personal Website
									</Select.Option>
									<Select.Option
										value={ {
											id: '2',
											name: 'Company',
										} }
									>
										Company Website
									</Select.Option>
									<Select.Option
										value={ {
											id: '3',
											name: 'Client',
										} }
									>
										Client Website
									</Select.Option>
								</Select.Options>
							</Select>
						</div>
						<div>
							<Input
								id="webname"
								name="webname"
								size="md"
								label="Website Name"
							/>
						</div>
						<div>
							<Input
								id="owner"
								name="owner"
								size="md"
								label="Website Owner Name"
							/>
						</div>
						<div>
							<Input
								id="phone"
								name="phone"
								size="md"
								label="Phone Number"
							/>
						</div>
						<div className="col-span-2">
							<Input
								type="file"
								id="logo"
								name="logo"
								size="md"
								label="Website Logo"
							/>
						</div>
						<div>
							<Select
								onChange={ () => {} }
								placeholder="Select an option"
								size="md"
							>
								<Select.Button label="Select About Page" />
								<Select.Options dropdownPortalId="aboutpage">
									<Select.Option
										value={ {
											id: '1',
											name: 'Personal',
										} }
									>
										Personal Website
									</Select.Option>
									<Select.Option
										value={ {
											id: '2',
											name: 'Company',
										} }
									>
										Company Website
									</Select.Option>
									<Select.Option
										value={ {
											id: '3',
											name: 'Client',
										} }
									>
										Client Website
									</Select.Option>
								</Select.Options>
							</Select>
						</div>
						<div>
							<Select
								onChange={ () => {} }
								placeholder="Select an option"
								size="md"
							>
								<Select.Button label="Select Contact Page" />
								<Select.Options dropdownPortalId="contactpage">
									<Select.Option
										value={ {
											id: '1',
											name: 'Personal',
										} }
									>
										Personal Contact
									</Select.Option>
									<Select.Option
										value={ {
											id: '2',
											name: 'Company',
										} }
									>
										Company Contact
									</Select.Option>
									<Select.Option
										value={ {
											id: '3',
											name: 'Client',
										} }
									>
										Client Contact
									</Select.Option>
								</Select.Options>
							</Select>
						</div>
					</div>
					<div className="flex justify-between items-center gap-6 mt-10">
						<Button
							variant="outline"
							className="flex items-center gap-2"
						>
							<ChevronLeft />
							Back
						</Button>
						<div className="flex justify-end items-center gap-6">
							<span className="text-sm">Skip</span>
							<Button className="flex items-center gap-2">
								Next <ChevronRight />
							</Button>
						</div>
					</div>
				</div>
			</form>
		</OnboardingProfile>
	);
};

export const DefaultOnboardingProfile = Template.bind( {} );
DefaultOnboardingProfile.args = {};

DefaultOnboardingProfile.storyName = 'OnboardingProfile';
