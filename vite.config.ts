/// <reference types="vitest" />
import { vitePlugin as remix } from '@remix-run/dev';
import { installGlobals } from '@remix-run/node';
import { defineConfig, loadEnv } from 'vite';
import { vercelPreset } from '@vercel/remix/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

installGlobals();

export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  plugins: [
    !process.env.VITEST
      ? remix({ presets: [vercelPreset()], ignoredRouteFiles: ['**/*.css'] })
      : react(),
    tsconfigPaths(),
  ],
  test: {
    coverage: {
      all: true,
      exclude: ['node_modules/**'],
    },
    env: loadEnv('test', process.cwd(), ''),
    environment: 'happy-dom',
    globals: true,
    setupFiles: ['./app/tests/setup.ts'],
    mockReset: true,
  },
});
