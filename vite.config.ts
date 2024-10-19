import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@/services', replacement: 'src/services' },
      { find: '@/stores', replacement: 'src/stores' },
      { find: '@/components', replacement: 'src/components' },
    ],
  },
})
