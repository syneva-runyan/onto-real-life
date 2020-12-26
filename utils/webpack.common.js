const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const autoprefixer = require("autoprefixer");
const path = require("path");

const nodeEnv = process.env.NODE_ENV || "development";
const sourcePath = path.join(__dirname, "../source");
const imgPath = path.join(__dirname, "../source/assets/img");

module.exports = {
  plugins: [
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
      ]
    }),
  ],
  rules: [
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
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
