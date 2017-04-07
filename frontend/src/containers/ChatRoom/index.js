import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getChatRoom } from '../../actions/chatRooms'
import MessagesList from '../../components/messages/MessagesList'
import { getMessages } from '../../actions/messages'

export class ChatRoom extends Component {

  componentDidMount() {
    const { getChatRoom, params, chat } = this.props
    if(!chat.get('id'))
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
    const { chat, messagesList, getMessages, pages } = this.props
    return(
      <div>
        ChatRoom: {chat.get('title')}
        { chat.get('id')?
        <MessagesList
          chatId={chat.get('id')}
          listEnd={pages.get('messagesListEnd')}
          messagesList={messagesList}
          getMessages={getMessages}
        /> : null
      }
      </div>
    )
  }
}
const mapStateToProps = state => ({
  chat: state.chatRoom,
  messagesList: state.messagesList,
  pages: state.pages
})
const mapDispatchToProps = dispatch => ({
  getChatRoom: id => dispatch(getChatRoom(id)),
  getMessages: (id, page) => dispatch(getMessages(id, page))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom)
