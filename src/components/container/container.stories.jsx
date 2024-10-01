import React from 'react';
import Container from './container.jsx';

Container.displayName = 'Container';
Container.Item.displayName = 'Container.Item';

export default {
	title: 'Atoms/Container',
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
			description:
				'Specifies how flex items are aligned along the main axis.',
			control: 'select',
			options: [
				'start',
				'center',
				'end',
				'between',
				'around',
				'evenly',
				'stretch',
			],
			defaultValue: 'start',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'start' },
			},
		},
		align: {
			name: 'Align Items',
			description:
				'Specifies how flex items are aligned along the cross axis.',
			control: 'select',
			options: [ 'start', 'center', 'end', 'stretch' ],
			defaultValue: 'stretch',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'stretch' },
			},
		},
		itemGrow: {
			name: 'Container.Item: Grow',
			description:
				'Specifies how much a flex item should grow relative to the rest of the flex items. (This will apply for first item only for demo)',
			control: 'select',
			options: [ 0, 1 ],
			defaultValue: 0,
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: 0 },
			},
		},
		itemShrink: {
			name: 'Container.Item: Shrink',
			description:
				'Specifies how much a flex item should shrink relative to the rest of the flex items.',
			control: 'select',
			options: [ 0, 1 ],
			defaultValue: 1,
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: 1 },
			},
		},
		itemOrder: {
			name: 'Container.Item: Order',
			description: 'Defines the order of the flex item in the container.',
			control: 'select',
			options: [
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12,
				'first',
				'last',
				'none',
			],
			defaultValue: 'none',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'none' },
			},
		},
		itemAlignSelf: {
			name: 'Container.Item: Align Self',
			description:
				'Allows the default alignment to be overridden for individual flex items.',
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
			description: 'Defines the extra classes',
			control: 'text',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '' },
			},
		},
	},
};

export const ResponsiveFlex = {
	args: {
		gap: 'sm',
		direction: 'row',
		justify: 'start',
		align: 'stretch',
		className: 'bg-gray-200 p-4',
		itemGrow: 0,
		itemShrink: 1,
		itemOrder: 'none',
		itemAlignSelf: 'auto',
	},
	render: ( args ) => {
		const containerStyle =
			args.direction === 'row' ? { height: '8rem' } : { width: '8rem' };
		const itemStyle =
			args.direction === 'row' ? { height: '4rem' } : { width: '4rem' };

		return (
			<Container
				gap={ args.gap }
				direction={ args.direction }
				justify={ args.justify }
				align={ args.align }
				className={ args.className }
				style={ containerStyle }
			>
				<Container.Item
					grow={ args.itemGrow }
					shrink={ args.itemShrink }
					order={ args.itemOrder }
					alignSelf={ args.itemAlignSelf }
					className="bg-red-500 p-4 text-wrap"
					style={ itemStyle }
				>
					Item 1
				</Container.Item>
				<Container.Item className="bg-green-500 p-4" style={ itemStyle }>
					Item 2
				</Container.Item>
				<Container.Item className="bg-blue-500 p-4" style={ itemStyle }>
					Item 3
				</Container.Item>
			</Container>
		);
	},
};
