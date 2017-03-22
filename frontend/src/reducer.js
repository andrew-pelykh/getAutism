import { combineReducers } from 'redux';
import currentUser from './reducers/currentUser';
import errors from './reducers/errors'

const appReducer = combineReducers({
  currentUser,
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
