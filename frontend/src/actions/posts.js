import axios from 'axios'
import { hashHistory } from 'react-router'
import * as types from '../constants/ActionTypes'
import { getToken, removeToken } from '../helpers/token_helper'
import { logOutIfUnauthorized } from '../helpers/application_helper'

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
      dispatch(logOutIfUnauthorized(error.response.status))
    })
  }
}

export const postCreate = () => ({
  type: types.POST_CREATE
})

export const postCreateSuccess = post => ({
  type: types.POST_CREATE_SUCCESS,
  post
})

export const postCreateFailure = errors => ({
  type: types.POST_CREATE_FAILURE,
  errors
})

export function createPost(post) {
  return dispatch => {
    dispatch(postCreate())
    var instance = axios.create()
    instance.defaults.headers.common['X-Api-Key'] = getToken()
    return instance.post('/posts', post)
    .then(response => {
      dispatch(postCreateSuccess(response.data.post))
    })
    .catch(error => {
      dispatch(postCreateFailure(error.response.data.errors))
      dispatch(logOutIfUnauthorized(error.response.status))
    })
  }
}
