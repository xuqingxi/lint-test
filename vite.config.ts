import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslint({
      cache: false,
      include: ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue"],
      exclude: ["node_modules"],
    }),
  ],
  server: {
    open: true,
    fs: {
      strict: true,
    },
  },
});
