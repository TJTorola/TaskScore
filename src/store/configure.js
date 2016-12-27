import { createStore } from 'redux';

import { load } from './localstorage';
import reducers from 'reducers/index';
import middleware from './middleware';

export default (load) => createStore(
	reducers,
	preloadedState,
	middleware
);
