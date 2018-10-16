import React from 'react';
import {
  shallow,
} from 'enzyme';
import toJSON from 'enzyme-to-json';

import ExampleComponent from './';

describe('<ExampleComponent />', () => {
  const wrapper = shallow(<ExampleComponent />);

  it('should contain 3 p elements', () => {
    expect(wrapper.find('p').length).toBe(3);
  });

  it('should contain an element with class name "example content"', () => {
    expect(wrapper.find('.example-content').exists()).toBe(true);
  });

  it('should contain a header with two children', () => {
    expect(wrapper.find('header').children().length).toBe(3);
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
    const wrapper = shallow(<ExampleComponent />);
    const input = wrapper.find('input');
    expect(wrapper.find('h2').text()).toEqual('');
    input.simulate('change', { currentTarget: { value: 'foobar' } });
    expect(wrapper.find('h2').text()).toEqual('foobar');
  });

  it('updates className with new state', () => {
    const wrapper = shallow(<ExampleComponent />);
    expect(wrapper.find('.blue').length).toBe(1);
    expect(wrapper.find('.red').length).toBe(0);
    wrapper.setState({ mainColor: 'red' });
    expect(wrapper.find('.blue').length).toBe(0);
    expect(wrapper.find('.red').length).toBe(1);
  });

  it('calls componentDidMount, updates p tag text', () => {
    jest.spyOn(ExampleComponent.prototype, 'componentDidMount');
    const wrapper = shallow(<ExampleComponent />);
    expect(ExampleComponent.prototype.componentDidMount.mock.calls.length).toBe(1);
    expect(wrapper.find('.lifeCycleMethod').text()).toEqual('componentDidMount');
  });

  it('setProps will call componentReceiveProps', () => {
    jest.spyOn(ExampleComponent.prototype, 'componentWillReceiveProps');
    const wrapper = shallow(<ExampleComponent />);
    wrapper.setProps({ hide: true });
    expect(ExampleComponent.prototype.componentWillReceiveProps.mock.calls.length).toBe(1);
    expect(wrapper.find('.lifeCycleMethod').text()).toEqual('componentWillReceiveProps');
  });

  it('handleStrings function returns correctly', () => {
    const wrapper = shallow(<ExampleComponent />);
    expect(wrapper.instance().handleStrings('foobar')).toBe(false);
    expect(wrapper.instance().handleStrings('jaebaebae')).toBe(true);
  });
});
