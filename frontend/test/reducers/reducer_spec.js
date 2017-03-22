import reducer from '../../src/reducer';
import * as authActions from '../../src/actions/auth'
import { expect } from 'chai';

describe('Root reducer',() => {

  it('should reset state tree after logout',() => {
    var newState = reducer({"Some": "state"}, authActions.logout());
    expect(newState).to.deep.equal({});
  })

})
