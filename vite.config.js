import path, { resolve } from 'path'

import { defineConfig } from "vite"

import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    root: resolve('./assets'),
    base: '/static/',
    css: {
        postcss: {
            plugins: [tailwind(), autoprefixer()],
        },
    },
    plugins: [
        vue(),
    ],
    resolve: {
        extensions: ['.js', '.ts', '.vue'],
        alias: {
            '@': path.resolve(__dirname, './assets/js'),
        }
    },
    server: {
        hmr: {
            host: 'localhost',
        },
        watch: {
            usePolling: true,
            disableGlobbing: false,
        },
    },
    build: {
        target: 'es2015',
        assetsDir: '',
        outDir: resolve('./assets/dist'),
        manifest: "manifest.json",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve('./assets/js/app.ts'),
            },
        },
    },
});
