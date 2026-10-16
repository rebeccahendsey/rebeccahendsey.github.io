import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  base: '/',
  build: {
    // The server bundle is only used to prerender HTML, so it doesn't need
    // its own copy of public/
    copyPublicDir: !isSsrBuild,
  },
}))
