const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './index.js',
        analitics: './analitics.js'
    },
    mode: 'development',
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.css$/i, use: ["style-loader", "css-loader"] },
            { test: /\.xml$/, loader: 'xml-loader' },
            { test: /\.csv$/, loader: 'csv-loader'},
            { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource', generator: { filename: 'fonts/[name][ext]'} }
        ],
      },
    plugins: [
        new HtmlWebpackPlugin({
        title: 'My App',
        template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
}