import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: '/personal-fastNAS-website/',
  plugins: [react()],
  assetsInclude: ["**/*.otf", "**/*.woff2"],
});
