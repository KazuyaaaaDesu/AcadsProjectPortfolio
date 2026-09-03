import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// 1. Import the Tailwind engine tool
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev
export default defineConfig({
  // 2. Add tailwindcss() right beside the react() plugin block
  plugins: [react(), tailwindcss()],
  base: '/AcadsProjectPortfolio/',
})