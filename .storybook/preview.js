/** @type { import('@storybook/react').Preview } */
import '../dist/force-ui.css';
const preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
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
