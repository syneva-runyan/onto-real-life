const webpack = require("webpack");


module.exports = {
    mode: 'development',
    watchOptions: {
      ignored: [/node_modules/, /vendor/],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    rules: []
};
