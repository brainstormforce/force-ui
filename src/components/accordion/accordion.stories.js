import Accordion from './accordion.jsx';
import { Settings } from 'lucide-react';
import Badge from '../badge/index.js';

export default {
	title: 'Molecules/Accordion',
	component: Accordion,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	decorators: [
		( Story ) => (
			<div className="w-[450px]">
				<Story />
			</div>
		),
	],
	argTypes: {
		type: {
			description: 'Defines the visual style of the accordion.',
			control: { type: 'select' },
			options: [ 'simple', 'boxed', 'separator' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'simple' },
			},
		},
		iconType: {
			description:
				'Defines the type of icon to display on the trigger button.',
			control: { type: 'select' },
			options: [ 'arrow', 'plus-minus' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'arrow' },
			},
		},
		autoClose: {
			description:
				'Controls whether only one accordion item can be open at a time.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		disabled: {
			description: 'Disables all accordion items when set to true.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		itemDisabled: {
			name: 'disabled',
			description:
				'Disables the specific accordion item when set to `true`. (This will apply to "2nd" accordion item only for demo)',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		defaultValue: {
			description:
				'Sets the initial active accordion item. The value should match the value prop of an Accordion.Item.',
			control: 'text',
		},
		className: {
			description:
				'Optional class to apply custom styles to the accordion wrapper.',
			control: 'text',
			table: {
				type: { summary: 'string' },
			},
		},
		accordionItemclassName: {
			name: 'Accordion.Item: className',
			description:
				'Optional class to apply custom styles to the accordion item. (This will apply to "3rd" accordion item only for demo)',
			control: 'text',
			table: {
				type: { summary: 'string' },
			},
		},
	},
};

const Template = ( args ) => (
	<Accordion { ...args } className={ args.className }>
		<Accordion.Item value="item1">
			<Accordion.Trigger iconType={ args.iconType }>
				Accordion Item
			</Accordion.Trigger>
			<Accordion.Content>
				Yes, Force Ui is an open-source project and is copyright 2022 Htmlstream.
			</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item value="item2" disabled={ args.itemDisabled }>
			<Accordion.Trigger iconType={ args.iconType }>
				Accordion Item
			</Accordion.Trigger>
			<Accordion.Content>
				Yes, Force Ui is an open-source project and is copyright 2022 Htmlstream.
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
				Yes, Force Ui is an open-source project and is copyright 2022 Htmlstream.
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

BasicAccordion.storyName = 'Basic Accordion';

const TemplateWithIcons = ( args ) => (
	<Accordion { ...args } className={ args.className }>
		<Accordion.Item value="item1">
			<Accordion.Trigger iconType={ args.iconType }>
				<Settings className="flex-shrink-0" />
				Accordion Item
				<Badge label={ 'Badge' } size="xs" variant="neutral" />
			</Accordion.Trigger>
			<Accordion.Content>
				Yes, Force Ui is an open-source project and is copyright 2022 Htmlstream.
			</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item value="item2" disabled={ args.itemDisabled }>
			<Accordion.Trigger iconType={ args.iconType }>
				<Settings />
				Accordion Item
				<Badge label={ 'Badge' } size="xs" variant="neutral" />
			</Accordion.Trigger>
			<Accordion.Content>
				Yes, Force Ui is an open-source project and is copyright 2022 Htmlstream.
			</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item
			value="item3"
			disabled={ args.disabled }
			className={ args.accordionItemclassName }
		>
			<Accordion.Trigger iconType={ args.iconType }>
				<Settings />
				Accordion Item
				<Badge label={ 'Badge' } size="xs" variant="neutral" />
			</Accordion.Trigger>
			<Accordion.Content>
				Yes, Force Ui is an open-source project and is copyright 2022 Htmlstream.
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

SimpleAccordion.storyName = 'Simple Accordion with Arrow Icon';

export const BoxedAccordion = TemplateWithIcons.bind( {} );
BoxedAccordion.args = {
	autoClose: true,
	type: 'boxed',
	iconType: 'plus-minus',
	defaultValue: 'item2',
	disabled: false,
	className: '',
};

BoxedAccordion.storyName = 'Boxed Accordion with Plus Icon';

export const SeparatorAccordion = TemplateWithIcons.bind( {} );
SeparatorAccordion.args = {
	autoClose: true,
	type: 'separator',
	iconType: 'arrow',
	defaultValue: 'item3',
	disabled: false,
	className: '',
};

SeparatorAccordion.storyName = 'Separator Accordion with Arrow Icon';
