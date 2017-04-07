import reducer from '../../src/reducers/postsList'
import * as postActions from '../../src/actions/posts'
import { expect } from 'chai'
import { Map, List } from 'immutable'

describe('postsList reducer',() => {

  it('should return post list on POSTS_LIST_SUCCESS',() => {
    var posts = [{content: 'post1'}, {content: 'post2'}]
    var newState = reducer(Map({posts:List()}), postActions.postsListSuccess(posts))
    expect(newState.get('posts').count()).to.equal(2)
  })

  it('should return set isFetching on true on POSTS_LIST', () => {
    var newState = reducer(Map(), postActions.postsList())
    expect(newState.get('isFetching')).to.be.ok
  })

  it('should set isFetching on false on POSTS_LIST_FAILURE', () => {
    var newState = reducer(Map(), postActions.postsListFailure())
    expect(newState.get('isFetching')).not.to.be.ok
  })
})
