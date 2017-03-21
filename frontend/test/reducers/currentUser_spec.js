import reducer from '../../src/reducers/currentUser';
import * as actions from '../../src/actions/users'
import { expect } from 'chai';

describe('currentUser reducer', () => {
  it('should toggle isFetching on CURRENT_USER action', () => {
    var newState = reducer({}, actions.currentUser());
    expect(newState.isFetching).to.equal(true);
  });

  it('should return user and and change isFetching to false on CURRENT_USER_SUCCESS action', () => {
    var user = { name: 'Jojo', id: 1}
    var newState = reducer({}, actions.currentUserSuccess(user));
    expect(newState.isFetching).to.equal(false);
    expect(newState.name).to.equal('Jojo');
  });

  it('should return errors and change isFetching to false', () => {
    var user = { name: 'Jojo', id: 1}
    var newState = reducer({}, actions.currentUserFailure(user));
    expect(newState.isFetching).to.equal(false);
  });
});
