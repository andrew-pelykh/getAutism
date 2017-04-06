import { List, Map, fromJS }from 'immutable'
import * as types from '../constants/ActionTypes'

export default function(state=Map({chatRooms: List()}), action) {
  switch(action.type){
    case types.CHAT_ROOMS_LIST:
      return state.merge({isFetching: true})
    case types.CHAT_ROOMS_LIST_SUCCESS:
      let chats = state.get('chatRooms').concat(fromJS(action.chatRooms))
      return state.merge({chatRooms: chats, isFetching: false})
    case types.CHAT_ROOMS_LIST_FAILURE:
      return state.merge({isFetching: false})
  }
  return state
}
