import Skeleton from './skeleton.jsx';

export default {
	title: 'Atoms/Skeleton',
	component: Skeleton,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		variant: {
			name: 'Variant',
			description: 'Defines the style variant of the skeleton.',
            control: 'select',
			options: [ 'rectangular', 'circular' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'rectangular' },
			},
		},
		className: {
			description: 'Allows you to pass custom classes to control the size and styles',
			control: 'text',
		},
	},
};

export const Rectangular = (args) => (
  <Skeleton {...args} />
);

Rectangular.args = {
  variant: 'rectangular', 
};

export const Circular = (args) => (
  <Skeleton {...args} />
);

Circular.args = {
  variant: 'circular', 
};