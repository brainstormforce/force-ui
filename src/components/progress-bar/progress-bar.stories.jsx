import ProgressBar from './progress-bar.jsx';

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
            description: 'Defines the progress value (0-100).',
            control: { type: 'range', min: 0, max: 100 },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '0' },
            },
        },
        speed: {
            name: 'Speed',
            description: 'Transition speed in milliseconds.',
            control: { type: 'number' },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '200' },
            },
        },
        className: {
            name: 'ClassName',
            description: 'Additional CSS classes for the progress bar.',
            control: 'text',
            table: {
                type: { summary: 'string' },
            },
        },
    },
};

// Basic ProgressBar Story
export const Basic = {
    args: {
        progress: 50,
        speed: 200,
    },
};

// Full Progress Story
export const FullProgress = {
    args: {
        progress: 100,
        speed: 200,
    },
};

// Slow ProgressBar Story
export const SlowProgress = {
    args: {
        progress: 75,
        speed: 1000,
    },
};

// Zero Progress Story
export const ZeroProgress = {
    args: {
        progress: 0,
        speed: 200,
    },
};
