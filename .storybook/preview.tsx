import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/tailwind.css';
/** @type { import('@storybook/react').Preview } */

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		// Disable color contrast checks for the entire storybook.
		a11y: {
			config: {
				rules: [{ id: 'color-contrast', enabled: false }],
			},
		},
	},
	decorators: [
		(Story) => (
			<div className="[&_*]:[font-family:Figtree,sans-serif] [&_*]:box-border">
				<Story />
			</div>
		),
	],
};

export default preview;
