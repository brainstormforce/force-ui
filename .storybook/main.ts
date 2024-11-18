import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-onboarding',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {
			builder: {
				viteConfigPath: path.resolve(__dirname, '..', 'vite.config.ts'),
			},
		},
	},
	core: {
		builder: '@storybook/builder-vite',
	},
	viteFinal: async (config) => {
		// Merge custom configuration into the default config
		const { mergeConfig } = await import('vite');

		// Remove the dts plugin from the default config.
		config.plugins = [
			...(config.plugins ?? []).filter((plugin) => {
				return (
					(plugin as typeof plugin & Record<string, unknown>).name !==
					'vite:dts'
				);
			}),
		];

		return mergeConfig(config, {
			optimizeDeps: {
				...config?.optimizeDeps,
			},
			resolve: {
				...config.resolve,
				alias: {
					...config.resolve?.alias,
					// 👇 Internal modules
					'@/icons': path.resolve(
						__dirname,
						'..',
						'src/ui/icons.jsx'
					),
					'@/utilities': path.resolve(
						__dirname,
						'..',
						'src/utilities'
					),
					'@/components': path.resolve(
						__dirname,
						'..',
						'src/components'
					),
					'@': path.resolve(__dirname, '..', 'src'),
				},
			},
		});
	},
};
export default config;
