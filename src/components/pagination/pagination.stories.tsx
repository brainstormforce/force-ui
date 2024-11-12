import { Meta, StoryFn } from '@storybook/react';
import Pagination, { PaginationProps } from './pagination';

// Meta Configuration
const meta: Meta<typeof Pagination> = {
	title: 'Molecules/Pagination',
	component: Pagination,
	subcomponents: {
		'Pagination.Content': Pagination.Content,
		'Pagination.Item': Pagination.Item,
		'Pagination.Previous': Pagination.Previous,
		'Pagination.Next': Pagination.Next,
		'Pagination.Ellipsis': Pagination.Ellipsis,
	} as Record<string, React.ComponentType<unknown>>,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		size: { control: { type: 'select' } },
		children: { control: false },
	},
};

export default meta;

// Template Function
const Template: StoryFn<PaginationProps> = ( args ) => (
	<Pagination { ...args }>
		<Pagination.Content>
			<Pagination.Previous />
			<Pagination.Item>1</Pagination.Item>
			<Pagination.Item>2</Pagination.Item>
			<Pagination.Item>3</Pagination.Item>
			<Pagination.Ellipsis />
			<Pagination.Item>7</Pagination.Item>
			<Pagination.Item>8</Pagination.Item>
			<Pagination.Item>9</Pagination.Item>
			<Pagination.Next />
		</Pagination.Content>
	</Pagination>
);

export const Basic = Template.bind( {} );
Basic.args = {
	size: 'md',
	disabled: false,
	className: '',
};

export const Small = Template.bind( {} );
Small.args = { size: 'sm', disabled: false };

export const MediumWithActivePage = Template.bind( {} );
MediumWithActivePage.decorators = [
	() => (
		<Pagination size="md">
			<Pagination.Content>
				<Pagination.Previous />
				<Pagination.Item>1</Pagination.Item>
				<Pagination.Item>2</Pagination.Item>
				<Pagination.Item isActive={ true }>3</Pagination.Item>
				<Pagination.Ellipsis />
				<Pagination.Item>7</Pagination.Item>
				<Pagination.Item>8</Pagination.Item>
				<Pagination.Item>9</Pagination.Item>
				<Pagination.Next />
			</Pagination.Content>
		</Pagination>
	),
];

export const Disabled = Template.bind( {} );
Disabled.args = { size: 'md', disabled: true };

export const TextNavigation = Template.bind( {} );
TextNavigation.args = {
	size: 'md',
	disabled: false,
	className: '',
};
TextNavigation.decorators = [
	() => (
		<Pagination size="md">
			<Pagination.Content>
				<Pagination.Previous />
				<Pagination.Item>Home</Pagination.Item>
				<Pagination.Item>Projects</Pagination.Item>
				<Pagination.Item>Resources</Pagination.Item>
				<Pagination.Item>News</Pagination.Item>
				<Pagination.Item>Blogs</Pagination.Item>
				<Pagination.Item>Store</Pagination.Item>
				<Pagination.Next />
			</Pagination.Content>
		</Pagination>
	),
];
