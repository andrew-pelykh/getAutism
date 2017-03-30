import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/users'
import LeftBar from '../components/LeftBar'
import { setDrawer } from '../actions/pages'
import { logOut } from '../actions/auth'
import AppBar from 'material-ui/AppBar';

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
        <div>
          <AppBar
            onLeftIconButtonTouchTap={() => setDrawer(true)}
          />
          <LeftBar
           drawer={pages.get('drawer')}
           setDrawer={setDrawer}
           user={currentUser}
           logOut={logOut}
          />
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
