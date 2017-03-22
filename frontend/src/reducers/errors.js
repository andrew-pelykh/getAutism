import { Map } from 'immutable'

export default function (state = Map(), action) {
  if (action.errors)
    return Map(action.errors)
  return Map()
}
