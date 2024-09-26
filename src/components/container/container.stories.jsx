import React from 'react';
import Container from './container.jsx';

export default {
	title: 'Atoms/Container/Container',
	component: Container,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		gap: {
			name: 'Gap',
			description: 'Defines the gap between items.',
			control: 'select',
			options: [ 'xs', 'sm', 'md', 'lg', 'xl', '2xl' ],
			defaultValue: 'sm',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'sm' },
			},
		},
		direction: {
			name: 'Direction',
			description: 'Defines the direction of flex items.',
			control: 'select',
			options: [ 'row', 'row-reverse', 'column', 'column-reverse' ],
			defaultValue: 'row',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'row' },
			},
		},
		justify: {
			name: 'Justify Content',
			description: 'Specifies how flex items are aligned along the main axis.',
			control: 'select',
			options: [ 'start', 'center', 'end', 'between', 'around', 'evenly', 'stretch' ],
			defaultValue: 'start',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'start' },
			},
		},
		align: {
			name: 'Align Items',
			description: 'Specifies how flex items are aligned along the cross axis.',
			control: 'select',
			options: [ 'start', 'center', 'end', 'stretch' ],
			defaultValue: 'stretch',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'stretch' },
			},
		},
		cols: {
			name: 'Columns (Desktop)',
			description: 'Defines the number of columns for desktop view.',
			control: 'number',
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: '' },
			},
		},
		tabCols: {
			name: 'Columns (Tablet)',
			description: 'Defines the number of columns for tablet view.',
			control: 'number',
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: '' },
			},
		},
		mCols: {
			name: 'Columns (Mobile)',
			description: 'Defines the number of columns for mobile view.',
			control: 'number',
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: '' },
			},
		},
	},
};

export const BasicFlexbox = {
	args: {
		gap: 'sm',
		direction: 'row',
		justify: 'start',
		align: 'stretch',
		className: 'bg-gray-200 p-4',
	},
	render: ( args ) => (
		<Container { ...args }>
			<Container.Item className="bg-red-500 p-4 md:w-full lg:w-full">Item 1</Container.Item>
			<Container.Item className="bg-green-500 p-4 md:w-full lg:w-full">Item 2</Container.Item>
			<Container.Item className="bg-blue-500 p-4 md:w-full lg:w-full">Item 3</Container.Item>
		</Container>
	),
};

// Responsive Columns Story
export const ResponsiveColumns = {
	args: {
		containerType: 'flex',
		gap: 'md',
		cols: '4',
		tabCols: '3',
		mCols: '2',
		className: 'bg-gray-200 p-4',
	},
	render: ( args ) => (
		<Container { ...args }>
			<Container.Item className="bg-red-500 p-4">Item 1</Container.Item>
			<Container.Item className="bg-green-500 p-4">Item 2</Container.Item>
			<Container.Item className="bg-blue-500 p-4">Item 3</Container.Item>
			<Container.Item className="bg-yellow-500 p-4 ">Item 4</Container.Item>
		</Container>
	),
};
