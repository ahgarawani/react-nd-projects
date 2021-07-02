export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const GET_ALL_COMMENTS = 'GET_ALL_COMMENTS'
export const GET_COMMENTS_BY_CATEGORY = 'GET_COMMENTS_BY_CATEGORY'
export const GET_SINGLE_COMMENT = 'GET_SINGLE_COMMENT'
export const SORT_COMMENTS_BY_NAME = 'SORT_COMMENTS_BY_NAME'
export const SORT_COMMENTS_BY_TIME = 'SORT_COMMENTS_BY_TIME'
export const SORT_COMMENTS_BY_VOTES = 'SORT_COMMENTS_BY_VOTES'

export function addComment ({ title, body, author, category }) {
  return {
    type: ADD_COMMENT,
    id: uuidV4(),
    timestamp: Date.Now(),
    title,
    body,
    author,
    category
  }
}

export function editComment (post) {
    return {
      type: EDIT_COMMENT,
      id: post.id,
      post,
    }
  }

export function deleteComment ({ id }) {
  return {
    type: DELETE_COMMENT,
    id
  }
}

export function voteComment ({ id }, option) {
  return {
    type: VOTE_COMMENT,
    id,
    option
  }
}

export function getAllComments () {
  return {
    type: GET_ALL_COMMENTS
  }
}

export function getCommentsByCategory (category) {
  return {
    type: GET_COMMENTS_BY_CATEGORY,
    category
  }
}

export function sortCommentsByTitle (order) {
  return {
    type: SORT_COMMENTS_BY_TITLE,
    order
  }
}

export function sortCommentsByTitle (order) {
  return {
    type: SORT_COMMENTS_BY_AUTHOR,
    order
  }
}

export function getSingleComment ({ id }) {
  return {
    type: GET_SINGLE_COMMENT,
    id
  }
}

export function sortCommentsByName (order) {
  return {
    type: SORT_COMMENTS_BY_NAME,
    order
  }
}

export function sortCommentsByTime (order) {
  return {
    type: SORT_COMMENTS_BY_TIME,
    order
  }
}

export function sortCommentsByVotes (order) {
  return {
    type: SORT_COMMENTS_BY_VOTES,
    order
  }
}