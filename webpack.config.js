/* eslint comma-dangle: 0 */
const webpack = require("webpack"); // eslint-disable-line no-unused-vars
const path = require("path");

const nodeEnv = process.env.NODE_ENV || "development";
const isProduction = nodeEnv === "production";

const commonConfig = require("./utils/webpack.common.js");
const prodConfig = require("./utils/webpack.prod.js");
const devConfig = require("./utils/webpack.dev.js");

const jsSourcePath = path.join(__dirname, "./source/js");
const buildPath = path.join(__dirname, "./build");
const sourcePath = path.join(__dirname, "./source");

// Common plugins & rules
const plugins = [...commonConfig.plugins];
const rules = [...commonConfig.rules];

let mode;
if (isProduction) {
  // Production plugins & rules
  plugins.push(...prodConfig.plugins);
  rules.push(...prodConfig.rules);
  mode = prodConfig.mode;
} else {
  // Development plugins & rules
  plugins.push(...devConfig.plugins);
  rules.push(...devConfig.rules);
  mode = devConfig.mode;
}

module.exports = {
  mode: mode,
  devtool: isProduction ? false : "source-map",
  context: jsSourcePath,
  entry: {
    app: "./index.js",
    vendor: ["lazysizes", path.join(__dirname, "node_modules/lazysizes/plugins/bgset/ls.bgset.js")]
  },
  output: {
    path: buildPath,
    publicPath: "/",
    filename: "[name].js",
    libraryTarget: 'umd',
    globalObject: "this",
    sourcePrefix: ''
  },
  amd: {
    // Enable webpack-friendly use of require in Cesium
    toUrlUndefined: true
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
    fallback: {
      fs: false
    }
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
