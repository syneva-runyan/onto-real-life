const webpack = require("webpack");
const DashboardPlugin = require("webpack-dashboard/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const sourcePath = path.join(__dirname, "../source");
const buildPath = path.join(__dirname, "../build");


module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(sourcePath, "template.ejs"),
            path: buildPath,
            filename: "index.html",
        }),
        new webpack.HotModuleReplacementPlugin(),
        new DashboardPlugin()
    ],
    rules: [{
    test: /\.scss$/,
    exclude: /node_modules/,
    use: [
      "style-loader",
      // Using source maps breaks urls in the CSS loader
      // https://github.com/webpack/css-loader/issues/232
      // This comment solves it, but breaks testing from a local network
      // https://github.com/webpack/css-loader/issues/232#issuecomment-240449998
      // 'css-loader?sourceMap',
      "css-loader",
      "sass-loader?sourceMap"
    ]
  }]
};
