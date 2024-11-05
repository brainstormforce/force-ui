import { Meta, StoryFn } from '@storybook/react';
import Pagination from './pagination';
import type { ComponentProps } from 'react';

// Extract Pagination Props
type PaginationProps = ComponentProps<typeof Pagination> & {
	tag?: 'a' | 'button';
	isActive?: boolean;
};

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
	<Pagination
		size={ args.size }
		disabled={ args.disabled }
		className={ args.className }
	>
		<Pagination.Content>
			<Pagination.Previous tag={ args.tag }>
				{ args.children }
			</Pagination.Previous>
			<Pagination.Item isActive={ false }>1</Pagination.Item>
			<Pagination.Item isActive={ args.isActive }>2</Pagination.Item>
			<Pagination.Item isActive={ false }>3</Pagination.Item>
			<Pagination.Ellipsis>...</Pagination.Ellipsis>
			<Pagination.Item isActive={ false }>7</Pagination.Item>
			<Pagination.Item isActive={ false }>8</Pagination.Item>
			<Pagination.Item isActive={ false }>9</Pagination.Item>
			<Pagination.Next tag={ args.tag }>{ args.children }</Pagination.Next>
		</Pagination.Content>
	</Pagination>
);

// Story Variants
export const Basic = Template.bind( {} );
Basic.args = {
	size: 'md',
	disabled: false,
	isActive: false,
	tag: 'a',
	className: '',
};

// export const ExtraSmall = Template.bind({});
// ExtraSmall.args = { size: 'xs', disabled: false };

export const Small = Template.bind( {} );
Small.args = { size: 'sm', disabled: false };

export const Medium = Template.bind( {} );
Medium.args = { size: 'md', disabled: false };

// export const Large = Template.bind({});
// Large.args = { size: 'lg', disabled: false };

export const Disabled = Template.bind( {} );
Disabled.args = { size: 'md', disabled: true };
