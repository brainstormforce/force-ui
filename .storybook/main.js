import path from 'path';

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-webpack5-compiler-swc',
		'@storybook/addon-onboarding',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
	],
	swc: () => ({
		jsc: {
			transform: {
				react: {
					runtime: 'automatic',
				},
			},
		},
	}),
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	core: {
		builder: 'webpack5',
	},
	webpackFinal: async (config) => {
		config.resolve.alias = {
			'@/icons': path.resolve(__dirname, '..', 'src/ui/icons'),
			'@/components': path.resolve(__dirname, '..', 'src/components'),
			'@/utilities': path.resolve(__dirname, '..', 'src/utilities'),
			'@': path.resolve(__dirname, '..', 'src'),
			'@/components': path.resolve(__dirname, '..', 'src/components'),
			'@/utilities': path.resolve(__dirname, '..', 'src/utilities'),
		};

		return config;
	},
};
export default config;
