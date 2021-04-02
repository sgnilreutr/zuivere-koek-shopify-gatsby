import React from 'react';
import { Provider } from 'react-redux';
// import { createStore as reduxCreateStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from '.';

const createStore = () => configureStore({
    reducer: {},
}); 

export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
);