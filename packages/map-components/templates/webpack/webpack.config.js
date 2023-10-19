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
      title: "Map components webpack template",
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
              <arcgis-map item-id="d5dda743788a4b0688fe48f43ae7beb9">
                <arcgis-search position="top-right"></arcgis-search>
                <arcgis-legend position="bottom-left"></arcgis-search>
              </arcgis-map>
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
