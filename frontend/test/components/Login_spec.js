import { Login } from '../../src/containers/Login';
import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';

describe('<Login />', () => {
  it('renders the logining form', () => {
    const wrapper = shallow(<Login />);
      expect(wrapper.find('login-form')).to.be.ok;
  });
});
