# Charts components ESM Webpack template

📁 **[Click here to download this directory as a ZIP file](https://download-directory.github.io?url=https://github.com/Esri/arcgis-maps-sdk-javascript-samples-beta/tree/main/packages/charts-components/templates/webpack)** 📁

This repository showcases how to integrate the charts components using webpack.

## Project setup

### Install dependencies

```
yarn
```

### Start the development server

```
yarn start
```

### Generate the production-ready compiled code

```
yarn build
```

## Bundling details

### Config

Charts components assets need to be copied over to our `./arcgis-charts/t9n` folder for Stencil to load them properly.

```
// webpack.config.js
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "./node_modules/@arcgis/charts-components/dist/arcgis-charts-components/t9n",
          to: "./arcgis-charts/t9n"
        }
      ],
    }),
  ],
};
```

#### JS

We imported the components we need for the coding components by following [Stencil's instructions for integrating components without a JavaScript framework](https://stenciljs.com/docs/javascript).

```
import { defineCustomElements as defineChartsElements } from "@arcgis/charts-components/dist/loader";

defineChartsElements(window, {
  resourcesUrl: "../arcgis-charts/"
});
```

We use [`src/index.js`](./src/index.js) to load our data, define our custom elements, and utilize various kinds of properties in the editor. It is a must to define both the Charts elements.

#### CSS

You can find all the necessary styling in [`src/index.css`](./src/index.css).

#### HTML

The generation of our `index.html` was simplified by using the HtmlWebpackPlugin in the webpack configuration file.

```
// webpack.config.js
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
     new HtmlWebPackPlugin({
      title: "Charts components",
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
              <div class="flex-container">
                <div class="chart-container">
                  <arcgis-charts-bar-chart class="half-screen-chart"></arcgis-charts-bar-chart>
                </div>
                <div class="chart-container">
                  <arcgis-charts-bar-line-chart class="half-screen-chart"></arcgis-charts-bar-line-chart>
                </div>
                <div class="chart-container">
                  <arcgis-charts-box-plot class="half-screen-chart"></arcgis-charts-box-plot>
                </div>
                <div class="chart-container">
                  <arcgis-charts-histogram class="half-screen-chart"></arcgis-charts-histogram>
                </div>
                <div class="chart-container">
                  <arcgis-charts-line-chart class="half-screen-chart"></arcgis-charts-line-chart>
                </div>
                <div class="chart-container">
                  <arcgis-charts-pie-chart class="half-screen-chart"></arcgis-charts-pie-chart>
                </div>
                <div class="chart-container">
                  <arcgis-charts-scatter-plot class="half-screen-chart"></arcgis-charts-scatter-plot>
                </div>
              </div>
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