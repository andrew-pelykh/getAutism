import * as types from '../constants/ActionTypes'

export default function (state={}, action) {
  switch(action.type) {
    case types.CURRENT_USER:
      return { isFetching: true };
    case types.CURRENT_USER_SUCCESS:
      return action.user;
    case types.CURRENT_USER_FAILURE:
      return { isFetching: false };
  }
  return state;
}
