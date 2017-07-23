const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    plugins: [
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
        }),
        new ExtractTextPlugin("style-[hash].css")
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
