// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/react-vite';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)', '../src/**/*.mdx'],
	addons: [
		'@storybook/addon-onboarding',
		'@storybook/addon-links',
		'@chromatic-com/storybook',
		'@storybook/addon-a11y',
		'@storybook/addon-docs',
		'@storybook/addon-mcp',
		'@storybook/addon-vitest',
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

		// Remove library-build-only plugins that must not run in the Storybook
		// preview build: vite:dts (type emit) and preserve-directives (which
		// interferes with MDX's mdx-react-shim import resolution).
		// Remove library-build-only plugins that must not run in the Storybook
		// preview build: vite:dts (type emit) and preserve-directives (which
		// interferes with MDX's mdx-react-shim import resolution).
		const libOnlyPlugins = [ 'vite:dts', 'preserve-directives' ];
		config.plugins = [
			...(config.plugins ?? []).filter((plugin) => {
				const name = (plugin as typeof plugin & Record<string, unknown>)
					.name as string | undefined;
				return ! name || ! libOnlyPlugins.includes(name);
			}),
		];

		// The library build config (lib mode + externalized devDependencies +
		// preserveModules output) must not leak into the Storybook preview
		// build. In particular, externalizing @storybook/addon-docs breaks the
		// MDX `mdx-react-shim` import. Storybook bundles its own deps, so reset
		// these to its defaults.
		if (config.build) {
			delete config.build.lib;
			config.build.rollupOptions = {};
		}

		// Workaround: @storybook/addon-docs emits the MDX runtime shim import as
		// a malformed `file://./node_modules/...mdx-react-shim.js` specifier,
		// which Rollup cannot resolve during `build-storybook`. Normalize any
		// file:// id back to an absolute filesystem path so it resolves.
		config.plugins = [
			{
				name: 'force-ui-normalize-file-url-imports',
				enforce: 'pre' as const,
				resolveId(source: string) {
					if (source.startsWith('file://')) {
						return path.resolve(
							process.cwd(),
							source.slice('file://'.length)
						);
					}
					return null;
				},
			},
			...(config.plugins ?? []),
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
