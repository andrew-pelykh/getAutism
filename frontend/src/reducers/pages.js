import * as types from '../constants/ActionTypes'
import { Map } from 'immutable'

export default function (state = Map(), action) {
  switch(action.type) {
    case types.SET_DRAWER:
      return state.merge({ drawer: action.value })
    case types.SET_POST_DIALOG:
      return state.merge({ postDialog: action.value })
    case types.POST_CREATE_SUCCESS:
      return state.merge({ postDialog: false })
    case types.USERS_LIST_END:
      return state.merge({usersListEnd: true })
    case types.POSTS_LIST_END:
      return state.merge({ postsListEnd: true })
  }
  return state
}
