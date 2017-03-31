import * as types from '../constants/ActionTypes'
import { Map, fromJS, List } from 'immutable'

export default function (state=Map({posts:List()}), action) {
  switch(action.type) {
    case types.POSTS_LIST:
      return state.merge({ isFetching: true })

    case types.POSTS_LIST_SUCCESS:
      let posts = state.get('posts').concat(fromJS(action.posts))
      return Map({ isFetching: false, posts: posts })

    case types.POSTS_LIST_FAILURE:
      return state.merge({ isFetching: false })
  }
  return state
}
