import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getChatRoom } from '../../actions/chatRooms'
import MessagesList from '../../components/messages/MessagesList'
import { getMessages } from '../../actions/messages'
import { Col } from 'react-flexbox-grid'

export class ChatRoom extends Component {

  componentDidMount() {
    const { getChatRoom, params, chat } = this.props
    if(chat.get('id') !== params.id)
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
    const { chat, getMessages, pages, params } = this.props
    return(
      <Col
      xs={12}
      smOffset={1} sm={10} smOffset={1}
      mdOffset={1} md={8} mdOffset={3}
      lgOffset={2} lg={6} lgOffset={4}
      >
        ChatRoom: {chat.get('title')}
        <MessagesList
          chatId={params.id}
          listEnd={pages.get('messagesListEnd')}
          messagesList={chat.get('messagesList')}
          getMessages={getMessages}
        />
      </Col>
    )
  }
}

const mapStateToProps = state => ({
  chat: state.chatRoom,
  pages: state.pages
})

const mapDispatchToProps = dispatch => ({
  getChatRoom: id => dispatch(getChatRoom(id)),
  getMessages: (id, page) => dispatch(getMessages(id, page))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom)
