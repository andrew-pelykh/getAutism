import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPostsList, createPost } from '../../actions/posts'
import { setPostDialog } from '../../actions/pages'
import PostForm from '../../components/PostForm'
import PostsList from '../../components/PostsList'
import Layout from 'material-ui/Layout'
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
        <Layout container>
          <Layout item xs={12}>
            <PostsList posts={postsList.get('posts')} goToPage={this.goToPage} />
            <PostForm setPostDialog={setPostDialog} open={pages.get('postDialog')} createPost={createPost} />
          </Layout>
        </Layout>
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
  createPost: () => {
    const post = new FormData(document.getElementById('post-form'))
    dispatch(createPost(post))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed)
