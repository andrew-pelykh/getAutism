import React, { Component } from 'react'
import {
  List,
  ListItem,
  ListItemText,
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
              <ListItem button onClick={(e) => this.props.goToPage('users/' + user.get('id'))}>
                <Avatar src={user.get('avatar')} />
                <ListItemText primary={user.get('name')} />
              </ListItem>
              <Divider />
            </div>
            )
          })
        }
      </List>
    )
  }
}
