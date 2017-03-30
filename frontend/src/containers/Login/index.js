import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logIn } from '../../actions/auth'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './styles.css'


export class Login extends Component {

  render() {
    const { onSubmitLogin } = this.props
    return (
      <Grid fluid>
         <Col lgOffset={4} md={4}>
        <form id="login-form" onSubmit={(e) => onSubmitLogin(e)}>
          <Row>
          <TextField
            id="email"
            hintText="Email"
          />
          </Row>
          <Row>
          <TextField
            hintText="Password"
            type="password"
            id="password"
          />
          </Row>
          <RaisedButton type="submit">Log in</RaisedButton>
        </form>
        <Row>
          <Link to='/register'>Register</Link>
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
    onSubmitLogin: (e) => {
      e.preventDefault()
      const email = document.getElementById('email').value
      const password = document.getElementById('password').value
      const user = {user:{ email: email, password: password}}
      dispatch(logIn(user))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
