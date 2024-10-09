import { useState } from 'react';
import Tabs from './tabs.jsx';
import { House } from 'lucide-react';

Tabs.Group.displayName = 'Tabs.Group';
Tabs.Tab.displayName = 'Tabs.Tab';
export default {
	title: 'Atoms/Tabs',
	component: Tabs.Group,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		size: {
			name: 'Size',
			description: 'Defines the size of the tabs.',
			control: 'select',
			options: [ 'xs', 'sm', 'md', 'lg' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'sm' },
			},
		},
		variant: {
			name: 'Variant',
			description: 'Defines the style variant of the tabs.',
			control: 'select',
			options: [ 'pill', 'rounded', 'underline' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'pill' },
			},
		},
		orientation: {
			name: 'Orientation',
			description: 'Defines the orientation of the tabs.',
			control: 'select',
			options: [ 'horizontal', 'vertical' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'horizontal' },
			},
		},
		width: {
			name: 'Width',
			description: 'Defines the width of the tabs.',
			control: 'select',
			options: [ 'auto', 'full' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'auto' },
			},
		},
		iconPosition: {
			name: 'Icon Position',
			description: 'Defines the position of the icon.',
			control: 'select',
			options: [ 'left', 'right' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'left' },
			},
		},
		defaultValue: {
			name: 'Default Value',
			description: 'Default value for Tab (true/false).',
			control: 'string',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '' },
			},
		},
		className: {
			name: 'Class Name',
			description: 'Defines the extra classes',
			control: 'string',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '' },
			},
		},
	},
};

const Template = ( args ) => {
	const [ activeTab, setActiveTab ] = useState( args.defaultValue || 'tab1' );

	const handleTabChange = ( data ) => {
		const activeSlugName = data?.value?.slug || 'tab1';
		if ( data && activeSlugName ) {
			setActiveTab( activeSlugName );
			if ( args.onChange ) {
				args.onChange( activeSlugName );
			}
		}
	};

	return (
		<Tabs.Group { ...args } activeItem={ activeTab } onChange={ handleTabChange }>
			<Tabs.Tab slug="tab1" text="Tab 1" icon={ <House /> } />
			<Tabs.Tab slug="tab2" text="Tab 2" icon={ <House /> } />
			<Tabs.Tab slug="tab3" text="Tab 3" icon={ <House /> } />
		</Tabs.Group>
	);
};

export const Default = Template.bind( {} );
Default.args = {
	size: 'sm',
	variant: 'pill',
	orientation: 'horizontal',
	width: 'auto',
	iconPosition: 'left',
	defaultValue: 'tab1',
};

// Basic Tabs Story
export const Basic = {
	args: {
		size: 'sm',
		variant: 'pill',
		orientation: 'horizontal',
		width: 'auto',
		iconPosition: 'left',
		defaultValue: 'tab1',
	},
	render: Template,
};

// Tabs with Rounded Variant
export const Rounded = {
	args: {
		size: 'md',
		variant: 'rounded',
		orientation: 'horizontal',
		width: 'auto',
		iconPosition: 'left',
		defaultValue: 'tab2',
	},
	render: Template,
};

// Vertical Tabs
export const Vertical = {
	args: {
		size: 'lg',
		variant: 'underline',
		orientation: 'vertical',
		width: 'full',
		iconPosition: 'right',
		defaultValue: 'tab2',
	},
	render: Template,
};

// Tabs with Custom Icons
export const WithCustomIcons = {
	args: {
		size: 'sm',
		variant: 'pill',
		orientation: 'horizontal',
		width: 'auto',
		iconPosition: 'right',
		defaultValue: 'tab3',
	},
	render: Template,
};
