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
      <div>
        <h1>Login</h1>
        <form id="login-form" onSubmit={(e) => onSubmitLogin(e)}>
          <Row>
            <TextField
              name="user[email]"
              floatingLabelText="Email"
              errorText={errors.get('login-form')}
            />
          </Row>
          <Row>
            <TextField
              type="password"
              name="user[password]"
              floatingLabelText="Password"
            />
          </Row>
          <Row>
            <RaisedButton
              className="submit-button"
              type="submit"
              disabled={user.get('isFetching')}
              label="Log in"
            />
          </Row>
        </form>
        <Row>
          <p>
            <Link to='/register'>Registation</Link>
          </p>

        </Row>
</div>
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
      const user = new FormData(document.getElementById('login-form'))
      dispatch(logIn(user))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
