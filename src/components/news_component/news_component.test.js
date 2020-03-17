import React from 'react';
import { shallow } from 'enzyme';
import News_component from './news_component';

describe('<News_component />', () => {
  test('renders', () => {
    const wrapper = shallow(<News_component />);
    expect(wrapper).toMatchSnapshot();
  });
});
