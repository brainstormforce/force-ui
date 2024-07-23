import { defineConfig } from "vite";
import { resolve } from "path";
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";
import { peerDependencies } from "./package.json";
import { name } from "./package.json";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";


const app = async () => {    
    /**
     * Removes everything before the last
     * @octocat/library-repo -> library-repo
     * vite-component-library-template -> vite-component-library-template
     */
    const formattedName = name.match(/[^/]+$/)?.[0] ?? name;

    return defineConfig({
        plugins: [
            // react(),
            // cssInjectedByJsPlugin(),
        ],
        // css: {
        //     postcss: {
        //         plugins: [tailwindcss],
        //     },
        // },
        build: {
            lib: {
                entry: resolve(__dirname, 'src/index.js'),
                name: formattedName,
                formats: ["es", "umd"],
                fileName: (format) => `${formattedName}.${format}.js`,
            },
            rollupOptions: {
                external: [...Object.keys(peerDependencies)],
                output: {
                    manualChunks: undefined,
                    globals: {
                        react: "React",
                        "react/jsx-runtime": "react/jsx-runtime",
                        "react-dom": "ReactDOM",
                        tailwindcss: "tailwindcss",
                    },
                },
            },
            target: "esnext",
            sourcemap: true,
        },
    });
};
// https://vitejs.dev/config/
export default app;
