import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import keystatic from '@keystatic/astro'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://kuko.cr',
  output: 'static',
  integrations: [
    react(),
    sitemap(),
    // Keystatic editor only runs locally; excluded from production to avoid needing an SSR adapter
    ...(process.env.NODE_ENV !== 'production' ? [keystatic()] : []),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
