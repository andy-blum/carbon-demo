// vite.config.js
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [],
  build: {
    rollupOptions: {
      input: {
        index: fileURLToPath(new URL('./index.html', import.meta.url)),
        cinemagraph: fileURLToPath(new URL('./cinemagraph.html', import.meta.url)),
        leadspace: fileURLToPath(new URL('./colorized-leadspace.html', import.meta.url)),
        statistics: fileURLToPath(new URL('./statistics.html', import.meta.url)),
        pictograms: fileURLToPath(new URL('./pictograms.html', import.meta.url)),
        tabs: fileURLToPath(new URL('./tabs.html', import.meta.url)),
        tabs: fileURLToPath(new URL('./tabs-2.html', import.meta.url))
      },
    },
  },
})
