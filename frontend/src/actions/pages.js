import { SET_DRAWER } from '../constants/ActionTypes'

export function setDrawer(value) {
  return dispatch => dispatch({ type: SET_DRAWER, value: value  })
}
