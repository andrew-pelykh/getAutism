import React, { Component } from 'react'
import {
  List,
  ListItem
} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import InfiniteScroll from 'react-infinite-scroller'
import CircularProgress from 'material-ui/CircularProgress'

export default class MessagesList extends Component {

  getMessagesList(page) {
    this.props.getMessages(this.props.chatId, page)
  }
  render() {
    const { getMessages, chatId, messagesList, listEnd } = this.props
    return(
      <List>
      {
        messagesList.get('isFetching')?
          <div className="loader">
            <CircularProgress
              className="loader"
              size={60}
              thickness={5}
            />
          </div>
          :
          null
      }
        <InfiniteScroll
          pageStart={messagesList.get('messages').count()/20}
          loadMore={page => this.getMessagesList(page)}
          hasMore={!listEnd && !messagesList.get('isFetching')}
          threshold={100}
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
