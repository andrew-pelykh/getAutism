import { SET_DRAWER, SET_POST_DIALOG } from '../constants/ActionTypes'

export function setDrawer(value) {
  return dispatch => dispatch({ type: SET_DRAWER, value })
}

export function setPostDialog(value) {
  return dispatch => dispatch({ type: SET_POST_DIALOG, value })
}
