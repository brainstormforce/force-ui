import preserveDirectives from 'rollup-preserve-directives';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

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
			formats: ['es', 'cjs'],
		},
		outDir: 'dist',
		rollupOptions: {
			external: ['react', 'react-dom', 'react/jsx-runtime'],
			output: [
				{
					format: 'es',
					preserveModules: true,
					preserveModulesRoot: 'src',
					entryFileNames: '[name].es.js',
					chunkFileNames: '[name]-[hash].es.js',
					manualChunks: undefined,
				},
				{
					format: 'cjs',
					preserveModules: true,
					preserveModulesRoot: 'src',
					entryFileNames: '[name].cjs.js',
					chunkFileNames: '[name]-[hash].cjs.js',
					manualChunks: undefined,
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
		}),
		preserveDirectives(),
	],
	esbuild: {
		treeShaking: true,
		legalComments: 'none',
	},
});
