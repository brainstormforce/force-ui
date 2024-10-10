import { Check, ExternalLink, X } from 'lucide-react';
import ProgressSteps from '../../components/progress-steps';
import Topbar from '../../components/topbar';
import Button from '../../components/button';
import Label from '../../components/label';
import { Icons } from '@/globals/icons/icons';

export default {
    title: 'Templates/Onboarding/Setup Done',
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        children: {
            description: 'Content to render inside the OnboardingSetupDone.',
            control: { type: 'none' },
        },
    },
};

const Template = (args) => {
    return (
        <div
            {...args}
            className="bg-background-secondary min-h-screen w-full pb-10"
        >
            <Topbar className="bg-background-secondary">
                <Topbar.Left>
                    <Topbar.Item>
                        {/* <Icons.SureRankLogo /> */}
                    </Topbar.Item>
                </Topbar.Left>
                <Topbar.Middle>
                    <Topbar.Item>
                        <ProgressSteps currentStep={6} type="inline">
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
            <div className="space-y-4 p-6 w-max mx-auto mt-10 gap-10 border-border-subtle bg-background-primary rounded-md">
                <div className='flex justify-between gap-4'>
                    <div>
                        <Label size="md" className="text-3xl font-semibold">
                            You're Good to Go! 🚀
                        </Label>
                        <Label className="w-10/12 text-text-secondary mt-1 text-sm max-w-96">
                            You&#39;ve successfully set up SureEmails, and your site is ready to send emails without a hitch! Now you can focus on your business and let us handle the rest.
                        </Label>

                    </div>
                    <div className="max-w-28">
                        <Icons.EmailSetup />
                    </div>
                </div>
                <div>
                    <Label className="w-10/12 text-text-primary font-semibold text-sm">
                        Here&#39;s What SureEmails Will Do for You Now:
                    </Label>
                    <ul className="divide-y divide-gray-200 list-none pl-0 space-y-2 my-2">
                        <li className="flex items-start space-x-2 text-field-label text-sm">
                            <Check className="size-4 text-brand-primary-600" />
                            <span>Emails that land in inboxes: Reduce the chances of getting lost in spam!</span>
                        </li>
                        <li className="flex items-start space-x-2 text-field-label text-sm">
                            <Check className="size-4 text-brand-primary-600" />
                            <span>Easy tracking: See every email you send in one place</span>
                        </li>
                        <li className="flex items-start space-x-2 text-field-label text-sm">
                            <Check className="size-4 text-brand-primary-600" />
                            <span>Peace of mind: If sending fails, SureEmails will automatically retry</span>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center">
                    <Button className="mt-4 px-4 w-max">
                        Go to Dashboard
                    </Button>
                    <Button
                        variant="link"
                        className="mt-4 px-4 flex items-center gap-2"
                    >
                        Documentation <ExternalLink />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export const OnboardingSetupDone = Template.bind({});
OnboardingSetupDone.args = {};

OnboardingSetupDone.storyName = 'OnboardingSetupDone';