import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@hooks": path.resolve(__dirname, "./src/app/hooks"),
      "@pages": path.resolve(__dirname, "./src/view/pages"),
      "@components": path.resolve(__dirname, "./src/view/components"),
      "@services": path.resolve(__dirname, "./src/app/services"),
    },
  },
});
