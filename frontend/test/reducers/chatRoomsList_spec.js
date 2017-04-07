import { expect } from 'chai'
import { Map, List } from 'immutable'
import * as actions from '../../src/actions/chatRooms'
import reducer from '../../src/reducers/chatRoomsList'

describe('chatRoomsList reducer', () => {

  const initialState = Map({ chatRooms: List()})

  it('should set isFetching flag to true on CHAT_ROOMS_LIST', () => {
    let newState = reducer(initialState, actions.chatRoomsList())
    expect(newState.get('isFetching')).to.be.ok
  })

  it('should set isFetching flag to false on CHAT_ROOMS_LIST_FAILURE', () => {
    let newState = reducer(initialState, actions.chatRoomsListFailure())
    expect(newState.get('isFetching')).to.not.be.ok
  })

  it('should set isFetching flag to false and set chatRoomsList on CHAT_ROOMS_LIST_SUCCESS', () => {
    const chatRooms = [1,2,3]
    let newState = reducer(initialState, actions.chatRoomsListSuccess(chatRooms))
    expect(newState.get('isFetching')).to.not.be.ok
    expect(newState.get('chatRooms')).to.be.equal(List(chatRooms))
  })

})
