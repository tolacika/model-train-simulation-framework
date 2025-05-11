// filepath: d:\workspace\train-sim\vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true, // Allows access from WSL2
    port: 3000, // Default port for development
    watch: {
        usePolling: true, // Use polling for file changes
    },
  },
  build: {
    outDir: 'dist', // Matches the output directory in tsconfig.json
  },
});