import { combineReducers } from 'redux'
import { Map } from 'immutable'
import currentUser from './reducers/currentUser'
import errors from './reducers/errors'
import user from './reducers/user'
import pages from './reducers/pages'
import usersList from './reducers/usersList'
import postsList from './reducers/postsList'
import chatRoomsList from './reducers/chatRoomsList'
import chatRoom from './reducers/chatRoom'
import messagesList from './reducers/messagesList'

const appReducer = combineReducers({
  currentUser,
  user,
  pages,
  errors,
  usersList,
  postsList,
  chatRoomsList,
  chatRoom,
  messagesList
})

const reducer = (state = {}, action) => {
  if (action.type === 'LOGOUT') {
    return {
      currentUser: Map(),
      errors: Map()
    }
  }
  return appReducer(state, action)
}

export default reducer
