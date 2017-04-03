import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register } from '../actions/users'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { Grid, Row, Col } from 'react-flexbox-grid'

export class Register extends Component {

  render() {
    const { onSubmitRegister, errors } = this.props
    return (
      <Grid fluid className="login-grid">
         <Col
           xsOffset={1} xs={10} xsOffset={1}
           smOffset={2} sm={8} smOffset={2}
           mdOffset={3} md={6} mdOffset={3}
           lgOffset={4} lg={4} lgOffset={4}
         >
           <h1>Registration</h1>
            <form id="register-form" onSubmit={(e) => onSubmitRegister(e)}>
            <Row>
              <TextField
                id="name"
                floatingLabelText="Name"
                errorText={errors.get('name')}
              />
              </Row>
              <Row>
              <TextField
                id="email"
                floatingLabelText="Email"
                errorText={errors.get('email')}
              />
              </Row>
              <Row>
              <TextField
                floatingLabelText="Password"
                type="password"
                id="password"
                errorText={errors.get('password')}
              />
              </Row>
              <Row>
              <TextField
                floatingLabelText="Password confirmation"
                type="password"
                id="password_confirmation"
                errorText={errors.get('password_confirmation')}
              />
              </Row>
              <Row>
            <RaisedButton className="submit-button" type="submit">Register</RaisedButton>
            </Row>

            </form>
            <Row>
              <p><Link to='/login'>Login</Link></p>
            </Row>
          </Col>
          </Grid>
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
