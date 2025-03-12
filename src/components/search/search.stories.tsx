import { useState, useRef } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import SearchBox from './search';
import { File, Folder } from 'lucide-react';

const meta: Meta<typeof SearchBox> = {
	title: 'Molecules/SearchBox',
	component: SearchBox,
	subcomponents: {
		'SearchBox.Input': SearchBox.Input,
		'SearchBox.Loading': SearchBox.Loading,
		'SearchBox.Separator': SearchBox.Separator,
		'SearchBox.Portal': SearchBox.Portal,
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
		},
		children: {
			control: false,
		},
	},
} satisfies Meta<typeof SearchBox>;

export default meta;

const Template: StoryFn<typeof SearchBox> = ( args ) => {
	const [ open, setOpen ] = useState( false );
	const inputRef = useRef( null );

	const handleSearch = () => {
		// Logic for handling search input change
	};

	const handleOpenChange = ( isOpen: boolean ) => {
		setOpen( isOpen );
	};

	return (
		<SearchBox
			{ ...args }
			open={ open || args.open }
			onOpenChange={ handleOpenChange }
		>
			<SearchBox.Input ref={ inputRef } onChange={ handleSearch } />
			<SearchBox.Portal>
				<SearchBox.Content>
					<SearchBox.List>
						<SearchBox.Group heading="Suggestions">
							<SearchBox.Item icon={ <File /> }>
								Calendar
							</SearchBox.Item>
							<SearchBox.Item icon={ <File /> }>
								Document
							</SearchBox.Item>
							<SearchBox.Item icon={ <File /> }>
								Attendance
							</SearchBox.Item>
						</SearchBox.Group>
						<SearchBox.Separator />
						<SearchBox.Group heading="Folders">
							<SearchBox.Item icon={ <Folder /> }>
								Calendar Folder
							</SearchBox.Item>
							<SearchBox.Item icon={ <Folder /> }>
								Document Folder
							</SearchBox.Item>
							<SearchBox.Item icon={ <Folder /> }>
								Attendance Folder
							</SearchBox.Item>
						</SearchBox.Group>
					</SearchBox.List>
				</SearchBox.Content>
			</SearchBox.Portal>
		</SearchBox>
	);
};

export const BasicSearchBox = Template.bind( {} );
BasicSearchBox.args = {
	size: 'sm',
};

export const SecondarySearchBox = Template.bind( {} );
SecondarySearchBox.args = {};
SecondarySearchBox.decorators = [
	() => (
		<SearchBox variant="secondary">
			<SearchBox.Input />
		</SearchBox>
	),
];

export const GhostSearchBox = Template.bind( {} );
GhostSearchBox.args = {};
GhostSearchBox.decorators = [
	() => (
		<SearchBox variant="ghost">
			<SearchBox.Input />
		</SearchBox>
	),
];

export const DisabledSearchBox = Template.bind( {} );
DisabledSearchBox.args = {};
DisabledSearchBox.decorators = [
	() => (
		<SearchBox>
			<SearchBox.Input disabled={ true } />
		</SearchBox>
	),
];

export const LoadingSearchBox = Template.bind( {} );
LoadingSearchBox.args = {
	open: true,
	loading: true,
};
