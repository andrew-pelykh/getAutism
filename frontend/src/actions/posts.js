import axios from 'axios'
import { hashHistory } from 'react-router'
import * as types from '../constants/ActionTypes'
import { getToken, removeToken } from '../helpers/token_helper'

export const postsList = () => ({
  type: types.POSTS_LIST
})

export const postsListSuccess = posts => ({
  type: types.POSTS_LIST_SUCCESS,
  posts
})

export const postsListFailure = () => ({
  type: types.POSTS_LIST_FAILURE
})

export function getPostsList() {
  return dispatch => {
    dispatch(postsList())
    const config = {
      headers:  {'X-Api-Key': getToken()}
    }
    return axios.get('/posts', config)
    .then(response => {
      dispatch(postsListSuccess(response.data.posts))
    })
    .catch(error => {
      dispatch(postsListFailure())
      if (error.response.status == 403) {
        removeToken()
        hashHistory.push(`/`)
      }
    })
  }
}
