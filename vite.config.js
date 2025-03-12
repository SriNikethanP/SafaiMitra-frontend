import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0", // Allow external access
    port: process.env.PORT || 5173, // Use Render's assigned port
    strictPort: true, // Prevent Vite from using a random port
    allowedHosts: ["safaimitra.onrender.com"], // Allow Render domain
  },
});
