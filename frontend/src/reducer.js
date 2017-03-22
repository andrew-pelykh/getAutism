import { combineReducers } from 'redux';
import currentUser from './reducers/currentUser';
import errors from './reducers/errors'
import user from './reducers/user'

const appReducer = combineReducers({
  currentUser,
  user,
  errors
})

const reducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = {}
    return state
  }
  return appReducer(state, action)
}

export default reducer;
