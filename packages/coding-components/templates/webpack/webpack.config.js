/* Copyright 2023 Esri
 *
 * Licensed under the Apache License Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const HtmlWebPackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports = {
  entry: ["./src/index.css", "./src/index.js"],

  output: {
    filename: "[id][name].js",
    chunkFilename: "[id][name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  devtool: "source-map",

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },

  experiments: {
    // Because we are using async/await in index.js
    topLevelAwait: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // Collect CSS and insert them into the page
      },
    ],
  },

  plugins: [
    // This plugin simplifies creation of HTML files to serve your webpack bundles.
    new HtmlWebPackPlugin({
      title: "Coding components Webpack template",
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
              <calcite-scrim id="scrim" loading />
            </body>
          </html>`,
    }),
  ],

  // Resolve property for importing files
  resolve: {
    modules: [path.resolve(__dirname, "/src"), "node_modules/"],
    extensions: [".js", ".css"],
  },
};
