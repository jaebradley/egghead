import React from 'react';
import {
  shallow,
} from 'enzyme';
import toJSON from 'enzyme-to-json';

import ExampleComponent from './';

describe('<ExampleComponent />', () => {
  const wrapper = shallow(<ExampleComponent />);

  it('should contain 2 p elements', () => {
    expect(wrapper.find('p').length).toBe(2);
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

  it('first p element should contain correct text', () => {
    expect(wrapper.find('p').first().text()).toBe("Blah blah blah I'm a p element");
  });

  it('should contain title text', () => {
    expect(wrapper.find('[text="Blah blah blah I\'m a Title"]').text()).toBe("<Title />");
  });

  it('should contain title', () => {
    expect(wrapper.find('Title').exists()).toBe(true);
  });

  it('should find component with alt "React logo"', () => {
    expect(wrapper.find({ alt: 'React logo' }).exists()).toBe(true);
  });

  it('matches the snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('on button click changes p text', () => {
    const wrapper = shallow(<ExampleComponent />);
    const button = wrapper.find('button');
    expect(wrapper.find('.button-state').text()).toBe('No!');
    button.simulate('click');
    expect(wrapper.find('.button-state').text()).toBe('Yes!');
  });

  it('on input change, title changes text', () => {

  });
});
