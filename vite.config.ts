import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    chunkSizeWarningLimit: 5000,
    sourcemap: true
  },
  server: {
    host: true,
    port: 5173,
  },
  node: { global: true },
  resolve: {
    alias: [
      {
        // "@": path.resolve(__dirname, "./src"),
        find: "@",
        replacement: path.resolve(__dirname, "./src"),
      },
    ],
  },
});
