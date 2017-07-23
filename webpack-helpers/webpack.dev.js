const webpack = require("webpack");
const DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = {
    plugins: [
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
      "postcss-loader",
      "sass-loader?sourceMap"
    ]
  }]
};
