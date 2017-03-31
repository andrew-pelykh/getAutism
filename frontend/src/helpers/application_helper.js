import { removeToken } from './token_helper'
import { hashHistory } from 'react-router'
import { logout } from '../actions/auth'

export function isMobile() {
  return (/Mobi/.test(navigator.userAgent))? true : false
}

export function logOutIfUnauthorized(status) {
  return dispatch => {
    if (status == 403) {
      removeToken()
      dispatch(logout())
      hashHistory.push(`/login`)
    }
  }
}
