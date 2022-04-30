import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@types": fileURLToPath(new URL("./src/types/vite-env.d.ts", import.meta.url)),
      "@styles": fileURLToPath(new URL("./src/styles/style.css", import.meta.url)),
      "@assests": fileURLToPath(new URL("./src/assets", import.meta.url)),
    },
  },
});
