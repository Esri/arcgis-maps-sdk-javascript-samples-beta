import { defineConfig, normalizePath } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import resolvePkg from "resolve-pkg";

export default defineConfig({
  plugins: [
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
  build: {
    outDir: "dist",
  },
});
