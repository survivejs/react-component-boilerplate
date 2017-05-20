import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import PureHello from '../src/PureHello';
import Welcome from './Welcome';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
  ));

storiesOf('PureHello', module)
  .add('with name', () => (
    <PureHello onClick={action('click')} name="Storybook" />
  ))
  .add('with style', () => (
    <PureHello name="style" style={{ width: 200, border: 'solid 1px grey', padding: 10, borderRadius: 5 }} />
  ));
