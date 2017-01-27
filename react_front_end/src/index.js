import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import App from './components/app';
import reducers from './reducers';

// Because we are making asynchronous calls to get the data from the API we
// have to wait for a response before dispatching the result, this is where 
// redux-thunk can be used as middleware to return a function rather than
// just the result, so we now wait before dispatching the action.
const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
   // Using Provider makes the "Redux store available to the connect() calls 
   // in the component hierarchy below" - https://github.com/reactjs/react-redux/blob/master/docs/api.md 
   <Provider store={createStoreWithMiddleware(reducers)}>
     <App />
   </Provider>
  , document.querySelector('.container'));