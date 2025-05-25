import EditorInput from './editor-input';
import type { Meta, StoryFn } from '@storybook/react';

const meta: Meta<typeof EditorInput> = {
	title: 'Atoms/EditorInput',
	component: EditorInput,
	tags: [ 'autodocs' ],
	parameters: {
		a11y: {
			config: {
				rules: [ { id: 'aria-input-field-name', enabled: false } ],
			},
		},
	},
	decorators: [
		( Story ) => (
			<div className="[&_*]:box-border box-border max-w-[900px] h-[300px]">
				<Story />
			</div>
		),
	],
	argTypes: {
		size: {
			control: { type: 'select' },
		},
	},
} satisfies Meta<typeof EditorInput>;

export default meta;

type Story = StoryFn<typeof EditorInput>;

const options = [
	'Red',
	'Orange',
	'Yellow',
	'Green',
	'Cyan',
	'Blue',
	'Purple',
	'Pink',
];

const Template: Story = ( args ) => <EditorInput key={ args.size } { ...args } />;

export const Default: Story = Template.bind( {} );
Default.args = {
	size: 'md',
	autoSpaceAfterMention: false,
	autoFocus: false,
	options,
	onChange: ( editorState ) => editorState.toJSON(),
};

export const Small: Story = Template.bind( {} );
Small.args = {
	size: 'sm',
	options,
	onChange: ( editorState ) => editorState.toJSON(),
};

export const Medium: Story = Template.bind( {} );
Medium.args = {
	size: 'md',
	options,
	onChange: ( editorState ) => editorState.toJSON(),
};

export const Large: Story = Template.bind( {} );
Large.args = {
	size: 'lg',
	options,
	onChange: ( editorState ) => editorState.toJSON(),
};
