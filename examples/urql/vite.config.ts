import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      path: 'rollup-plugin-node-polyfills/polyfills/path',
      fs: './fs.js',
      events: 'rollup-plugin-node-polyfills/polyfills/events',
    },
  },
})
