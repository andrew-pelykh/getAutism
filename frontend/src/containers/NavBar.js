import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions/users'
import { logOut } from '../actions/auth'
import { Link } from 'react-router'


export class NavBar extends Component {

  componentDidMount() {
    if (!this.props.user.name){
      this.props.getCurrentUser();
    }
  }
  render() {
    return(
      <div>
        <p>NavBar</p>
        <p>{this.props.user.name}</p>
        <p><a href="#"onClick={(e) => this.props.logOut(e) }>logout</a></p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    user: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  getCurrentUser: () => {
    dispatch(getCurrentUser());
  },
  logOut: () => {
    dispatch(logOut())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
