import React, { Component } from 'react'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import InfiniteScroll from 'react-infinite-scroller'
import CircularProgress from 'material-ui/CircularProgress'
import {Card, CardHeader, CardText} from 'material-ui/Card'

export default class PostsList extends Component {

  render() {
    const { postsList, getPostsList, goToPage } = this.props
    return(
      <div>
        <InfiniteScroll
          pageStart={1}
          loadMore={page => getPostsList(page)}
          hasMore={!postsList.get('isFetching')}
          threshold={100}
        >
          { postsList.get('posts').map((post,n) => {
            return (
              <div key={n}>
                <Card>
                  <CardHeader
                    avatar={<Avatar onClick={(e) => goToPage('users/' + post.getIn(['author', 'id']))}
                      className="author-avatar" src={post.getIn(['author', 'avatar'])} />}
                    title={post.getIn(['author', 'name'])}
                    subtitle={post.get('createdAt')}
                  />
                  <CardText>
                      {post.get('content')}
                  </CardText>
                </Card>
              </div>
              )
            })
          }
        </InfiniteScroll>
        { postsList.get('isFetching')? <div className="loader"><CircularProgress className="loader" size={60} thickness={5}/></div>: null}
      </div>
    )
  }
}
