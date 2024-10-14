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
		isActive: {
			name: 'IsActive',
			description:
				'Defines if the page item is active. Passed to each Pagination Item.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		href: {
			name: 'Href',
			description:
				'Link for the Pagination Item. Passed to each Pagination Item.',
			control: 'text',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '#' },
			},
		},
		target: {
			name: 'Target',
			description: 'Specifies where to open the linked document. Default is "_self".',
			control: {
				type: 'select',
			},
			options: [ '_self', '_blank', '_parent', '_top' ], // Common target values
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '_self' },
			},
		},
		rel: {
			name: 'Rel',
			description: 'Specifies the relationship between the current document and the linked document. Default is "noopener noreferrer" for "_blank".',
			control: {
				type: 'text', // Allow users to input custom rel values
			},
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'noopener noreferrer' },
			},
		},
		icon: {
			name: 'Icon',
			description: 'Icon for the Pagination Next and Previous component.',
			control: { type: 'text' },
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '<ChevronLeft/>, <ChevronRight/>' },
			},
		},
		className: {
			name: 'ClassName',
			description:
				'Additional custom classes for pagination. Can be passed to every component.',
			control: 'text',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '' },
			},
		},
	},
};

// Template function for rendering pagination
const Template = ( args ) => {
	return (
		<Pagination
			size={ args.size }
			disabled={ args.disabled }
			className={ args.className }
		>
			<Pagination.Content>
				<Pagination.Previous
					href={ args.href }
					target={ args.target }
					rel={ args.rel } icon={ args.icon }
				/>

				<Pagination.Item
					href={ args.href }
					target={ args.target }
					rel={ args.rel }
					isActive={ false || args.isActive }
				>
					1
				</Pagination.Item>
				<Pagination.Item
					href={ args.href }
					target={ args.target }
					rel={ args.rel }
					isActive={ true || args.isActive }
				>
					2
				</Pagination.Item>
				<Pagination.Item
					href={ args.href }
					target={ args.target }
					rel={ args.rel }
					isActive={ false || args.isActive }
				>
					3
				</Pagination.Item>

				<Pagination.Ellipsis />

				<Pagination.Item
					href={ args.href }
					target={ args.target }
					rel={ args.rel }
					isActive={ false || args.isActive }
				>
					7
				</Pagination.Item>
				<Pagination.Item
					href={ args.href }
					target={ args.target }
					rel={ args.rel }
					isActive={ false || args.isActive }
				>
					8
				</Pagination.Item>
				<Pagination.Item
					href={ args.href }
					target={ args.target }
					rel={ args.rel }
					isActive={ false || args.isActive }
				>
					9
				</Pagination.Item>

				<Pagination.Next
					href={ args.href }
					target={ args.target }
					rel={ args.rel } icon={ args.icon }
				/>

			</Pagination.Content>
		</Pagination>
	);
};

// Basic Pagination Example

export const BasicPagination = ( args ) => Template( { ...args } );
BasicPagination.args = {
	size: 'lg',
	disabled: false,
	className: '',
	isActive: false,
	href: '#',
	target: '_self',
	rel: '',
};

export const ExtraSmallPagination = ( args ) => Template( { ...args } );
ExtraSmallPagination.args = {
	size: 'xs',
	disabled: false,
};

export const SmallPagination = ( args ) => Template( { ...args } );
SmallPagination.args = {
	size: 'sm',
	disabled: false,
};
export const MediumPagination = ( args ) => Template( { ...args } );
MediumPagination.args = {
	size: 'md',
	disabled: false,
};
export const LargePagination = ( args ) => Template( { ...args } );
LargePagination.args = {
	size: 'lg',
	disabled: false,
};
// Disabled Pagination Example
export const DisabledPagination = ( args ) => Template( { ...args } );
DisabledPagination.args = {
	size: 'md',
	disabled: true,
};
