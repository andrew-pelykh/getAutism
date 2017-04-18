import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class MessageForm extends Component {

  render() {
    const { handleSubmit, handleKeyUp } = this.props
    return(
      <form onSubmit={(e) => handleSubmit(e)}>
        <TextField
          id="message"
          multiLine={true}
          rows ={4}
          rowsMax={4}
          fullWidth={true}
           onKeyUp={(e) => handleKeyUp(e)}
        />
        <RaisedButton type="submit">Send</RaisedButton>
      </form>
    )
  }
}
