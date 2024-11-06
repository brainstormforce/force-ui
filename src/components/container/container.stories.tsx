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
		// Flex props.
		direction: {
			control: 'select',
			if: { arg: 'containerType', eq: 'flex' },
		},
		wrap: {
			control: 'select',
			if: { arg: 'containerType', eq: 'flex' },
		},
		// Grid props.
		cols: {
			control: 'select',
			if: { arg: 'containerType', eq: 'grid' },
		},
		gridFlow: {
			control: 'select',
			if: { arg: 'containerType', eq: 'grid' },
		},
		colsSubGrid: {
			control: 'boolean',
			if: { arg: 'containerType', eq: 'grid' },
		},
		rowsSubGrid: {
			control: 'boolean',
			if: { arg: 'containerType', eq: 'grid' },
		},
		autoRows: {
			control: 'boolean',
			if: { arg: 'containerType', eq: 'grid' },
		},
		autoCols: {
			control: 'boolean',
			if: { arg: 'containerType', eq: 'grid' },
		},
		// Common props.
		justify: {
			control: 'select',
		},
		align: {
			control: 'select',
		},
		gap: {
			control: 'select',
		},
		gapX: {
			control: 'select',
		},
		gapY: {
			control: 'select',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Container>;

export const BasicContainer: Story = {
	args: {
		className: 'bg-gray-200 p-4',
		cols: 3,
		containerType: 'flex',
		gap: 'sm',
		justify: 'start',
		align: 'start',
		direction: 'row',
	},
	render: ( args ) => {
		return (
			<Container { ...args }>
				<Container.Item
					className="bg-red-500 p-4"
					{ ...( args.containerType === 'flex'
						? { grow: 0, shrink: 1 }
						: {} ) }
				>
					Item 1
				</Container.Item>
				<Container.Item
					className="bg-green-500 p-4"
					{ ...( args.containerType === 'flex'
						? { grow: 0, shrink: 1 }
						: {} ) }
				>
					Item 2
				</Container.Item>
				<Container.Item
					className="bg-blue-500 p-4"
					{ ...( args.containerType === 'flex'
						? { grow: 0, shrink: 1 }
						: {} ) }
				>
					Item 3
				</Container.Item>
			</Container>
		);
	},
};

export const RowReverse: Story = {
	args: {
		containerType: 'flex',
		gap: 'sm',
		justify: 'between',
		align: 'center',
		direction: 'row-reverse',
		className: 'bg-gray-200 p-4',
	},
	render: BasicContainer.render,
};

export const DirectionVertical: Story = {
	args: {
		containerType: 'flex',
		direction: 'column',
		gap: 'sm',
		justify: 'between',
		align: 'center',
		className: 'bg-gray-200 p-4',
	},
	render: BasicContainer.render,
};
