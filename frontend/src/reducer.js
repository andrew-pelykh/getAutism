import { combineReducers } from 'redux';
import currentUser from './reducers/currentUser';

const reducer = combineReducers({
  currentUser
});

export default reducer;
