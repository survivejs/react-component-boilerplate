import React from 'react';
import { storiesOf } from '@storybook/react';
import Demo from '../src/demo';

storiesOf('Demo', module)
  .add('demo with use case 1', () => (
    <Demo />
  ))
  .add('demo with use case 2', () => (
    <Demo />
  ));
