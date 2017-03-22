import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../src/actions/users'
import nock from 'nock'
import { expect } from 'chai'
import chai from 'chai';
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'

const host = 'http://localhost';

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

describe('async users actions', () => {

  const middlewares = [ thunk ]
  const mockStore = configureMockStore(middlewares)
  const config = {
    headers: {'X-Api-Key': 'cg7q8w37gx8q7gd287G'}
  };

  afterEach(() => {
    nock.cleanAll()
  })

  it('creates CURRENT_USER_SUCCESS when getting current user has been done', () => {
      localStorage.setItem('token', 'cg7q8w37gx8q7gd287G' )
    var response = { user: { name: "Naruto", id: "1" }}
    nock(host)
      .get('/current_user')
      .reply(200, response)

    const expectedActions = [
      actions.currentUser(),
      actions.currentUserSuccess(response.user)
    ]
    const store = mockStore()

    store.dispatch(actions.getCurrentUser()).then(() => {
      expect(store.getActions()).to.include(expectedActions[0]);
      expect(store.getActions()).to.include(expectedActions[1]);
    })
  });

  it('creates CURRENT_USER_FAILURE and deletes token when get 403 response', () => {
    localStorage.setItem('token', 'cg7q8w37gx8q7gd287G' )
    var response = { errors: "Error"}
    nock(host)
      .get('/current_user')
      .reply(403, response)

    const expectedActions = [
      actions.currentUser(),
      actions.currentUserFailure(response.errors)
    ]
    const store = mockStore()

    store.dispatch(actions.getCurrentUser()).then(() => {
      expect(localStorage.getItem('token')).to.not.be.ok;
      expect(store.getActions()).to.include(expectedActions[0]);
      expect(store.getActions()).to.include(expectedActions[1]);
    })
  });

  it('creates USER_SUCCESS when gettinguser has been done', () => {
      localStorage.setItem('token', 'cg7q8w37gx8q7gd287G' )
    var response = { user: { name: "Naruto", id: "1" }}
    nock(host)
      .get('/users/1')
      .reply(200, response)

    const expectedActions = [
      actions.user(),
      actions.userSuccess(response.user)
    ]
    const store = mockStore()

    store.dispatch(actions.getUser(1)).then(() => {
      expect(store.getActions()).to.include(expectedActions[0]);
      expect(store.getActions()).to.include(expectedActions[1]);
    })
  });

  it('creates USER_FAILURE and deletes token when get 403 response', () => {
    nock(host)
      .get('/users/1')
      .reply(403)

    const expectedActions = [
      actions.user(),
      actions.userFailure()
    ]
    const store = mockStore()

    store.dispatch(actions.getUser(1)).then(() => {
      expect(localStorage.getItem('token')).to.not.be.ok;
      expect(store.getActions()).to.include(expectedActions[0]);
      expect(store.getActions()).to.include(expectedActions[1]);
    })
  });

  it('creates USER_FAILURE when get 404 response', () => {
    var response = { errors: "Error"}
    nock(host)
      .get('/users/2')
      .reply(404, response)

    const expectedActions = [
      actions.user(),
      actions.userFailure(response.errors)
    ]
    const store = mockStore()

    store.dispatch(actions.getUser(2)).then(() => {
      expect(store.getActions()).to.include(expectedActions[0]);
      expect(store.getActions()).to.include(expectedActions[1]);
    })
  });
});
