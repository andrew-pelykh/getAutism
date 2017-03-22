import { combineReducers } from 'redux';
import { Map } from 'immutable'
import currentUser from './reducers/currentUser';
import errors from './reducers/errors'
import user from './reducers/user'

const appReducer = combineReducers({
  currentUser,
  user,
  errors
})

const reducer = (state = {}, action) => {
  if (action.type === 'LOGOUT') {
    return {}
  }
  return appReducer(state, action)
}

export default reducer;
