import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://job-portal-3izy.onrender.com'
    }
  },
  plugins: [react()],
})
