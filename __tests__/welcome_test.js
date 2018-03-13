import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Welcome from '../examples/Welcome';

Enzyme.configure({ adapter: new Adapter() });

test('Welcome component should return correct output', () => {
  const wrapper = shallow(<Welcome text="Welcome to React Component Boilerplate" />);

  expect(wrapper.html()).toEqual('<div>Welcome to React Component Boilerplate</div>');
  expect(wrapper.text()).toEqual('Welcome to React Component Boilerplate');
});
