import * as path from 'path';

import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import SystemBellPlugin from 'system-bell-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import merge from 'webpack-merge';

const pkg = require('./package.json');

const ROOT_PATH = __dirname;
const config = {
  paths: {
    dist: path.join(ROOT_PATH, 'dist'),
    src: path.join(ROOT_PATH, 'src'),
    docs: path.join(ROOT_PATH, 'docs'),
    ghPages: path.join(ROOT_PATH, 'gh-pages')
  },
  filename: 'boilerplate',
  library: 'Boilerplate'
};

const common = {
  resolve: {
    extensions: ['.js', '.css', '.png', '.jpg']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: 'eslint-loader',
        include: [
          config.paths.docs,
          config.paths.src
        ]
      },
      {
        test: /\.md$/,
        use: ['catalog/lib/loader', 'raw-loader']
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      }
    ]
  },
  plugins: [
    new SystemBellPlugin()
  ]
};

const siteCommon = {
  plugins: [
    new HtmlWebpackPlugin({
      template: require('html-webpack-template'), // eslint-disable-line global-require
      inject: false,
      mobile: true,
      title: pkg.name,
      appMountId: 'app'
    }),
    new webpack.DefinePlugin({
      NAME: JSON.stringify(pkg.name),
      USER: JSON.stringify(pkg.user),
      VERSION: JSON.stringify(pkg.version)
    })
  ]
};

const dev = merge(common, siteCommon, {
  devtool: 'eval-source-map',
  entry: {
    docs: [config.paths.docs]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        },
        include: [
          config.paths.docs,
          config.paths.src
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    host: process.env.HOST,
    port: process.env.PORT,
    stats: 'errors-only'
  }
});

const ghPages = merge(common, siteCommon, {
  entry: {
    app: config.paths.docs
  },
  output: {
    path: config.paths.ghPages,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js'
  },
  plugins: [
    new CleanWebpackPlugin(['gh-pages'], {
      verbose: false
    }),
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new webpack.DefinePlugin({
        // This affects the react lib size
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ resource }) => (
        resource &&
        resource.indexOf('node_modules') >= 0 &&
        resource.match(/\.js$/)
      )
    })
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: [
          config.paths.docs,
          config.paths.src
        ]
      }
    ]
  }
});

const distCommon = {
  devtool: 'source-map',
  output: {
    path: config.paths.dist,
    libraryTarget: 'umd',
    library: config.library
  },
  entry: config.paths.src,
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: config.paths.src
      }
    ]
  },
  plugins: [
    new SystemBellPlugin()
  ]
};

const dist = merge(distCommon, {
  output: {
    filename: `${config.filename}.js`
  }
});

const distMin = merge(distCommon, {
  output: {
    filename: `${config.filename}.min.js`
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
});

module.exports = (env) => {
  process.env.BABEL_ENV = env;

  const targets = {
    dev,
    dist,
    distMin,
    ghPages
  };

  return targets[env] ? targets[env] : common;
};
