const webpack = require("webpack");
const path = require("path");

const nodeEnv = process.env.NODE_ENV || "development";
const isProduction = nodeEnv === "production";

const commonConfig = require("./webpack-helpers/webpack.common.js");
const prodConfig = require("./webpack-helpers/webpack.prod.js");
const devConfig = require("./webpack-helpers/webpack.dev.js");

const jsSourcePath = path.join(__dirname, "./source/js");
const buildPath = path.join(__dirname, "./build");
const sourcePath = path.join(__dirname, "./source");

// Common plugins & rules
const plugins = [...commonConfig.plugins];
const rules = [...commonConfig.rules];

if (isProduction) {
  // Production plugins & rules
  plugins.push(...prodConfig.plugins);
  rules.push(...prodConfig.rules);
} else {
  // Development plugins & rules
  plugins.push(...devConfig.plugins);
  rules.push(...devConfig.rules);
}

module.exports = {
  devtool: isProduction ? false : "source-map",
  context: jsSourcePath,
  target: isProduction ? 'node' : 'web',
  entry: {
    app: "./index.js",
    vendor: ["lazysizes", "lazysizes/plugins/bgset/ls.bgset.min.js"]
  },
  output: {
    path: buildPath,
    publicPath: "/",
    filename: "[name].js",
    libraryTarget: 'umd'
  },
  module: {
    rules,
  },
  resolve: {
    extensions: [
      ".webpack-loader.js",
      ".web-loader.js",
      ".loader.js",
      ".js",
      ".jsx",
    ],
    modules: [path.resolve(__dirname, "node_modules"), jsSourcePath],
  },
  plugins,
  devServer: {
    contentBase: isProduction ? buildPath : sourcePath,
    historyApiFallback: true,
    port: 3000,
    compress: isProduction,
    inline: !isProduction,
    hot: !isProduction,
    host: "0.0.0.0",
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: "\u001b[32m",
      },
    },
  },
};




