import type { Meta, StoryObj } from '@storybook/react-vite';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContentWrapper, DropdownMenuContent, DropdownMenuList, DropdownMenuItem, DropdownMenuSeparator, Button } from '@/components';

// Powers the "Next.js Usage" docs <Canvas>. Hidden from the sidebar
// (`!dev`) and excluded from autodocs — it only demonstrates the named
// (App-Router) import pattern in an isolated preview with copyable code.
const meta: Meta = {
	title: 'Molecules/DropdownMenu/Next.js Example',
	component: DropdownMenu,
	tags: [ '!dev', '!autodocs' ],
	parameters: { layout: 'centered' },
};

export default meta;

export const ServerComponentPattern: StoryObj = {
	name: 'Named exports (App Router)',
	render: () => {
		return (
			<div className="flex justify-center">
				<DropdownMenu>
					<DropdownMenuTrigger>
						<Button>Open menu</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContentWrapper>
						<DropdownMenuContent className="w-60">
							<DropdownMenuList>
								<DropdownMenuItem>Item 1</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>Item 2</DropdownMenuItem>
							</DropdownMenuList>
						</DropdownMenuContent>
					</DropdownMenuContentWrapper>
				</DropdownMenu>
			</div>
		);
	},
};
