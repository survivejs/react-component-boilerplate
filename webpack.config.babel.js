'use strict';
var fs = require('fs');
var path = require('path');

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Clean = require('clean-webpack-plugin');
var merge = require('webpack-merge');
var React = require('react');
var ReactDOM = require('react-dom/server');
var MTRC = require('markdown-to-react-components');

var App = require('./demo/app.jsx');
var pkg = require('./package.json');

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);
var DEMO_DIR = 'demo';
var config = {
  paths: {
    dist: path.join(ROOT_PATH, 'dist'),
    src: path.join(ROOT_PATH, 'src'),
    demo: path.join(ROOT_PATH, DEMO_DIR),
    demoIndex: path.join(ROOT_PATH, DEMO_DIR, 'index')
  },
  filename: 'boilerplate',
  library: 'Boilerplate'
};
var CSS_PATHS = [
  config.paths.demo,
  path.join(ROOT_PATH, 'style.css'),
  path.join(ROOT_PATH, 'node_modules/purecss'),
  path.join(ROOT_PATH, 'node_modules/highlight.js/styles/github.css'),
  path.join(ROOT_PATH, 'node_modules/react-ghfork/gh-fork-ribbon.ie.css'),
  path.join(ROOT_PATH, 'node_modules/react-ghfork/gh-fork-ribbon.css')
];

var demoCommon = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.png', '.jpg']
  },
  module: {
    loaders: [
      {
        test: /\.png$/,
        loader: 'url?limit=100000&mimetype=image/png',
        include: config.paths.demo
      },
      {
        test: /\.jpg$/,
        loader: 'file',
        include: config.paths.demo
      },
      {
        test: /\.json$/,
        loader: 'json',
        include: path.join(ROOT_PATH, 'package.json')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: pkg.name + ' - ' + pkg.description,
      templateContent: renderJSX
    })
  ]
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(demoCommon, {
    devtool: 'eval-source-map',
    entry: config.paths.demoIndex,
    output: {
      path: __dirname,
      filename: 'bundle.js'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('development')
        }
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
      preLoaders: [
        {
          test: /\.jsx?$/,
          loaders: ['eslint'],
          include: [
            config.paths.demo,
            config.paths.src]
        }
      ],
      loaders: [
        {
          test: /\.css$/,
          loaders: ['style', 'css'],
          include: CSS_PATHS
        },
        {
          test: /\.jsx?$/,
          loaders: ['babel'],
          include: [
            config.paths.demo,
            config.paths.src
          ]
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
    }
  });
}

if (TARGET === 'gh-pages' || TARGET === 'deploy-gh-pages') {
  module.exports = merge(demoCommon, {
    entry: {
      app: config.paths.demoIndex,
      vendors: [
        'react'
      ]
    },
    output: {
      path: './gh-pages',
      filename: 'bundle.[chunkhash].js'
    },
    plugins: [
      new Clean(['gh-pages']),
      new ExtractTextPlugin('styles.[chunkhash].css'),
      new webpack.DefinePlugin({
        'process.env': {
          // This has effect on the react lib size
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.[chunkhash].js')
    ],
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style', 'css'),
          include: CSS_PATHS
        },
        {
          test: /\.jsx?$/,
          loaders: ['babel'],
          include: [
            config.paths.demo,
            config.paths.src
          ]
        }
      ]
    }
  });
}

var distCommon = {
  devtool: 'source-map',
  output: {
    path: config.paths.dist,
    libraryTarget: 'umd',
    library: config.library
  },
  entry: config.paths.src,
  externals: {
    'react': {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'React',
        root: 'React'
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: config.paths.src
      }
    ]
  }
};

if (TARGET === 'dist') {
  module.exports = merge(distCommon, {
    output: {
      filename: config.filename + '.js'
    }
  });
}

if (TARGET === 'dist-min') {
  module.exports = merge(distCommon, {
    output: {
      filename: config.filename + '.min.js'
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  });
}

function renderJSX(templateParams, compilation) {
  var tpl = fs.readFileSync(path.join(__dirname, 'lib/index_template.tpl'), 'utf8');
  var readme = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8');
  var replacements = {
    name: pkg.name,
    description: pkg.description,
    demo: ReactDOM.renderToString(<App />),
    documentation: ReactDOM.renderToStaticMarkup(
      <div key="documentation">{MTRC(readme).tree}</div>
    )
  };

  return tpl.replace(/%(\w*)%/g, function(match) {
    var key = match.slice(1, -1);

    return replacements[key] ? replacements[key] : match;
  });
}
