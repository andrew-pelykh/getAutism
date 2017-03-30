import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register } from '../actions/users'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

export class Register extends Component {

  render() {
    const { onSubmitRegister } = this.props
    return (
      <div>
          <form id="register-form" onSubmit={(e) => onSubmitRegister(e)}>
            <TextField
              id="name"
              hintText="Name"
            />
            <TextField
              id="email"
              hintText="Email"
            />
            <TextField
              hintText="Password"
              type="password"
              id="password"
            />
            <TextField
              hintText="Password confirmation"
              type="password"
              id="password_confirmation"
            />
          <RaisedButton type="submit">Register</RaisedButton>
          </form>
          <Link to='/login'>Login</Link>
          </div>
    )
  }
}

const mapStateToProps = state => ({
    errors: state.errors
})

const mapDispatchToProps = dispatch =>  ({
    onSubmitRegister: (e) => {
      e.preventDefault()
      const name = document.getElementById('name').value
      const email = document.getElementById('email').value
      const password = document.getElementById('password').value
      const password_confirmation = document.getElementById('password_confirmation').value
      const user = { user:
        { name: name,
          email: email,
          password: password,
          password_confirmation: password_confirmation }}
      dispatch(register(user))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
