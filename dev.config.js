const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    watch: true,
    entry: './src/app.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(scss)$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.(jpe?g|png)$/i,
                type: "asset",
            },
        ],
    }
};