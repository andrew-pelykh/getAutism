import reducer from '../../src/reducers/currentUser';
import * as authActions from '../../src/actions/auth'
import * as usersActions from '../../src/actions/users'
import { expect } from 'chai';

describe('currentUser reducer', () => {
  it('should toggle isFetching on CURRENT_USER action', () => {
    var newState = reducer({}, usersActions.currentUser());
    expect(newState.isFetching).to.equal(true);
  });

  it('should return user and and change isFetching to false on CURRENT_USER_SUCCESS action', () => {
    var user = { name: 'Jojo', id: 1}
    var newState = reducer({}, usersActions.currentUserSuccess(user));
    expect(newState.isFetching).to.equal(false);
    expect(newState.name).to.equal('Jojo');
  });

  it('should change isFetching to false on CURRENT_USER_FAILURE action', () => {
    var user = { name: 'Jojo', id: 1}
    var newState = reducer({}, usersActions.currentUserFailure(user));
    expect(newState.isFetching).to.equal(false);
  });

  it('should toggle isFetching on LOGIN action', () => {
    var newState = reducer({}, authActions.login());
    expect(newState.isFetching).to.equal(true);
  });

  it('should return user and and change isFetching to false on  LOGIN_SUCCESS action', () => {
    var user = { name: 'Jojo', id: 1}
    var newState = reducer({}, authActions.loginSuccess(user));
    expect(newState.isFetching).to.equal(false);
    expect(newState.name).to.equal('Jojo');
  });

  it('should change isFetching to false on LOGIN_FAILURE action', () => {
    var newState = reducer({}, authActions.loginFailure());
    expect(newState.isFetching).to.equal(false);
  });
});
