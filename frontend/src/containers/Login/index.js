import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logIn } from '../../actions/auth'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import CircularProgress from 'material-ui/CircularProgress'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './styles.css'


export class Login extends Component {

  render() {
    const { onSubmitLogin, errors, user } = this.props
    return (
      <Grid fluid className="login-grid">
         <Col
           xsOffset={1} xs={10} xsOffset={1}
           smOffset={2} sm={8} smOffset={2}
           mdOffset={3} md={6} mdOffset={3}
           lgOffset={4} lg={4} lgOffset={4}
         >
         <h1>Login</h1>
        <form id="login-form" onSubmit={(e) => onSubmitLogin(e)}>
          <Row>
          <TextField
            id="email"
            floatingLabelText="Email"
            errorText={errors.get('login-form')}
          />
          </Row>
          <Row>
          <TextField
            floatingLabelText="Password"
            type="password"
            id="password"

          />
          </Row>
          <Row>
            {user.get('isFetching')?  <div className="loader"><CircularProgress className="loader" size={40} thickness={5}/></div>:null}
            <RaisedButton className="submit-button" type="submit" disabled={user.get('isFetching')}>Log in</RaisedButton>
          </Row>
        </form>
        <Row>
          <p>
            <Link to='/register'>Registation</Link>
          </p>

        </Row>
        </Col>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
    user: state.currentUser,
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
