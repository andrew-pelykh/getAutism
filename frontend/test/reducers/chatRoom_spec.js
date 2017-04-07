import { expect } from 'chai'
import { Map } from 'immutable'
import reducer from '../../src/reducers/chatRoom'
import * as actions from '../../src/actions/chatRooms'

describe('chatRoom reducer', () => {

  const initialState = Map()

  it('should set isFetching flag to true on CHAT_ROOM', () => {
    let newState = reducer(initialState, actions.chatRoom())
    expect(newState.get('isFetching')).to.be.ok
  })

  it('should set isFetching flag to false on CHAT_ROOM_FAILURE', () => {
    let newState = reducer(initialState, actions.chatRoomFailure())
    expect(newState.get('isFetching')).to.not.be.ok
  })

  it('should set chatRoom, and set is Fetching flag to false on CHAT_ROOM_SUCCESS', () => {
    let chat = { title: "lol" }
    let newState = reducer(initialState, actions.chatRoomSuccess(chat))
    expect(newState.get('isFetching')).to.not.be.ok
    expect(newState.get('title')).to.be.equal("lol")
  })

  it('should set chatRoom, and set is Fetching flag to false on CREATE_CHAT_ROOM_SUCCESS', ()=> {
    let chat = { title: "lol" }
    let newState = reducer(initialState, actions.createChatRoomSuccess(chat))
    expect(newState.get('isFetching')).to.not.be.ok
    expect(newState.get('title')).to.be.equal("lol")
  })
})
