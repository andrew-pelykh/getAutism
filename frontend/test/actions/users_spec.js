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

  it('creates USER_SUCCESS when getting user has been done', () => {
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

  it('creates REGISTRATION_SUCCESS and save token in browser when creating has been done', () => {
    var response = { user: { name: "Naruto", id: "1", token: "token" }}
    var user = { email: "email@gmail.com"}
    nock(host)
      .post('/users')
      .reply(201, response)

    const expectedActions = [
      actions.registration(),
      actions.registrationSuccess(response.user)
    ]
    const store = mockStore()

    store.dispatch(actions.register(user)).then(() => {
      expect(store.getActions()).to.include(expectedActions[0]);
      expect(store.getActions()).to.include(expectedActions[1]);
      expect(localStorage.getItem('token')).to.be.equal('token');
    })
  });

  it('creates REGISTRATION_FAILURE when get 422 response', () => {
    var response = { errors: "Error"}
    var user = { email: "email@gmail.com"}
    nock(host)
      .post('/users')
      .reply(422, response)

    const expectedActions = [
      actions.registration(),
      actions.registrationFailure(response.errors)
    ]
    const store = mockStore()

    store.dispatch(actions.register(user)).then(() => {
      expect(store.getActions()).to.include(expectedActions[0]);
      expect(store.getActions()).to.include(expectedActions[1]);
    })
  });

  it('creates USERS_LIST_SUCCESS when getting users has been done', () => {
    localStorage.setItem('token', 'cg7q8w37gx8q7gd287G' )
    var response = {users: [{ name: "Naruto", id: "1" }]}
    nock(host)
      .get('/users')
      .reply(200, response)

    const expectedActions = [
      actions.usersList(),
      actions.usersListSuccess(response.users)
    ]
    const store = mockStore()

    store.dispatch(actions.getUsersList()).then(() => {
      expect(store.getActions()).to.include(expectedActions[0]);
      expect(store.getActions()).to.include(expectedActions[1]);
    })
  });

  it('creates USERS_LIST_FAILURE when get 403 response',() => {
    localStorage.setItem('token', 'not token' )
    nock(host)
    .get('/users')
    .reply(403)

    const expectedActions = [
      actions.usersList(),
      actions.usersListFailure()
    ]

    const store = mockStore()

    store.dispatch(actions.getUsersList()).then(() => {
      expect(store.getActions()).to.include(expectedActions[0])
      expect(store.getActions()).to.include(expectedActions[1])
    })
  })

});
