const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "../assets/img/blogs",
          to: "assets/img/blogs"
        },
        {
          from: "../assets/img/photos",
          to: "assets/img/photos"
        },
        {
          from: "../assets/img/about-me",
          to: "assets/img/about-me"
        },
        {
          from: "../assets/img/quotes.png",
          to: "assets/img/quotes.png"
        }
      ]
    })
  ],
  rules: [
    {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
      ]
    }
  ],
};
