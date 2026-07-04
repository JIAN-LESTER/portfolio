import inertia from '@inertiajs/vite';
import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { execSync } from 'node:child_process';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

const canRunPhp = () => {
    try {
        execSync('php -v', { stdio: 'ignore' });
        return true;
    } catch {
        return false;
    }
};

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.ts'],
            refresh: true,
        }),
        inertia(),
        tailwindcss(),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        ...(canRunPhp()
            ? [
                  wayfinder({
                      formVariants: true,
                  }),
              ]
            : []),
    ],
});
