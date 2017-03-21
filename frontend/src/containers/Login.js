import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logIn } from '../actions/auth'

export class Login extends Component {

  render() {
    return(
        <div>
          <h2>Log in</h2>
          <form id="login-form" onSubmit={(e) => this.props.onSubmitLogin(e)}>
            <h2> Email</h2>
            <p><input type="text" name="user[email]" /></p>
            <h2> Password</h2>
            <p><input type="password"name="user[password]" /></p>
            <p><button>Log in</button></p>
          </form>
        </div>
    )
  }
}

const mapStateToProps = state => ({
    user: state.currentUser,
    errors: state.errors
})

const mapDispatchToProps= dispatch =>  ({
    onSubmitLogin: (e) => {
      e.preventDefault()
      var user = new FormData(document.getElementById('login-form'))
      dispatch(logIn(user))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
