import {applyMiddleware, compose, createStore} from 'redux';
import reducers from 'store/reducers';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
    // applyMiddleware(thunk, logger)
);

const store = createStore(reducers, enhancer);

export default store