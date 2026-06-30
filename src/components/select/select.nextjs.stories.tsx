import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Select, SelectButton, SelectOptions, SelectOption } from '@/components';

// Powers the "Next.js Usage" docs <Canvas>. Hidden from the sidebar
// (`!dev`) and excluded from autodocs — it only demonstrates the named
// (App-Router) import pattern in an isolated preview with copyable code.
const meta: Meta = {
	title: 'Atoms/Select/Next.js Example',
	component: Select,
	tags: [ '!dev', '!autodocs' ],
	parameters: { layout: 'padded' },
};

export default meta;

export const ServerComponentPattern: StoryObj = {
	name: 'Named exports (App Router)',
	render: () => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [ value, setValue ] = useState< string | undefined >();
		return (
			<Select value={ value } onChange={ ( v ) => setValue( v as string ) }>
				<SelectButton placeholder="Pick a color" />
				<SelectOptions>
					<SelectOption value="red">Red</SelectOption>
					<SelectOption value="green">Green</SelectOption>
				</SelectOptions>
			</Select>
		);
	},
};
