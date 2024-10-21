import Accordion from "./accordion.jsx";

export default {
	title: 'Molecules/Accordion',
	component: Accordion,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
    decorators: [
		( Story ) => (
			<div style={ { width: '450px'} }>
				<Story />
			</div>
		),
	],
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['simple', 'boxed', 'separator'],
        },
        iconType: {
            control: { type: 'select' },
            options: ['arrow', 'plus-minus'],
        },
        disabled: {
            control: 'boolean',
        },
        defaultValue: {
            control: 'text',
        },
  },
}


const Template = (args) => (
    <Accordion {...args}>
        <Accordion.Item value="item1">
        <Accordion.Trigger iconType={args.iconType}>
            Accordion Item 1
        </Accordion.Trigger>
        <Accordion.Content>
            This is the content of the first accordion item.
        </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item2">
        <Accordion.Trigger iconType={args.iconType}>
            Accordion Item 2
        </Accordion.Trigger>
        <Accordion.Content>
            This is the content of the second accordion item.
        </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item3" disabled={args.disabled}>
        <Accordion.Trigger iconType={args.iconType}>
            Accordion Item 3
        </Accordion.Trigger>
        <Accordion.Content>
            This is the content of the third accordion item, which is disabled. This is the content of the third accordion item, which is disabled accordion item, which is disabled.
        </Accordion.Content>
        </Accordion.Item>
    </Accordion>
);

export const SimpleAccordion = Template.bind({});
SimpleAccordion.args = {
  type: 'simple',
  iconType: 'arrow',
  defaultValue: 'item1',
  disabled: false,
};

export const BoxedAccordion = Template.bind({});
BoxedAccordion.args = {
  type: 'boxed',
  iconType: 'plus-minus',
  defaultValue: 'item2',
  disabled: false,
};

export const SeparatorAccordion = Template.bind({});
SeparatorAccordion.args = {
  type: 'separator',
  iconType: 'arrow',
  defaultValue: 'item3',
  disabled: true,
};