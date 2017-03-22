import { NavBar } from '../../src/containers/NavBar';
import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import { Map } from 'immutable'

describe('<NavBar />', () => {
  it('renders the navigarion bar', () => {
    const user = Map({ name: 'Jojo', id: '1'})
    const wrapper = shallow(<NavBar currentUser={user} />)
    expect(wrapper.contains('NavBar')).to.equal(true);
    expect(wrapper.contains('Jojo')).to.equal(true);
  });
});
