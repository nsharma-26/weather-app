import { createStore, applyMiddleware, compose } from 'redux'
//import reducer from './reducers/reducers';
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';
 
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
         applyMiddleware(...middleware)
));
 
export default store;