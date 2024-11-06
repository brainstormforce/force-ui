import ProgressBar from './progress-bar';
import { StoryFn } from '@storybook/react';

export default {
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

// Basic ProgressBar
export const Basic = {
	args: {
		progress: 50,
		speed: 200,
	},
};

// Full Progress
export const FullProgress = {
	args: {
		progress: 100,
		speed: 200,
	},
};

// Zero Progress
export const ZeroProgress = {
	args: {
		progress: 0,
		speed: 200,
	},
};
