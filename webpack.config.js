var webpack = require("webpack");
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js"
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};