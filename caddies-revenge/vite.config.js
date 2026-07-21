import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // The app has large base64 image assets inline; raise the warning limit
    // so the build stays quiet and doesn't split them awkwardly.
    chunkSizeWarningLimit: 8000,
  },
});
