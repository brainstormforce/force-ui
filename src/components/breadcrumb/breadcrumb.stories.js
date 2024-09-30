// Breadcrumb.stories.js

import {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
	BreadcrumbEllipsis,
	BreadcrumbPage,
} from './breadcrumb'; // Adjust the import path as needed

export default {
	title: 'Atoms/Breadcrumb',
	component: Breadcrumb,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		size: {
			control: { type: 'select' },
			options: [ 'sm', 'md' ],
			description: 'Size of the breadcrumb component',
			defaultValue: 'sm',
		},
		separatorType: {
			control: { type: 'select' },
			options: [ 'arrow', 'slash' ],
			description: 'Type of separator between breadcrumb items',
			defaultValue: 'arrow',
		},
	},
};

const Template = ( args ) => (
	<Breadcrumb size={ args.size }>
		<BreadcrumbList>
			<BreadcrumbItem>
				<BreadcrumbLink href="#">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator type={ args.separatorType } />
			<BreadcrumbItem>
				<BreadcrumbEllipsis />
			</BreadcrumbItem>
			<BreadcrumbSeparator type={ args.separatorType } />
			<BreadcrumbItem>
				<BreadcrumbLink href="#">Category</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator type={ args.separatorType } />
			<BreadcrumbItem>
				<BreadcrumbPage>Current Page</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>
);

export const Basic = Template.bind( {} );
Basic.args = {
	size: 'sm',
	separatorType: 'arrow',
};

export const MediumSizeWithSlashSeparator = Template.bind( {} );
MediumSizeWithSlashSeparator.args = {
	size: 'md',
	separatorType: 'slash',
};

