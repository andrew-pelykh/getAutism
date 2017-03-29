import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/users'
import LeftBar from '../components/LeftBar'
import { setDrawer } from '../actions/pages'
import { logOut } from '../actions/auth'
import Button from 'material-ui/Button'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui/svg-icons/menu'
import Layout from 'material-ui/Layout'

export class NavBar extends Component {

  constructor(props) {
    super(props)
    if (!props.currentUser.get('name')) {
      props.getCurrentUser()
    }
  }

  render() {
    const { currentUser, logOut, children, setDrawer, pages } = this.props
    return(

        <Layout container className="root">
          <LeftBar user={currentUser} drawer={pages.get('drawer')} setDrawer={setDrawer} logOut={logOut} />
          <AppBar>
            <Toolbar>
              <IconButton onClick={(e) => setDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Layout item xs={12}>
            {children}
          </Layout>
        </Layout>
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
