import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Base per al deploy a https://jtaulats.com/claudefaula/
  base: '/claudefaula/',
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
