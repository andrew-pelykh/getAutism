import { Map } from 'immutable'
import * as types from '../constants/ActionTypes'

export default function(state=Map({ chatRoom: Map()}), action) {
  switch(action.type) {
    case types.CHAT_ROOM:
      return state.merge({isFetching: true})
    case types.CHAT_ROOM_SUCCESS:
      return state.merge({isFetching: false, chatRoom: action.chatRoom})
    case types.CHAT_ROOM_FAILURE:
      return state.merge({isFetching: false})
    case types.CREATE_CHAT_ROOM_SUCCESS:
      return state.merge({chatRoom: action.chatRoom})
  }
  return state
}
