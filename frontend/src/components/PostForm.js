import React, { Component } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Button from 'material-ui/Button';
import { Dialog } from 'material-ui/Dialog';
import {
  List,
  ListItem,
  ListItemText,
} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Text from 'material-ui/Text';
import CloseIcon from 'material-ui-icons/Close';
import Slide from 'material-ui/transitions/Slide';

export default class PostForm extends Component {

  render() {
    const { setPostDialog, open, createPost } = this.props
    return (
      <div>
        <Button onClick={() => setPostDialog(true)}>
          Open full-screen dialog
        </Button>
        <Dialog
          fullScreen
          open={open}
          onRequestClose={() => setPostDialog(false)}
          transition={<Slide direction="up" />}
        >
          <AppBar className="app-bar">
            <Toolbar>
              <IconButton contrast onClick={() => setPostDialog(false)}>
                <CloseIcon />
              </IconButton>
              <Text type="title" colorInherit  >Post</Text>
              <Button contrast onClick={() => createPost()}>save</Button>
            </Toolbar>
          </AppBar>
          <form id="post-form">
            <input name="post[content]"></input>
          </form>
        </Dialog>
      </div>
    );
  }
}
