import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'

module.exports = {
    plugins: [
        vue(),
    ],
    root: resolve('./assets'),
    base: '/static/',
    server: {
        hmr: {
            host: 'localhost',
        },
        watch: {
            usePolling: true,
            disableGlobbing: false,
        },
    },
    resolve: {
        extensions: ['.js', '.vue'],
    },
    build: {
        target: 'es2015',
        assetsDir: '',
        outDir: resolve('./assets/dist'),
        manifest: "manifest.json",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve('./assets/js/app.js'),
                styles: resolve('./assets/css/index.css'),
            },
        },
    },
};
