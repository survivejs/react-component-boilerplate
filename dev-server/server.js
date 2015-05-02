'use strict';
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require('../config/');

new WebpackDevServer(webpack(config), {
    contentBase: __dirname,
    publicPath: config.output.publicPath,
    hot: true
}).listen(config.port, '0.0.0.0', function(err) {
    if (err) {
        return console.log(err);
    }

    console.log('Listening at 0.0.0.0:' + config.port);
});
