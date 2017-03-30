import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import Drawer from 'material-ui/Drawer'
import Avatar from 'material-ui/Avatar'
import MenuItem from 'material-ui/MenuItem'

export default class LeftBar extends Component {

  goToPage(url) {
    this.props.setDrawer(false)
    hashHistory.push(url)
  }

  handleToggle() {
    const { drawer, setDrawer} = this.props
    setDrawer(!drawer);
  }

  handleClose() {
    const { drawer, setDrawer} = this.props
    setDrawer(false);
  }

  render() {
    const { user, drawer, setDrawer, logOut} = this.props
    return(
      <Drawer
        docked={false}
        width={200}
        open={drawer}
        swipeAreaWidth={100}
        onRequestChange={(open) => setDrawer(open)}
      >
        <MenuItem onTouchTap={(e) => this.goToPage('users/' + user.get('id'))}>
          <Avatar src={user.get('avatar')} />
          {user.get('name')}
        </MenuItem>

        <MenuItem onTouchTap={(e) => this.goToPage('/')}>
          News
        </MenuItem>

        <MenuItem onTouchTap={(e) => this.goToPage('users/')}>
          Users
        </MenuItem>

        <MenuItem onTouchTap={(e) => logOut(e)}>
          Exit
        </MenuItem>
      </Drawer>
    )
  }
}
