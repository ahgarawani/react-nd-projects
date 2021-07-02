import {
  RECEIVE_ALL_POSTS,
  RECEIVE_POSTS_BY_CATEGORY,
  SORT_POSTS,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  VOTE_POST,
  GET_SINGLE_POST
} from '../actions/posts'
import { comparePostsBy } from '../utils/helpers'

const initialState = {
  displayedPosts: [],
  sort: {
    method: 'title',
    reverse: false
  }
}

export const posts = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_ALL_POSTS || RECEIVE_POSTS_BY_CATEGORY:
      action.posts.sort(comparePostsBy(state.sort.method))
      if (state.sort.reverse){
        action.posts.reverse()
      }
      return {
        ...state,
        displayedPosts: action.posts
      }
    case RECEIVE_POSTS_BY_CATEGORY:
      action.posts.sort(comparePostsBy(state.sort.method))
      if (state.sort.reverse){
        action.posts.reverse()
      }
      return {
        ...state,
        displayedPosts: action.posts
      }
    case SORT_POSTS:
      let posts = state.displayedPosts
      posts.sort(comparePostsBy(action.sortMethod))
      if (state.sort.reverse){
        posts.reverse()
      }
      return {
        displayedPosts: posts,
        sort: {
          ...state.sort,
          method: action.sortMethod
          
        }
      }
    default:
      return state
  }
}