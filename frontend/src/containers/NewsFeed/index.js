import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPostsList, createPost } from '../../actions/posts'
import { setPostDialog } from '../../actions/pages'
import PostForm from '../../components/PostForm'
import PostsList from '../../components/PostsList'
import CircularProgress from 'material-ui/CircularProgress'
import { hashHistory } from 'react-router'
import './styles.css'

export class NewsFeed extends Component {

  constructor(props) {
    super(props)
    if (props.postsList.get('posts').isEmpty()) {
      props.getPostsList()
    }
  }

  goToPage(url) {
    hashHistory.push(url)
  }

  render() {
    const { postsList, getPostsList, setPostDialog, pages, createPost } = this.props
    return(
      <div>
      <PostForm setPostDialog={setPostDialog} open={pages.get('postDialog')} createPost={createPost} />
      <PostsList posts={postsList.get('posts')} goToPage={this.goToPage} />
      { postsList.get('isFetching')? <CircularProgress size={60} thickness={5}/> : null }
      </div>

    )
  }
}
const mapStateToProps = state => ({
    postsList: state.postsList,
    pages: state.pages
})

const mapDispatchToProps = dispatch => ({
  getPostsList: () => {
    dispatch(getPostsList())
  },
  setPostDialog: value => {
    dispatch(setPostDialog(value))
  },
  createPost: (e) => {
    e.preventDefault()
    const post = new FormData(document.getElementById('post-form'))
    dispatch(createPost(post))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed)
