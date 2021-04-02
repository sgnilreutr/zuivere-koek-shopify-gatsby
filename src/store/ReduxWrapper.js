import React from 'react'
import { Provider } from 'react-redux'
import { createStore as reduxCreateStore } from 'redux'
import rootReducer from '.'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const createStore = () => reduxCreateStore(rootReducer, composeEnhancers())

export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
)
