import axios from 'axios'
import { hashHistory } from 'react-router'
import { getToken, removeToken, setToken } from '../helpers/token_helper'
import * as types from '../constants/ActionTypes'

export const currentUser = () => ({
  type: types.CURRENT_USER
})

export const currentUserSuccess = (user) => ({
  type: types.CURRENT_USER_SUCCESS,
  user
})

export const currentUserFailure = (errors) => ({
  type: types.CURRENT_USER_FAILURE,
  errors
})

export function getCurrentUser() {
  return dispatch => {
    dispatch(currentUser())
    const config = {
      headers: {'X-Api-Key': getToken()}
    }
    return axios.get('/current_user', config)
    .then(response => {
      dispatch(currentUserSuccess(response.data.user))
    })
    .catch(error => {
      dispatch(currentUserFailure(error.response.data.errors))
      if (error.response.status == 403) {
        removeToken()
        hashHistory.push(`/`)
      }
    })
  }
}

export const user = () => ({
  type: types.USER
})

export const userSuccess = (user) => ({
  type: types.USER_SUCCESS,
  user
})

export const userFailure = (errors) => ({
  type: types.USER_FAILURE,
  errors
})

export function getUser(id) {
  return dispatch => {
    dispatch(user())
    const config = {
      headers: {'X-Api-Key': getToken()}
    }
    return axios.get('/users/' + id, config)
    .then(response => {
      dispatch(userSuccess(response.data.user))
    })
    .catch(error => {
      dispatch(userFailure(error.response.data.errors))
      if (error.response.status == 403) {
        removeToken()
        hashHistory.push(`/`)
      }
    })
  }
}

export const registration = () => ({
  type: types.REGISTRAION
})

export const registrationSuccess = (user) => ({
  type: types.REGISTRATION_SUCCESS,
  user
})

export const registrationFailure = (errors) => ({
  type: types.REGISTRAION_FAILURE,
  errors
})

export function register(user) {
  return dispatch => {
    dispatch(registration())
    return axios.post('/users', user)
    .then(response => {
      setToken(response.data.user.token)
      dispatch(registrationSuccess(response.data.user))
      hashHistory.push('/')
    })
    .catch(error => {
      dispatch(registrationFailure(error.response.data.errors))
    })
  }
}


export const usersList = () => ({
  type: types.USERS_LIST
})

export const usersListSuccess = users => ({
  type: types.USERS_LIST_SUCCESS,
  users
})

export const usersListFailure = () => ({
  type: types.USERS_LIST_FAILURE
})

export function getUsersList() {
  return dispatch => {
    dispatch(usersList())
    const config = {
      headers:  {'X-Api-Key': getToken()}
    }
    return axios.get('/users', config)
    .then(response => {
      dispatch(usersListSuccess(response.data.users))
    })
    .catch(error => {
      dispatch(usersListFailure())
      if (error.response.status == 403) {
        removeToken()
        hashHistory.push(`/`)
      }
    })
  }
}

export const userUpdate = () => ({
  type: types.USER_UPDATE
})

export const userUpdateSuccess = user => ({
  type: types.USER_UPDATE_SUCCESS,
  user
})

export const userUpdateFailure = errors => ({
  type: types.USER_UPDATE_FAILURE,
  errors
})

export function updateUser(user) {
  return dispatch => {
    dispatch(userUpdate())
    var instance = axios.create()
    instance.defaults.headers.common['X-Api-Key'] = getToken()
    return instance.patch('/users', user)
    .then(response => {
      dispatch(userUpdateSuccess(response.data.user))
    })
    .catch(error => {
      dispatch(userUpdateFailure())
      if (error.response.status == 403) {
        removeToken()
        hashHistory.push(`/`)
      }
    })
  }
}
