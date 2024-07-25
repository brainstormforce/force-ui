import { defineConfig } from 'vite';
import { resolve } from 'path';
import { peerDependencies } from './package.json';
import { name } from './package.json';

const app = async () => {
    const formattedName = name.match( /[^/]+$/ )?.[ 0 ] ?? name;

    return defineConfig( {
        plugins: [],
        build: {
            lib: {
                entry: resolve( __dirname, 'src/index.js' ),
                name: formattedName,
                formats: [ 'es', 'umd' ],
                fileName: ( format ) => `${ formattedName }.${ format }.js`,
            },
            rollupOptions: {
                external: [ ...Object.keys( peerDependencies ) ],
                output: {
                    manualChunks: undefined,
                    globals: {
                        react: 'React',
                        'react/jsx-runtime': 'react/jsx-runtime',
                        'react-dom': 'ReactDOM',
                        tailwindcss: 'tailwindcss',
                    },
                },
            },
            target: 'esnext',
            sourcemap: true,
        },
    } );
};
// https://vitejs.dev/config/
export default app;
