const path = require('path');

module.exports = {
    entry: './src/js/app.js',
    devServer: {
        compress: true,
        contentBase: path.resolve(__dirname),
        open: true,
        port: 3000
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/js'),
        publicPath: '/dist/js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};