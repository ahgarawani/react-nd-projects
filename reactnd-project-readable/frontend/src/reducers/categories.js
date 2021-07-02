import { RECEIVE_ALL_CATEGORIES } from '../actions/categories'

export const categories = (state = { displayedCategories: [] }, action) => {
    switch(action.type) {
        case RECEIVE_ALL_CATEGORIES:
          return { 
              displayedCategories: action.categories
            }
          
        default:
            return state
      }
}