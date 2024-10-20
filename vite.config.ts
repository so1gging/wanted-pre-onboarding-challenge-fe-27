import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@/services', replacement: path.resolve(__dirname, 'src/services') },
      { find: '@/stores', replacement: path.resolve(__dirname, 'src/stores') },
      { find: '@/components', replacement: path.resolve(__dirname, 'src/components') },
    ],
  },
})
