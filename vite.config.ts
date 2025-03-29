import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin(), tsconfigPaths()],
  base: '/sfedu-map/',
  build: {
    target: 'esnext',
  },
  server: {
    host: '0.0.0.0',
  },
});
