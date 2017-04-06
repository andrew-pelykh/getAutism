import { SET_DRAWER, SET_POST_DIALOG, UPLOAD_PHOTOS, DELETE_PREVIEW } from '../constants/ActionTypes'

export function setDrawer(value) {
  return dispatch => dispatch({ type: SET_DRAWER, value })
}

export function setPostDialog(value) {
  return dispatch => dispatch({ type: SET_POST_DIALOG, value })
}

export function uploadPhotos(photos) {
  return dispatch => dispatch({ type: UPLOAD_PHOTOS, photos })
}

export function deletePreview(n){
  return dispatch => dispatch({ type: DELETE_PREVIEW, n })
}
