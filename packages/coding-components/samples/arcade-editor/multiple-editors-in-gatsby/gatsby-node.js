/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const CopyPlugin = require("copy-webpack-plugin");

const path = require("path");

const arcadeInputFolder = path.dirname(require.resolve("@arcgis/coding-components"));
const calciteInputFolder = path.dirname(require.resolve("@esri/calcite-components"));

const assetsPlugin = new CopyPlugin({
  patterns: [
    {
      from: `${arcadeInputFolder}/arcgis-coding-components/assets`,
      to: "assets/"
    },
    { from: `${calciteInputFolder}/calcite/assets/`, to: "assets/" }
  ]
});

/**
 * ArcGIS Core is not SSR friendly and requires certain rules to build.
 * Sourced from: https://www.gatsbyjs.com/docs/debugging-html-builds/#fixing-third-party-modules
 */
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  // Copy Arcade Editor assets
  actions.setWebpackConfig({
    plugins: [assetsPlugin]
  });
  // Rules for ArcGIS Core
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /core/,
            exclude: [
              {
                and: [path.resolve(__dirname, "node_modules")],
                not: [path.resolve(__dirname, "node_modules/@arcgis")]
              }
            ],
            use: loaders.null()
          }
        ]
      }
    });
  }
};
