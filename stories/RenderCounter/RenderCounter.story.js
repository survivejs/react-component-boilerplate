import React from 'react';
import withState from 'recompose/withState';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RenderCounter from '../../src/RenderCounter/RenderCounter';

const rerender = action('rerender');

const DivWithRenderCounter = withState('state', 'setState', 0)(
  ({ state, setState, onClick, label, children, cloneChild, ...props }) => (
    <div {...props}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setState(state + 1, () => rerender(label, state));
        }}
      >
        {label}
        <RenderCounter />
      </button>
      {children && (cloneChild ? React.cloneElement(children) : children)}
    </div>
  ),
);

DivWithRenderCounter.defaultProps = {
  style: {
    display: 'inline-block',
    border: 'solid 1px grey',
    padding: 5,
  },
};

storiesOf('RenderCounter', module)
  .add('single-level', () => (
    <div>
      <DivWithRenderCounter label="btn1" /><br />
      <DivWithRenderCounter label="btn2" /><br />
      <DivWithRenderCounter label="btn3" />
    </div>
  ))
  .add('multi-level', () => (
    <DivWithRenderCounter label="btn1">
      <DivWithRenderCounter label="btn2">
        <DivWithRenderCounter label="btn3" />
      </DivWithRenderCounter>
    </DivWithRenderCounter>
  ))
  .add('nested', () => (
    <div>
      <DivWithRenderCounter cloneChild label="clone-child-btn1">
        <DivWithRenderCounter label="btn2">
          <DivWithRenderCounter label="btn3" />
        </DivWithRenderCounter>
      </DivWithRenderCounter><br />
      <DivWithRenderCounter label="btn1">
        <DivWithRenderCounter cloneChild label="clone-child-btn2">
          <DivWithRenderCounter label="btn3" />
        </DivWithRenderCounter>
      </DivWithRenderCounter><br />
      <DivWithRenderCounter cloneChild label="clone-child-btn1">
        <DivWithRenderCounter cloneChild label="clone-child-btn2">
          <DivWithRenderCounter label="btn3" />
        </DivWithRenderCounter>
      </DivWithRenderCounter>
    </div>
  ));
