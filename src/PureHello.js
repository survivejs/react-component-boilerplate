import React from 'react';
import T from 'prop-types';

import withState from 'recompose/withState';

import RenderCounter from './RenderCounter';

const PureHello = ({ name, style, reRender, onClick }) => (
  <div style={style} >
    Hello, {name}!
    <button onClick={() => reRender(null, onClick)}>Re-render</button>
    <RenderCounter />
  </div>
);

PureHello.propTypes = {
  style: T.object, // eslint-disable-line react/forbid-prop-types
  name: T.string,
  reRender: T.func.isRequired,
  onClick: T.func,
};

PureHello.defaultProps = {
  style: undefined,
  name: 'world',
  onClick: undefined,
};

export default withState('state', 'reRender')(PureHello);
