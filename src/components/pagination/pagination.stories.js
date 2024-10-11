import React from 'react'; // Import React
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
			options: [ 'xs', 'sm', 'md', 'lg' ],
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
	return (
		<div style={ { width: '400px' } }>
			<Pagination { ...args }>
				<Pagination.Content>
					<Pagination.Previous onClick={ () => {} } />
					<Pagination.Item onClick={ () => {} } isActive={ false }>
						1
					</Pagination.Item>
					<Pagination.Item onClick={ () => {} } isActive={ true }>
						2
					</Pagination.Item>
					<Pagination.Item onClick={ () => {} } isActive={ false }>
						3
					</Pagination.Item>
					<Pagination.Ellipsis />
					<Pagination.Item onClick={ () => {} } isActive={ false }>
						7
					</Pagination.Item>
					<Pagination.Item onClick={ () => {} } isActive={ false }>
						8
					</Pagination.Item>
					<Pagination.Item onClick={ () => {} } isActive={ false }>
						9
					</Pagination.Item>
					<Pagination.Next onClick={ () => {} } />
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

export const ExtraSmallPagination = ( args ) => Template( { ...args } );
ExtraSmallPagination.args = {
	size: 'xs', // Set default size
	disabled: false, // Default disabled state
};

export const SmallPagination = ( args ) => Template( { ...args } );
SmallPagination.args = {
	size: 'sm', // Set default size
	disabled: false, // Default disabled state
};
export const MediumPagination = ( args ) => Template( { ...args } );
MediumPagination.args = {
	size: 'md', // Set default size
	disabled: false, // Default disabled state
};
export const LargePagination = ( args ) => Template( { ...args } );
LargePagination.args = {
	size: 'lg', // Set default size
	disabled: false, // Default disabled state
};
// Disabled Pagination Example
export const DisabledPagination = ( args ) => Template( { ...args } );
DisabledPagination.args = {
	size: 'md',
	disabled: true, // Set disabled to true
};
