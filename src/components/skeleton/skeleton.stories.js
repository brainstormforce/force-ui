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
		},
        className: {
            description: 'Allows you to pass custom classes to control the size and styles',
            control: 'text',
        },
	},
}

export const Rectangular = (args) => (
    <Skeleton variant="rectangular"/>
);

export const Circular = (args) => (
  <Skeleton variant="circular"/>
);

