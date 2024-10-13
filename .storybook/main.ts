import type { StorybookConfig } from "@storybook/react-vite";
import path from 'path';

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-webpack5-compiler-swc',
		'@storybook/addon-onboarding',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
	],
	framework: {
		name: "@storybook/react-vite",
		options: {
			builder: {
				viteConfigPath: path.resolve(__dirname, "..", "vite.config.ts"),
			}
		},
	},
	core: {
		builder: "@storybook/builder-vite",
	},
	viteFinal: async (config) => {
		// Merge custom configuration into the default config
		const { mergeConfig } = await import("vite");

		return mergeConfig(config, {
			optimizeDeps: {
				include: ["storybook-dark-mode", "storybook-addon-interactions"],
			},
			resolve: {
				...config.resolve,
				alias: {
					...config.resolve?.alias,
					// 👇 Internal modules
					// "@/components": path.resolve(process.cwd(), "src/components"),
					// "@/utilities": path.resolve(process.cwd(), "src/utlities"),
					// "@": path.resolve(process.cwd(), "src"),
				},
			},
		});
	},
};
export default config;
