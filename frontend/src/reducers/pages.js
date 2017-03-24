import { SET_DRAWER } from '../constants/ActionTypes'
import { Map } from 'immutable'

export default function (state = Map(), action) {
  switch(action.type) {
    case SET_DRAWER:
      return state.merge({ drawer: action.value })
  }
  return state
}
