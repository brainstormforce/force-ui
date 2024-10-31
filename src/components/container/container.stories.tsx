import { Meta, StoryObj } from '@storybook/react';
import Container from './container';

const meta: Meta<typeof Container> = {
	title: 'Atoms/Container',
	component: Container,
	parameters: {
		layout: 'centered',
	},
	subcomponents: { 'Container.Item': Container.Item } as Record<
		string,
		React.ComponentType<unknown>
	>,
	tags: [ 'autodocs' ],
	argTypes: {
		containerType: {
			control: 'select',
			options: [ 'flex', 'grid' ],
		},
		cols: {
			control: 'select',
			options: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
			if: { arg: 'containerType', eq: 'grid' },
		},

		gap: {
			control: 'select',
			options: [ 'xs', 'sm', 'md', 'lg', 'xl', '2xl' ],
		},
		direction: {
			control: 'select',
			options: [ 'row', 'row-reverse', 'column', 'column-reverse' ],
			if: { arg: 'containerType', eq: 'flex' },
		},
		justify: {
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
		},
		align: {
			control: 'select',
			options: [ 'start', 'center', 'end', 'stretch' ],
		},
		className: {
			control: 'text',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Container>;

export const ResponsiveFlex: Story = {
	args: {
		containerType: 'flex',
		cols: 3,
		gap: 'sm',
		justify: 'start',
		align: 'stretch',
		direction: 'row',
		className: 'bg-gray-200 p-4',
	},
	render: ( args ) => {
		let containerStyle;
		if ( args.containerType === 'grid' ) {
			containerStyle = {
				width: `${ +( args.cols ?? 1 ) * 6 }rem`,
				height: '8rem',
			};
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
				style={ containerStyle as React.CSSProperties }
			>
				<Container.Item
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
