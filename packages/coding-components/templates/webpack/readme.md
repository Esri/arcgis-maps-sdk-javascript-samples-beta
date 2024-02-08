# Coding components ESM Webpack template

📁 **[Click here to download this directory as a ZIP file](https://download-directory.github.io?url=https://github.com/Esri/arcgis-maps-sdk-javascript-samples-beta/tree/main/packages/coding-components/templates/webpack)** 📁

This repository showcases how to integrate the coding components using webpack.

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

#### JS

We imported the components we need for the coding components by following [Stencil's instructions for integrating components without a JavaScript framework](https://stenciljs.com/docs/javascript).

```
import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
import { defineCustomElements as defineCodingElements } from "@arcgis/coding-components/dist/loader";

// define custom elements in the browser, and load the assets from the CDN
defineCalciteElements(window, { resourcesUrl: "https://js.arcgis.com/calcite-components/2.4.0/assets" });
defineCodingElements(window, { resourcesUrl: "https://js.arcgis.com/coding-components/next/assets" });
```

We use [`src/index.js`](./src/index.js) to load our data, define our custom elements, and utilize various kinds of properties in the editor. It is a must to define both the Calcite and Coding elements.

#### CSS

You can find all the necessary styling in [`src/index.css`](./src/index.css). Importing the global Calcite and coding components CSS is required.

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
      title: "Coding components",
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
