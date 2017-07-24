const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const StaticSiteGeneratorPlugin = require("static-site-generator-webpack-plugin");
const autoprefixer = require("autoprefixer");
const path = require("path");
const ejs = require("ejs");
const fs = require("fs");
const nodeEnv = process.env.NODE_ENV || "development";
const sourcePath = path.join(__dirname, "../source");
const imgPath = path.join(__dirname, "../source/assets/img");
const jsSourcePath = path.join(__dirname, "./source/js");
const buildPath = path.join(__dirname, "../build");

var template = ejs.compile(fs.readFileSync(path.join(__dirname, '../source/template.ejs'), 'utf-8'))
const routeData = require('./route-data');

module.exports = {
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "vendor",
        //     filename: "vendor-[hash].js",
        //     minChunks(module) {
        //     const context = module.context;
        //     return context && context.indexOf("node_modules") >= 0;
        //     }
        // }),
        new webpack.DefinePlugin({
            "process.env": {
            NODE_ENV: JSON.stringify(nodeEnv),
            }
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
            postcss: [
                autoprefixer({
                browsers: ["last 3 version", "ie >= 10"],
                }),
            ],
            context: sourcePath,
            }
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new StaticSiteGeneratorPlugin({
            entry: 'app',
            paths: routeData.paths,
            locals: {
                template: template
            },
            globals: {
                window: {
                    XMLHttpRequest: {}
                }
            }
        }),
        new CopyWebpackPlugin([
            {
            from: "../assets/scripts/sendEmail.php",
            to: "scripts/sendEmail.php"
            },
        ]),
        // new HtmlWebpackPlugin({
        //     template: path.join(sourcePath, "index.html"),
        //     path: buildPath,
        //     filename: "index.html",
        // }),
    ],
    rules: [{
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
    },
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
    },
    {
        test: /\.(png|gif|jpg|svg)$/,
        include: imgPath,
        use: "url-loader?limit=20480&name=assets/[name]-[hash].[ext]"
    },
    {
        test: /\.(eot|otf|svg|ttf|woff|woff2)$/,
        use: "file-loader?name=fonts/[name].[ext]"
    }]
};
