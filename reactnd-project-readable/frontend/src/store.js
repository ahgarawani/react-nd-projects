import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducers'
import logger from './utils/logger'

const composedEnhancer = composeWithDevTools(applyMiddleware(logger, thunkMiddleware))

const store = createStore(reducer, composedEnhancer)
export default store