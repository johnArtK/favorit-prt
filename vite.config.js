import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const API_ORIGIN = 'http://api.favorit-parts.ru'
const API_PATH = '/hs/hsprice/'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  const proxy = {
    '/api/parts': {
      target: API_ORIGIN,
      changeOrigin: true,
      rewrite: (path) => {
        const url = new URL(path, 'http://localhost')
        url.searchParams.set('key', env.FAVORIT_API_KEY ?? '')
        return `${API_PATH}${url.search}`
      },
    },
  }

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
    },
    server: { proxy },
    preview: { proxy },
  }
})
