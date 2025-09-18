import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
    resolve: {
        alias: {
            '@shared': '/resources/js/shared',
            '@pages': '/resources/js/pages',
        },
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue(),
        tailwindcss(),
        AutoImport({
            imports: ["vue"],
            dts: "resources/js/config/auto-imports.d.ts",
        }),
    ],
});
