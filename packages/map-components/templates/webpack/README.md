# Map components Webpack template

📁 **[Click here to download this directory as a ZIP file](https://download-directory.github.io?url=https://github.com/Esri/arcgis-maps-sdk-javascript-samples-beta/tree/main/packages/map-components/templates/webpack)** 📁

This repository showcases how to integrate the map components using webpack.

## Project setup

### Install dependencies

```
npm install
```

### Start the development server

```
npm run start
```

### Generate the production-ready compiled code

```
npm run build
```

#### JS

Imported the components using [Stencil's pattern for integrating components without a JavaScript framework](https://stenciljs.com/docs/javascript).

```
import { defineCustomElements } from "@esri/map-components/dist/loader";

// define custom elements in the browser, and load the assets from the CDN
defineCustomElements(window, { resourcesUrl: "https://js.arcgis.com/map-components/4.29/assets" });
```

Use [`src/index.js`](./src/index.js) to load the data, define custom elements.

#### CSS

You can find all the necessary styling in [`src/index.css`](./src/index.css). Importing the global @arcgis/core CSS is required.

```
@import 'https://js.arcgis.com/4.29/@arcgis/core/assets/esri/themes/dark/main.css';
```

#### HTML

The parsing of our `index.html` was simplified by using the HtmlWebpackPlugin in the webpack configuration file.

```js
// webpack.config.js
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    new HtmlWebPackPlugin({
      title: "ArcGIS Maps SDK  for JavaScript",
      template: "./public/index.html",
      filename: "./index.html",
      chunksSortMode: "none",
      inlineSource: ".(css)$"
    }),
    ...
  ]
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