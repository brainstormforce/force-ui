import EditorInput from './editor-input';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EditorInput> = {
	title: 'Atoms/EditorInput',
	component: EditorInput,
	tags: [ 'autodocs' ],
	decorators: [
		( Story ) => (
			<div
				className="[&_*]:box-border box-border"
				style={ { maxWidth: '900px', height: '200px' } }
			>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof EditorInput>;

export default meta;

type Story = StoryObj<typeof EditorInput>;

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

export const Default: Story = {
	args: {
		size: 'md',
		autoSpaceAfterMention: false,
		autoFocus: false,
		options,
		onChange: ( editorState ) => editorState.toJSON(),
	},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Small: Story = {
	args: {
		size: 'sm',
		options,
		onChange: ( editorState ) => editorState.toJSON(),
	},
};

export const Medium: Story = {
	args: {
		size: 'md',
		options,
		onChange: ( editorState ) => editorState.toJSON(),
	},
};

export const Large: Story = {
	args: {
		size: 'lg',
		options,
		onChange: ( editorState ) => editorState.toJSON(),
	},
};
