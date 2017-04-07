import * as types from '../constants/ActionTypes'
import { Map } from 'immutable'

export default function (state=Map(), action) {
  switch(action.type) {
    case types.USER:
      return state.merge({ isFetching: true })

    case types.USER_SUCCESS:
      var user = Map(action.user).merge({ isFetching: false })
      return state.merge(user)

    case types.USER_FAILURE:
      return state.merge({ isFetching: false })

    case types.USER_UPDATE:
      return state.merge({ isFetching: true })

    case types.USER_UPDATE_SUCCESS:
      var user = Map(action.user).merge({ isFetching: false })
      return state.merge(user)

    case types.USER_UPDATE_FAILURE:
      return state.merge({ isFetching: false })
  }
  return state
}
