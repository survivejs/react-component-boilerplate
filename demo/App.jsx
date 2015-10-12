'use strict';

var React = require('react');
var Fork = require('react-ghfork');

var pkgInfo = require('../package.json');

module.exports = React.createClass({
  displayName: 'App',

  render() {
    return (
      <div>
        <Fork className="right" project={pkgInfo.user + '/' + pkgInfo.name} />
          <p>Just demonstrating the awesomeness of this boilerplate here.</p>

          <div onClick={this.easterEgg}>...</div>
      </div>
    );
  },
  easterEgg() {
    console.log('easter egg');
  }
});
