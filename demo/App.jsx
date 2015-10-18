import React from 'react';
import Fork from 'react-ghfork';
import pkgInfo from '../package.json';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Fork className="right" project={pkgInfo.user + '/' + pkgInfo.name} />
        <p>Just demonstrating the awesomeness of this boilerplate here.</p>

        <div onClick={this.easterEgg}>click me</div>
      </div>
    );
  }
  easterEgg() {
    alert('easter egg');
  }
}
