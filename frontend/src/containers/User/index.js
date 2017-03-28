import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUser, updateUser } from '../../actions/users'
import Paper from 'material-ui/Paper'
import Text from 'material-ui/Text'
import Layout from 'material-ui/Layout'
import './styles.css'

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

    const { user, currentUser, updateUser } = this.props
    return(
      <Layout container
        align="center"
        justify="center"
      >
          <Layout item xs={12} md={4} className="avatar">
            <img src={user.get('avatar')}/>
            <Text className="name" type="headline" component="h3">
              {user.get('name')}
            </Text>
        </Layout>

        <Layout item xs={12}>
          <form id='edit-form' onSubmit={(e) => updateUser(e)}>
            <p><input type="file" name="user[avatar]"/></p>
            <button type="submit" >Upload avatar</button>
          </form>
        </Layout>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
    user: state.user,
    currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => ({
  getUser: id => {
    dispatch(getUser(id))
  },
  updateUser: (e) => {
    e.preventDefault()
    const user = new FormData(document.getElementById('edit-form'))
    dispatch(updateUser(user))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(User)
