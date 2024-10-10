import React, { useState } from 'react'; // Import React
import Pagination from './pagination.jsx'; // Adjust the import path as necessary

export default {
	title: 'Molecules/Pagination', // Story title
	component: Pagination, // The component to be rendered
	parameters: {
		layout: 'centered', // Layout for the story
	},
	tags: [ 'autodocs' ], // Documentation tags
	argTypes: {
		size: {
			name: 'Size',
			description: 'Defines the size variant of the pagination',
			control: { type: 'select' },
			options: [ 'sm', 'md', 'lg' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'md' },
			},
		},
		disabled: {
			name: 'Disabled',
			description: 'If true, the pagination will be disabled.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		onClick: {
			name: 'OnClick',
			description: 'Callback function to handle page button click.',
			table: {
				type: { summary: 'function' },
			},
		},
		// Add more argTypes as needed
	},
};

// Template function for rendering pagination
const Template = ( args ) => {
	const [ activeIndex, setActiveIndex ] = useState( 0 );

	const items = [
		{ label: '1' },
		{ label: '2' },
		{ label: '3' },
		{ label: '4' },
		{ label: '5' },
	];

	const handleClick = ( index ) => {
		setActiveIndex( index );
	};

	return (
		<div style={ { width: '400px' } }>
			<Pagination { ...args }>
				<Pagination.Content>
					<Pagination.Item>
						<Pagination.Previous onClick={ () => handleClick( -1 ) } />
					</Pagination.Item>
					{ items.map( ( item, index ) => (
						<Pagination.Item key={ index }>
							<Pagination.Link
								onClick={ () => handleClick( index ) }
								isActive={ activeIndex === index }
							>
								{ item.label }
							</Pagination.Link>
						</Pagination.Item>
					) ) }
					<Pagination.Item>
						<Pagination.Ellipsis
							onClick={ () => handleClick( items.length ) }
						/>
					</Pagination.Item>
					<Pagination.Item>
						<Pagination.Next
							onClick={ () => handleClick( items.length + 1 ) }
						/>
					</Pagination.Item>
				</Pagination.Content>
			</Pagination>
		</div>
	);
};

// Basic Pagination Example
export const BasicPagination = ( args ) => Template( { ...args } );
BasicPagination.args = {
	size: 'md', // Set default size
	disabled: false, // Default disabled state
};

// Disabled Pagination Example
export const DisabledPagination = ( args ) => Template( { ...args } );
DisabledPagination.args = {
	size: 'md',
	disabled: true, // Set disabled to true
};