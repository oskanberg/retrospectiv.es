var webpack = require('webpack');
var path = require('path');
var enviroment = JSON.stringify(process.env.ENVIRONMENT || "development");

var APP_DIR = path.resolve(__dirname, 'app');
var BUILD_DIR = path.resolve(__dirname, 'build');

var config = {
    devtool: 'source-map',
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?/,
            include: APP_DIR,
            loader: 'babel-loader'
        }, {
            test: /\.scss$/,
            include: APP_DIR,
            loaders: ['style', 'css', 'sass']
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': enviroment
            }
        })
    ],
};

// minify if not dev build
if (enviroment !== JSON.stringify("development")) {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;
