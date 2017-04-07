import axios from 'axios'
import * as types from '../constants/ActionTypes'
import { logOutIfUnauthorized } from '../helpers/application_helper'

export const messagesList = () => ({
  type: types.MESSAGES_LIST
})

export const messagesListSuccess = messages => ({
  type: types.MESSAGES_LIST_SUCCESS,
  messages
})

export const messagesListFailure = errors => ({
  type: types.MESSAGES_LIST_FAILURE,
  errors
})

export function getMessages(id, page) {
  return dispatch => {
    dispatch(messagesList())
    return axios.get('/messages', { params: {page: page, id: id}})
    .then(response => {
      dispatch(messagesListSuccess(response.data.messages))
    })
    .catch(error => {
      dispatch(messagesListFailure(error.response.data.errors))
      dispatch(logOutIfUnauthorized(errors.response.status))
    })
  }
}
