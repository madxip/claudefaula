import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Base '/' per a Vercel (i configurable amb VITE_BASE_PATH si cal un subdirectori)
  base: process.env.VITE_BASE_PATH || '/',
  root: '.',
  publicDir: 'imatges',
  build: {
    rollupOptions: {
      input: './index.html',
    },
  },
  server: {
    open: '/',
  },
});
