import React from 'react';
import {
  shallow,
} from 'enzyme';

import ExampleComponent from './';

describe('<ExampleComponent />', () => {
  const wrapper = shallow(<ExampleComponent />);

  it('should contain 1 p element', () => {
    expect(wrapper.find('p').length).toBe(1);
  });

  it('should contain an element with class name "example content"', () => {
    expect(wrapper.find('.example-content').exists()).toBe(true);
  });

  it('should contain a header with two children', () => {
    expect(wrapper.find('header').children().length).toBe(2);
  });

  it('should contain a header with class name "jae"', () => {
    expect(wrapper.find('header').hasClass('jae')).toBe(true);
  });

  it('p element should contain correct text', () => {
    expect(wrapper.find('p').text()).toBe("Blah blah blah I'm a p element");
  });
});
