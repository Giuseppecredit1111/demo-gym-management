import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/demo-gym-management/',
  plugins: [react()],
  build: {
    outDir: 'pages-dist',
    emptyOutDir: true,
  },
});
