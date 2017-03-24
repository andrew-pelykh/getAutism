import * as types from '../constants/ActionTypes'
import { Map, fromJS } from 'immutable'

export default function (state=Map({users:Map()}), action) {
  switch(action.type) {
    case types.USERS_LIST:
      return state.merge({ isFetching: true })

    case types.USERS_LIST_SUCCESS:
      let users = fromJS({users: action.users}).merge({ isFetching: false })
      return state.merge(users)

    case types.USERS_LIST_FAILURE:
      return state.merge({ isFetching: false })
  }
  return state
}
