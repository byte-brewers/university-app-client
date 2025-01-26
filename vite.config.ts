import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    vue(),
    vueDevTools(),
    createHtmlPlugin(),
    {
      name: 'single-page-app',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url?.startsWith('/university-app-client/')) {
            res.statusCode = 200;
            req.url = '/index.html';
          }
          next();
        });
      },
    },
  ],
  base: '/university-app-client/',
});
