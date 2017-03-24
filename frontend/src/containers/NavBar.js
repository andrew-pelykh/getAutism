import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/users'
import { setDrawer } from '../actions/pages'
import { logOut } from '../actions/auth'
import { hashHistory } from 'react-router'
import Drawer from 'material-ui/Drawer'
import Button from 'material-ui/Button'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Text';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/menu';
import {
  List,
  ListItem,
  ListItemText,
} from 'material-ui/List';
import Divider from 'material-ui/Divider';

export class NavBar extends Component {

  constructor(props) {
    super(props)
    if (!props.currentUser.get('name')) {
      props.getCurrentUser()
    }
  }
  goToPage(url) {
    this.props.setDrawer(false)
    hashHistory.push(url)
  }

  render() {
    const { currentUser, logOut, children, setDrawer, pages } = this.props
    return(
      <div>
        <AppBar>
          <Toolbar>
            <IconButton onClick={(e) => setDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          docked={false}
          width={400}
          open={pages.get('drawer')}
          onRequestClose={(open) => setDrawer(false)}
        >
        <List>
          <ListItem button onClick={(e) => this.goToPage('users/' + currentUser.get('id'))}>
            <ListItemText primary={currentUser.get('name')} />
          </ListItem>
          <Divider />
          <ListItem button onClick={(e) => logOut(e)}>
            <ListItemText primary="Exit"  />
          </ListItem>
        </List>
        </Drawer>
        {children}
      </div>
    )
  }
}
const mapStateToProps = state => ({
    currentUser: state.currentUser,
    pages: state.pages
})

const mapDispatchToProps = dispatch => ({
  getCurrentUser: () => {
    dispatch(getCurrentUser())
  },
  logOut: () => {
    dispatch(logOut())
  },
  setDrawer: (value) => {
    dispatch(setDrawer(value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
