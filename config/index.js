'use strict';
var path = require('path');

var webpack = require('webpack');
var merge = require('./merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var pkg = require('../package.json');

var ROOT_PATH = path.resolve(__dirname, '..');
var config = {
    paths: {
        dist: path.join(ROOT_PATH, 'dist'),
        lib: path.join(ROOT_PATH, 'lib'),
        demoIndex: path.join(ROOT_PATH, 'demo/index'),
    },
    filename: 'boilerplate',
    library: 'Boilerplate',
    demoDirectory: 'demo',
};

var common = {
    exports: {
        entry: [
            config.paths.demoIndex,
        ],
        resolve: {
            extensions: ['', '.js', '.jsx', '.md', '.css', '.png', '.jpg'],
        },
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
            },
            {
                test: /\.md$/,
                loader: 'html!highlight!markdown',
            },
            {
                test: /\.png$/,
                loader: 'url?limit=100000&mimetype=image/png',
            },
            {
                test: /\.jpg$/,
                loader: 'file',
            },
            {
                test: /\.json$/,
                loader: 'json',
            },
        ]
    }
};

var mergeConfig = merge.bind(null, common);

exports.dev = mergeConfig({
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/only-dev-server',
        config.paths.demoIndex,
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/' + config.demoDirectory + '/'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development'),
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'jsx?harmony'],
            },
        ]
    }
});

exports.ghpages = mergeConfig({
    entry: [
        config.paths.demoIndex,
    ],
    output: {
        path: './gh-pages',
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                // This has effect on the react lib size
                'NODE_ENV': JSON.stringify('production'),
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
        }),
        new HtmlWebpackPlugin({
            title: pkg.name + ' - ' + pkg.description
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['jsx?harmony'],
            }
        ]
    }
});

var mergeDist = merge.bind(null, mergeConfig({
    output: {
        path: config.paths.dist,
        libraryTarget: 'umd',
        library: config.library,
    },
    entry: config.paths.lib,
    externals: {
        react: 'react',
        'react/addons': 'react/addons'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['jsx?harmony'],
                exclude: /node_modules/,
            }
        ]
    }
}));

exports.dist = mergeDist({
    output: {
        filename: config.filename + '.js',
    },
});

exports.distMin = mergeDist({
    output: {
        filename: config.filename + '.min.js',
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
        }),
    ],
});
