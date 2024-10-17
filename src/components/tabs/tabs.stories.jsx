import { useState, useEffect } from 'react';
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
		activeItem: {
			name: 'Active Item',
			description: 'Controls the active tab.',
			control: 'select',
			options: [ 'tab1', 'tab2', 'tab3' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'tab1' },
			},
		},
	},
};

const Template = ( args ) => {
	const [ activeTab, setActiveTab ] = useState( args.activeItem );
	useEffect( () => {
		if ( args.activeItem !== activeTab ) {
			setActiveTab( args.activeItem );
		}
	}, [ args.activeItem, activeTab ] );

	const handleTabChange = ( data ) => {
		const activeSlugName = data?.value?.slug || 'tab1';
		if ( data && activeSlugName ) {
			setActiveTab( activeSlugName );
			if ( args.onChange ) {
				args.onChange( activeSlugName );
			}
		}
	};
	const tabToShow =
		activeTab !== args.activeItem ? args.activeItem : activeTab;
	return (
		<Tabs.Group { ...args } activeItem={ tabToShow } onChange={ handleTabChange }>
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
	activeItem: 'tab1',
};

// Basic Tabs Story
export const Basic = {
	args: {
		size: 'sm',
		variant: 'pill',
		orientation: 'horizontal',
		width: 'auto',
		iconPosition: 'left',
		activeItem: 'tab1',
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
		activeItem: 'tab2',
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
		activeItem: 'tab2',
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
		activeItem: 'tab3',
	},
	render: Template,
};
