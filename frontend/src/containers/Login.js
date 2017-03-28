import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logIn } from '../actions/auth'
import { Link } from 'react-router'
import Input from 'material-ui/Input'
import InputLabel from 'material-ui/Input/InputLabel'
import FormControl from 'material-ui/Form/FormControl'
import Button from 'material-ui/Button'
import Layout from 'material-ui/Layout'


export class Login extends Component {

  render() {
    const { onSubmitLogin } = this.props
    return (
      <Layout container
      align="center"
      justify="center"
      >
        <Layout item
           xs={8}
           md={2}
        >
          <form id="login-form" onSubmit={(e) => onSubmitLogin(e)}>
            <FormControl>
               <InputLabel htmlFor="Email">
                 Email
               </InputLabel>
               <Input id="email" />
            </FormControl>
            <FormControl>
               <InputLabel htmlFor="Password">
                 Password
               </InputLabel>
               <Input type="password" id="password" />
            </FormControl>
          <Button type="submit" raised>Log in</Button>
          </form>
          <Link to='/register'>Register</Link>
        </Layout>
      </Layout>
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
