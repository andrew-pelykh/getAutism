import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPostsList, createPost } from '../../actions/posts'
import { setPostDialog } from '../../actions/pages'
import PostForm from '../../components/PostForm'
import PostsList from '../../components/PostsList'
import { goToPage } from '../../helpers/application_helper'
import './styles.css'

export class NewsFeed extends Component {

  render() {
    const { postsList, getPostsList, setPostDialog, pages, createPost, goToPage } = this.props
    return(
      <div>
      <PostForm
        setPostDialog={setPostDialog}
        open={pages.get('postDialog')}
        createPost={createPost}
      />
      <PostsList
        postsList={postsList}
        goToPage={goToPage}
        getPostsList={getPostsList}
        listEnd={pages.get('postsListEnd')}
       />
      </div>
    )
  }
}
const mapStateToProps = state => ({
    postsList: state.postsList,
    pages: state.pages
})

const mapDispatchToProps = dispatch => ({
  getPostsList: page => dispatch(getPostsList(page)),
  setPostDialog: value => dispatch(setPostDialog(value)),
  goToPage: url => dispatch(goToPage(url)),
  createPost: (e) => {
    e.preventDefault()
    const post = new FormData(document.getElementById('post-form'))
    dispatch(createPost(post))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed)
