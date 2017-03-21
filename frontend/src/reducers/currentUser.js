import * as types from '../constants/ActionTypes'

export default function (state={}, action) {
  switch(action.type) {
    case types.CURRENT_USER:
      return { isFetching: true };
    case types.CURRENT_USER_SUCCESS:
      return {
        id: action.user.id,
        name: action.user.name,
        isFetching: false
      };
    case types.CURRENT_USER_FAILURE:
      return { isFetching: false };
    case types.LOGIN:
      return { isFetching: true };
    case types.LOGIN_SUCCESS:
      return {
        id: action.user.id,
        name: action.user.name,
        isFetching: false
      };
    case types.LOGIN_FAILURE:
      return { isFetching: false };
  }
  return state;
}
