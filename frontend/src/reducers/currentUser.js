import { Map } from 'immutable'
import * as types from '../constants/ActionTypes'

export default function (state = Map(), action) {
  switch(action.type) {
    case types.CURRENT_USER:
      return state.merge({ isFetching: true });
    case types.CURRENT_USER_SUCCESS:
      var user = Map(action.user).merge({ isFetching: false })
      return state.merge(user);
    case types.CURRENT_USER_FAILURE:
      return state.merge({ isFetching: false });
    case types.LOGIN:
      return state.merge({ isFetching: true });
    case types.LOGIN_SUCCESS:
      var user = Map(action.user).merge({ isFetching: false })
      return state.merge(user);
    case types.LOGIN_FAILURE:
      return state.merge({ isFetching: false });
  }
  return state;
}
