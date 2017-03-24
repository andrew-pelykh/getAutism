import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logIn } from '../actions/auth'
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
      gutter={24}
      >
        <Layout item
           xs={8}
           md={6}
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
      console.log(user)
      dispatch(logIn(user))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
