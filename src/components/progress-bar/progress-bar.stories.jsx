import ProgressBar from './progress-bar';

export default {
	title: 'Atoms/ProgressBar',
	component: ProgressBar,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		progress: {
			name: 'Progress',
			description: 'Defines the progress percentage of the bar (0-100).',
			control: { type: 'range', min: 0, max: 100 },
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: 0 },
			},
		},
		speed: {
			name: 'Speed',
			description: 'Defines the animation speed in milliseconds.',
			control: { type: 'number' },
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: 200 },
			},
		},
		className: {
			name: 'Class Name',
			description: 'Additional custom classes for the progress bar.',
			control: 'text',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '' },
			},
		},
	},
	decorators: [
		(Story) => (
			<div style={{ width: '400px' }}>
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

// Slow ProgressBar
export const SlowProgress = {
	args: {
		progress: 75,
		speed: 1000,
	},
};

// Zero Progress
export const ZeroProgress = {
	args: {
		progress: 0,
		speed: 200,
	},
};
