import * as types from '../constants/ActionTypes'

export default function (state={}, action) {
  switch(action.type) {
    case types.USER:
      return { isFetching: true };
    case types.USER_SUCCESS:
      return {
        id: action.user.id,
        name: action.user.name,
        isFetching: false
      };
    case types.USER_FAILURE:
      return { isFetching: false };
  }
  return state;
}
