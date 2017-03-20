import { NavBar } from '../../src/containers/NavBar';
import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';

describe('<NavBar />', () => {
  it('renders the navigarion bar', () => {
    const wrapper = shallow(<NavBar />);
      expect(wrapper.contains('NavBar')).to.equal(true);
  });
});
