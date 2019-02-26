const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StaticSiteGeneratorPlugin = require("static-site-generator-webpack-plugin");
const ejs = require("ejs");
const fs = require("fs");
const path = require("path");

const template = ejs.compile(
  fs.readFileSync(path.join(__dirname, "../source/template.ejs"), "utf-8")
);

module.exports = {
  plugins: [
    new StaticSiteGeneratorPlugin({
      crawl: true,
      entry: "app",
      locals: {
        template: template
      },
      globals: {
        window: {
          XMLHttpRequest: {},
          scroll: function() {}
        },
        navigator: {},
      }
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new CopyWebpackPlugin([
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
    ])
  ],
  rules: [
    {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
      ]
    },
  ],
};
