import axios from 'axios';
import { hashHistory } from 'react-router'
import { setToken } from '../helpers/token_helper'
import * as types from '../constants/ActionTypes'

export const login = () => ({
  type: types.LOGIN
})

export const loginSuccess = user => ({
  type: types.LOGIN_SUCCESS,
  user
})

export const loginFailure = errors => ({
  type: types.LOGIN_FAILURE,
  errors
})

export function logIn(user) {
  return dispatch => {
    dispatch(login())
    return axios.post('/sessions', user)
    .then(response => {
      setToken(response.data.user.token)
      dispatch(loginSuccess(response.data.user))
      hashHistory.push('/');
    })
    .catch(error => {
      dispatch(loginFailure(error.response.data.errors))
    })
  }
}
