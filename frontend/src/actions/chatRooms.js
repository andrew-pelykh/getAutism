import * as types from '../constants/ActionTypes'
import axios from 'axios'
import { getToken } from '../helpers/token_helper'
import { logOutIfUnauthorized } from '../helpers/application_helper'

export const chatRoomsList = () => ({
  type:types.CHAT_ROOMS_LIST
})

export const chatRoomsListSuccess = chatRooms => ({
  type: types.CHAT_ROOMS_LIST_SUCCESS,
  chatRooms
})

export const chatRoomsListFailure = errors => ({
  type: types.CHAT_ROOMS_LIST_FAILURE,
  errors
})

export const chatRoomsListEnd = () => ({
  type: types.CHAT_ROOMS_LIST_END
})

export function getChatRoomsList(page) {
  return dispatch => {
    dispatch(chatRoomsList())
    var instance = axios.create()
    instance.defaults.headers.common['X-Api-Key'] = getToken()
    return instance.get('/chat_rooms', { params: { page: page }})
      .then(response => {
        if(response.data.chatRooms < 20)
          dispatch(chatRoomsListEnd())
        dispatch(chatRoomsListSuccess(response.data.chatRooms))
      })
      .catch(error => {
        dispatch(chatRoomsListFailure(error.response.data.errors))
        dispatch(logOutIfUnauthorized(error.response.status))
      })
  }
}
