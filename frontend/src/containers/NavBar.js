import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/users'
import LeftBar from '../components/LeftBar'
import { setDrawer } from '../actions/pages'
import { logOut } from '../actions/auth'
import AppBar from 'material-ui/AppBar'
import { Grid, Col } from 'react-flexbox-grid'
import { isMobile } from '../helpers/application_helper'

export class NavBar extends Component {

  constructor(props) {
    super(props)
    if (!props.currentUser.get('name')) {
      props.getCurrentUser()
    }
  }
  render() {
    const { currentUser, logOut, children, setDrawer, pages } = this.props
    if (isMobile()) {
      return(
        <div>
          <AppBar
            className="app-bar"
            onLeftIconButtonTouchTap={() => setDrawer(true)}
          />
          <LeftBar
           docked={false}
           drawer={pages.get('drawer')}
           setDrawer={setDrawer}
           user={currentUser}
           logOut={logOut}
          />
          <Grid className="root">
            {children}
          </Grid>
        </div>)
    } else {
      return(
        <div>
          <LeftBar 
           docked={true}
           drawer={true}
           setDrawer={setDrawer}
           user={currentUser}
           logOut={logOut}
          />
          <Grid className="root">
            <Col
              xsOffset={4} xs={8}
              smOffset={3} sm={9}
              mdOffset={3} md={9}
              lgOffset={2} lg={10}
            >
              {children}
            </Col>
          </Grid>
        </div>)
    }
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
