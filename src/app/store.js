import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

const middleware = applyMiddleware(thunk, createLogger());

const store = createStore(reducers, composeWithDevTools(middleware));

export default store;