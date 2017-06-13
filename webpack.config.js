const webpack = require("webpack"),
    path = require('path');

module.exports = {
    entry: {
        app: "./src/index.js"
    },
    output: {
        path: __dirname + '/bundles',
        publicPath: 'bundles/',
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['uglify-loader', 'ng-annotate-loader', 'babel-loader']
            },
            {
                test: /node_modules/,
                use: ['uglify-loader']
            }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                // this assumes your vendor imports exist in the node_modules directory
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        })
    ]
};