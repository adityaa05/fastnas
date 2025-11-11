import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: '/fastnas/',
  plugins: [react()],
  assetsInclude: ["**/*.otf", "**/*.woff2"],
});
