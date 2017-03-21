import { combineReducers } from 'redux';
import currentUser from './reducers/currentUser';
import errors from './reducers/errors'

const reducer = combineReducers({
  currentUser,
  errors
});

export default reducer;
