import reducer from '../../src/reducers/user';
import * as usersActions from '../../src/actions/users'
import { expect } from 'chai';

describe('user reducer', () => {
  it('should toggle isFetching on USER action', () => {
    var newState = reducer({}, usersActions.user());
    expect(newState.isFetching).to.equal(true);
  });

  it('should toggle isFetching off on USER_SUCCESS action', () => {
        var user = { name: 'Jojo', id: 1}
    var newState = reducer({}, usersActions.userSuccess(user));
    expect(newState.isFetching).to.equal(false);
  });

  it('should toggle isFetching off on USER_FAILURE action', () => {
    var newState = reducer({}, usersActions.userFailure());
    expect(newState.isFetching).to.equal(false);
  });

  it('should return user on  USER_SUCCESS action', () => {
    var user = { name: 'Jojo', id: 1}
    var newState = reducer({}, usersActions.userSuccess(user));
    expect(newState.name).to.equal('Jojo');
  });
});
