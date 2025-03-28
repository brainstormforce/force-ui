import preserveDirectives from 'rollup-preserve-directives';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: {
				'force-ui': resolve(process.cwd(), 'src/index.ts'),
				withTW: resolve(process.cwd(), 'src/utilities/withTW.js'),
			},
			name: '[name]',
			fileName: (format, entryName) => `${entryName}.${format}.js`,
		},
		outDir: 'dist',
		rollupOptions: {
			external: [
				'react', 
				'react-dom', 
				'react/jsx-runtime',
				...Object.keys(pkg.dependencies),
				...Object.keys(pkg.peerDependencies),
				...Object.keys(pkg.devDependencies),
				/^@lexical\//,
			],
			output: [
				{
					format: 'es',
					preserveModules: true,
					preserveModulesRoot: 'src',
					entryFileNames: '[name].es.js',
					chunkFileNames: '[name]-[hash].es.js',
					exports: 'named',
				},
				{
					format: 'cjs',
					preserveModules: true,
					preserveModulesRoot: 'src',
					entryFileNames: '[name].cjs.js',
					chunkFileNames: '[name]-[hash].cjs.js',
					exports: 'named',
				}
			],
			treeshake: {
				moduleSideEffects: false,
				propertyReadSideEffects: false,
				tryCatchDeoptimization: false
			},
		},
		minify: 'esbuild',
		sourcemap: true,
		emptyOutDir: true,
		target: 'esnext',
		cssCodeSplit: true,
		reportCompressedSize: true,
		chunkSizeWarningLimit: 100,
	},
	resolve: {
		alias: {
			'@/icons': resolve(process.cwd(), 'src/ui/icons.jsx'),
			'@/components': resolve(process.cwd(), 'src/components'),
			'@/utilities': resolve(process.cwd(), 'src/utilities'),
			'@/globals': resolve(process.cwd(), 'src/globals'),
			'@': resolve(process.cwd(), 'src'),
		},
	},
	plugins: [
		react(),
		dts({ 
			rollupTypes: true,
			tsconfigPath: './tsconfig.app.json',
			insertTypesEntry: true,
			exclude: ['**/node_modules/**', '**/_virtual/**'],
		}),
		preserveDirectives(),
	],
	esbuild: {
		treeShaking: true,
		legalComments: 'none',
	},
});
