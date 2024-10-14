import { AlertTriangle, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { SureEmailLogo } from '@/icons';
import {
	Input,
	Label,
	Button,
	Topbar,
	ProgressSteps,
	Alert,
	Select,
	Title,
} from '@/components';

export default {
	title: 'Templates/Onboarding/Email Smtp',
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
						<SureEmailLogo />{ ' ' }
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
			<form onSubmit={ ( event ) => event.preventDefault() }>
				<div className="md:w-[47rem] box-border mx-auto p-8 mt-10 border border-solid border-border-subtle bg-background-primary rounded-xl shadow-sm">
					<div>
						<Title
							size="md"
							className="text-text-primary"
							tag="h4"
							title="Now, Let's Connect With [Selected SMTP Provider Name]"
						/>
						<Label className="text-text-secondary mt-1 text-sm max-w-[35rem]">
							Enter the details below to connect with your
							[Provider Name] account.
						</Label>
					</div>
					<div className="grid grid-cols-2 gap-6 mt-8">
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
					<div className="flex justify-between items-center gap-3 mt-8">
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
								Continue Setup <ChevronRight />
							</Button>
						</div>
					</div>
					<div className="mt-8">
						<Alert
							content="Please check the details and try again."
							icon={ <AlertTriangle /> }
							onClose={ () => {} }
							title="Verification failed."
							variant="error"
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export const DefaultOnboardingEmailSmtp = Template.bind( {} );
DefaultOnboardingEmailSmtp.args = {};

DefaultOnboardingEmailSmtp.storyName = 'OnboardingEmailSmtp';
