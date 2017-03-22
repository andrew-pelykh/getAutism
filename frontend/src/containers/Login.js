import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logIn } from '../actions/auth'

export class Login extends Component {

  render() {
    const { onSubmitLogin } = this.props
    return(
        <div>
          <h2>Log in</h2>
          <form id="login-form" onSubmit={(e) => onSubmitLogin(e)}>
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
    errors: state.errors
})

const mapDispatchToProps= dispatch =>  ({
    onSubmitLogin: (e) => {
      e.preventDefault()
      const form = document.getElementById('login-form')
      const user = new FormData(form)
      dispatch(logIn(user))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
