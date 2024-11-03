import Breadcrumb from './breadcrumb';
import type { Meta, StoryFn } from '@storybook/react';

interface AdditionalArgTypes {
	separatorType: 'arrow' | 'slash';
}
type ComponentProps = typeof Breadcrumb extends ( props: infer P ) => JSX.Element
	? P
	: never;
type StoryWithCustomArg = StoryFn<ComponentProps & AdditionalArgTypes>;

const meta: Meta<typeof Breadcrumb> = {
	title: 'Atoms/Breadcrumb',
	component: Breadcrumb,
	subcomponents: {
		'Breadcrumb.List': Breadcrumb.List,
		'Breadcrumb.Item': Breadcrumb.Item,
		'Breadcrumb.Link': Breadcrumb.Link,
		'Breadcrumb.Separator': Breadcrumb.Separator,
		'Breadcrumb.Ellipsis': Breadcrumb.Ellipsis,
		'Breadcrumb.Page': Breadcrumb.Page,
	} as Record<string, React.ComponentType<unknown>>,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		size: {
			control: { type: 'select' },
		},
		children: {
			// Don't display the children prop control.
			control: false,
		},
	},
} satisfies Meta<typeof Breadcrumb>;

export default meta;

const Template: StoryWithCustomArg = ( { separatorType, ...args } ) => (
	<Breadcrumb size={ args.size }>
		<Breadcrumb.List>
			<Breadcrumb.Item>
				<Breadcrumb.Link href="#">Home</Breadcrumb.Link>
			</Breadcrumb.Item>
			<Breadcrumb.Separator type={ separatorType } />
			<Breadcrumb.Item>
				<Breadcrumb.Ellipsis />
			</Breadcrumb.Item>
			<Breadcrumb.Separator type={ separatorType } />
			<Breadcrumb.Item>
				<Breadcrumb.Link href="#">Category</Breadcrumb.Link>
			</Breadcrumb.Item>
			<Breadcrumb.Separator type={ separatorType } />
			<Breadcrumb.Item>
				<Breadcrumb.Page>Current Page</Breadcrumb.Page>
			</Breadcrumb.Item>
		</Breadcrumb.List>
	</Breadcrumb>
);

export const Default = Template.bind( {} );

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
