// vite.config.js
import { defineConfig } from "vite";
import find from "find";

const htmlFiles = find
  .fileSync("./")
  .filter(
    (file) =>
      file.endsWith(".html") &&
      !file.startsWith("node_modules/") &&
      !file.startsWith("dist/"),
  );

export default defineConfig({
  plugins: [],
  build: {
    rollupOptions: {
      input: htmlFiles,
    },
  },
  define: {
    process: { env: {} },
  },
});
