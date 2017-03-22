import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/users'
import { logOut } from '../actions/auth'
import { Link } from 'react-router'


export class NavBar extends Component {

  constructor(props) {
    super(props)
    if (!props.currentUser.get('name')) {
      props.getCurrentUser()
    }
  }

  render() {
    const { currentUser, logOut, children } = this.props
    return(
      <div>
        <p>NavBar</p>
        <p>{currentUser.get('name')}</p>
        <p><a href="#" onClick={() => logOut()}>Exit</a></p>
        {children}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => ({
  getCurrentUser: () => {
    dispatch(getCurrentUser())
  },
  logOut: () => {
    dispatch(logOut())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
