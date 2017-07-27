const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StaticSiteGeneratorPlugin = require("static-site-generator-webpack-plugin");
const ejs = require("ejs");
const fs = require("fs");
const path = require("path");

const template = ejs.compile(fs.readFileSync(path.join(__dirname, '../source/template.ejs'), 'utf-8'))

module.exports = {
    plugins: [    
        new StaticSiteGeneratorPlugin({
            crawl: true,
            entry: 'app',
            locals: {
                template: template
            },
            globals: {
                window: {
                    XMLHttpRequest: {}
                }
            }
        }),
        new ExtractTextPlugin("style.css"),
        new CopyWebpackPlugin([{
            from: "../data",
            to: "data"
        },
        {
            from: "../assets/img/blogs",
            to: "assets/img/blogs"
        },
        {
            from: "../assets/img/quotes.png",
            to: "assets/img/quotes.png"
        }]),
        new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
            screw_ie8: true,
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true,
        },
        output: {
            comments: false,
        }
        })
    ],
    rules: [
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader!postcss-loader!sass-loader"
            })
         }
    ]
};
