import React from 'react';
import T from 'prop-types';

import compose from 'recompose/compose';
import withState from 'recompose/withState';
import setDisplayName from 'recompose/setDisplayName';

const styles = {
  root: {
    display: 'inline-block',
    float: 'right',
    borderRadius: '8px',
    backgroundColor: '#f95',
    fontSize: '8pt',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '1px 5px',
    color: 'white',
    top: '2px',
  },
};

const RenderCounter = ({ state }) => (
  // eslint-disable-next-line no-plusplus,no-param-reassign
  <div style={styles.root}>{state.count++}</div>
);

RenderCounter.propTypes = {
  state: T.shape({
    count: T.number.isRequired,
  }).isRequired,
};

export default compose(
  setDisplayName(RenderCounter.name),
  withState('state', 'setState', () => ({ count: 0 })),
)(RenderCounter);
