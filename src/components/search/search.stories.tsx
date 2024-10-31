import type { Meta, StoryFn } from '@storybook/react';
import SearchBox, { BaseSearchBoxProps } from './search';

const meta: Meta<typeof SearchBox> = {
	title: 'Molecules/SearchBox',
	component: SearchBox,
	subcomponents: {
		'SearchBox.Input': SearchBox.Input,
		'SearchBox.Loading': SearchBox.Loading,
		'SearchBox.Separator': SearchBox.Separator,
		'SearchBox.Content': SearchBox.Content,
		'SearchBox.List': SearchBox.List,
		'SearchBox.Empty': SearchBox.Empty,
		'SearchBox.Group': SearchBox.Group,
		'SearchBox.Item': SearchBox.Item,
	} as Record<string, React.ComponentType<unknown>>,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		size: {
			control: { type: 'select' },
			options: [ 'sm', 'md', 'lg' ],
		},
	},
} satisfies Meta<typeof SearchBox>;

export default meta;

const Template: StoryFn<BaseSearchBoxProps> = ( args ) => (
	<SearchBox { ...args }>
		<SearchBox.Input size={ args.size } placeholder="Search..." />
		{ args.loading && <SearchBox.Loading /> }
		<SearchBox.Content>
			<SearchBox.List>
				<SearchBox.Group>
					<SearchBox.Item>Result 1</SearchBox.Item>
					<SearchBox.Item>Result 2</SearchBox.Item>
				</SearchBox.Group>
				<SearchBox.Empty>No results found</SearchBox.Empty>
			</SearchBox.List>
		</SearchBox.Content>
	</SearchBox>
);

export const Default = Template.bind( {} );
Default.args = {
	size: 'md',
	loading: false,
};

export const WithLoading = Template.bind( {} );
WithLoading.args = {
	size: 'md',
	loading: true,
};

export const LargeSecondary = Template.bind( {} );
LargeSecondary.args = {
	size: 'lg',
	loading: false,
};
