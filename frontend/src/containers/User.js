import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/users'


export class User extends Component {

  componentDidMount() {
    if (!this.props.user.name){
      this.props.getUser(this.props.params.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.id != nextProps.params.id ){
      this.props.getUser(nextProps.params.id);
    }
  }

  render() {
    return(
      <div>
        <p>User page</p>
        <p>Name: {this.props.user.name}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
  getUser: id => {
    dispatch(getUser(id));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(User);
