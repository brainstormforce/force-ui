import React from 'react';
import Container from './container.jsx';

export default {
	title: 'Atoms/Container/Container.Item',
	component: Container.Item, // We're controlling Container.Item but showing Container
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		grow: {
			name: 'Grow',
			description: 'Specifies how much a flex item should grow relative to the rest of the flex items.',
			control: 'select',
			options: [ 0, 1 ],
			defaultValue: 0,
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: 0 },
			},
		},
		shrink: {
			name: 'Shrink',
			description: 'Specifies how much a flex item should shrink relative to the rest of the flex items.',
			control: 'select',
			options: [ 0, 1 ],
			defaultValue: 1,
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: 1 },
			},
		},
		order: {
			name: 'Order',
			description: 'Defines the order of the flex item in the container.',
			control: 'select',
			options: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'first', 'last', 'none' ],
			defaultValue: 'none',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'none' },
			},
		},
		alignSelf: {
			name: 'Align Self',
			description: 'Allows the default alignment to be overridden for individual flex items.',
			control: 'select',
			options: [ 'auto', 'start', 'end', 'center', 'stretch', 'baseline' ],
			defaultValue: 'auto',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'auto' },
			},
		},
		className: {
			name: 'Class Name',
			description: 'Additional custom classes to be added to the container item.',
			control: 'text',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '' },
			},
		},
	},
	decorators: [
		( Story ) => (
			<div className="md:w-full lg:w-full">
				<Story />
			</div>
		),
	],
};

// Story that applies controls on Container.Item
export const ContainerWithItemControls = {
	args: {
		grow: 0,
		shrink: 1,
		order: 'none',
		alignSelf: 'auto',
		className: 'bg-red-500 p-4',
	},
	render: ( args ) => (
		<Container gap="md" direction="row" className="bg-gray-200 p-4 md:w-full lg:w-full justify-start h-20">
			<Container.Item { ...args } className="bg-red-500 p-4">Item 1</Container.Item>
			<Container.Item className="bg-gray-500 p-4">Item 2</Container.Item>
			<Container.Item className="bg-gray-500 p-4">Item 3</Container.Item>
		</Container>
	),
};
