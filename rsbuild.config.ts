import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
    plugins: [pluginReact()],
    html: {
        template: './index.html',
    },
    resolve: {
        alias: {
            '@': './src',
        },
    },
    performance: {
        chunkSplit: {
            strategy: 'split-by-module',
        },
    },
});
