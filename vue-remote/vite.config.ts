import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    federation({
      name: "remote-simple",
      filename: "remoteEntry.js",
      exposes: {
        "./remote-hello-world": "./src/components/HelloWorld.vue",
        "./remote-the-welcome": "./src/components/TheWelcome.vue",
      },
      shared: ["vue"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    target: ["chrome89", "edge89", "firefox89", "safari15"],
    minify: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        minifyInternalExports: false,
      },
    },
  },
});
