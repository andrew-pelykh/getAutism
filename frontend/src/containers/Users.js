import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsersList } from '../actions/users'
import { hashHistory } from 'react-router'
import UsersList from '../components/UsersList'


export class Users extends Component {

  goToPage(url) {
    hashHistory.push(url)
  }

  render() {
    const { usersList, getUsersList } = this.props
    return(
        <UsersList usersList={usersList} goToPage={this.goToPage} getUsersList={getUsersList} />
    )
  }
}

const mapStateToProps = state => ({
    usersList: state.usersList
})

const mapDispatchToProps = dispatch => ({
  getUsersList: page => {
    dispatch(getUsersList(page))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)
