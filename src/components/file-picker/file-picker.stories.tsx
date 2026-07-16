import type { Meta, StoryObj } from '@storybook/react-vite';
import FilePicker from './file-picker';

// FilePicker component story configuration
const meta: Meta = {
	title: 'Atoms/FilePicker',
	component: FilePicker,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		size: {
			control: 'select',
			options: [ 'sm', 'md', 'lg' ],
		},
	},
	decorators: [
		( Story ) => (
			<div style={ { width: '320px' } }>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof FilePicker>;

export default meta;

type Story = StoryObj<typeof FilePicker>;

export const Default: Story = {
	args: {
		size: 'md',
		label: 'Upload document',
		disabled: false,
		error: false,
		clearable: false,
	},
};

export const PrefilledValue: Story = {
	args: {
		...Default.args,
		value: 'annual-report-2025.pdf',
	},
};

export const ControlledFile: Story = {
	args: {
		...Default.args,
		value: new File( [ 'force-ui' ], 'design-tokens.json', {
			type: 'application/json',
		} ),
	},
};

export const Multiple: Story = {
	args: {
		...Default.args,
		multiple: true,
		value: [
			new File( [ 'a' ], 'logo-light.svg', { type: 'image/svg+xml' } ),
			new File( [ 'b' ], 'logo-dark.svg', { type: 'image/svg+xml' } ),
		],
	},
};

export const Clearable: Story = {
	args: {
		...Default.args,
		clearable: true,
		value: 'brand-guidelines.pdf',
	},
};

export const Disabled: Story = {
	args: {
		...Default.args,
		disabled: true,
	},
};

export const Error: Story = {
	args: {
		...Default.args,
		error: true,
	},
};

export const SizeSm: Story = {
	args: {
		...Default.args,
		size: 'sm',
	},
};

export const SizeMd: Story = {
	args: {
		...Default.args,
		size: 'md',
	},
};

export const SizeLg: Story = {
	args: {
		...Default.args,
		size: 'lg',
	},
};
