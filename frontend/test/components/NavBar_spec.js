import { NavBar } from '../../src/containers/NavBar';
import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import { Map } from 'immutable'

describe('<NavBar />', () => {
  it('renders the navigarion bar', () => {
    const user = Map({ name: 'Jojo', id: '1'})
    const pages = Map({drawer: false})
    const wrapper = shallow(<NavBar currentUser={user} pages={pages}/>)
  });
});
