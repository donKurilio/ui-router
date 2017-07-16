const webpack = require("webpack"),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin')
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
            },
            {
                test: /\.less/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [ 'css-loader', 'less-loader' ]
                })
            }, {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                use: ['file-loader']
            }
        ],
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                // this assumes your vendor imports exist in the node_modules directory
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new ExtractTextPlugin({
            filename: '[name].css'
        })
    ]
};