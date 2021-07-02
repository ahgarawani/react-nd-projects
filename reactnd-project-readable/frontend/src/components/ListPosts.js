import { React, Component } from 'react'
import { connect } from 'react-redux'
import { receiveAllPosts, receivePostsByCategory, sortPosts } from '../actions/posts'
import { Route, Link } from 'react-router-dom'
import { convertTimstampToDate } from '../utils/helpers'

class ListPosts extends Component {

  state = {
    selectedSort: 'title'
  }

  componentDidMount(){
    if (this.props.categoryId === 'root'){
      this.props.getAllPosts()
    } else if (this.props.categoryId === 'create'){
      this.props.getAllPosts()
    } else {
      this.props.getPostsByCategory(this.props.categoryId)
    }
  }

  onSortChange = changeEvent => {
    this.props.sortPostsBy(changeEvent.target.value)
  }

  render() {
    return (
      <div className='list-posts'>
        <div className='list-posts-header'>
          <div className='list-posts-title'>
            <h2>{this.props.title}</h2>
          </div>
          <div className='sort-by-buttons'>
            <label>Sort by: </label>
            <div className='sort-by-button'>
              <input
                id='title'
                type='radio'
                value='title'
                name='sort-by'
                checked={this.props.sort.method === 'title'}
                onChange={this.onSortChange}
              />
              <label for='title'>Title</label>
            </div>
            <div className='sort-by-button'>
              <input
                id='timestamp'
                type='radio'
                value='timestamp'
                name='sort-by'
                checked={this.props.sort.method === 'timestamp'}
                onChange={this.onSortChange}
              />
              <label for='timestamp'>Date</label>
            </div>
            <div className='sort-by-button'>
              <input
                id='voteScore'
                type='radio'
                value='voteScore'
                name='sort-by'
                checked={this.props.sort.method === 'voteScore'}
                onChange={this.onSortChange}
              />
              <label for='voteScore'>Vote Score</label>
            </div>
          </div>
        </div>
        <div className='list-posts-posts'>
          {this.props.displayedPosts.map(post => (
            <div key={post.id} className='list-posts-post'>
              <div className='post-item-votescore'>
                {post.voteScore}
              </div>
              <div className='post-item-title'>
                {post.title}
              </div>
              <div className='post-item-date-author'>
                created by {post.author} {convertTimstampToDate(post.timestamp, true)}
              </div>
              <div className='post-item-comments'>
                {post.commentCount}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    displayedPosts: state.posts.displayedPosts,
    sort: state.posts.sort
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllPosts: () => (dispatch(receiveAllPosts())),
    getPostsByCategory: (category) => (dispatch(receivePostsByCategory(category))),
    sortPostsBy: (sortMethod) => (dispatch(sortPosts(sortMethod)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts)