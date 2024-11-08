import ProgressSteps, { ProgressStepsProps } from './progress-steps';
import { Check, Home } from 'lucide-react';
import type { Meta, StoryFn } from '@storybook/react';

// ProgressSteps.Step display name for better documentation in Storybook
ProgressSteps.Step.displayName = 'ProgressSteps.Step';

const meta: Meta<typeof ProgressSteps> = {
	title: 'Atoms/ProgressSteps',
	component: ProgressSteps,
	subcomponents: {
		'ProgressSteps.Step': ProgressSteps.Step,
	} as Record<string, React.ComponentType<unknown>>,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		variant: {
			control: 'select',
		},
		size: {
			control: 'select',
		},
		type: {
			control: 'select',
		},
		currentStep: {
			control: { type: 'number', min: 1, max: 5 },
		},
		children: {
			control: false,
		},
	},
	decorators: [
		( Story ) => (
			<div style={ { width: '700px', margin: '0 auto' } }>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof ProgressSteps>;

export default meta;

// Template for ProgressSteps stories
const Template: StoryFn<ProgressStepsProps> = ( args ) => (
	<ProgressSteps { ...args }>
		<ProgressSteps.Step icon={ <Home /> } labelText="Step 1" size="md">
			Step 1
		</ProgressSteps.Step>
		<ProgressSteps.Step labelText="Step 2" size="md">
			Step 2
		</ProgressSteps.Step>
		<ProgressSteps.Step labelText="Step 3" size="md">
			Step 3
		</ProgressSteps.Step>
		<ProgressSteps.Step labelText="Step 4" size="md">
			Step 4
		</ProgressSteps.Step>
		<ProgressSteps.Step labelText="Step 5" size="md">
			Step 5
		</ProgressSteps.Step>
	</ProgressSteps>
);

// Default ProgressSteps
export const Default = {
	args: {
		variant: 'dot',
		size: 'md',
		type: 'inline',
		currentStep: 2,
	},
	render: Template,
};

// Number Variant
export const NumberVariant = {
	args: {
		variant: 'number',
		size: 'md',
		type: 'inline',
		currentStep: 3,
	},
	render: Template,
};

// Icon Variant
export const IconVariant = {
	args: {
		variant: 'icon',
		size: 'md',
		type: 'inline',
		currentStep: 4,
		icon: <Check />,
	},
	render: Template,
};

// Stack Type
export const StackType = {
	args: {
		variant: 'dot',
		size: 'md',
		type: 'stack',
		currentStep: 3,
	},
	render: Template,
};
