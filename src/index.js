import React from 'react';
import ReactDOM from 'react-dom';
import './assets/img/styles/index.css';
import App from './App';
import { createStore } from 'redux';
import allReducer from './reducers'
import { Provider } from 'react-redux';

const store = createStore( allReducer );

// store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

