import { fetchCategories } from '../utils/api'

export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES'

export const receiveAllCategories = () => dispatch => (
    fetchCategories().then(categories => dispatch({
        type: RECEIVE_ALL_CATEGORIES,
        categories
    }))
)