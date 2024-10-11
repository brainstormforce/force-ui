import React, { useRef, useState } from 'react';
import SearchBox from './search.jsx';
import { File, Folder } from 'lucide-react';

export default {
	title: 'Molecules/SearchBox',
	component: SearchBox,
	parameters: {
		layout: 'centered',
		docs: {
			source: {
				code: `
				<SearchBox open={true} onOpenChange={() => {}}>
				  <SearchBox.Input
					placeholder="Search..."
					onChange={() => {}}
					variant="default"
					disabled={false}
					value=""
				  />
				  <SearchBox.Content>
					<SearchBox.Loading loadingIcon={null} />
					<SearchBox.Results>
					  <SearchBox.ResultTitle>
						Search Results
					  </SearchBox.ResultTitle>
					  <SearchBox.ResultItem
						key={0}
						icon={<File size={16} />}
						onClick={() => {}}
					  >
						Item 1
					  </SearchBox.ResultItem>
					  <SearchBox.ResultItem
						key={1}
						icon={<Folder size={16} />}
						onClick={() => {}}
					  >
						Item 2
					  </SearchBox.ResultItem>
					</SearchBox.Results>
					<SearchBox.Separator />
					<SearchBox.Results>
					  <SearchBox.ResultTitle>
						Categories
					  </SearchBox.ResultTitle>
					  <SearchBox.ResultItem
						key={2}
						icon={<File size={16} />}
						onClick={() => {}}
					  >
						Category 1
					  </SearchBox.ResultItem>
					  <SearchBox.ResultItem
						key={3}
						icon={<Folder size={16} />}
						onClick={() => {}}
					  >
						Category 2
					  </SearchBox.ResultItem>
					</SearchBox.Results>
				  </SearchBox.Content>
				</SearchBox>
			  `,
			},
		},


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
		value: {
			description: 'Controlled value for the input',
			action: 'text',
			table: {
				type: { summary: 'string' },
			},
		},
		defaultValue: {
			description: 'Default value if uncontrolled',
			table: {
				type: { summary: 'string' },
			},
			control: { disable: true }, // This disables the control for defaultValue
		},
	},
};

const mockResults = [
	{ type: 'file', name: 'document.pdf' },
	{ type: 'file', name: 'image.jpg' },
	{ type: 'folder', name: 'Project Files' },
	{ type: 'file', name: 'report.docx' },
	{ type: 'folder', name: 'Archive' },
];

const mockCategories = [
	{ type: 'file', name: 'Marketing Documents' },
	{ type: 'folder', name: 'HR Policies' },
	{ type: 'file', name: 'Budget Report 2024' },
	{ type: 'folder', name: 'Sales Data' },
	{ type: 'file', name: 'Company Guidelines' },
];


const Template = ( args ) => {
	const [ open, setOpen ] = useState( args.open );
	const [ loading, setLoading ] = useState( false );
	const [ results, setResults ] = useState( [] );
	const [ categories, setCategories ] = useState( [] );
	const [ value, setValue ] = useState( args.defaultValue || '' );

	const searchTimeout = useRef( null );

	const handleSearch = ( newValue ) => {
		setValue( newValue );
		if ( searchTimeout.current ) {
			clearTimeout( searchTimeout.current );
		}

		setLoading( true );
		setResults( [] );
		setCategories( [] );

		searchTimeout.current = setTimeout( () => {
			const filteredResults = mockResults.filter( ( item ) =>
				item.name.toLowerCase().includes( newValue.toLowerCase() )
			);
			const filteredCategories = mockCategories.filter( ( item ) =>
				item.name.toLowerCase().includes( newValue.toLowerCase() )
			);

			setResults( filteredResults );
			setCategories( filteredCategories );
			setLoading( false );
		}, 1000 );
	};

	const handleOpenChange = ( isOpen ) => {
		setOpen( isOpen );
		args.onOpenChange( isOpen );
	};

	return (
		<div style={ { width: '400px' } }>
			<SearchBox { ...args } open={ open } onOpenChange={ handleOpenChange }>
				<SearchBox.Input
					placeholder={ args.placeholder }
					onChange={ handleSearch }
					variant={ args.variant }
					disabled={ args.disabled }
					value={ value }
				/>
				<SearchBox.Content>
					{ loading ? (
						<SearchBox.Loading loadingIcon={ args.loadingIcon } />
					) : (
						<>
							<SearchBox.Results>
								<SearchBox.ResultTitle>
									Search Results
								</SearchBox.ResultTitle>
								{ results.map( ( item, index ) => (
									<SearchBox.ResultItem
										key={ index }
										icon={
											item.type === 'file' ? (
												<File size={ 16 } />
											) : (
												<Folder size={ 16 } />
											)
										}
										onClick={ () => {
											setOpen( false );
										} }
									>
										{ item.name }
									</SearchBox.ResultItem>
								) ) }
							</SearchBox.Results>
							<SearchBox.Separator />
							<SearchBox.Results>
								<SearchBox.ResultTitle>
									Categories
								</SearchBox.ResultTitle>
									{categories.map((item, index) => (
									<SearchBox.ResultItem
										key={ index }
										onClick={ () => {
											setOpen( false );
										} }
											icon={
												item.type === 'file' ? (
													<File size={16} />
												) : (
													<Folder size={16} />
												)
											}
									>
										{ item.name }
									</SearchBox.ResultItem>
								) ) }
							</SearchBox.Results>
						</>
					) }
				</SearchBox.Content>
			</SearchBox>
		</div>
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
	defaultValue: '',
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
