import { Map } from 'immutable'
import * as types from '../constants/ActionTypes'

const initialState = Map({
  chatRoom: Map(),
  isFetching: false
})
export default function(state = initialState, action) {
  switch(action.type) {
    case types.CHAT_ROOM: return setIsFetching(state, true)
    case types.CHAT_ROOM_SUCCESS: return setChatRoom(state, action.chatRoom)
    case types.CHAT_ROOM_FAILURE: return  setIsFetching(state, false)
    case types.CREATE_CHAT_ROOM_SUCCESS: return setChatRoom(state, action.chatRoom)
    default: return state
  }
}

const setIsFetching = (state, value) => state.merge({isFetching: value})

const setChatRoom = (state, chat) => (
  state.merge({
    chatRoom: chat,
    isFetching: false
  })
)
