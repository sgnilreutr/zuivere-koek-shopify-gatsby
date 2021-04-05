import React from 'react'
import { Provider } from 'react-redux'
import { createStore as reduxCreateStore, applyMiddleware } from 'redux'
import rootReducer from '.'
import { composeWithDevTools } from 'redux-devtools-extension'
// import logger from 'redux-logger'

// const createStore = () => reduxCreateStore(rootReducer, applyMiddleware(logger))
const createStore = () => reduxCreateStore(rootReducer, composeWithDevTools())

export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
)
