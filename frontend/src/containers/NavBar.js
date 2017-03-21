import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions/users'


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
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
