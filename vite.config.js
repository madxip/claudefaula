import { defineConfig } from 'vite';

export default defineConfig({
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
