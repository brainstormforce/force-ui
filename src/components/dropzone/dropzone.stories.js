// Dropzone.stories.js

import Dropzone from './dropzone.jsx'; // Adjust the import path as needed

export default {
	title: 'Molecules/Dropzone',
	component: Dropzone,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		size: {
			control: { type: 'select' },
			options: [ 'sm', 'md', 'lg' ],
			description: 'Size of the dropzone component',
			defaultValue: 'sm',
		},
		inlineIcon: {
			control: { type: 'boolean' },
			description: 'Display the icon inline with the label',
			defaultValue: false,
		},
		label: {
			control: { type: 'text' },
			description: 'Label for the dropzone component',
			defaultValue: 'Drag & drop or browse files',
		},
		helpText: {
			control: { type: 'text' },
			description: 'Help text for the dropzone component',
		},
		
	},
};

const Template = ( args ) => (
	<Dropzone {...args} />
);

export const Basic = Template.bind( {} );
Basic.args = {};