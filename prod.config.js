const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: './src/app.js',

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css',
        }),
        // new CopyPlugin({
        //     patterns: [
        //         { from: "src/images", to: "images/" },
        //     ],
        // }),
    ],
    module: {
        rules: [
            {
                test: /\.(scss)$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", 'sass-loader'],
            },
            {
                test: /\.(jpe?g|png)$/i,
                type: "asset",
            },
        ],
    }
};