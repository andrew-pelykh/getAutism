import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  List,
  ListItem,
  ListItemText,
} from 'material-ui/List';
import Divider from 'material-ui/Divider';

export default class UsersList extends Component {
  render() {
    return(
      <List>
        { this.props.users.map((user,n) => {
          return (
            <div key={n}>
              <ListItem button onClick={(e) => this.props.goToPage('users/' + user.get('id'))}>
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
