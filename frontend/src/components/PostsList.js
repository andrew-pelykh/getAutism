import React, { Component } from 'react'
import { List } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import {
  Card,
  CardHeader,
  CardContent,
} from 'material-ui/Card'
import Text from 'material-ui/Text'

export default class PostsList extends Component {
  render() {
    return(
      <List>
        { this.props.posts.map((post,n) => {
          return (
            <div key={n}>
              <Card>
                <CardHeader
                  avatar={<Avatar  onClick={(e) => this.props.goToPage('users/' + post.getIn(['author', 'id']))}
                    className="author-avatar" src={post.getIn(['author', 'avatar'])} />}
                  title={post.getIn(['author', 'name'])}
                  subhead={post.get('createdAt')}
                />
                <CardContent>
                  <Text component="p">
                    {post.get('content')}
                  </Text>
                </CardContent>
              </Card>
            </div>
            )
          })
        }
      </List>
    )
  }
}
