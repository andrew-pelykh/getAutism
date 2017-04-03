import * as types from '../constants/ActionTypes'
import { Map, fromJS, List } from 'immutable'

export default function (state=Map({users:List()}), action) {
  switch(action.type) {
    case types.USERS_LIST:
      return state.merge({ isFetching: true })

    case types.USERS_LIST_SUCCESS:
      let users = state.get('users').concat(fromJS(action.users))
      return Map({ isFetching: false, users: users })

    case types.USERS_LIST_FAILURE:
      return state.merge({ isFetching: false })
  }
  return state
}
