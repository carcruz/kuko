import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import cloudflare from '@astrojs/cloudflare'
import keystatic from '@keystatic/astro'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://kuko.cr',
  output: 'static',
  adapter: cloudflare(),
  integrations: [
    react(),
    sitemap(),
    keystatic(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
