import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getChatRoomsList } from '../../actions/chatRooms'
import { goToPage } from '../../helpers/application_helper'
import { List, ListItem } from 'material-ui/List'
import InfiniteScroll from 'react-infinite-scroller'
import Divider from 'material-ui/Divider'
import CircularProgress from 'material-ui/CircularProgress'

export class ChatRooms extends Component {
  render() {
    const { getChatRoomsList, chatRoomsList, pages, goToPage } = this.props
    return(
      <List>
        <InfiniteScroll
          pageStart={chatRoomsList.get('chatRooms').count()/20}
          loadMore={page => getChatRoomsList(page)}
          hasMore={!pages.get('chatRoomsListEnd') && !chatRoomsList.get('isFetching')}
          threshold={100}
        >
          {
            chatRoomsList.get('chatRooms').map((chat,n) => {
            return (
              <div key={n}>
                <ListItem
                  onClick={(e) => goToPage('chatrooms/' + chat.get('id'))}
                  primaryText={chat.get('title')}
                />
                <Divider />
              </div>
              )
            })
          }
        </InfiniteScroll>
        {
          chatRoomsList.get('isFetching')?
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
      </List>
    )
  }
}

const mapStateToProps = state => ({
  chatRoomsList: state.chatRoomsList,
  pages: state.pages
})

const mapDispatchToProps = dispatch => ({
  getChatRoomsList: page => dispatch(getChatRoomsList(page)),
  goToPage: url => dispatch(goToPage(url))
})
export default connect(mapStateToProps, mapDispatchToProps)(ChatRooms)
