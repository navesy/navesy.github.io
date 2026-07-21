import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  // Relative asset paths work both on the project URL and on a future domain.
  base: "./",
  plugins: [react()],
});
