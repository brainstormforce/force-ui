// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/react-vite';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
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

		// Remove the dts plugin from the default config.
		config.plugins = [
			...(config.plugins ?? []).filter((plugin) => {
				return (
					(plugin as typeof plugin & Record<string, unknown>).name !==
					'vite:dts'
				);
			}),
		];

		// The default babel-based react-docgen (kept for all other files)
		// cannot read prop descriptions from composed types (Omit,
		// intersections, cross-file extends). For the components below, whose
		// props are derived instead of manually flattened, layer
		// react-docgen-typescript on top — it runs after the default docgen,
		// so its (type-checker-accurate) output wins for the included files.
		// Do NOT widen the include list without checking the docs pages:
		// react-docgen-typescript fails to detect many of the other
		// components (compound/Object.assign exports, generics) and would
		// wipe their props tables entirely.
		const reactDocgenTypescript = (
			await import('@joshwooding/vite-plugin-react-docgen-typescript')
		).default;
		config.plugins.push(
			reactDocgenTypescript({
				include: [
					'**/src/components/input/input.tsx',
					'**/src/components/file-picker/file-picker.tsx',
				],
				// The root tsconfig.json is references-only ("files": []),
				// which gives the docgen parser an empty program — point it
				// at the app project instead.
				tsconfigPath: path.resolve(__dirname, '..', 'tsconfig.app.json'),
				savePropValueAsString: true,
				shouldExtractLiteralValuesFromEnum: true,
				// Parses JSDoc tags (@since etc.) into a tag map instead of
				// leaking them into the prop descriptions.
				shouldIncludePropTagMap: true,
				// Without this, optional props type as `string | undefined`
				// and Storybook falls back to JSON controls instead of
				// text/select.
				shouldRemoveUndefinedFromOptional: true,
				// Keep inherited DOM props (React.InputHTMLAttributes etc.)
				// out of the docs tables.
				propFilter: (prop) =>
					prop.parent
						? !/node_modules/.test(prop.parent.fileName)
						: true,
			})
		);

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
