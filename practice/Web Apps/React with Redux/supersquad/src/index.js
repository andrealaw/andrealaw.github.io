/**
 * Insert the libraries and 
 * use them to set up the bases of the React app:
 * 
 * - React is the library we use for all the React codes
 * - ReactDOM handles the rendering of React components onto our screen or Web applications
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from 'redux'; // Allow us to create stores
import { Provider } from 'react-redux'; // Allow access to stores in Redux from every level of the React App

import rootReducer from './reducers'; // Automatically point to './reducers/index.js'
import { addCharacterById } from './actions';

const store = createStore(rootReducer);
console.log('store.getState()', store.getState());
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(addCharacterById(2));

/**
 * Wrap the App with Provider
 * Pass in a store with a store attribute
 * Check if the Provider is working by console.log its current state
 */
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

