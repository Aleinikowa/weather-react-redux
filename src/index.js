import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import allReducer from './reducers'
import { Provider } from 'react-redux';

const store = createStore( allReducer );

console.log(store.getState())
store.subscribe(() => console.log(store.getState()))


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

