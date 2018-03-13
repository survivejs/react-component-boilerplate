import React from 'react';
import { PropTypes } from 'prop-types';

class Welcome extends React.Component {
  render() {
    return (
      <div>{this.props.text}</div>
    );
  }
}

Welcome.propTypes = {
  text: PropTypes.string.isRequired
};

export default Welcome;
