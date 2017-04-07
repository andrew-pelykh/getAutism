import reducer from '../../src/reducers/pages'
import * as actions from '../../src/actions/pages'
import { postCreateSuccess, postsListEnd } from '../../src/actions/posts'
import { usersListEnd } from '../../src/actions/users'
import { chatRoomsListEnd } from '../../src/actions/chatRooms'
import { expect } from 'chai'
import { Map, List } from 'immutable'

describe('pages reducer', () => {

  let initialState = Map({
    photos: List(['p1','p2','p3','p4', 'p5', 'p6', 'p7']),
    previewsMax: false,
    usersListEnd: false,
    postsListEnd: false,
    chatRoomsListEnd: true
  })

  it('should set drawer on SET_DRAWER', () =>{
    let newState = reducer(initialState, actions.setDrawerValue(true))
    expect(newState.get('drawer')).to.be.ok
    newState = reducer(initialState, actions.setDrawerValue(false))
    expect(newState.get('drawer')).to.not.be.ok
  })

  it('should set clear photos previews on POST_CREATE_SUCCESS', () => {
    let newState = reducer(initialState, postCreateSuccess(Map()))
    expect(newState.get('photos')).to.be.empty
    expect(newState.get('previewsMax')).to.not.be.ok
  })

  it('should set end of user`s list on USERS_LIST_END', () =>{
    let newState = reducer(initialState, usersListEnd())
    expect(newState.get('usersListEnd')).to.be.ok
  })

  it('should set end of post`s list on POSTS_LIST_END', () => {
    let newState = reducer(initialState, postsListEnd())
    expect(newState.get('postsListEnd')).to.be.ok
  })

  it('should set end of chatroom`s list on CHAT_ROOMS_LIST_END', () => {
    let newState = reducer(initialState, chatRoomsListEnd())
    expect(newState.get('chatRoomsListEnd')).to.be.ok
  })

  it('should add photos to previews on UPLOAD_PHOTO if total photos previews is less than 10 photos', () => {
    let newState = reducer(initialState, actions.uploadPhotosPreviews(['p8', 'p9', 'p10']))
    expect(newState.get('photos')).to.be.deep.equal(List(['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10']))
  })

  it('should set previewsMax flag to true  on UPLOAD_PHOTO when there is more than 10 photos', () => {
    let newState = reducer(initialState, actions.uploadPhotosPreviews(['p8', 'p9', 'p10', 'p11']))
    expect(newState.get('previewsMax')).to.be.ok
  })

  it('should set previewMax flag to false and delete preview on DELETE_PREVIEW', () => {
    let newState = reducer(initialState, actions.deletePhotoPreview(2))
    expect(newState.get('previewsMax')).to.not.be.ok
    expect(newState.get('photos')).to.be.equal(List(['p1', 'p2', 'p4', 'p5', 'p6', 'p7']))
  })

})
