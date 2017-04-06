import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getChatRoom } from '../../actions/chatRooms'

export class ChatRoom extends Component {

  componentDidMount() {
    const { getChatRoom, params, chat } = this.props
    if(chat.get('chatRoom').isEmpty())
      getChatRoom(params.id)
  }

  componentWillReceiveProps(nextProps) {
    const { params, getChatRoom } = this.props
    const { id } = nextProps.params
    if (params.id != id) {
      getChatRoom(id)
    }
  }

  render() {
    const { chat } = this.props
    return(
      <div>
        ChatRoom: {chat.getIn(['chatRoom','title'])}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  chat: state.chatRoom
})
const mapDispatchToProps = dispatch => ({
  getChatRoom: id => dispatch(getChatRoom(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom)
