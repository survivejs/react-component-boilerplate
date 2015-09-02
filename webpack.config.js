'use strict';
var path = require('path');

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Clean = require('clean-webpack-plugin');
var merge = require('webpack-merge');

var pkg = require('./package.json');

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);
var DEMO_DIR = 'demo';
var config = {
  paths: {
    dist: path.join(ROOT_PATH, 'dist'),
    src: path.join(ROOT_PATH, 'src'),
    demo: path.join(ROOT_PATH, DEMO_DIR),
    demoIndex: path.join(ROOT_PATH, DEMO_DIR, '/index'),
  },
  filename: 'boilerplate',
  library: 'Boilerplate',
};

var mergeDemo = merge.bind(null, {
  resolve: {
    extensions: ['', '.js', '.jsx', '.md', '.css', '.png', '.jpg'],
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
      {
        test: /\.md$/,
        loaders: ['html', 'highlight', 'markdown'],
      },
      {
        test: /\.png$/,
        loader: 'url?limit=100000&mimetype=image/png',
        include: config.paths.demo,
      },
      {
        test: /\.jpg$/,
        loader: 'file',
        include: config.paths.demo,
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ]
  }
});

if (TARGET === 'start') {
  var IP = '0.0.0.0';
  var PORT = 3000;
  module.exports = mergeDemo({
    ip: IP,
    port: PORT,
    devtool: 'eval-source-map',
    entry: [
      'webpack-dev-server/client?http://' + IP + ':' + PORT,
      'webpack/hot/only-dev-server',
      config.paths.demoIndex,
    ],
    output: {
      path: __dirname,
      filename: 'bundle.js'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('development'),
        }
      }),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin(),
    ],
    module: {
      preLoaders: [
        {
          test: /\.jsx?$/,
          loaders: ['eslint'],
          include: [config.paths.demo, config.paths.src],
        }
      ],
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['react-hot', 'babel'],
          include: [config.paths.demo, config.paths.src],
        },
      ]
    }
  });
}

if (TARGET === 'gh-pages' || TARGET === 'deploy-gh-pages') {
  module.exports = mergeDemo({
    entry: {
      app: config.paths.demoIndex,
      // tweak this to include your externs unless you load them some other way
      vendors: ['react/addons'],
    },
    output: {
      path: './gh-pages',
      filename: 'bundle.[chunkhash].js',
    },
    plugins: [
      new Clean(['gh-pages']),
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
      new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.[chunkhash].js'),
      new HtmlWebpackPlugin({
        title: pkg.name + ' - ' + pkg.description
      }),
    ],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['babel'],
          include: [config.paths.demo, config.paths.src],
        }
      ]
    }
  });
}

var mergeDist = merge.bind(null, {
  devtool: 'source-map',
  output: {
    path: config.paths.dist,
    libraryTarget: 'umd',
    library: config.library,
  },
  entry: config.paths.src,
  externals: {
    // if you are not testing,
    // just 'react' instead of 'react/addons'
    // will be enough
    'react/addons': {
        commonjs: 'react/addons',
        commonjs2: 'react/addons',
        amd: 'React',
        root: 'React'
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: config.paths.src,
      }
    ]
  }
});

if (TARGET === 'dist') {
  module.exports = mergeDist({
    output: {
      filename: config.filename + '.js',
    },
  });
}

if (TARGET === 'dist-min') {
  module.exports = mergeDist({
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
}
