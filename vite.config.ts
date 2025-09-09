import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/sonu-webdev-portfolio/', // 👈 Github repo ka naam

  plugins: [
    react({
      jsxRuntime: 'automatic', // Optimize JSX runtime
    }),
  ],

  optimizeDeps: {
    include: ['react', 'react-dom', 'react/jsx-runtime'],
    exclude: ['lucide-react'],
  },

  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['lucide-react'],
          'animation-vendor': ['framer-motion'],
          'utils-vendor': ['axios'],
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || []
          const ext = info[info.length - 1]

          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico|webp)$/i.test(assetInfo.name || '')) {
            return `images/[name]-[hash].${ext}`
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name || '')) {
            return `fonts/[name]-[hash].${ext}`
          }
          return `assets/[name]-[hash].${ext}`
        },
      },
    },
    assetsInlineLimit: 4096,
  },

  server: {
    hmr: {
      overlay: false,
    },
  },

  assetsInclude: [
    '**/*.jpg',
    '**/*.jpeg',
    '**/*.png',
    '**/*.webp',
    '**/*.svg',
    '**/*.woff2',
  ],
})
