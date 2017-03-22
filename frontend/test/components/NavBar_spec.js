import { NavBar } from '../../src/containers/NavBar';
import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';

describe('<NavBar />', () => {
  it('renders the navigarion bar', () => {
    const user = { name: 'Jojo', id: '1'}
    const wrapper = shallow(<NavBar user={user} />);
      expect(wrapper.contains('NavBar')).to.equal(true);
      expect(wrapper.contains('Jojo')).to.equal(true);
  });
});
