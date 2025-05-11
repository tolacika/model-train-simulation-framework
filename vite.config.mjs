import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
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