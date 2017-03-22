import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUser } from '../actions/users'


export class User extends Component {

  constructor(props) {
    super(props)
    const { params, getUser, user } = props
    if (user.get('id') != params.id) {
      getUser(params.id)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { params, getUser } = this.props
    const { id } = nextProps.params
    if (params.id != id) {
      getUser(id)
    }
  }

  render() {
    const { user } = this.props
    return(
      <div>
        <p>User page</p>
        <p>Name: {user.get('name')}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
  getUser: id => {
    dispatch(getUser(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(User)
