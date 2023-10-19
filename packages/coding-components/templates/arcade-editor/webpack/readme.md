# Arcade editor ESM Webpack template

This repository showcases how to integrate the Arcade editor using webpack.

## Project setup

### Install dependencies

```
yarn install
```

### Start the development server

```
yarn run start
```

### Generate the production-ready compiled code

```
yarn run build
```

## Bundling details

### Config

Both the Calcite components and Arcade component assets need to be copied over to our `/dist` folder for Stencil to load them properly.

```
// webpack.config.js
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(
            __dirname,
            "node_modules/@arcgis/coding-components/dist/arcgis-coding-components/assets"
          ),
          to: path.resolve(__dirname, "dist/assets"),
        },
        {
          from: path.resolve(
            __dirname,
            "node_modules/@esri/calcite-components/dist/calcite/assets"
          ),
          to: path.resolve(__dirname, "dist/assets"),
        },
      ],
    }),
  ],
};
```

#### JS

We imported the components we need for the Arcade editor by following [Stencil's instructions for integrating components without a JavaScript framework](https://stenciljs.com/docs/javascript).

```
import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
import { defineCustomElements as defineArcadeEditorElements } from "@arcgis/coding-components/dist/loader";

defineCalciteElements();
defineArcadeEditorElements();
```

We use [`src/index.js`](./src/index.js) to load our data, define our custom elements, and utilize various kinds of properties in the editor. It is a must to define both the Calcite and Arcade Editor elements.

> **Note**: If you change your config to copy the assets somewhere else, you can change the asset path for the components in index.js. 
> Example: `defineCalciteElements(window, { resourcesUrl: "assets/___folder_name___/" });`

#### CSS

You can find all the necessary styling in [`src/index.css`](./src/index.css). Importing the global Calcite and Arcade components CSS is required.

```
@import "~@esri/calcite-components/dist/calcite/calcite.css";
@import "~@arcgis/coding-components/dist/arcgis-coding-components/arcgis-coding-components.css";
```

#### HTML

The generation of our `index.html` was simplified by using the HtmlWebpackPlugin in the webpack configuration file.

```
// webpack.config.js
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
     new HtmlWebPackPlugin({
      title: "Arcade Editor",
      favicon: "./src/icons/favicon.png",
      chunksSortMode: "none",
      meta: {
        viewport:
          "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, user-scalable=no",
      },
      templateContent: `
        <!DOCTYPE html>
          <html dir="ltr" lang="en">
            <head>
              <meta charset="utf-8">
            </head>
            <body>
              <div class="editor-wrapper">
                <arcgis-arcade-editor />
              </div>
              <calcite-scrim id="scrim" loading></calcite-scrim>
            </body>
          </html>`,
    }),
  ],
};
```

## Resources

[Webpack's getting started guide](https://webpack.js.org/guides/getting-started/)

[Webpack 5's `experiments` option](https://webpack.js.org/configuration/experiments/)

[Defining custom elements](https://stenciljs.com/docs/custom-elements-bundle)

### Webpack plugins

For the webpack configuration file ([`webpack.config.js`](webpack.config.js))

[html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/)

[copy-webpack-plugin](https://webpack.js.org/plugins/copy-webpack-plugin/)
