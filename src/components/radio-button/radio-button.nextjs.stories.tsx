import type { Meta, StoryObj } from '@storybook/react-vite';
import { RadioButton, RadioButtonGroup } from '@/components';

// Powers the "Next.js Usage" docs <Canvas>. Hidden from the sidebar
// (`!dev`) and excluded from autodocs — it only demonstrates the named
// (App-Router) import pattern in an isolated preview with copyable code.
const meta: Meta = {
	title: 'Atoms/RadioButton/Next.js Example',
	component: RadioButton,
	tags: [ '!dev', '!autodocs' ],
	parameters: { layout: 'centered' },
};

export default meta;

export const ServerComponentPattern: StoryObj = {
	name: 'Named exports (App Router)',
	render: () => {
		return (
			<RadioButtonGroup defaultValue="a" columns={ 2 }>
				<RadioButton value="a" label={ { heading: 'Option A' } } />
				<RadioButton value="b" label={ { heading: 'Option B' } } />
			</RadioButtonGroup>
		);
	},
};
