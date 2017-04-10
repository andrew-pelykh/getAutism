import React, { Component } from 'react'
import Avatar from 'material-ui/Avatar'
import InfiniteScroll from 'react-infinite-scroller'
import CircularProgress from 'material-ui/CircularProgress'
import { List, ListItem } from 'material-ui/List'

export default class MessagesList extends Component {

  getMessagesList(page) {
    this.props.getMessages(this.props.chatId, page)
  }

  componentDidUpdate(prevProps) {
    var objDiv = document.getElementById('chat')
    objDiv.scrollTop = objDiv.scrollHeight
  }

  render() {
    const { getMessages, chatId, messagesList, listEnd } = this.props
    return(
      <List id="chat">
        <InfiniteScroll
          pageStart={messagesList.get('messages').count() /20}
          loadMore={page => this.getMessagesList(page)}
          hasMore={!listEnd && !messagesList.get('isFetching')}
          threshold={1}
          isReverse={true}
          useWindow={false}
        >
          {
            messagesList.get('messages').map((message,n) => (
              <div key={n}>
                <ListItem
                  primaryText={message.get('body')}
                />
              </div>
              ))
          }
        </InfiniteScroll>
      </List>
    )
  }
}
