import React from 'react';
import type { Preview } from '@storybook/react';

/** @type { import('@storybook/react').Preview } */
import '../dist/style.css';
const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		a11y: {
			config: {
				rules: [
					{
						id: 'color-contrast',
						enabled: false,
					},
				],
			}
		}
	},
	decorators: [
		(Story) => (
			<div style={{ fontFamily: 'Figtree, sans-serif' }}>
				<Story />
			</div>
		),
	],
};

export default preview;
