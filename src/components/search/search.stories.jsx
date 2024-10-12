import React, { useRef, useState } from 'react';
import SearchBox from './search.jsx';
import { File, Folder } from 'lucide-react';

export default {
	title: 'Molecules/SearchBox',
	component: SearchBox,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		size: {
			description: 'Defines the size of the component',
			control: { type: 'select' },
			options: [ 'sm', 'md', 'lg' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'sm' },
			},
		},
		variant: {
			description: 'Defines the visual style of the search box',
			control: { type: 'select' },
			options: [ 'primary', 'secondary', 'ghost' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'primary' },
			},
		},
		disabled: {
			description: 'If true, the input will be disabled',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: false },
			},
		},
		placeholder: {
			description: 'Placeholder text for the input',
			control: 'text',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'Search...' },
			},
		},
		open: {
			description: 'Controls whether the dropdown is open',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: false },
			},
		},
		onOpenChange: {
			description:
				'Callback function triggered when the open state changes',
			action: 'onOpenChange',
			table: {
				type: { summary: 'function' },
			},
		},
		loading: {
			description: 'Controls loading state of the dropdown.',
			table: {
				type: { summary: 'boolean' },
			},
		},
		filter: {
			description: 'Controls auto filtering of results.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: true },
			},
		},
		className: {
			description:
				'Defines custom classes for component. Can be passed to all components.',
			control: { type: 'string' },
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '' },
			},
		},
	},
};

const Template = ( args ) => {
	const [ open, setOpen ] = useState( false );
	const inputRef = useRef( null );

	const handleSearch = () => {};

	const handleOpenChange = ( isOpen ) => {
		setOpen( isOpen );
	};

	// useEffect( () => {
	// 	setLoading( args.loading );
	// }, [ args.loading ] );

	return (
		<SearchBox
			size={ args.size }
			open={ open || args.open }
			onOpenChange={ handleOpenChange }
			loading={ args.loading }
		>
			<SearchBox.Input
				ref={ inputRef }
				placeholder={ args.placeholder }
				onChange={ handleSearch }
				variant={ args.variant }
				disabled={ args.disabled }
			/>
			<SearchBox.Content>
				<SearchBox.List filter={ args.filter }>
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
		</SearchBox>
	);
};

export const BasicSearchBox = Template.bind( {} );
BasicSearchBox.args = {
	size: 'sm',
	variant: 'primary',
	disabled: false,
	placeholder: 'Search...',
	open: false,
	onOpenChange: () => {},
	filter: true,
};

export const LargeSearchBox = Template.bind( {} );
LargeSearchBox.args = {
	...BasicSearchBox.args,
	size: 'lg',
};

export const DisabledSearchBox = Template.bind( {} );
DisabledSearchBox.args = {
	...BasicSearchBox.args,
	disabled: true,
};

export const SecondaryVariant = Template.bind( {} );
SecondaryVariant.args = {
	...BasicSearchBox.args,
	variant: 'secondary',
};

export const GhostVariant = Template.bind( {} );
GhostVariant.args = {
	...BasicSearchBox.args,
	variant: 'ghost',
};

export const LoadingVariant = Template.bind( {} );
LoadingVariant.args = {
	...BasicSearchBox.args,
	open: true,
	loading: true,
	variant: 'secondary',
};
