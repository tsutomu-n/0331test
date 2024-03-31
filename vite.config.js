import { VitePWA } from 'vite-plugin-pwa';
import { createHtmlPlugin } from 'vite-plugin-html';
import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
  plugins: [
    createHtmlPlugin({}),
    VitePWA({}),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});