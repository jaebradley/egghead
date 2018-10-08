import React from 'react';
import {
  shallow,
} from 'enzyme';
import toJSON from 'enzyme-to-json';

import Link from './';

describe('<Link />', () => {
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
});
