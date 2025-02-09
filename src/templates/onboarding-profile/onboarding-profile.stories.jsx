import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import {
	Select,
	Input,
	Label,
	Button,
	Topbar,
	ProgressSteps,
	Title,
} from '@/components';
import { SureEmailIcon } from '@/ui/icons';

export default {
	title: 'Templates/Onboarding/Profile',
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
						<X className="size-4" />
					</Topbar.Item>
				</Topbar.Right>
			</Topbar>
			<form onSubmit={ ( event ) => event.preventDefault() }>
				<div className="md:w-[45rem] box-border mx-auto p-8 mt-10 border border-solid border-border-subtle bg-background-primary rounded-xl shadow-sm">
					<div>
						<Title
							size="md"
							tag="h4"
							className="text-text-primary"
							title="Your Website Basic Details"
						/>
						<Label className="text-text-secondary mt-1 text-sm max-w-[35rem] font-normal">
							Let&#39;s get started with the basic details of this
							website.
						</Label>
					</div>
					<div className="grid grid-cols-2 gap-6 mt-8">
						<div>
							<Select
								onChange={ () => {} }
								placeholder="Select an option"
								size="md"
								by="id"
							>
								<Select.Button
									label="This Website Represents"
									render={ ( selected ) => selected.name }
								/>
								<Select.Portal>
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
								</Select.Portal>
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
								by="id"
							>
								<Select.Button
									label="Select About Page"
									render={ ( selected ) => selected.name }
								/>
								<Select.Portal>
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
								</Select.Portal>
							</Select>
						</div>
						<div>
							<Select
								onChange={ () => {} }
								placeholder="Select an option"
								size="md"
								by="id"
							>
								<Select.Button
									label="Select Contact Page"
									render={ ( selected ) => selected.name }
								/>
								<Select.Portal>
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
								</Select.Portal>
							</Select>
						</div>
					</div>
					<div className="flex justify-between items-center gap-6 mt-12">
						<Button
							variant="outline"
							className="flex items-center gap-2"
							icon={ <ChevronLeft /> }
						>
							Back
						</Button>
						<div className="flex justify-end items-center gap-3">
							<Button
								variant="ghost"
								className="text-text-tertiary"
							>
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
			</form>
		</div>
	);
};

export const DefaultOnboardingProfile = Template.bind( {} );
DefaultOnboardingProfile.args = {};

DefaultOnboardingProfile.storyName = 'OnboardingProfile';
