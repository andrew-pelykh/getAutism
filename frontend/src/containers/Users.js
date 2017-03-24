import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsersList } from '../actions/users'
import { hashHistory } from 'react-router'
import UsersList from '../components/UsersList'


export class Users extends Component {

  constructor(props) {
    super(props)
    const { usersList, getUsersList } = props
    if (usersList.get('users').isEmpty()) {
      getUsersList()
    }
  }

  goToPage(url) {
    hashHistory.push(url)
  }

  render() {
    return(
      <div>
        <p>Users</p>
        <UsersList users={this.props.usersList.get('users')} goToPage={this.goToPage} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
    usersList: state.usersList
})

const mapDispatchToProps = dispatch => ({
  getUsersList: () => {
    dispatch(getUsersList())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)
