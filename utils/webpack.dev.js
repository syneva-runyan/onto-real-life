const webpack = require("webpack");


module.exports = {
    watchOptions: {
      ignored: [/node_modules/, /vendor/],
    },
    plugins: [
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
