import { v4 as uuidV4 } from 'uuid'
import * as api from '../utils/api'

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS'
export const RECEIVE_POSTS_BY_CATEGORY = 'RECEIVE_POSTS_BY_CATEGORY'
export const SORT_POSTS = 'SORT_POSTS'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const VOTE_POST = 'VOTE_POST'
export const GET_SINGLE_POST = 'GET_SINGLE_POST'

export const receiveAllPosts = () => dispatch => (
  api.fetchAllPosts().then(posts => dispatch({
    type: RECEIVE_ALL_POSTS,
    posts
  }))
)

export const receivePostsByCategory = (category) => dispatch => (
  api.fetchPostsByCategory(category).then(posts => dispatch({
    type: RECEIVE_POSTS_BY_CATEGORY,
    posts
  }))
)

export const sortPosts = (sortMethod) => (
  {
    type: SORT_POSTS,
    sortMethod
  }
)

export function addPost ({ title, body, author, category }) {
  return {
    type: ADD_POST,
    id: uuidV4(),
    timestamp: Date.Now(),
    title,
    body,
    author,
    category
  }
}

export function editPost (post) {
    return {
      type: EDIT_POST,
      id: post.id,
      post,
    }
  }

export function deletePost ({ id }) {
  return {
    type: DELETE_POST,
    id
  }
}

export function votePost ({ id }, option) {
  return {
    type: VOTE_POST,
    id,
    option
  }
}


export function getSinglePost ({ id }) {
  return {
    type: GET_SINGLE_POST,
    id
  }
}
