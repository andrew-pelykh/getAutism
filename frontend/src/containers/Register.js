import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register } from '../actions/users'
import { Link } from 'react-router'
import Input from 'material-ui/Input'
import InputLabel from 'material-ui/Input/InputLabel'
import FormControl from 'material-ui/Form/FormControl'
import Button from 'material-ui/Button'
import Layout from 'material-ui/Layout'

export class Register extends Component {

  render() {
    const { onSubmitRegister } = this.props
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
          <form id="register-form" onSubmit={(e) => onSubmitRegister(e)}>
          <FormControl>
             <InputLabel htmlFor="Name">
               Name
             </InputLabel>
             <Input id="name" />
          </FormControl>
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
            <FormControl>
               <InputLabel htmlFor="Password confirmation">
                 Password
               </InputLabel>
               <Input type="password" id="password_confirmation" />
            </FormControl>
          <Button type="submit" raised>Register</Button>
          </form>
          <Link to='/login'>Login</Link>
        </Layout>    
      </Layout>
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
