import * as types from '../constants/ActionTypes'
import { Map, fromJS } from 'immutable'

export default function (state=Map({posts:Map()}), action) {
  switch(action.type) {
    case types.POSTS_LIST:
      return state.merge({ isFetching: true })

    case types.POSTS_LIST_SUCCESS:
      let posts = fromJS({posts: action.posts}).merge({ isFetching: false })
      return state.merge(posts)

    case types.POSTS_LIST_FAILURE:
      return state.merge({ isFetching: false })
  }
  return state
}
