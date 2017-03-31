import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import Drawer from 'material-ui/Drawer'
import Avatar from 'material-ui/Avatar'
import MenuItem from 'material-ui/MenuItem'
import CircularProgress from 'material-ui/CircularProgress'
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
        <MenuItem onTouchTap={(e) => this.goToPage('users/' + user.get('id'))}>
          { user.get('isFetching')? <CircularProgress/> : <Avatar src={user.get('avatar')} /> }
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
        <p>{isMobile()? "It`s mobile version":"It`s pc version"}</p>
      </Drawer>
    )
  }
}
