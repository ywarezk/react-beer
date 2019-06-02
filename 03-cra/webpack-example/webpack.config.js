const path = require('path');

module.exports = {
    entry: './main.js',
    output: {
        filename: 'dist.js',
        path: path.resolve(__dirname, 'build')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    }
}