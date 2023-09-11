import { fileURLToPath, URL } from "node:url";

import { defineConfig, normalizePath } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteStaticCopy } from "vite-plugin-static-copy";
import resolvePkg from "resolve-pkg";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) =>
            ["arcgis-arcade-editor", "calcite-scrim"].includes(tag),
        },
      },
    }),
    viteStaticCopy({
      targets: [
        {
          src: normalizePath(
            resolvePkg(
              "@arcgis/coding-components/dist/arcgis-coding-components/assets/"
            )
          ),
          dest: "./",
        },
        {
          src: normalizePath(
            resolvePkg("@esri/calcite-components/dist/calcite/assets/")
          ),
          dest: "./",
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
