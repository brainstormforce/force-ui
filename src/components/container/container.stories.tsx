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
		cols: {
			control: 'select',
			options: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
			if: { arg: 'containerType', eq: 'grid' },
		},
	},
};

export default meta;
type Story = StoryObj<typeof Container>;

export const BasicContainer: Story = {
	args: {
		className: 'bg-gray-200 p-4',
	},
	render: ( args ) => {
		return (
			<Container { ...args }>
				<Container.Item className="bg-red-500 p-4">
					Item 1
				</Container.Item>
				<Container.Item className="bg-green-500 p-4">
					Item 2
				</Container.Item>
				<Container.Item className="bg-blue-500 p-4">
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
