// import React from 'react';
// import {
//   renderIntoDocument,
//   findRenderedDOMComponentWithClass,
//   findRenderedDOMComponentWithTag,
//   Simulate
// } from 'react-addons-test-utils';
import { expect } from 'chai';
import components, { RenderCounter } from '../src';
import RenderCounter1 from '../src/RenderCounter';

describe('(entry)index.js', () => {
  it('should export components hierarchically', () => {
    expect(RenderCounter).to.equal(components.RenderCounter);
    expect(RenderCounter).to.equal(RenderCounter1);
  });
});
