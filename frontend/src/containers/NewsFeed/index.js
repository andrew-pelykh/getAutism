import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPostsList } from '../../actions/posts'
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
    const { postsList, getPostsList } = this.props
    return(
        <Layout container>
          <Layout item xs={12}>
            <PostsList posts={postsList.get('posts')} goToPage={this.goToPage} />
          </Layout>
        </Layout>
    )
  }
}
const mapStateToProps = state => ({
    postsList: state.postsList
})

const mapDispatchToProps = dispatch => ({
  getPostsList: () => {
    dispatch(getPostsList())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed)
