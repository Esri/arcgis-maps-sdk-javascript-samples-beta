/* Copyright 2024 Esri
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

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: ["./src/index.css", "./src/index.js"],

  output: {
    filename: "[id][name].js",
    chunkFilename: "[id][name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },

  devtool: "source-map",

  devServer: {
    static: {
      directory: path.join(__dirname, "dist")
    },
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"] // Collect CSS and insert them into the page
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Charts components Webpack template",
      chunksSortMode: "none",
      meta: {
        viewport: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, user-scalable=no"
      },
      templateContent: `
        <!DOCTYPE html>
          <html dir="ltr" lang="en">
            <head>
              <meta charset="utf-8">
            </head>
            <body>
              <arcgis-charts-scatter-plot class="chart-container"></arcgis-charts-scatter-plot>
            </body>
          </html>`
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "./node_modules/@arcgis/charts-components/dist/arcgis-charts-components/t9n",
          to: "./arcgis-charts/t9n"
        }
      ]
    })
  ]
};
