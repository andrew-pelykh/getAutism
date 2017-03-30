import React, { Component } from 'react'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import {Card, CardHeader, CardText} from 'material-ui/Card';

export default class PostsList extends Component {
  render() {
    return(
      <div>
        { this.props.posts.map((post,n) => {
          return (
            <div key={n}>
              <Card>
                <CardHeader
                  avatar={<Avatar  onClick={(e) => this.props.goToPage('users/' + post.getIn(['author', 'id']))}
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
      </div>
    )
  }
}
