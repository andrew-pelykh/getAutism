import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logIn } from '../actions/auth'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'


export class Login extends Component {

  render() {
    const { onSubmitLogin } = this.props
    return (
      <div>
          <form id="login-form" onSubmit={(e) => onSubmitLogin(e)}>
            <TextField
              id="email"
              hintText="Email"
            />
            <TextField
              hintText="Password"
              type="password"
              id="password"
            />
          <RaisedButton type="submit">Log in</RaisedButton>
          </form>
          <Link to='/register'>Register</Link>
          </div>
    )
  }
}

const mapStateToProps = state => ({
    errors: state.errors
})

const mapDispatchToProps = dispatch =>  ({
    onSubmitLogin: (e) => {
      e.preventDefault()
      const email = document.getElementById('email').value
      const password = document.getElementById('password').value
      const user = {user:{ email: email, password: password}}
      dispatch(logIn(user))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
