const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const resolvePkg = require("resolve-pkg");

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
      title: "Arcade editor webpack template",
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
    // This plugin copies entire directories to the build directory.
    new CopyPlugin({
      patterns: [
        // Grabs the web workers, api files, profiles, and translations we need
        {
          from: resolvePkg(
            "@arcgis/coding-components/dist/arcgis-coding-components/assets"
          ),
          to: path.resolve(__dirname, "dist/assets"),
        },
        // Copy the Calcite component assets locally to our build.
        {
          from: resolvePkg("@esri/calcite-components/dist/calcite/assets"),
          to: path.resolve(__dirname, "dist/assets"),
        },
      ],
    }),
  ],

  // Resolve property for importing files
  resolve: {
    modules: [path.resolve(__dirname, "/src"), "node_modules/"],
    extensions: [".js", ".css"],
  },
};
