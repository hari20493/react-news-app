import React from 'react';
import { shallow } from 'enzyme';
import Nav_component from './nav_component';

describe('<Nav_component />', () => {
  test('renders', () => {
    const wrapper = shallow(<Nav_component />);
    expect(wrapper).toMatchSnapshot();
  });
});
