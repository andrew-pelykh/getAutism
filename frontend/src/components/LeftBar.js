import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import Drawer from 'material-ui/Drawer'
import Avatar from 'material-ui/Avatar'
import MenuItem from 'material-ui/MenuItem'
import { isMobile } from '../helpers/application_helper'

export default class LeftBar extends Component {

  goToPage(url) {
    this.props.setDrawer(false)
    hashHistory.push(url)
  }

  render() {
    const { user, drawer, setDrawer, logOut, docked } = this.props
    return(
      <Drawer
        className="pc-drawer"
        docked={docked}
        width={200}
        open={drawer}
        swipeAreaWidth={100}
        onRequestChange={(open) => setDrawer(open)}
      >
        <MenuItem
        onTouchTap={(e) => this.goToPage('users/' + user.get('id'))}
        >
          <Avatar size={80} src={user.get('avatar')} />
          <h4>{user.get('name')}</h4>
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
        <p>{isMobile()? "It`s mobile version":"It`s pc version"}</p>
      </Drawer>
    )
  }
}
