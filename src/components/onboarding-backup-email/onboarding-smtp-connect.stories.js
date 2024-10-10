import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import ProgressSteps from '../progress-steps';
import Topbar from '../topbar';
import OnboardingBackupEmail from './onboarding-backup-email';
import Button from '../button';
import Label from '../label';
import Input from '../input';
import Select from '../select';
import { Icons } from '@/globals/icons/icons';

export default {
	title: 'Templates/OnboardingBackupEmail',
	component: OnboardingBackupEmail,
	parameters: {
		layout: 'fullscreen',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		children: {
			description: 'Content to render inside the OnboardingBackupEmail.',
			control: { type: 'none' },
		},
	},
};

const Template = ( args ) => {
	return (
		<OnboardingBackupEmail
			{ ...args }
			className="bg-background-secondary min-h-screen w-full pb-10"
		>
			<Topbar className="bg-background-secondary">
				<Topbar.Left>
					<Topbar.Item>
						<Icons.SureEmailsLogo />
					</Topbar.Item>
				</Topbar.Left>
				<Topbar.Middle>
					<Topbar.Item>
						<ProgressSteps currentStep={ 3 } variant="number">
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
							icon={ <X /> }
							iconPosition="right"
							variant="ghost"
						>
							Exit Guided Setup
						</Button>
					</Topbar.Item>
				</Topbar.Right>
			</Topbar>
			<form onSubmit={ ( event ) => event.preventDefault() }>
				<div className="w-8/12 p-6 mx-auto gap-10 border-border-subtle bg-background-primary rounded-md mt-10">
					<div>
						<Label size="md" className="font-semibold">
							Now, Let&#39;s Connect With [Selected SMTP Provider
							Name]
						</Label>
						<Label className="w-10/12 text-text-secondary mt-1">
							Enter the details below to connect with your
							[Provider Name] account.
						</Label>
					</div>
					<div className="grid grid-cols-2 gap-6 mt-6">
						<div>
							<Input
								id="name"
								name="name"
								size="md"
								label="Connection Title"
								placeholder="Name your connection"
							/>
						</div>
						<div>
							<Input
								id="Priority"
								name="Priority"
								value="1"
								size="md"
								label="Priority"
							/>
						</div>
						<div className="col-span-2">
							<Input
								id="Host"
								name="Host"
								size="md"
								placeholder="Enter host details"
								label="Host"
							/>
						</div>
						<div>
							<Input
								id="Username"
								name="Username"
								size="md"
								placeholder="Enter username"
								label="Username"
							/>
						</div>
						<div>
							<Input
								type="password"
								id="Password"
								name="Password"
								size="md"
								placeholder="Enter password"
								label="Password"
							/>
						</div>
						<div>
							<Input
								type="email"
								id="Email"
								name="Email"
								size="md"
								placeholder="Enter email"
								label="Email"
							/>
						</div>
						<div>
							<Input
								id="FromName"
								name="FromName"
								size="md"
								placeholder="Enter name"
								label="From Name"
							/>
						</div>
						<div>
							<Input
								id="Port"
								name="Port"
								size="md"
								placeholder="Enter port number"
								label="Port"
							/>
						</div>

						<div>
							<Select
								onChange={ () => {} }
								placeholder="Select an option"
								size="md"
							>
								<Select.Button label="Encryption" />
								<Select.Options dropdownPortalId="Encryption">
									<Select.Option
										value={ {
											id: '1',
											name: 'Symmetrical',
										} }
									>
										Symmetrical
									</Select.Option>
									<Select.Option
										value={ {
											id: '2',
											name: 'Assymetrical',
										} }
									>
										Assymetrical
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
								Continue Setup <ChevronRight />
							</Button>
						</div>
					</div>
				</div>
			</form>
		</OnboardingBackupEmail>
	);
};

export const DefaultOnboardingBackupEmail = Template.bind( {} );
DefaultOnboardingBackupEmail.args = {};

DefaultOnboardingBackupEmail.storyName = 'OnboardingBackupEmail';
