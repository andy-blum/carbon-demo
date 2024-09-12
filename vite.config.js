// vite.config.js
import { defineConfig } from 'vite'
import find from 'find';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

const htmlFiles = find.fileSync('./')
  .filter(file => (
    file.endsWith('.html') &&
    !file.startsWith('node_modules/') &&
    !file.startsWith('dist/')
  ))


export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'components'),
    }),
  ],
  build: {
    rollupOptions: {
      input: htmlFiles,
    },
  },
})
