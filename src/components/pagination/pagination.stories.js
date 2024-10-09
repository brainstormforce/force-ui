import React, { useState } from 'react'; // Import React
import Pagination from './pagination.jsx'; // Adjust the import path as necessary

export default {
	title: 'Molecules/Pagination', // Story title
	component: Pagination, // The component to be rendered
	parameters: {
		layout: 'centered', // Layout for the story
	},
	tags: ['autodocs'], // Documentation tags
	argTypes: {
		size: {
			name: 'Size',
			description: 'Defines the size variant of the pagination',
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
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
		// Add more argTypes as needed
	},
};

// Define pagination items for demonstration
const items = [
	{ label: '1', href: '#' },
	{ label: '2', href: '#', isActive: true },
	{ label: '3', href: '#' },
	{ label: '7', href: '#' },
	{ label: '8', href: '#' },
];

// Template function for rendering pagination
const Template = (args) => {
	return (
		<div style={{ width: '400px' }}>
			<Pagination {...args}>
				<Pagination.Content>
					<Pagination.Item>
						<Pagination.Previous href="#" />
					</Pagination.Item>
					{items.map((item, index) => (
						<Pagination.Item key={index} isActive={item.isActive}>
							<Pagination.Link href={item.href} isActive={item.isActive}>
								{item.label}
							</Pagination.Link>
						</Pagination.Item>
					))}
					<Pagination.Item>
						<Pagination.Ellipsis />
					</Pagination.Item>
					<Pagination.Item>
						<Pagination.Next href="#" />
					</Pagination.Item>
				</Pagination.Content>
			</Pagination>
		</div>
	);
};

// Basic Pagination Example
export const BasicPagination = (args) => Template({ ...args });
BasicPagination.args = {
	size: 'md', // Set default size
	disabled: false, // Default disabled state
};

// Disabled Pagination Example
export const DisabledPagination = (args) => Template({ ...args });
DisabledPagination.args = {
	size: 'md',
	disabled: true, // Set disabled to true
};
