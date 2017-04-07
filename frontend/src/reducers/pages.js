import * as types from '../constants/ActionTypes'
import { Map, List, fromJS   } from 'immutable'

export default function (state = Map({ photos: List()}), action) {
  switch(action.type) {

    case types.SET_DRAWER:
      return state.merge({ drawer: action.value })

    case types.POST_CREATE_SUCCESS:
      return state.merge({ photos: List(), previewsMax: false })

    case types.USERS_LIST_END:
      return state.merge({usersListEnd: true })

    case types.POSTS_LIST_END:
      return state.merge({ postsListEnd: true })

    case types.CHAT_ROOMS_LIST_END:
      return state.merge({ chatRoomsListEnd: true })

    case types.UPLOAD_PHOTOS:
      var photos = state.get('photos').concat(fromJS(action.photos))
      if (photos.count() <= 10)
        return state.merge({ photos: photos, previewsMax: false })
      else
      return state.merge({previewsMax: true})

    case types.DELETE_PREVIEW:
      return state.merge({photos: state.get('photos').delete(action.n), previewsMax: false})
  }
  return state
}
