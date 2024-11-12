import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    },
    optimizeDeps: {
      exclude: ['@astrojs/dev-toolbar']
    }
  },
  server: {
    host: true
  }
});