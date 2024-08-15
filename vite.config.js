// vite.config.js
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import find from 'find';

export default defineConfig({
  plugins: [],
  build: {
    rollupOptions: {
      input: htmlFiles,
    },
  },
})
