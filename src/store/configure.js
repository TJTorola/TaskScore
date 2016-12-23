import { createStore } from 'redux';

import reducers from './reducers';
import middleware from './middleware';

export default (preloadedState = {}) => createStore(
	reducers,
	preloadedState,
	middleware
);
