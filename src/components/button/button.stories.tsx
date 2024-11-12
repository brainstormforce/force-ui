import { Meta, StoryObj } from '@storybook/react';
import Button from './button';
import { Plus } from 'lucide-react';
import { expect, userEvent, within } from '@storybook/test';
import { PlayFunc } from '@/utilities/ts-helper';

// Button component story configuration
const meta: Meta = {
	title: 'Atoms/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		variant: {
			control: 'select',
		},
		size: {
			control: 'select',
		},
		type: {
			control: 'select',
		},
		iconPosition: {
			control: 'select',
		},
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;
type PlayFunction = PlayFunc<Story>;

const buttonTest: PlayFunction = async ( { canvasElement } ) => {
	const canvas = within( canvasElement );
	// Find the button element
	const button = await canvas.findByRole( 'button' );
	// Check if the button contains the text 'Button'
	await expect( button ).toHaveTextContent( 'Button' );
	// Check if svg tag is present.
	await expect( button ).toContainElement( canvas.getByRole( 'img' ) );
	await userEvent.click( button );
	// Check if the button is focused
	await expect( button ).toHaveFocus();
};

const disabledButtonTest: PlayFunction = async ( { canvasElement } ) => {
	const canvas = within( canvasElement );
	const button = await canvas.findByRole( 'button' );
	// Check if the button contains the text 'Button'
	await expect( button ).toHaveTextContent( 'Button' );
	// Check if svg tag is present.
	await expect( button ).toContainElement( canvas.getByRole( 'img' ) );
	// Check if the button is disabled and contains the disabled attribute
	await expect( button ).toHaveAttribute( 'disabled' );
	await userEvent.click( button );
	// Check if the button is not focused
	await expect( button ).not.toHaveFocus();
};

export const Default: Story = {
	args: {
		children: 'Button',
		variant: 'primary',
		size: 'md',
		type: 'button',
		tag: 'button',
		className: '',
		disabled: false,
		destructive: false,
		iconPosition: 'left',
		loading: false,
		icon: <Plus role="img" aria-label="icon" />,
	},
	play: buttonTest,
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		variant: 'primary',
		children: 'Button',
		icon: <Plus role="img" aria-label="icon" />,
		iconPosition: 'left',
	},
	play: buttonTest,
};

export const Disabled: Story = {
	args: {
		...Primary.args,
		disabled: true,
	},
	play: disabledButtonTest,
};

export const Secondary: Story = {
	args: {
		...Primary.args,
		variant: 'secondary',
	},
	play: buttonTest,
};

export const Ghost: Story = {
	args: {
		...Primary.args,
		variant: 'ghost',
	},
	play: buttonTest,
};

export const Outline: Story = {
	args: {
		...Primary.args,
		variant: 'outline',
	},
	play: buttonTest,
};

export const Link: Story = {
	args: {
		...Primary.args,
		variant: 'link',
	},
	play: buttonTest,
};
