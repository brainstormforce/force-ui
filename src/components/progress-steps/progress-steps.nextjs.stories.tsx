import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProgressSteps, ProgressStep } from '@/components';

// Powers the "Next.js Usage" docs <Canvas>. Hidden from the sidebar
// (`!dev`) and excluded from autodocs — it only demonstrates the named
// (App-Router) import pattern in an isolated preview with copyable code.
const meta: Meta = {
	title: 'Atoms/ProgressSteps/Next.js Example',
	component: ProgressSteps,
	tags: [ '!dev', '!autodocs' ],
	parameters: { layout: 'centered' },
};

export default meta;

export const ServerComponentPattern: StoryObj = {
	name: 'Named exports (App Router)',
	render: () => {
		return (
			<div className="w-full max-w-xl">
				<ProgressSteps>
					<ProgressStep size="md">Step 1</ProgressStep>
					<ProgressStep size="md">Step 2</ProgressStep>
				</ProgressSteps>
			</div>
		);
	},
};
