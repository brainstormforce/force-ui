import ProgressSteps from './progress-steps';
import { Check } from 'lucide-react';

export default {
	title: 'Atoms/ProgressSteps',
	component: ProgressSteps,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		variant: {
			control: 'select',
			options: [ 'dot', 'number', 'icon' ],
			description: 'Defines the style of the step indicator. Choose between "dot", "number", or "icon".',
		},
		size: {
			control: 'select',
			options: [ 'sm', 'md', 'lg' ],
			description: 'Sets the size of the step indicator. Options are "small", "medium", or "large".',
		},
		type: {
			control: 'select',
			options: [ 'inline', 'stack' ],
			description: 'Defines the layout of the steps. "inline" places them horizontally, "stack" places them vertically.',
		},
		currentStep: {
			control: { type: 'number', min: 1, max: 5 },
			description: 'Indicates the active step (1-based index). The step number will be highlighted.',
		},
	},
	decorators: [
		( Story ) => (
			<div style={ { width: '700px', margin: '0 auto' } }>
				<Story />
			</div>
		),
	],
};

const Template = ( args ) => (
	<ProgressSteps { ...args }>
		<ProgressSteps.Step labelText="Step 1" />
		<ProgressSteps.Step labelText="Step 2" />
		<ProgressSteps.Step labelText="Step 3" />
		<ProgressSteps.Step labelText="Step 4" />
		<ProgressSteps.Step labelText="Step 5" />
	</ProgressSteps>
);

export const Default = Template.bind( {} );
Default.args = {
	variant: 'dot',
	size: 'md',
	type: 'inline',
	currentStep: 2,
};

export const NumberVariant = Template.bind( {} );
NumberVariant.args = {
	variant: 'number',
	size: 'md',
	type: 'inline',
	currentStep: 3,
};

export const IconVariant = Template.bind( {} );
IconVariant.args = {
	variant: 'icon',
	size: 'md',
	type: 'inline',
	currentStep: 4,
	icon: <Check />,
};

export const StackType = Template.bind( {} );
StackType.args = {
	variant: 'dot',
	size: 'md',
	type: 'stack',
	currentStep: 3,
};
