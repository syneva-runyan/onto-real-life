const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const sourcePath = path.join(__dirname, "../source");
const buildPath = path.join(__dirname, "../build");


module.exports = {
    watchOptions: {
      ignored: [/node_modules/, /vendor/],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(sourcePath, "template.ejs"),
            path: buildPath,
            filename: "index.html",
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    rules: [{
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        "style-loader",
        "css-loader?url=false",
        "sass-loader?sourceMap"
      ]
      }
    ]
};
