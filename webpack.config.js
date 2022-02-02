// webpack.config.js
const { default: getJsConfig } = require("pd-js-config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const path = require("path");

module.exports = merge(
  getJsConfig({
    env: "production",
    jsx: true,
    isNodeEnv: false,
  }),
  {
    entry: path.resolve(__dirname, "./main.js"),
    output: {
      path: path.resolve(__dirname, "./dist"),
    },
    mode: "development",
    devServer: {
      open: true,
      port: 8080,
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./template/index.html"
    })],
  }
);
