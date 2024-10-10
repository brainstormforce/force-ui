import React from 'react';
import Container from './container.jsx';

export default {
	title: 'Atoms/Container',
	component: Container,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		containerType: {
			name: 'Container Type',
			description: 'Defines the type of container.',
			control: 'select',
			options: [ 'flex', 'grid' ],
			defaultValue: 'flex',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'flex' },
			},
		},
		cols: {
			name: 'Columns',
			description: 'Defines the number of columns in the grid.',
			control: 'select',
			options: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
			defaultValue: 3,
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: 1 },
			},
			if: { arg: 'containerType', eq: 'grid' },
		},
		autoRows: {
			name: 'Auto Rows',
			description: 'Defines the auto rows in the grid.',
			control: 'boolean',
			defaultValue: false,
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: false },
			},
			if: { arg: 'containerType', eq: 'grid' },
		},
		autoCols: {
			name: 'Auto Columns',
			description: 'Defines the auto columns in the grid.',
			control: 'boolean',
			defaultValue: false,
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: false },
			},
			if: { arg: 'containerType', eq: 'grid' },
		},
		colsSubGrid: {
			name: 'Columns Sub Grid',
			description: 'Defines the sub grid columns in the grid.',
			control: 'boolean',
			defaultValue: false,
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: false },
			},
			if: { arg: 'containerType', eq: 'grid' },
		},
		rowsSubGrid: {
			name: 'Rows Sub Grid',
			description: 'Defines the sub grid rows in the grid.',
			control: 'boolean',
			defaultValue: false,
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: false },
			},
			if: { arg: 'containerType', eq: 'grid' },
		},
		gridAutoFlow: {
			name: 'Grid Auto Flow',
			description: 'Defines the grid auto flow in the grid.',
			control: 'select',
			options: [ 'row', 'column', 'row-dense', 'column-dense' ],
			defaultValue: 'row',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '' },
			},
			if: { arg: 'containerType', eq: 'grid' },
		},
		gap: {
			name: 'Gap',
			description: 'Defines the gap between items.',
			control: 'select',
			options: [ 'xs', 'sm', 'md', 'lg', 'xl', '2xl' ],
			defaultValue: 'sm',
			table: {
				type: {
					summary: 'string',
					detail: 'xs | sm | md | lg | xl | 2xl',
				},
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
			if: { arg: 'containerType', eq: 'flex' },
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
			if: { arg: 'containerType', eq: 'flex' },
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
			if: { arg: 'containerType', eq: 'flex' },
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
			if: { arg: 'containerType', eq: 'flex' },
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
		containerType: 'flex',
		cols: 3,
		gap: 'sm',
		justify: 'start',
		align: 'stretch',
		direction: 'row',
		itemGrow: 0,
		itemShrink: 1,
		itemOrder: 'none',
		itemAlignSelf: 'auto',
		className: 'bg-gray-200 p-4',
		autoRows: false,
		autoCols: false,
		colsSubGrid: false,
		rowsSubGrid: false,
		gridAutoFlow: '',
	},
	render: ( args ) => {
		let containerStyle;
		if ( args.containerType === 'grid' ) {
			containerStyle = { width: `${ +args.cols * 6 }rem`, height: '8rem' };
		} else if ( args.direction === 'row' ) {
			containerStyle = { height: '8rem' };
		} else {
			containerStyle = { width: '8rem' };
		}
		const itemStyle =
			args.direction === 'row' ? { height: '4rem' } : { width: '4rem' };

		return (
			<Container
				containerType={ args.containerType }
				cols={ args.cols }
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
