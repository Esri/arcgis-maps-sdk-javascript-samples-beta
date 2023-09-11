import { defineConfig, normalizePath } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import react from "@vitejs/plugin-react";
import resolvePkg from "resolve-pkg";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        // Copy ArcGIS core and calcite components assets
        {
          src: normalizePath(resolvePkg("@arcgis/core/assets/")),
          dest: "./",
        },
        // copy the arcade components assets
        {
          src: normalizePath(
            resolvePkg(
              "@arcgis/coding-components/dist/arcgis-coding-components/assets/"
            )
          ),
          dest: "assets/components/",
        },
      ],
    }),
  ],
  build: {
    outDir: "dist",
  },
});
