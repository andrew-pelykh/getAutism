import React, { Component } from 'react'
import Avatar from 'material-ui/Avatar'
import InfiniteScroll from 'react-infinite-scroller'
import CircularProgress from 'material-ui/CircularProgress'
import { Card, CardHeader, CardText, CardMedia } from 'material-ui/Card'

export default class PostsList extends Component {

  render() {
    const { postsList, getPostsList, goToPage, listEnd } = this.props
    return(
      <div>
        <InfiniteScroll
          pageStart={postsList.get('posts').count()/20}
          loadMore={page => getPostsList(page)}
          hasMore={!listEnd  && !postsList.get('isFetching')}
          threshold={100}
        >
          {
            postsList.get('posts').map((post) => {
              let author = post.get('author')
              return (
                <div key={post.get('id')}>
                  <Card>
                    <CardHeader
                      avatar={
                        <Avatar
                          onTouchTap={(e) => goToPage('users/'+author.get('id'))}
                          className="author-avatar"
                          src={author.get('avatar')}
                        />
                      }
                      title={author.get('name')}
                      subtitle={post.get('createdAt')}
                    />
                    <CardMedia>
                      {
                        post.get('images').map((image,k) => {
                          return(
                            <div key={k} >
                              <img src={image}/>
                            </div>
                          )
                        })
                      }
                    </CardMedia>
                    <CardText>
                      {post.get('content')}
                    </CardText>
                  </Card>
                </div>
              )
            })
          }
        </InfiniteScroll>
        {
          postsList.get('isFetching')?
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
      </div>
    )
  }
}
