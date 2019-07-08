import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

// Redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create redux store and apply middleware
const store = createStore(
    reducer, 
    composeEnhancers(applyMiddleware(thunk))
);

export default store;