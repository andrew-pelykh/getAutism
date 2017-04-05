import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';
import Dropzone from 'react-dropzone'
export default class PostForm extends Component {

  render() {
    const { setPostDialog, open, createPost } = this.props
    return (
          <form id="post-form" onSubmit={(e) => createPost(e)}>
          <TextField
            name="post[content]"
          />
          <Dropzone name="images[]">
              Upload your photos
          </Dropzone>
            <RaisedButton type="submit">Post</RaisedButton>
          </form>
    );
  }
}
