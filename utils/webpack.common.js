const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
const path = require("path");


const nodeEnv = process.env.NODE_ENV || "development";
const sourcePath = path.join(__dirname, "../source");
const buildPath = path.join(__dirname, "../build");
const imgPath = path.join(__dirname, "../source/assets/img");

const cesiumSource = '../../vendor/cesium/Min/Cesium';
const cesiumWorkers = './Workers';

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(sourcePath, "template.ejs"),
      path: buildPath,
      filename: "index.html",
  }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(nodeEnv),
      },
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer(),
        ],
        context: sourcePath,
      },
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new CopyWebpackPlugin({
      patterns: [
      {
        from: "../assets/scripts/sendEmail.php",
        to: "scripts/sendEmail.php",
      },
      { from: path.join(cesiumSource, cesiumWorkers), to: 'Cesium/Workers' },
      { from: path.join(cesiumSource, 'Assets'), to: 'Cesium/Assets' },
      { from: path.join(cesiumSource, 'Widgets'), to: 'Cesium/Widgets' }
      ]
    }),
    new webpack.DefinePlugin({
      // Define relative base path in cesium for loading assets
      CESIUM_BASE_URL: JSON.stringify('/Cesium')
  })
  ],
  rules: [{
      test: /\.(js|jsx)$/,
      exclude: [/node_modules/],
      use: {
        loader: "babel-loader"
      },
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    },
    {
      test: /\.(png|gif|jpg|svg)$/,
      include: imgPath,
      use: "url-loader?limit=20480&name=assets/[name]-[hash].[ext]",
    },
    {
      test: /\.(eot|otf|ttf|woff|woff2)$/,
      use: "file-loader?name=fonts/[name].[ext]",
    },
  ],
};
