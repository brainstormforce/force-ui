import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components';

// Powers the "Next.js Usage" docs <Canvas>. Hidden from the sidebar
// (`!dev`) and excluded from autodocs — it only demonstrates the named
// (App-Router) import pattern in an isolated preview with copyable code.
const meta: Meta = {
	title: 'Molecules/Accordion/Next.js Example',
	component: Accordion,
	tags: [ '!dev', '!autodocs' ],
	parameters: { layout: 'padded' },
};

export default meta;

export const ServerComponentPattern: StoryObj = {
	name: 'Named exports (App Router)',
	render: () => {
		return (
			<Accordion>
				<AccordionItem value="a">
					<AccordionTrigger>What is force-ui?</AccordionTrigger>
					<AccordionContent>A React + Tailwind component library.</AccordionContent>
				</AccordionItem>
			</Accordion>
		);
	},
};
