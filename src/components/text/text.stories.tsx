import { Meta, StoryFn } from '@storybook/react';
import Text from './text';

export default {
	title: 'Atoms/Text',
	component: Text,
	tags: [ 'autodocs' ],
} satisfies Meta<typeof Text>;

type Story = StoryFn<typeof Text>;

const Template: Story = ( args ) => <Text as="div" { ...args } />;

export const Default: Story = Template.bind( {} );
Default.args = {
	children: 'The quick brown fox jumps over the lazy dog',
};
