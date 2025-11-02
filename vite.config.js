import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Tailwind via CDN in index.html. Base path is dynamic for GitHub Pages.
const base = process.env.BASE_PATH || '/AkibWorks-web/'

export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },
  preview: { port: 5173 },
  base
})
