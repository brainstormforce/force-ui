import { ChevronRight, X } from 'lucide-react';
import ProgressSteps from '../progress-steps';
import Topbar from '../topbar';
import OnboardingImport from './onboarding-import';
import Button from '../button';

export default {
	title: 'Templates/OnboardingImport',
	component: OnboardingImport,
	parameters: {
		layout: 'left',
	},
	tags: ['autodocs'],
	argTypes: {
		children: {
			description:
				'Content to render inside the Sidebar. This typically includes `Sidebar.Header`, `Sidebar.Body`, and `Sidebar.Footer` components.',
			control: { type: 'none' },
		},
	},
};

const Template = (args) => {

	return (
		<OnboardingImport {...args} className='bg-gray-100 h-screen w-full pb-10' >

			<Topbar className='bg-gray-100'>
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
						<ProgressSteps currentStep={2}>
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
			<div className='w-8/12 p-6 mx-auto gap-10 border-border-subtle bg-background-primary rounded-md mt-10'>
				<div>
					<h2>Import Data From Your Current Plugins</h2>
					<p>We have deducted few SEO plugins installed on your website. Select the plugin from which you want to import</p>
				</div>
				<div className='flex justify-end items-center gap-6'>
					<span>Skip</span>
					<Button className='flex items-center gap-2'>Next <ChevronRight /></Button>
					 
				</div>
			</div>
		</OnboardingImport>
	);
};

export const DefaultOnboardingImport = Template.bind({});
DefaultOnboardingImport.args = {};

DefaultOnboardingImport.storyName = 'Sidebar';