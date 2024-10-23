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
			fileName: '[name]',
			formats: ['es', 'cjs'],
		},
		outDir: 'dist',
		rollupOptions: {
			// make sure to externalize deps that shouldn't be bundled
			// into your library
			external: ['react', 'react-dom', 'react/jsx-runtime'],
		},
	},
	resolve: {
		alias: {
			'@/components': resolve(process.cwd(), 'src/components'),
			'@/utilities': resolve(process.cwd(), 'src/utilities'),
			'@/globals': resolve(process.cwd(), 'src/globals'),
			'@': resolve(process.cwd(), 'src'),
		},
	},
	plugins: [
		react(),
		dts({ rollupTypes: true, tsconfigPath: './tsconfig.app.json' }),
	],
});
