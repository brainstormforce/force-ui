import type { Meta, StoryObj } from '@storybook/react-vite';
import { SearchBox, SearchBoxInput, SearchBoxContent, SearchBoxList, SearchBoxItem } from '@/components';

// Powers the "Next.js Usage" docs <Canvas>. Hidden from the sidebar
// (`!dev`) and excluded from autodocs — it only demonstrates the named
// (App-Router) import pattern in an isolated preview with copyable code.
const meta: Meta = {
	title: 'Molecules/SearchBox/Next.js Example',
	component: SearchBox,
	tags: [ '!dev', '!autodocs' ],
	parameters: { layout: 'centered' },
};

export default meta;

export const ServerComponentPattern: StoryObj = {
	name: 'Named exports (App Router)',
	render: () => {
		return (
			<div className="w-full max-w-md">
				<SearchBox>
					<SearchBoxInput />
					<SearchBoxContent>
						<SearchBoxList>
							<SearchBoxItem>Item</SearchBoxItem>
						</SearchBoxList>
					</SearchBoxContent>
				</SearchBox>
			</div>
		);
	},
};
