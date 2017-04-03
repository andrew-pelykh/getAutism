import React, { Component } from 'react'
import {
  List,
  ListItem
} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import InfiniteScroll from 'react-infinite-scroller'
import CircularProgress from 'material-ui/CircularProgress'

export default class UsersList extends Component {
  render() {
    const { usersList, getUsersList, listEnd } = this.props
    return(
      <List>
        <InfiniteScroll
          pageStart={usersList.get('users').count()/20}
          loadMore={page => getUsersList(page)}
          hasMore={!listEnd && !usersList.get('isFetching')}
          threshold={100}
        >
          { usersList.get('users').map((user,n) => {
            return (
              <div key={n}>
                <ListItem
                  onClick={(e) => this.props.goToPage('users/' + user.get('id'))}
                  primaryText={user.get('name')}
                  leftAvatar={<Avatar src={user.get('avatar')} />}
                />
                <Divider />
              </div>
              )
            })
          }
        </InfiniteScroll>
        { usersList.get('isFetching')? <div className="loader"><CircularProgress className="loader" size={60} thickness={5}/></div>: null}
      </List>
    )
  }
}
