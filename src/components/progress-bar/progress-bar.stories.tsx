import ProgressBar from './progress-bar';
import { Meta, StoryFn } from '@storybook/react';

const meta: Meta<typeof ProgressBar> = {
	title: 'Atoms/ProgressBar',
	component: ProgressBar,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		progress: {
			control: { type: 'range', min: 0, max: 100 },
		},
	},
	decorators: [
		( Story: StoryFn ) => (
			<div style={ { width: '400px' } }>
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryFn<typeof ProgressBar>;

// Basic ProgressBar
export const Basic: Story = ( args ) => <ProgressBar { ...args } />;
Basic.args = {
	progress: 50,
	speed: 200,
};

// Full Progress
export const FullProgress: Story = ( args ) => <ProgressBar { ...args } />;
FullProgress.args = {
	progress: 100,
	speed: 200,
};

// Zero Progress
export const ZeroProgress: Story = ( args ) => <ProgressBar { ...args } />;
ZeroProgress.args = {
	progress: 0,
	speed: 200,
};
