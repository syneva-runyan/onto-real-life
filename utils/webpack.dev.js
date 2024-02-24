const webpack = require("webpack");


module.exports = {
    mode: 'development',
    watchOptions: {
      ignored: [/node_modules/, /vendor/],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    rules: [{
      test: /\.css$/,
      exclude: /node_modules/,
      use: [{
        loader: "style-loader",
      }, {
        loader: "css-loader", 
        options: {
          url: false,
        }
      }]
      }
    ]
};
