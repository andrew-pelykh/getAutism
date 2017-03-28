import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import Drawer from 'material-ui/Drawer'
import {
  List,
  ListItem,
  ListItemText,
} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Layout from 'material-ui/Layout'
import Avatar from 'material-ui/Avatar';

export default class LeftBar extends Component {

  goToPage(url) {
    this.props.setDrawer(false)
    hashHistory.push(url)
  }

  render() {
    const { goToPage, user, drawer, setDrawer, logOut} = this.props
    return(
        <Layout container>
          <Drawer
            open={drawer}
            onRequestClose={(open) => setDrawer(false)}
          >
          <List>
            <ListItem button onClick={(e) => this.goToPage('users/' + user.get('id'))}>
              <Avatar src={user.get('avatar')} />
              <ListItemText primary={user.get('name')} />
            </ListItem>
            <Divider />
            <ListItem button onClick={(e) => this.goToPage('/')}>
              <ListItemText primary="NewsFeed "/>
            </ListItem>
            <Divider />
            <ListItem button onClick={(e) => this.goToPage('users/')}>
              <ListItemText primary="Users"  />
            </ListItem>
            <Divider />
            <ListItem button onClick={(e) => logOut(e)}>
              <ListItemText primary="Exit"  />
            </ListItem>
          </List>
          </Drawer>
        </Layout>
    )
  }
}
