// postcss.config.ts
import type { Config } from 'postcss-load-config';

const config: Config = {
    plugins: {
        // CRITICAL FIX: Must be 'tailwindcss' for v4, NOT '@tailwindcss/postcss'
        tailwindcss: {},
        autoprefixer: {},
    },
};

export default config;