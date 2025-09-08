import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/new-portfolio/',   // 👈 yeh line add karo
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
