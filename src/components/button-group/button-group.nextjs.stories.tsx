import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { ButtonGroupContainer, ButtonGroupButton } from '@/components';

// Powers the "Next.js Usage" docs <Canvas>. Hidden from the sidebar (`!dev`)
// and excluded from autodocs — it only demonstrates the named (App-Router)
// import pattern in an isolated preview.
const meta: Meta = {
	title: 'Atoms/ButtonGroup/Next.js Example',
	component: ButtonGroupContainer,
	tags: [ '!dev', '!autodocs' ],
	parameters: { layout: 'centered' },
};

export default meta;

export const ServerComponentPattern: StoryObj = {
	name: 'Named exports (App Router)',
	render: () => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [ active, setActive ] = useState( 'list' );
		return (
			<ButtonGroupContainer
				activeItem={ active }
				onChange={ ( { value } ) => setActive( value.slug ) }
			>
				<ButtonGroupButton slug="list" text="List" />
				<ButtonGroupButton slug="grid" text="Grid" />
			</ButtonGroupContainer>
		);
	},
};
