import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: 'https://sucklessdb.app',

    vite: {
        plugins: [tailwindcss()]
    }
});
