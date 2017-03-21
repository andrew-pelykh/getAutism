import * as types from '../constants/ActionTypes'

export default function (state={}, action) {
  switch(action.type) {
    case types.CURRENT_USER_SUCCESS:
      return {}
    case types.CURRENT_USER_FAILURE:
      return action.errors
    case types.LOGIN_SUCCESS:
      return {}
    case types.LOGIN_FAILURE:
      return action.errors
  }
  return state;
}
