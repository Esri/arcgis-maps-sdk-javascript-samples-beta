> ⚠️ ArcGIS Maps SDK for JavaScript components are no longer in beta. This repository has been archived. Please visit https://github.com/Esri/jsapi-resources for the latest samples.

# ArcGIS Maps SDK for JavaScript samples

This repository contains code samples and templates for coding with the ArcGIS Maps SDK for JavaScript.

If you are looking for the ArcGIS Maps SDK for JavaScript core package, it is available on [npm](https://www.npmjs.com/package/@arcgis/core).

## How to use this repository

This repository is organized as a [monorepo](https://en.wikipedia.org/wiki/Monorepo).

### Clone this repository

This monorepo was built using [yarn workspaces](https://yarnpkg.com/features/workspaces). 
After cloning, you only need to run `yarn install` in the root of the repository once to get a single `/node_modules` for all the code samples and templates. 

If you want to test a specific template, you can use the `yarn workspaces` command.

E.g., running the development server for the map components vue template

```
yarn workspace map-components-vue-template dev
```

## Available code samples

Below are a collection of code samples that provide proof-of-concept for using ArcGIS Maps SDK for JavaScript components with a variety of popular JavaScript build tools, frameworks and module bundlers.

- Map components
  - [AMD Script Tag](./packages/map-components/templates/amd-script-tag)
  - [Angular](./packages/map-components/templates/Angular)
  - [React](./packages/map-components/templates/react)
  - [Vite](./packages/map-components/templates/vite)
  - [Vue](./packages/map-components/templates/vue)
  - [Webpack](./packages/map-components/templates/webpack)
- Coding components
  - [AMD Script Tag](./packages/coding-components/templates/amd-script-tag)
  - [Angular](./packages/coding-components/templates/angular)
  - [React](./packages/coding-components/templates/react)
  - [Vite](./packages/coding-components/templates/vite)
  - [Vue](./packages/coding-components/templates/vue)
  - [Webpack](./packages/coding-components/templates/webpack)
- Charts components
  - [AMD Script Tag](./packages/charts-components/templates/amd-script-tag)
  - [Angular](./packages/charts-components/templates/angular)
  - [React](./packages/charts-components/templates/react)
  - [Vite](./packages/charts-components/templates/vite)
  - [Vue](./packages/charts-components/templates/vue)
  - [Webpack](./packages/charts-components/templates/webpack)

## Requirements

Use of the ArcGIS Maps SDK for JavaScript is subject to [System Requirements](https://developers.arcgis.com/javascript/latest/system-requirements/), and the terms described in the product-specific [Terms of Use.](https://www.esri.com/en-us/legal/terms/product-specific-scope-of-use) Learn more about licensing [here](https://developers.arcgis.com/javascript/latest/licensing/).

## Resources

- [ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/javascript/)
- [https://www.esri.com/arcgis-blog/?s=#&products=js-api-arcgis](https://www.esri.com/arcgis-blog/?s=#&products=js-api-arcgis)
- [twitter@EsriDevs](https://twitter.com/EsriDevs)

## Issues

- General questions about using these modules or the ArcGIS Maps SDK for JavaScript? See the [Esri developer community](https://community.esri.com/t5/arcgis-api-for-javascript/ct-p/arcgis-api-for-javascript).
- [Technical support](https://support.esri.com/).

## Licensing

COPYRIGHT © 2024 Esri

All rights reserved under the copyright laws of the United States and applicable international laws, treaties, and conventions.

This material is licensed for use under the Esri Master License Agreement (MLA), and is bound by the terms of that agreement. You may redistribute and use this code without modification, provided you adhere to the terms of the MLA and include this copyright notice.

See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english

For additional information, contact: Environmental Systems Research Institute, Inc. Attn: Contracts and Legal Services Department 380 New York Street Redlands, California, USA 92373 USA

email: contracts@esri.com