import { Meta, StoryFn } from '@storybook/react';
import Accordion from './accordion';
import { Settings } from 'lucide-react';
import Badge from '../badge';

export default {
	title: 'Molecules/Accordion',
	component: Accordion,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	subcomponents: {
		Item: Accordion.Item,
		Trigger: Accordion.Trigger,
		Content: Accordion.Content,
	},
	decorators: [
		( Story ) => (
			<div className="w-[450px]">
				<Story />
			</div>
		),
	],
	argTypes: {
		type: {
			control: { type: 'select' },
		},
		iconType: {
			control: { type: 'select' },
		},
	},
} as Meta;

const Template: StoryFn = ( args ) => (
	<Accordion { ...args } className={ args.className }>
		<Accordion.Item value="item1">
			<Accordion.Trigger iconType={ args.iconType }>
				Accordion Item
			</Accordion.Trigger>
			<Accordion.Content>
				Yes, Force UI is an open-source project, copyright 2022.
			</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item value="item2" disabled={ args.itemDisabled }>
			<Accordion.Trigger iconType={ args.iconType }>
				Accordion Item
			</Accordion.Trigger>
			<Accordion.Content>
				Yes, Force UI is an open-source project, copyright 2022.
			</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item
			value="item3"
			disabled={ args.disabled }
			className={ args.accordionItemclassName }
		>
			<Accordion.Trigger iconType={ args.iconType }>
				Accordion Item
			</Accordion.Trigger>
			<Accordion.Content>
				Yes, Force UI is an open-source project, copyright 2022.
			</Accordion.Content>
		</Accordion.Item>
	</Accordion>
);

export const BasicAccordion = Template.bind( {} );
BasicAccordion.args = {
	autoClose: false,
	type: 'simple',
	iconType: 'arrow',
	defaultValue: 'item1',
	disabled: false,
	className: '',
};

const TemplateWithIcons: StoryFn = ( args ) => (
	<Accordion { ...args } className={ args.className }>
		<Accordion.Item value="item1">
			<Accordion.Trigger iconType={ args.iconType }>
				<Settings className="flex-shrink-0 size-5 text-icon-secondary" />
				Accordion Item
				<Badge label="Badge" size="xs" variant="neutral" />
			</Accordion.Trigger>
			<Accordion.Content>
				Yes, Force UI is an open-source project, copyright 2022.
			</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item value="item2" disabled={ args.itemDisabled }>
			<Accordion.Trigger iconType={ args.iconType }>
				<Settings className="flex-shrink-0 size-5 text-icon-secondary" />
				Accordion Item
				<Badge label="Badge" size="xs" variant="neutral" />
			</Accordion.Trigger>
			<Accordion.Content>
				Yes, Force UI is an open-source project, copyright 2022.
			</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item
			value="item3"
			disabled={ args.disabled }
			className={ args.accordionItemclassName }
		>
			<Accordion.Trigger iconType={ args.iconType }>
				<Settings className="flex-shrink-0 size-5 text-icon-secondary" />
				Accordion Item
				<Badge label="Badge" size="xs" variant="neutral" />
			</Accordion.Trigger>
			<Accordion.Content>
				Yes, Force UI is an open-source project, copyright 2022.
			</Accordion.Content>
		</Accordion.Item>
	</Accordion>
);

export const SimpleAccordion = TemplateWithIcons.bind( {} );
SimpleAccordion.args = {
	autoClose: false,
	type: 'simple',
	iconType: 'arrow',
	defaultValue: 'item1',
	disabled: false,
	className: '',
};

export const BoxedAccordion = TemplateWithIcons.bind( {} );
BoxedAccordion.args = {
	autoClose: true,
	type: 'boxed',
	iconType: 'plus-minus',
	defaultValue: 'item2',
	disabled: false,
	className: '',
};

export const SeparatorAccordion = TemplateWithIcons.bind( {} );
SeparatorAccordion.args = {
	autoClose: true,
	type: 'separator',
	iconType: 'arrow',
	defaultValue: 'item3',
	disabled: false,
	className: '',
};
