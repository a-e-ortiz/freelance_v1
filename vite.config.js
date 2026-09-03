import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

const page = (name) => fileURLToPath(new URL(name, import.meta.url))

export default defineConfig({
  plugins: [tailwindcss()],
  base: '/freelance_v1/',
  build: {
    rollupOptions: {
      // Multi-page site: list every top-level HTML page so `vite build`
      // outputs all of them (Vite only builds index.html by default).
      input: {
        index: page('index.html'),
        services: page('services.html'),
        howIWork: page('how-i-work.html'),
        about: page('about.html'),
        contact: page('contact.html'),
      },
    },
  },
})
