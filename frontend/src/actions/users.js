import axios from 'axios';
import { hashHistory } from 'react-router'
import { getToken, removeToken } from '../helpers/token_helper'
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
    dispatch(currentUser());
    var config = {
      headers: {'X-Api-Key': getToken()}
    };
    return axios.get('/current_user', config)
    .then(response => {
      dispatch(currentUserSuccess(response.data.user))
    })
    .catch(error => {
      dispatch(currentUserFailure(error.response.data.errors))
      if (error.response.status == 403) {
        removeToken();
        hashHistory.push(`/`);
      }
    })
  }
}
