import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsersList } from '../actions/users'
import { goToPage } from '../helpers/application_helper'
import UsersList from '../components/UsersList'

export class Users extends Component {

  render() {
    const { usersList, getUsersList, pages, goToPage } = this.props
    return(
        <UsersList
          usersList={usersList}
          goToPage={goToPage}
          getUsersList={getUsersList}
          listEnd={pages.get('usersListEnd')}
        />
    )
  }
}

const mapStateToProps = state => ({
    usersList: state.usersList,
    pages: state.pages
})

const mapDispatchToProps = dispatch => ({
  getUsersList: page => dispatch(getUsersList(page)),
  goToPage: url => dispatch(goToPage(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)
