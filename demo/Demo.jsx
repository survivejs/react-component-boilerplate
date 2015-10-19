import React from 'react';

export default class Demo extends React.Component {
  render() {
    return <div onClick={this.easterEgg}>click me</div>;
  }
  easterEgg() {
    alert('easter egg');
  }
}
