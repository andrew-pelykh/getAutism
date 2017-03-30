import { Map } from 'immutable'
import { expect } from 'chai'
import reducer from '../../src/reducers/usersList'
import * as usersActions from '../../src/actions/users'

describe('usersList reducer', () => {

  it('should set isFetching to true on USERS_LIST', () => {
    var newState = reducer(Map(), usersActions.usersList())
    expect(newState.get('isFetching')).to.be.ok
  })

  it('should return users list on USERS_LIST_SUCCESS', () => {
    var users = [{name:'1'},{name:'2'}]
    var newState = reducer(Map(), usersActions.usersListSuccess(users))
    expect(newState.get('users').count()).to.be.equal(2)
  })

  it('should set isFetching to false on USERS_LIST_FAILURE', () => {
    var newState = reducer(Map(), usersActions.usersListFailure())
    expect(newState.get('isFetching')).not.to.be.ok
  })
})
