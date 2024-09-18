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

export const RectangularText = (args) => (
    <Skeleton variant="rectangular" style={ { width: '700px', height: '10px' } }/>
);
export const RectangularPhoto = (args) => (
    <Skeleton variant="rectangular" style={ { width: '300px', height: '150px' } } />
);

export const Circular = (args) => (
  <Skeleton variant="circular" style={ { width: '40px', height: '40px' } } />
);

