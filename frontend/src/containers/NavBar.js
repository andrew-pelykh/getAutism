import React, { Component } from 'react';
import { connect } from 'react-redux';


export class NavBar extends Component {
  render() {
    return(
      <div>NavBar</div>
    )
  }
}

export default connect()(NavBar);
