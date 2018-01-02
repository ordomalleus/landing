// https://www.youtube.com/watch?v=-WRjUQG4huA
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var webpack = require('webpack');

/**
 * Production
 * @type {boolean}
 */
var isProduction = process.env.NODE_ENV === 'production';
var cssDev = ['style-loader', 'css-loader?sourceMap', 'sass-loader'];
var cssProd = ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: ['css-loader', 'resolve-url-loader', 'sass-loader'],
    publicPath: "./dist"
});
var cssConfig = isProduction ? cssProd : cssDev;

module.exports = {
    entry: {
        app: ['babel-polyfill', './src/js/app.js'],
        ts: ['./src/ts/index.ts']
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
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /\.pug$/,
                loader: ["pug-loader"]
            },
            {
                test: /\.scss$/,
                use: cssConfig
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'file-loader?name=[name].[ext]&outputPath=img/&publicPath=',
                    'image-webpack-loader'
                ]
            },
            {
                test: /\.(woff2?|svg)$/, loader: 'url-loader?name=[name].[ext]&limit=10000&publicPath='
            },
            {
                test: /\.(ttf|eot)$/, loader: 'file-loader?name=[name].[ext]&publicPath='
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        port: 9000,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.pug",
            hash: true
        }),
        new ExtractTextPlugin({
            filename: "[name].css",
            disable: !isProduction,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};
