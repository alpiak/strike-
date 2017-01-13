var webpack = require('webpack');

module.exports = {
    entry: 'src/index.js',
    output: {
        path: 'build',
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html'
    })]
};