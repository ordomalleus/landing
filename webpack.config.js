var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
    entry: {
        app: './src/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.pug$/,
                loader: ["raw-loader", "pug-html-loader"]
            },
            {
                test: /\.scss$/, use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ['css-loader', 'sass-loader'],
                publicPath: "./dist"})
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.pug",
            hash: true
        }),
        new ExtractTextPlugin({
            filename: "app.css",
            allChunks: true
        })
    ]
};
