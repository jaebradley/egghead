import React from 'react';
import {
  shallow,
  mount,
} from 'enzyme';
import toJSON from 'enzyme-to-json';

import Link from './';

describe('<Link /> shallow rendering', () => {
  const address = "www.google.com";

  it('a tag node renders href correctly', () => {
    const wrapper = shallow(<Link address={address} />);
    expect(wrapper.props().href).toBe(address);
  });

  it('returns null with true hide prop', () => {
    const wrapper = shallow(<Link hide={false} />);
    expect(wrapper.find('a').length).toBe(1);
    wrapper.setProps({ hide: true });
    expect(wrapper.get(0)).toBeNull();
  });

  it('matches the snapshot', () => {
    const wrapper = shallow(<Link />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});

describe('<Link /> mount rendering', () => {
  const address = "www.google.com";

  it('a tag node renders href correctly', () => {
    const wrapper = mount(<Link address={address} />);
    expect(wrapper.find('a').props().href).toBe(address);
    wrapper.unmount();
  });

  it('returns null with true hide prop', () => {
    const wrapper = mount(<Link hide={false} />);
    expect(wrapper.find('a').length).toBe(1);
    wrapper.setProps({ hide: true });
    expect(wrapper.find('a').length).toBe(0);
    wrapper.unmount();
  });
});
