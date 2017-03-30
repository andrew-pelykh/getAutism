import React, { Component } from 'react'
import {
  List,
  ListItem
} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'

export default class UsersList extends Component {
  render() {
    return(
      <List>
        { this.props.users.map((user,n) => {
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
      </List>
    )
  }
}
