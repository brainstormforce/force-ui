// Breadcrumb.stories.js

import Breadcrumb from './breadcrumb'; // Adjust the import path as needed

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
		<Breadcrumb.List>
			<Breadcrumb.Item>
				<Breadcrumb.Link href="#">Home</Breadcrumb.Link>
			</Breadcrumb.Item>
			<Breadcrumb.Separator type={ args.separatorType } />
			<Breadcrumb.Item>
				<Breadcrumb.Ellipsis />
			</Breadcrumb.Item>
			<Breadcrumb.Separator type={ args.separatorType } />
			<Breadcrumb.Item>
				<Breadcrumb.Link href="#">Category</Breadcrumb.Link>
			</Breadcrumb.Item>
			<Breadcrumb.Separator type={ args.separatorType } />
			<Breadcrumb.Item>
				<Breadcrumb.Page>Current Page</Breadcrumb.Page>
			</Breadcrumb.Item>
		</Breadcrumb.List>
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
