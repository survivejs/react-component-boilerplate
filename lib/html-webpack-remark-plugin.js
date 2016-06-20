var fs = require('fs');
var React = require('react');
var ReactDOM = require('react-dom/server');
var remark = require('remark');
var reactRenderer = require('remark-react');
var RemarkLowlight = require('remark-react-lowlight').default;

function HtmlWebpackRemarkPlugin(options) {
  this.key = options.key;
  this.file = options.file;
  this.languages = options.languages || {};
}

HtmlWebpackRemarkPlugin.prototype.apply = function(compiler) {
  var that = this;

  compiler.plugin('compilation', function(compilation) {
    compilation.plugin(
      'html-webpack-plugin-before-html-generation',
      function(htmlPluginData, callback) {
        console.log('reading file', that.file);

        fs.readFile(that.file, {
          encoding: 'utf-8'
        }, function(err, data) {
          if(err) {
            return callback(err);
          }

          remark().use(reactRenderer, {
            remarkReactComponents: {
              code: RemarkLowlight(that.languages)
            }
          }).process(data, function (err, file) {
            if(err) {
              return callback(err);
            }

            var output = ReactDOM.renderToStaticMarkup(
              React.createElement(
                'div',
                {
                  key: that.key
                },
                file.toString()
              )
            );

            htmlPluginData.plugin.options[that.key] = output;

            callback(null, htmlPluginData);
          });
        });
      }
    );
  });
};

module.exports = HtmlWebpackRemarkPlugin;
