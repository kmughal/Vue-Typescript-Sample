var path = require("path");
module.exports = {
    entry: path.resolve(__dirname,"./src/index.ts"),
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
                test: /\.ts$/,
                exclude: /node_modules|vue\/src/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    esModule: true
                }
            }
        ]
    },
    devtool: 'source-map'
}