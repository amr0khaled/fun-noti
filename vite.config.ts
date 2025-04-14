import { resolve } from 'path'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        sw: 'src/lib/service-workers/index.sw.ts',
      },
      output: {
        entryFileNames: e => {
          if (e.name.includes('sw')) return 'sw.js'
          if (e.name.endsWith('css')) return 'assets/index-[hash].css'
          return 'assets/index-[hash].js'
        }
      }
    }
  },
  envPrefix: "FUN",
  keepProcessEnv: true,
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://my-fun-api.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
