import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';
import Tabs, { type TabsGroupProps } from './tabs';
import { House } from 'lucide-react';

const meta: Meta<typeof Tabs.Group> = {
	title: 'Atoms/Tabs',
	component: Tabs.Group,
	subcomponents: {
		'Tabs.Tab': Tabs.Tab,
		Tabs,
		'Tabs.Panel': Tabs.Panel,
	} as Record<string, React.ComponentType<unknown>>,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		size: {
			control: 'select',
		},
		variant: {
			control: 'select',
		},
		orientation: {
			control: 'select',
		},
		width: {
			control: 'select',
		},
		iconPosition: {
			control: 'select',
		},
		children: {
			control: false,
		},
	},
};

export default meta;

type Story = StoryFn<typeof Tabs.Group>;

const Template: Story = ( args ) => {
	const [ activeTab, setActiveTab ] = useState( args?.activeItem ?? 'tab1' );

	const handleTabChange: TabsGroupProps['onChange'] = ( { event, value } ) => {
		const activeSlugName = value.slug;
		if ( activeSlugName ) {
			setActiveTab( activeSlugName );
			if ( typeof args.onChange === 'function' ) {
				args.onChange( { event, value } );
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

export const TabsWithPanel: Story = ( args ) => {
	const [ activeTab, setActiveTab ] = useState( 'tab1' );

	const handleTabChange: TabsGroupProps['onChange'] = ( { value } ) => {
		const selectedTab = value.slug;
		if ( selectedTab ) {
			setActiveTab( selectedTab );
		}
	};

	return (
		<Tabs { ...args } activeItem={ activeTab }>
			<Tabs.Group onChange={ handleTabChange }>
				<Tabs.Tab slug="tab1" text="Tab 1" icon={ <House /> } />
				<Tabs.Tab slug="tab2" text="Tab 2" icon={ <House /> } />
				<Tabs.Tab slug="tab3" text="Tab 3" icon={ <House /> } />
			</Tabs.Group>
			<div className="my-5 p-5 rounded-md bg-slate-100 shadow-md">
				<Tabs.Panel slug="tab1">
					<p>Tab 1 content</p>
				</Tabs.Panel>
				<Tabs.Panel slug="tab2">
					<p>Tab 2 content</p>
				</Tabs.Panel>
				<Tabs.Panel slug="tab3">
					<p>Tab 3 content</p>
				</Tabs.Panel>
			</div>
		</Tabs>
	);
};
